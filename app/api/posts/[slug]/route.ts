import { NextResponse } from "next/server";
import { query } from "@/lib/db";
export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await query("select * from posts where slug=$1 and status='published' limit 1", [slug]);
  if (!result.rows[0]) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(result.rows[0]);
}
