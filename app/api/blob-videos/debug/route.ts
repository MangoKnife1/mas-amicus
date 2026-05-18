import { list } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const provided = req.headers.get("x-debug-secret") || "";
  const expected = process.env.DEBUG_API_SECRET || "";

  if (!expected || provided !== expected) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const store = process.env.NEXT_PUBLIC_BLOB_STORE_NAME || "amicus-blob";

  try {
    const { blobs } = await (list as any)({ store, limit: 200 });

    const out = (blobs || []).map((b: any) => ({
      pathname: b.pathname,
      url: b.url,
      size: b.size,
    }));

    return NextResponse.json({ store, count: out.length, blobs: out });
  } catch (e: any) {
    return NextResponse.json({ error: "list_failed", message: String(e) }, { status: 500 });
  }
}
