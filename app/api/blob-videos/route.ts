import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

const videoNames = ["conquerors-video", "exodus-video", "nevuah-video"];

// Construct a public URL for a blob in the named public store.
function publicBlobUrl(storeName: string, path: string) {
  // Ensure no leading slash
  const cleanPath = path.replace(/^\//, "");
  return `https://${storeName}.public.blob.vercel-storage.com/${cleanPath}`;
}

async function resolveVideoUrl(videoName: string) {
  try {
    const { blobs } = await list({ prefix: videoName, limit: 25 });

    const blob = blobs.find(
      (entry) =>
        entry.pathname === videoName ||
        entry.pathname.startsWith(`${videoName}.`) ||
        entry.pathname.startsWith(`${videoName}/`),
    );

    if (blob) {
      return [videoName, blob.url] as [string, string];
    }
  } catch (err) {
    // listing may fail locally or without credentials — we'll fall back below
  }

  // Fallback: try to construct a public URL using the store name.
  const store = process.env.NEXT_PUBLIC_BLOB_STORE_NAME || "amicus-blob";

  // Try common file extensions, prefer .mp4
  const candidate = publicBlobUrl(store, `${videoName}.mp4`);

  return [videoName, candidate] as [string, string];
}

export async function GET() {
  try {
    const resolved = await Promise.all(videoNames.map(resolveVideoUrl));
    const payload = Object.fromEntries(resolved as Array<[string, string]>);

    return NextResponse.json(payload);
  } catch (e) {
    return NextResponse.json({});
  }
}
