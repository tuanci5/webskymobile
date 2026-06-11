import Image from "next/image";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { LoginForm } from "@/components/admin/login-form";
const logo="https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png";
export default async function LoginPage(){if(await getAdminSession())redirect('/admin');return <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4"><div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl"><Image src={logo} alt="Sky Mobile" width={180} height={60} className="mx-auto h-16 w-auto object-contain"/><h1 className="mt-6 text-center text-2xl font-black">Quản trị nội dung</h1><p className="mt-2 text-center text-sm text-slate-500">Đăng nhập để quản lý các bài viết trên website.</p><LoginForm/></div></main>}
