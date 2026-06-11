import type { Metadata } from "next";
import "./globals.css";

const logoUrl = "https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png";

export const metadata: Metadata = {
  title: "SKY MOBILE | Dịch vụ di động tại Nhật Bản",
  description: "SKY MOBILE hỗ trợ khách hàng lựa chọn SIM, gói di động và đăng ký dịch vụ tại Nhật Bản. Địa chỉ tại Hirai Shopping Center, Tokyo.",
  openGraph: {
    title: "SKY MOBILE",
    description: "Dịch vụ SIM và hỗ trợ di động tại Nhật Bản",
    images: [logoUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
