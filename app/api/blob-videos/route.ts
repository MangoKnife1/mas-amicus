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
  const store = process.env.NEXT_PUBLIC_BLOB_STORE_NAME || "amicus-blob";
  try {
    const { blobs } = await (list as any)({
      store,
      prefix: videoName,
      limit: 25,
    });

    const blob = blobs.find(
      (entry: any) =>
        entry.pathname === videoName ||
        entry.pathname.startsWith(`${videoName}.`) ||
        entry.pathname.startsWith(`${videoName}/`),
    );

    if (blob) {
      // We return a same-origin proxy URL so the browser avoids CORS issues
      return [videoName, `/api/blob-videos/proxy/${videoName}`] as [
        string,
        string,
      ];
    }
  } catch (err) {
    // listing may fail locally or without credentials — we'll fall back below
  }

  // Fallback: return the proxy URL which will attempt to fetch the public store URL.
  return [videoName, `/api/blob-videos/proxy/${videoName}`] as [string, string];
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
