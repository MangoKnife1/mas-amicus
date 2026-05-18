import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    "conquerors-video":
      "https://ccrhzvix6khsl4ah.public.blob.vercel-storage.com/conquerors-video.mp4",

    "exodus-video":
      "https://ccrhzvix6khsl4ah.public.blob.vercel-storage.com/exodus-video.mp4",

    "nevuah-video":
      "https://ccrhzvix6khsl4ah.public.blob.vercel-storage.com/nevuah-video.mp4",
  });
}
