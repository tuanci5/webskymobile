"use client";

const vietnamBanks = [
  "Vietcombank",
  "Techcombank",
  "ACB",
  "BIDV",
  "VietinBank",
  "MB Bank",
  "VPBank",
  "VIB",
  "TPBank",
  "Sacombank",
  "SHB",
  "HDBank",
  "MSB",
  "SeABank",
  "OCB",
  "Eximbank",
  "Nam A Bank",
  "LienVietPostBank",
  "PVcomBank",
  "ABBank",
  "Bac A Bank",
  "BaoViet Bank",
  "VietBank",
  "KienlongBank",
  "NCB",
  "Saigonbank",
  "PGBank",
  "VietABank",
  "Co-opBank",
  "Agribank",
] as const;

export function BankSelectSection() {
  return (
    <section className="bg-white py-14">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <label htmlFor="vietnam-bank" className="block text-2xl font-black text-slate-900">
            Chọn ngân hàng
          </label>
          <p className="mt-2 text-sm text-slate-500">
            Danh sách ngân hàng Việt Nam phổ biến để khách hàng chọn nhanh khi cần cung cấp thông tin thanh toán.
          </p>
          <select
            id="vietnam-bank"
            name="vietnamBank"
            defaultValue=""
            className="mt-5 w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-base font-semibold text-slate-700 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
          >
            <option value="" disabled>
              VD: Vietcombank, Techcombank, ACB...
            </option>
            {vietnamBanks.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
