import Image from "next/image";
import { ChevronRight, Clock3 } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { formatNewsDate, latestNews } from "@/lib/news";

export const metadata = {
  title: "Tin tức mới nhất | SKY MOBILE",
  description: "Thông tin, hướng dẫn và xu hướng dịch vụ di động mới nhất từ SKY MOBILE.",
};

export default function NewsPage() {
  return <><SiteHeader/><main className="min-h-[60vh] bg-slate-50 py-14 md:py-20"><div className="container-page"><div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-600">SKY MOBILE</p><h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Tin tức mới nhất</h1><p className="mt-4 text-lg text-slate-500">Cập nhật thông tin, hướng dẫn và xu hướng dịch vụ di động tại Nhật Bản.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{latestNews.map(news=><a key={news.slug} href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl"><div className="relative aspect-[16/9] overflow-hidden bg-slate-100"><Image src={news.image} alt={news.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105"/></div><div className="flex flex-1 flex-col p-5"><div className="mb-3 flex items-center gap-2 text-xs"><span className="rounded-full bg-sky-50 px-2.5 py-1 font-bold text-sky-600">{news.category}</span><span className="flex items-center gap-1 text-slate-400"><Clock3 className="h-3.5 w-3.5"/>{formatNewsDate(news.publishedAt)}</span></div><h2 className="text-lg font-black leading-7 transition group-hover:text-sky-700">{news.title}</h2><p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{news.excerpt}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-sky-600">Đọc bài viết <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></div></a>)}</div><p className="mt-8 text-center text-sm text-slate-400">Các liên kết mở bài viết trên website chính thức skymobile.jp.</p></div></main><SiteFooter/></>;
}
