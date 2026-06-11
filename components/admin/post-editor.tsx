"use client";
import { FormEvent,useState } from "react";
import { useRouter } from "next/navigation";
import type { Post } from "@/lib/db";

export function PostEditor({post}:{post?:Post}){
 const router=useRouter(); const [error,setError]=useState(""); const [saving,setSaving]=useState(false);
 async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setSaving(true);setError("");const f=new FormData(e.currentTarget);const body=Object.fromEntries(f.entries());
 const r=await fetch(post?`/api/admin/posts/${post.id}`:"/api/admin/posts",{method:post?"PUT":"POST",headers:{"content-type":"application/json"},body:JSON.stringify(body)});
 if(!r.ok){setError((await r.json()).error||"Không thể lưu bài viết");setSaving(false);return;} router.push("/admin");router.refresh();}
 async function remove(){if(!post||!confirm("Xóa bài viết này?"))return;await fetch(`/api/admin/posts/${post.id}`,{method:"DELETE"});router.push("/admin");router.refresh();}
 return <form onSubmit={submit} className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
  <label className="block"><span className="label">Tiêu đề</span><input name="title" required defaultValue={post?.title} className="admin-input" /></label>
  <label className="block"><span className="label">Đường dẫn (slug)</span><input name="slug" defaultValue={post?.slug} placeholder="Tự tạo từ tiêu đề nếu để trống" className="admin-input" /></label>
  <label className="block"><span className="label">Mô tả ngắn</span><textarea name="excerpt" defaultValue={post?.excerpt||""} rows={3} className="admin-input" /></label>
  <label className="block"><span className="label">Nội dung (Markdown)</span><textarea name="content" required defaultValue={post?.content} rows={18} className="admin-input font-mono text-sm" /></label>
  <div className="grid gap-5 sm:grid-cols-2"><label><span className="label">Trạng thái</span><select name="status" defaultValue={post?.status||"published"} className="admin-input"><option value="published">Đã xuất bản</option><option value="draft">Bản nháp</option></select></label><label><span className="label">Thứ tự</span><input name="sort_order" type="number" defaultValue={post?.sort_order||0} className="admin-input" /></label></div>
  {error&&<p className="rounded-xl bg-red-50 p-3 text-red-700">{error}</p>}
  <div className="flex flex-wrap gap-3"><button disabled={saving} className="rounded-xl bg-sky-600 px-6 py-3 font-bold text-white">{saving?"Đang lưu...":"Lưu bài viết"}</button>{post&&<button type="button" onClick={remove} className="rounded-xl bg-red-50 px-6 py-3 font-bold text-red-700">Xóa</button>}<button type="button" onClick={()=>router.push('/admin')} className="rounded-xl bg-slate-100 px-6 py-3 font-bold">Hủy</button></div>
 </form>
}
