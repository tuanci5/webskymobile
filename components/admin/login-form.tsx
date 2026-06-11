"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setLoading(true); setError("");
    const form=new FormData(e.currentTarget);
    const r=await fetch("/api/auth/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:form.get("username"),password:form.get("password")})});
    if(!r.ok){setError((await r.json()).error||"Đăng nhập thất bại");setLoading(false);return;}
    router.push("/admin"); router.refresh();
  }
  return <form onSubmit={submit} className="mt-8 space-y-5">
    <label className="block"><span className="mb-2 block text-sm font-semibold">Tên đăng nhập</span><input name="username" defaultValue="admin" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500" /></label>
    <label className="block"><span className="mb-2 block text-sm font-semibold">Mật khẩu</span><input name="password" type="password" required className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-sky-500" /></label>
    {error&&<p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    <button disabled={loading} className="w-full rounded-xl bg-sky-600 px-5 py-3 font-bold text-white hover:bg-sky-700 disabled:opacity-60">{loading?"Đang đăng nhập...":"Đăng nhập"}</button>
  </form>;
}
