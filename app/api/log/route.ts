import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import type { Prisma } from "@prisma/client";
import { GeoApiResponse } from "../geo.types";
import { v4 as uuidv4 } from "uuid";

export const runtime = "nodejs";
export const preferredRegion = "fra1";

interface LogPayload {
  userAgent: string;
  platform: string;
  device?: string;
  latitude?: number;
  longitude?: number;
  clientIp?: string;
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

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => ({}))) as Partial<LogPayload>;
  const { userAgent = "", platform = "", device, latitude, longitude, clientIp } = body;

  // ✅ Ensure deviceId cookie
  let deviceId = req.cookies.get("device_id")?.value;
  if (!deviceId) {
    deviceId = uuidv4().toString();
  }

  const serverIp = ipFromHeaders(req);
  const lookupIp = clientIp ?? serverIp;

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

  const finalLat = typeof latitude === "number" ? latitude : geoData?.latitude ?? null;
  const finalLng = typeof longitude === "number" ? longitude : geoData?.longitude ?? null;

  const geoJson: Prisma.InputJsonValue =
    geoData ? (JSON.parse(JSON.stringify(geoData)) as Prisma.InputJsonValue) : ({} as Prisma.InputJsonValue);

  const visit = await prisma.visit.create({
    data: {
      UUID: deviceId, // ✅ store the deviceId in yDBour 
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

  // ✅ Always return cookie (set if missing)
  const res = NextResponse.json({ visit, geoRaw: geoData });
  if (!req.cookies.get("device_id")) {
    res.cookies.set("device_id", deviceId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 365 * 5, // 5 years
      path: "/",
    });
  }

  return res;
}
