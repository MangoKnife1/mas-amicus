import { NextResponse } from "next/server";

// Replace with the real base URL from your blob dashboard
const BASE_URL = "https://ccrhzvix6khsl4ah.public.blob.vercel-storage.com";
const VIDEO_NAMES = ["conquerors-video", "exodus-video", "nevuah-video"];

export async function GET() {
  const payload = Object.fromEntries(
    VIDEO_NAMES.map((name) => [name, `${BASE_URL}/${name}.mp4`]),
  );
  return NextResponse.json(payload);
}
