import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { query, slugify } from "@/lib/db";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  const title = String(body.title || "").trim();
  const slug = slugify(String(body.slug || title));
  const content = String(body.content || "").trim();
  if (!title || !slug || !content) return NextResponse.json({ error: "Thiếu thông tin bắt buộc." }, { status: 400 });
  const status = body.status === "draft" ? "draft" : "published";
  const result = await query(
    `update posts set slug=$1,title=$2,excerpt=$3,content=$4,status=$5,sort_order=$6,
     published_at=case when $5='published' then coalesce(published_at,now()) else published_at end,updated_at=now()
     where id=$7 returning *`,
    [slug,title,String(body.excerpt||""),content,status,Number(body.sort_order||0),id]
  );
  if (!result.rows[0]) return NextResponse.json({ error: "Không tìm thấy bài viết." }, { status: 404 });
  return NextResponse.json(result.rows[0]);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await query("delete from posts where id=$1", [id]);
  return NextResponse.json({ ok: true });
}
