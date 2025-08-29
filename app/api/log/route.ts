import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import type { Prisma } from "@prisma/client";
import { GeoApiResponse } from "../geo.types";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

interface LogPayload {
  userAgent: string;
  platform: string;
  device?: string;       // 👈 NEW
  latitude?: number;
  longitude?: number;
  clientIp?: string;     // ipify
}

function ipFromHeaders(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const xri = req.headers.get("x-real-ip");
  if (xri) return xri.trim();
  return "0.0.0.0";
}

function isPrivate(ip: string) {
  if (!ip) return true;
  if (ip === "0.0.0.0" || ip === "::1" || ip.startsWith("127.")) return true;
  if (ip.startsWith("10.") || ip.startsWith("192.168.")) return true;
  if (ip.startsWith("172.")) {
    const sec = Number(ip.split(".")[1]);
    if (sec >= 16 && sec <= 31) return true;
  }
  return false;
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Partial<LogPayload>;
  const { userAgent = "", platform = "", device, latitude, longitude, clientIp } = body;

  const serverIp = ipFromHeaders(req);
  const lookupIp = clientIp??serverIp

  let geoData: GeoApiResponse | null = null;
  if (lookupIp) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 2500);
    try {
      const res = await fetch(`https://ipapi.co/${encodeURIComponent(lookupIp)}/json/`, {
        signal: controller.signal,
        cache: "no-store",
        headers: { "User-Agent": "lebanon-alyawm/1.0", Accept: "application/json" },
      });
      if (res.ok) geoData = (await res.json()) as GeoApiResponse;
    } catch {
      // ignore
    } finally {
      clearTimeout(timer);
    }
  }

  // prefer client GPS if provided; else fall back to GeoIP coords
  const finalLat = typeof latitude === "number" ? latitude : geoData?.latitude ?? null;
  const finalLng = typeof longitude === "number" ? longitude : geoData?.longitude ?? null;

  // JSON-safe copy for Prisma
  const geoJson: Prisma.InputJsonValue =
    geoData ? (JSON.parse(JSON.stringify(geoData)) as Prisma.InputJsonValue) : ({} as Prisma.InputJsonValue);

  const visit = await prisma.visit.create({
    data: {
      ip: serverIp,
      clientIpReported: clientIp ?? null,

      city: geoData?.city ?? null,
      region: geoData?.region ?? null,
      country: geoData?.country_name ?? null,

      userAgent,
      platform,
      device: device ?? null,      // 👈 store device

      latitude: finalLat,
      longitude: finalLng,

      timezone: geoData?.timezone ?? null,
      asn: geoData?.asn ?? null,
      org: geoData?.org ?? null,
      network: geoData?.network ?? null,

      geoRaw: geoJson,
    },
  });

  return NextResponse.json({ visit, geoRaw: geoData });
}
