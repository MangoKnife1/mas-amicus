import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(_request: Request, context: any) {
  // `context.params` can be either an object or a Promise depending on Next.js types.
  let params = context?.params;

  if (params && typeof params.then === "function") {
    try {
      params = await params;
    } catch (_) {
      params = undefined;
    }
  }

  const name = params?.name as string | undefined;
  const store = process.env.NEXT_PUBLIC_BLOB_STORE_NAME || "amicus-blob";

  // Try to find the exact blob URL via the SDK; fallback to public URL
  let targetUrl: string | null = null;

  try {
    const { blobs } = await (list as any)({ store, prefix: name, limit: 25 });
    const blob = blobs.find(
      (entry) =>
        entry.pathname === name ||
        entry.pathname.startsWith(`${name}.`) ||
        entry.pathname.startsWith(`${name}/`),
    );

    if (blob) {
      targetUrl = blob.url;
    }
  } catch (e) {
    // ignore — we'll fall back to public path
  }

  if (!targetUrl) {
    targetUrl = `https://${store}.public.blob.vercel-storage.com/${name}.mp4`;
  }

  try {
    const res = await fetch(targetUrl);

    if (!res.ok) {
      return NextResponse.json(
        { error: "fetch_failed", status: res.status },
        { status: res.status },
      );
    }

    const headers = new Headers();
    const contentType = res.headers.get("content-type") || "video/mp4";
    headers.set("Content-Type", contentType);
    const contentLength = res.headers.get("content-length");
    if (contentLength) headers.set("Content-Length", contentLength);

    return new NextResponse(res.body, { status: 200, headers });
  } catch (e) {
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
