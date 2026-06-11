import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { query, slugify } from "@/lib/db";

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const result = await query("select * from posts order by sort_order asc, updated_at desc");
  return NextResponse.json(result.rows);
}

export async function POST(request: Request) {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const title = String(body.title || "").trim();
  const slug = slugify(String(body.slug || title));
  const content = String(body.content || "").trim();
  if (!title || !slug || !content) return NextResponse.json({ error: "Tiêu đề, đường dẫn và nội dung là bắt buộc." }, { status: 400 });
  const result = await query(
    `insert into posts (slug,title,excerpt,content,status,sort_order,published_at)
     values ($1,$2,$3,$4,$5,$6,case when $5='published' then now() else null end) returning *`,
    [slug, title, String(body.excerpt || ""), content, body.status === "draft" ? "draft" : "published", Number(body.sort_order || 0)]
  );
  return NextResponse.json(result.rows[0], { status: 201 });
}
