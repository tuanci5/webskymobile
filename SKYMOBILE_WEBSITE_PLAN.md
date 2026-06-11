# Kế hoạch triển khai website SKY MOBILE

Ngày tạo: 2026-06-11
Thư mục dự án: `/www/wwwroot/skymobile`

## 1. Mục tiêu

Xây dựng website mới cho **SKY MOBILE** bằng AI từ đầu với stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui style components
- Supabase/PostgreSQL chuẩn bị cho CMS/contact sau này

Giao diện lấy cảm hứng từ: <https://www.jcom.co.jp/vi/>

Nội dung ưu tiên từ: <https://skymobile.jp/>

Nếu nội dung Sky Mobile thiếu, bổ sung theo cấu trúc/nội dung tham khảo từ J:COM để tạo landing page hoàn chỉnh.

Logo sử dụng:

```txt
https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png
```

## 2. Nội dung nguồn

### SKY MOBILE

- Tên thương hiệu: **SKY MOBILE**
- Địa chỉ:

```txt
〒132-0035 東京都江戸川区平井５丁目 ２３－５ 平井ショッピングセンター ５階
```

### J:COM tham khảo bố cục

Các nhóm nội dung/bố cục tham khảo:

- Hero/banner lớn
- Giới thiệu dịch vụ đời sống
- Khối mô phỏng/tìm gói phù hợp
- Chiến dịch/lợi ích
- Dịch vụ có thể kết hợp
- Tiếng nói khách hàng
- Hướng dẫn đăng ký
- Thông báo
- Footer

## 3. Yêu cầu giao diện

- Sạch, hiện đại, thân thiện
- Nền trắng/xám nhạt
- Accent xanh dương theo nhận diện Sky Mobile
- Card bo góc lớn
- Banner gradient nhẹ
- CTA rõ ràng
- Icon minh họa dịch vụ
- Responsive tốt trên mobile/tablet/desktop

Màu đề xuất:

```txt
Primary: #0EA5E9 hoặc #0284C7
Secondary: #0369A1
Accent: #FACC15 hoặc #FDBA74
Background: #F8FAFC
Text: #0F172A
Muted text: #64748B
Border: #E2E8F0
```

## 4. Cấu trúc trang chủ

Trang `/` gồm các section:

1. Header sticky
   - Logo Sky Mobile
   - Menu: Trang chủ, Dịch vụ, Gói cước, Chiến dịch, Hướng dẫn đăng ký, Liên hệ
   - CTA: Tư vấn ngay / Tìm gói phù hợp
   - Mobile hamburger

2. Hero banner
   - Headline: `SKY MOBILE - Kết nối di động dễ dàng tại Nhật Bản`
   - Subheadline: `Dịch vụ SIM và hỗ trợ di động dành cho người Việt, người nước ngoài và khách hàng đang sinh sống tại Nhật.`
   - CTA: `Tìm gói phù hợp`, `Liên hệ tư vấn`
   - Badge: `Hỗ trợ tại Tokyo`
   - Hiển thị địa chỉ cửa hàng

3. Tìm gói phù hợp
   - Title: `Tìm gói di động phù hợp với bạn`
   - Option cards: Sử dụng cơ bản, Dùng data nhiều, Cần tư vấn trực tiếp

4. Dịch vụ chính
   - SIM di động
   - Hỗ trợ đăng ký
   - Tư vấn gói cước
   - Hỗ trợ tại cửa hàng

5. Lợi ích khi chọn SKY MOBILE
   - Hỗ trợ thân thiện
   - Đăng ký thuận tiện
   - Gói cước linh hoạt
   - Có địa chỉ hỗ trợ trực tiếp

6. Quy trình đăng ký
   - Bước 1: Liên hệ hoặc đến cửa hàng
   - Bước 2: Chọn gói phù hợp
   - Bước 3: Chuẩn bị giấy tờ
   - Bước 4: Hoàn tất và sử dụng

7. Tiếng nói khách hàng
   - 3 testimonial mẫu

8. CTA cuối trang
   - `Bạn cần tư vấn gói di động phù hợp?`

9. Thông báo
   - Liên hệ cửa hàng để biết gói cước mới nhất
   - Thông tin dịch vụ/điều kiện có thể thay đổi
   - Nên chuẩn bị giấy tờ tùy thân khi đăng ký

10. Footer
    - Logo
    - Mô tả ngắn
    - Địa chỉ
    - Menu nhanh
    - Chính sách/điều khoản placeholder

## 5. Cấu trúc file dự kiến

```txt
app/
  layout.tsx
  page.tsx
  globals.css
components/
  site-header.tsx
  site-footer.tsx
  hero-section.tsx
  plan-finder-section.tsx
  services-section.tsx
  benefits-section.tsx
  registration-steps-section.tsx
  testimonials-section.tsx
  notices-section.tsx
  final-cta-section.tsx
components/ui/
  button.tsx
  card.tsx
  badge.tsx
  sheet.tsx
lib/
  utils.ts
  supabase.ts
```

## 6. Supabase/PostgreSQL schema chuẩn bị

```sql
create table site_sections (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  subtitle text,
  content jsonb,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table services (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  icon text,
  sort_order int default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table testimonials (
  id uuid primary key default gen_random_uuid(),
  name text,
  label text,
  content text not null,
  rating int default 5,
  is_active boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

create table notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text,
  type text default 'info',
  is_active boolean default true,
  published_at timestamptz default now(),
  created_at timestamptz default now()
);

create table contact_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  message text,
  preferred_contact_method text,
  status text default 'new',
  created_at timestamptz default now()
);
```

## 7. Acceptance criteria

- Website chạy tại `/www/wwwroot/skymobile`
- Next.js App Router + TypeScript
- Tailwind CSS
- Component style tương thích shadcn/ui
- Logo đúng URL
- Đủ các section trong kế hoạch
- Giao diện giống tinh thần J:COM nhưng mang thương hiệu Sky Mobile
- Responsive tốt
- `npm run build` thành công
