export const runtime = "edge";

import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const geo = geolocation(request);

  return NextResponse.json({
    country: geo.country || "Only available on production",
    city: geo.city || "Test on deployed Vercel URL",
    region: geo.region || "Unknown",
    runtime: "edge",
  });
}