import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";
  let geoData: any = {};
  try {
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    geoData = await geoRes.json();
  } catch (err) {
    console.error("Geo lookup failed:", err);
  }

  const { userAgent, platform, latitude, longitude } = await req.json();

  const visit = await prisma.visit.create({
    data: {
      ip,
      city: geoData.city,
      region: geoData.region,
      country: geoData.country_name,
      userAgent,
      platform,
      latitude,
      longitude,
    },
  });

  return NextResponse.json(visit);
}
