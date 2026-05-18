import { NextResponse } from "next/server";

const STORE = "amicus-blob";
const VIDEO_NAMES = ["conquerors-video", "exodus-video", "nevuah-video"];

export async function GET() {
  const payload = Object.fromEntries(
    VIDEO_NAMES.map((name) => [
      name,
      `https://${STORE}.public.blob.vercel-storage.com/${name}.mp4`,
    ]),
  );
  return NextResponse.json(payload);
}
