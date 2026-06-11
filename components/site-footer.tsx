import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

const logoUrl = "https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png";
const japanAddress = "〒132-0035 東京都江戸川区平井５丁目 ２３－５ 平井ショッピングセンター ５階";
const vietnamAddress = "81 Lê Mao, phường Vinh Tân, Nghệ An";

export function SiteFooter() {
  return (
    <footer id="liên-hệ" className="bg-slate-950 py-12 text-white">
      <div className="container-page grid gap-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src={logoUrl} alt="SKY MOBILE" width={170} height={48} className="mb-5 h-12 w-auto rounded bg-white object-contain p-1" />
          <p className="max-w-md text-slate-300">SKY MOBILE hỗ trợ SIM, gói di động và tư vấn đăng ký dịch vụ cho khách hàng đang sinh sống tại Nhật Bản.</p>
          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" /><span>Nhật Bản: {japanAddress}</span></p>
            <p className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" /><span>Việt Nam: {vietnamAddress}</span></p>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Menu nhanh</h3>
          <ul className="space-y-2 text-slate-300"><li>Trang chủ</li><li>Dịch vụ</li><li>Gói cước</li><li>Hướng dẫn đăng ký</li><li>Liên hệ</li></ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Thông tin</h3>
          <ul className="space-y-2 text-slate-300">
            <li><Link className="hover:text-white" href="/bai-viet/chinh-sach-bao-mat">Chính sách bảo mật</Link></li>
            <li><Link className="hover:text-white" href="/bai-viet/dieu-khoan-su-dung">Điều khoản sử dụng</Link></li>
            <li><Link className="hover:text-white" href="/bai-viet/thong-bao-dich-vu">Thông báo dịch vụ</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-page mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">© 2026 SKY MOBILE. All rights reserved.</div>
    </footer>
  );
}
