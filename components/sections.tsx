import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ChevronRight, Clock3, MessageCircle, Phone, Radio, ShoppingBag, Smartphone, Sparkles, UserCheck, Wifi, MapPin } from "lucide-react";
import { formatNewsDate, latestNews } from "@/lib/news";

const logoUrl = "https://storage.googleapis.com/sim-app-files-2025-09-14/logos%2F1779362963965-SKY_MOBILE.png";
const address = "〒132-0035 東京都江戸川区平井５丁目 ２３－５ 平井ショッピングセンター ５階";

export function HeroSection() {
  return (
    <section id="home" className="sky-gradient overflow-hidden py-16 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <Badge>Hỗ trợ tại Tokyo</Badge>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">SKY MOBILE - Kết nối di động dễ dàng tại Nhật Bản</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Dịch vụ SIM và hỗ trợ di động dành cho người Việt, người nước ngoài và khách hàng đang sinh sống tại Nhật.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button size="lg" asChild><a href="#gói-cước">Tìm gói phù hợp</a></Button><Button size="lg" variant="secondary" asChild><a href="#contact">Liên hệ tư vấn</a></Button></div>
          <p className="mt-6 flex gap-2 text-sm text-slate-600"><MapPin className="h-5 w-5 shrink-0 text-sky-600" />{address}</p>
        </div>
        <Card className="relative border-white/80 bg-white/85 p-8 shadow-2xl shadow-sky-100 backdrop-blur">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-yellow-200/50" />
          <div className="relative">
            <Image src={logoUrl} alt="SKY MOBILE" width={230} height={80} className="mb-8 h-20 w-auto object-contain" priority />
            <p className="text-sm font-bold uppercase tracking-[.3em] text-sky-600">Mobile support in Japan</p>
            <h2 className="mt-3 text-3xl font-black">Dịch vụ di động thân thiện, dễ đăng ký</h2>
            <div className="mt-6 grid gap-4">
              {['Dễ đăng ký', 'Hỗ trợ thân thiện', 'Phù hợp người nước ngoài'].map((item) => <div key={item} className="flex items-center gap-3 rounded-2xl bg-sky-50 p-4 font-semibold"><CheckCircle2 className="h-5 w-5 text-sky-600" />{item}</div>)}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

export function PlanFinderSection() {
  const plans = [
    [Wifi, 'Sử dụng cơ bản', 'Nghe gọi, nhắn tin, dùng internet nhẹ.'],
    [Radio, 'Dùng data nhiều', 'Phù hợp xem video, mạng xã hội, học tập và làm việc.'],
    [MessageCircle, 'Cần tư vấn trực tiếp', 'Nhân viên hỗ trợ giải thích và hướng dẫn đăng ký.'],
  ] as const;
  return <section id="gói-cước" className="py-16"><div className="container-page"><SectionIntro badge="Mô phỏng nhu cầu" title="Tìm gói di động phù hợp với bạn" desc="Chọn nhu cầu sử dụng của bạn, chúng tôi sẽ gợi ý gói dịch vụ phù hợp." /> <div className="mt-8 grid gap-5 md:grid-cols-3">{plans.map(([Icon,title,desc]) => <Card key={title} className="hover:-translate-y-1 hover:shadow-xl transition"><Icon className="mb-5 h-10 w-10 text-sky-600"/><CardTitle>{title}</CardTitle><CardContent className="mt-3">{desc}</CardContent></Card>)}</div><div className="mt-8 text-center"><Button asChild><a href="#contact">Bắt đầu tư vấn</a></Button></div></div></section>;
}

export function ServicesSection() {
  const services = [
    [Smartphone, 'SIM di động', 'Các lựa chọn SIM phù hợp với nhu cầu sử dụng internet, nghe gọi và liên lạc hằng ngày.'],
    [UserCheck, 'Hỗ trợ đăng ký', 'Tư vấn thủ tục, giấy tờ cần thiết và hỗ trợ khách hàng trong quá trình đăng ký dịch vụ.'],
    [Sparkles, 'Tư vấn gói cước', 'Gợi ý gói phù hợp theo ngân sách, lượng data và thời gian sử dụng.'],
    [ShoppingBag, 'Hỗ trợ tại cửa hàng', 'Khách hàng có thể đến trực tiếp cửa hàng tại Hirai Shopping Center để được hỗ trợ.'],
  ] as const;
  return <section id="dịch-vụ" className="bg-white py-16"><div className="container-page"><SectionIntro badge="Dịch vụ" title="Dịch vụ của SKY MOBILE" desc="Hỗ trợ khách hàng kết nối di động thuận tiện hơn khi sinh sống tại Nhật Bản." /><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(([Icon,title,desc]) => <Card key={title}><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100"><Icon className="h-7 w-7 text-sky-700"/></div><CardTitle>{title}</CardTitle><CardContent className="mt-3 text-sm leading-6">{desc}</CardContent></Card>)}</div></div></section>;
}

export function BenefitsSection() {
  const items = ['Hỗ trợ thân thiện với khách hàng nước ngoài tại Nhật.', 'Đăng ký thuận tiện với hướng dẫn rõ ràng.', 'Gói cước linh hoạt theo nhu cầu thực tế.', 'Có cửa hàng tại Tokyo để tư vấn trực tiếp.'];
  return <section id="chiến-dịch" className="py-16"><div className="container-page grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><Badge>Chiến dịch / Lợi ích</Badge><h2 className="mt-4 text-3xl font-black md:text-4xl">Lợi ích khi chọn SKY MOBILE</h2><p className="mt-4 text-slate-600">Một điểm đến thuận tiện cho khách hàng cần dịch vụ di động tại Nhật.</p><Button className="mt-6" asChild><a href="#hướng-dẫn">Xem hướng dẫn đăng ký</a></Button></div><div className="grid gap-4 sm:grid-cols-2">{items.map((item, i) => <Card key={item} className="bg-gradient-to-br from-white to-sky-50"><Badge className="mb-4">0{i+1}</Badge><p className="font-semibold leading-7">{item}</p></Card>)}</div></div></section>;
}

export function RegistrationStepsSection() {
  const steps = [['Liên hệ hoặc đến cửa hàng','Gửi yêu cầu tư vấn hoặc đến trực tiếp địa chỉ của SKY MOBILE.'],['Chọn gói phù hợp','Nhân viên hỗ trợ tư vấn theo nhu cầu sử dụng và ngân sách.'],['Chuẩn bị giấy tờ','Chuẩn bị giấy tờ cần thiết theo hướng dẫn trước khi đăng ký.'],['Hoàn tất và sử dụng','Sau khi hoàn tất đăng ký, khách hàng có thể bắt đầu sử dụng dịch vụ.']];
  return <section id="hướng-dẫn" className="bg-white py-16"><div className="container-page"><SectionIntro badge="Hướng dẫn" title="Hướng dẫn đăng ký dịch vụ" desc="Quy trình rõ ràng, dễ hiểu cho khách hàng mới."/><div className="mt-10 grid gap-5 md:grid-cols-4">{steps.map(([title,desc], i)=><Card key={title} className="relative"><div className="mb-5 text-5xl font-black text-sky-100">{i+1}</div><CardTitle className="text-lg">{title}</CardTitle><CardContent className="mt-3 text-sm leading-6">{desc}</CardContent></Card>)}</div></div></section>;
}

export function TestimonialsSection() {
 const testimonials = [['Tôi được tư vấn rất dễ hiểu khi mới sang Nhật và cần đăng ký SIM để liên lạc.','Khách hàng tại Tokyo'],['Nhân viên hỗ trợ nhiệt tình, giúp tôi chọn gói phù hợp với nhu cầu dùng data hằng ngày.','Du học sinh'],['Có thể đến cửa hàng trực tiếp nên tôi cảm thấy yên tâm hơn khi đăng ký dịch vụ.','Người đi làm tại Nhật']];
 return <section className="py-16"><div className="container-page"><SectionIntro badge="Tiếng nói khách hàng" title="Khách hàng nói gì về SKY MOBILE" desc="Những phản hồi tích cực từ khách hàng sử dụng dịch vụ."/><div className="mt-8 grid gap-5 md:grid-cols-3">{testimonials.map(([quote,label])=><Card key={label}><p className="text-lg leading-8 text-slate-700">“{quote}”</p><p className="mt-5 font-bold text-sky-700">{label}</p></Card>)}</div></div></section>;
}

export function FinalCtaSection() {
 return <section id="contact" className="py-16"><div className="container-page rounded-[36px] bg-sky-700 p-8 text-white shadow-2xl shadow-sky-200 md:p-12"><div className="grid items-center gap-6 md:grid-cols-[1fr_auto]"><div><h2 className="text-3xl font-black md:text-4xl">Bạn cần tư vấn gói di động phù hợp?</h2><p className="mt-4 max-w-2xl text-sky-100">SKY MOBILE sẵn sàng hỗ trợ bạn lựa chọn dịch vụ phù hợp khi sinh sống, học tập và làm việc tại Nhật Bản.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button variant="secondary"><Phone className="h-4 w-4"/>Liên hệ tư vấn</Button><Button variant="outline"><MapPin className="h-4 w-4"/>Xem địa chỉ cửa hàng</Button></div></div></div></section>;
}

export function LatestNewsSection() {
 return <section id="tin-tức" className="bg-slate-50 py-16 md:py-20"><div className="container-page"><div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-sky-600">Tin tức</p><h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">Tin tức mới nhất</h2><p className="mt-2 text-slate-500">Cập nhật thông tin và xu hướng mới nhất</p></div><Link href="/tin-tuc" className="inline-flex w-fit items-center gap-1 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-sky-200 hover:text-sky-700">Xem tất cả tin tức <ChevronRight className="h-4 w-4"/></Link></div><div className="mt-9 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{latestNews.map((news)=><Link key={news.slug} href={news.href} className="group flex overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:flex-col"><div className="relative aspect-[4/3] w-32 shrink-0 overflow-hidden bg-slate-100 md:aspect-[16/9] md:w-full"><Image src={news.image} alt={news.title} fill sizes="(max-width: 768px) 128px, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105"/></div><div className="flex min-w-0 flex-1 flex-col p-4"><div className="mb-2 flex flex-wrap items-center gap-2 text-xs"><span className="rounded-full bg-sky-50 px-2.5 py-1 font-bold text-sky-600">{news.category}</span><span className="flex items-center gap-1 text-slate-400"><Clock3 className="h-3.5 w-3.5"/>{formatNewsDate(news.publishedAt)}</span></div><h3 className="line-clamp-2 font-black leading-6 text-slate-900 transition group-hover:text-sky-700">{news.title}</h3><p className="mt-2 hidden line-clamp-2 text-sm leading-6 text-slate-500 md:block">{news.excerpt}</p><span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-bold text-sky-600">Đọc thêm <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1"/></span></div></Link>)}</div><p className="mt-5 text-right text-xs text-slate-400">Tin tức do SKY MOBILE tổng hợp và biên soạn.</p></div></section>;
}

export function NoticesSection() {
 const notices = ['Vui lòng liên hệ cửa hàng để biết thông tin gói cước mới nhất.', 'Thông tin dịch vụ và điều kiện đăng ký có thể thay đổi theo từng thời điểm.', 'Khách hàng nên chuẩn bị giấy tờ tùy thân khi đăng ký dịch vụ.'];
 return <section className="bg-white py-14"><div className="container-page"><h2 className="text-2xl font-black">Thông báo từ SKY MOBILE</h2><div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-slate-50">{notices.map((n)=><div key={n} className="flex gap-3 p-5 text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-sky-600"/>{n}</div>)}</div></div></section>;
}

function SectionIntro({ badge, title, desc }: { badge: string; title: string; desc: string }) {
  return <div className="mx-auto max-w-3xl text-center"><Badge>{badge}</Badge><h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2><p className="mt-4 text-slate-600">{desc}</p></div>;
}
