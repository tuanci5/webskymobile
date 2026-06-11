export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image: string;
  href: string;
};

// Nội dung tin được tổng hợp từ website chính thức skymobile.jp.
export const latestNews: NewsItem[] = [
  {
    slug: "huong-dan-cai-at-nhanh-speed-wi-fi-home-5g-l13",
    title: "HƯỚNG DẪN CÀI ĐẶT NHANH SPEED WI-FI HOME 5G L13",
    excerpt:
      "Speed Wi-Fi HOME 5G L13 là thiết bị phát Wi-Fi 5G được nhiều người lựa chọn nhờ khả năng kết nối ổn định, hỗ trợ nhiều phương thức kết nối và thao tác cài đặt đơn giản.",
    category: "Hướng dẫn",
    publishedAt: "2026-06-01",
    image: "/media/speed-wifi-home-5g-l13.png",
    href: "/bai-viet/huong-dan-cai-at-nhanh-speed-wi-fi-home-5g-l13",
  },
  {
    slug: "sim-softbank-chon-ung-goi-tiet-kiem-nhat-tai-nhat",
    title: "Sim Softbank: Chọn Đúng Gói Tiết Kiệm Nhất Tại Nhật",
    excerpt:
      "Sim Softbank là lựa chọn quen thuộc của người Việt tại Nhật nhờ độ ổn định cao và sóng mạnh. Tìm hiểu cách chọn đúng gói, dùng hiệu quả và tiết kiệm ngay từ đầu.",
    category: "Tin tức",
    publishedAt: "2026-04-24",
    image: "/media/sim-softbank-tiet-kiem-nhat-tai-nhat.jpg",
    href: "/bai-viet/sim-softbank-chon-ung-goi-tiet-kiem-nhat-tai-nhat",
  },
  {
    slug: "pocket-wifi-japan-unlimited",
    title: "Pocket Wifi Japan Unlimited: Đừng Mua Trước Khi Đọc Điều Này",
    excerpt:
      "Pocket Wifi Japan Unlimited là giải pháp kết nối được nhiều người lựa chọn khi đến Nhật. Xem các lưu ý để chọn thiết bị mạnh, ổn định và phù hợp nhu cầu.",
    category: "Tin tức",
    publishedAt: "2026-04-23",
    image: "/media/pocket-wifi-japan-unlimited.jpg",
    href: "/bai-viet/pocket-wifi-japan-unlimited",
  },
];

export function formatNewsDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00+09:00`));
}
