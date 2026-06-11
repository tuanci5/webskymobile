import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const logoUrl = "https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png";
const navItems = ["Trang chủ", "Dịch vụ", "Gói cước", "Chiến dịch", "Hướng dẫn", "Liên hệ"];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <Image src={logoUrl} alt="SKY MOBILE" width={150} height={42} className="h-12 w-auto object-contain" priority />
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-700 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="hover:text-sky-600">
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild><a href="#contact">Tư vấn ngay</a></Button>
        </div>
        <button className="rounded-full border border-slate-200 p-3 lg:hidden" aria-label="Mở menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
