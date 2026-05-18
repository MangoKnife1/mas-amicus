import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

const videoNames = ["conquerors-video", "exodus-video", "nevuah-video"];

async function resolveVideoUrl(videoName: string) {
  const { blobs } = await list({ prefix: videoName, limit: 25 });
  const blob = blobs.find(
    (entry) =>
      entry.pathname === videoName ||
      entry.pathname.startsWith(`${videoName}.`) ||
      entry.pathname.startsWith(`${videoName}/`),
  );

  return blob ? [videoName, blob.url] : null;
}

export async function GET() {
  try {
    const resolved = await Promise.all(videoNames.map(resolveVideoUrl));
    const payload = Object.fromEntries(
      resolved.filter(Boolean) as Array<[string, string]>,
    );

    return NextResponse.json(payload);
  } catch {
    return NextResponse.json({});
  }
}
