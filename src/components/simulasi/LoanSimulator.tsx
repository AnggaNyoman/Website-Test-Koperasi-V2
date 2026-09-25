"use client";

import { useState, useMemo } from "react";
import { formatRupiah } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import {
  Calculator,
  Calendar,
  Printer,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Info,
} from "lucide-react";

interface LoanTypeConfig {
  name: string;
  isDaily?: boolean;
  dailyRate?: number;
  fixedDays?: number;
  rateMin: number;
  rateMax: number;
  defaultRate: number;
  minPlafon: number;
  maxPlafon: number;
  plafonOptions?: number[];
  plafonStep?: number;
  fixedTenor?: number;
  allowedTenors?: number[];
  adminFlat?: Record<number, number>;
  isNoInterest?: boolean;
  note: string;
}

const LOAN_TYPES: LoanTypeConfig[] = [
  {
    name: "PINJARO (Pinjaman Harian Mikro)",
    isDaily: true,
    dailyRate: 0.09,
    fixedDays: 100,
    rateMin: 0.09,
    rateMax: 0.09,
    defaultRate: 0.09,
    minPlafon: 500000,
    maxPlafon: 5000000,
    plafonStep: 250000,
    note: "Sesuai Buku Saku Hal. 29: Jangka waktu 100 hari, bunga 0,09%/hari. Plafon maks Rp3.000.000 untuk pinjaman pertama, dan s/d Rp5.000.000 jika riwayat lancar. Biaya materai Rp10.000,-, tanpa agunan.",
  },
  {
    name: "Pinjaman Modal Koperasi (0% Bunga)",
    isNoInterest: true,
    rateMin: 0,
    rateMax: 0,
    defaultRate: 0,
    minPlafon: 5000000,
    maxPlafon: 10000000,
    plafonOptions: [5000000, 10000000],
    fixedTenor: 50,
    adminFlat: {
      5000000: 50000,
      10000000: 100000,
    },
    note: "Sesuai Buku Saku Hal. 31: Tidak dikenakan bunga (0%), tenor tetap 50 bulan. Plafon khusus Rp5.000.000 (admin Rp50rb, angsuran Rp100rb/bln) atau Rp10.000.000 (admin Rp100rb, angsuran Rp200rb/bln).",
  },
  {
    name: "Pinjaman Usaha",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 1000000,
    maxPlafon: 150000000,
    plafonStep: 1000000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 30: Suku bunga 1,2%–1,5%/bulan flat, jangka waktu 1–5 tahun. Admin: 1% (1–2 thn), 1,5% (3–4 thn), 2% (5 thn). Provisi 0,5%. Plafon di atas Rp100 juta wajib agunan SHM.",
  },
  {
    name: "Pinjaman Yadnya (Bunga 1%)",
    rateMin: 1.0,
    rateMax: 1.0,
    defaultRate: 1.0,
    minPlafon: 1000000,
    maxPlafon: 100000000,
    plafonStep: 1000000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 37: Suku bunga khusus 1,0%/bulan untuk pembiayaan upacara yadnya keagamaan. Tenor 1–5 tahun. Admin 1%–2%, provisi 0,5%.",
  },
  {
    name: "Pinjaman Sepeda Motor",
    rateMin: 1.3,
    rateMax: 1.3,
    defaultRate: 1.3,
    minPlafon: 1000000,
    maxPlafon: 50000000,
    plafonStep: 500000,
    allowedTenors: [12, 24],
    note: "Sesuai Buku Saku Hal. 35: Suku bunga 1,3%/bulan flat, tenor 1–2 tahun (12 atau 24 bulan). Agunan menggunakan kendaraan yang dibeli. Biaya admin 1%, provisi 0,5%.",
  },
  {
    name: "Pinjaman Mobil",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 5000000,
    maxPlafon: 200000000,
    plafonStep: 2500000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 36: Suku bunga 1,2%–1,5%/bulan flat, tenor 1–5 tahun. Agunan menggunakan mobil yang dibeli. Admin 1%–2%, provisi 0,5%.",
  },
  {
    name: "Pinjaman KPR / Tanah",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 10000000,
    maxPlafon: 300000000,
    plafonStep: 5000000,
    allowedTenors: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
    note: "Sesuai Buku Saku Hal. 32: Suku bunga 1,2%–1,5%/bulan, tenor fleksibel 1–10 tahun (hingga 120 bulan). Agunan SHM rumah/tanah. Admin 1%–2%, provisi 0,5%.",
  },
  {
    name: "Pinjaman Renovasi",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 2000000,
    maxPlafon: 150000000,
    plafonStep: 1000000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 33: Suku bunga 1,2%–1,5%/bulan, tenor 1–5 tahun untuk renovasi rumah/toko. Admin 1%–2%, provisi 0,5%. Di atas 100jt menggunakan SHM.",
  },
  {
    name: "Pinjaman Investasi",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 5000000,
    maxPlafon: 300000000,
    plafonStep: 5000000,
    allowedTenors: [12, 24, 36, 48, 60, 72, 84, 96, 108, 120],
    note: "Sesuai Buku Saku Hal. 34: Suku bunga 1,2%–1,5%/bulan, tenor hingga 10 tahun untuk pembelian peralatan dan pembangunan gedung. Admin 1%–2%, provisi 0,5%.",
  },
  {
    name: "Pinjaman Sinergi (Kerjasama Perusahaan)",
    rateMin: 1.2,
    rateMax: 1.2,
    defaultRate: 1.2,
    minPlafon: 1000000,
    maxPlafon: 25000000,
    plafonStep: 500000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 40: Pinjaman sinergi potong gaji via PKS perusahaan. Plafon tanpa agunan maksimal Rp10.000.000,-, suku bunga 1,2%/bulan. Tenor 1–5 tahun.",
  },
  {
    name: "Pinjaman Back to Back",
    rateMin: 1.5,
    rateMax: 1.5,
    defaultRate: 1.5,
    minPlafon: 1000000,
    maxPlafon: 100000000,
    plafonStep: 1000000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 39: Agunan berupa simpanan SIRELA atau SIJAKA, plafon maksimal 90% dari agunan. Bunga 1,5%/bulan + suku bunga simpanan yang diagunkan. Tenor 1–5 tahun.",
  },
  {
    name: "Pinjaman Multiguna",
    rateMin: 1.2,
    rateMax: 1.5,
    defaultRate: 1.2,
    minPlafon: 1000000,
    maxPlafon: 100000000,
    plafonStep: 1000000,
    allowedTenors: [12, 24, 36, 48, 60],
    note: "Sesuai Buku Saku Hal. 38: Suku bunga 1,2%–1,5%/bulan, tenor 1–5 tahun untuk kebutuhan lain yang belum tercover jenis pinjaman lain. Admin 1%–2%, provisi 0,5%.",
  },
];

export default function LoanSimulator() {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState<number>(0);
  const [plafon, setPlafon] = useState<number>(2000000);
  const [selectedRate, setSelectedRate] = useState<number>(0.09);
  const [tenor, setTenor] = useState<number>(100);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const currentType = LOAN_TYPES[selectedTypeIndex];

  const handleSelectType = (idx: number) => {
    const type = LOAN_TYPES[idx];
    setSelectedTypeIndex(idx);
    setSelectedRate(type.defaultRate);

    if (type.isDaily) {
      setTenor(100);
      setPlafon((prev) => Math.min(Math.max(prev, 500000), 5000000));
    } else if (type.isNoInterest) {
      setTenor(50);
      setPlafon(5000000);
    } else if (type.fixedTenor) {
      setTenor(type.fixedTenor);
      setPlafon((prev) => Math.min(Math.max(prev, type.minPlafon), type.maxPlafon));
    } else {
      const allowed = type.allowedTenors || [12, 24, 36, 48, 60];
      setTenor(allowed[0]);
      setPlafon((prev) => Math.min(Math.max(prev, type.minPlafon), type.maxPlafon));
    }
  };

  // Real-time calculations strictly according to PDF rules
  const calculations = useMemo(() => {
    if (currentType.isDaily) {
      // PINJARO: 100 days, daily rate 0.09% per day
      const days = 100;
      const pokokPerHari = Math.round(plafon / days);
      const bungaPerHari = Math.round(plafon * (0.09 / 100));
      const angsuranPerHari = pokokPerHari + bungaPerHari;
      const totalBunga = bungaPerHari * days;
      const totalPengembalian = plafon + totalBunga;
      const biayaMaterai = 10000;
      const biayaProvisi = 0;
      const biayaAdmin = 0;
      const danaDiterima = plafon - biayaMaterai;

      // Schedule in 10-day increments
      const schedule = [];
      let sisa = plafon;
      for (let d = 10; d <= 100; d += 10) {
        sisa = Math.max(0, plafon - pokokPerHari * d);
        schedule.push({
          label: `Hari ke-${d}`,
          pokok: pokokPerHari * 10,
          bunga: bungaPerHari * 10,
          total: angsuranPerHari * 10,
          sisaPokok: sisa,
        });
      }

      return {
        isDaily: true,
        days,
        pokokPerHari,
        bungaPerHari,
        angsuranPerHari,
        totalBunga,
        totalPengembalian,
        biayaMaterai,
        biayaProvisi,
        biayaAdmin,
        danaDiterima,
        schedule,
      };
    }

    if (currentType.isNoInterest) {
      // Pinjaman Modal Koperasi: 50 months, 0% interest
      const months = 50;
      const pokokPerBulan = Math.round(plafon / months);
      const bungaPerBulan = 0;
      const angsuranPerBulan = pokokPerBulan;
      const totalBunga = 0;
      const totalPengembalian = plafon;
      const biayaAdmin = currentType.adminFlat?.[plafon] || (plafon <= 5000000 ? 50000 : 100000);
      const biayaProvisi = 0;
      const biayaMaterai = 10000;
      const danaDiterima = plafon - biayaAdmin - biayaMaterai;

      const schedule = [];
      let sisa = plafon;
      for (let m = 1; m <= months; m++) {
        const pokok = m === months ? sisa : pokokPerBulan;
        sisa = Math.max(0, sisa - pokok);
        schedule.push({
          label: `Bulan ke-${m}`,
          pokok,
          bunga: 0,
          total: pokok,
          sisaPokok: sisa,
        });
      }

      return {
        isDaily: false,
        months,
        pokokPerBulan,
        bungaPerBulan,
        angsuranPerBulan,
        totalBunga,
        totalPengembalian,
        biayaAdmin,
        biayaProvisi,
        biayaMaterai,
        danaDiterima,
        schedule,
      };
    }

    // Standard Monthly Loans
    const months = tenor;
    const ratePerMonth = selectedRate;
    const pokokPerBulan = Math.round(plafon / months);
    const bungaPerBulan = Math.round(plafon * (ratePerMonth / 100));
    const angsuranPerBulan = pokokPerBulan + bungaPerBulan;
    const totalBunga = bungaPerBulan * months;
    const totalPengembalian = plafon + totalBunga;

    // Administrasi: 1% (1-2 thn), 1.5% (3-4 thn), 2% (5+ thn)
    const tenorTahun = months / 12;
    const adminPercent = tenorTahun <= 2 ? 0.01 : tenorTahun <= 4 ? 0.015 : 0.02;
    const biayaAdmin = Math.round(plafon * adminPercent);
    const biayaProvisi = Math.round(plafon * 0.005); // 0.5% provisi
    const biayaMaterai = 10000;
    const danaDiterima = plafon - biayaAdmin - biayaProvisi - biayaMaterai;

    const schedule = [];
    let sisa = plafon;
    for (let m = 1; m <= months; m++) {
      const pokok = m === months ? sisa : pokokPerBulan;
      sisa = Math.max(0, sisa - pokok);
      schedule.push({
        label: `Bulan ke-${m}`,
        pokok,
        bunga: bungaPerBulan,
        total: pokok + bungaPerBulan,
        sisaPokok: sisa,
      });
    }

    return {
      isDaily: false,
      months,
      pokokPerBulan,
      bungaPerBulan,
      angsuranPerBulan,
      totalBunga,
      totalPengembalian,
      biayaAdmin,
      biayaProvisi,
      biayaMaterai,
      danaDiterima,
      adminPercent: Math.round(adminPercent * 1000) / 10,
      schedule,
    };
  }, [currentType, plafon, tenor, selectedRate]);

  const handlePrint = () => {
    window.print();
  };

  const waMessage = calculations.isDaily
    ? `Halo Koperasi Mandara Sedana Kuta, saya ingin konsultasi simulasi pinjaman:\n- Jenis: ${currentType.name}\n- Plafon: ${formatRupiah(plafon)}\n- Tenor: 100 Hari\n- Angsuran: ${formatRupiah(calculations.angsuranPerHari || 0)} / hari`
    : `Halo Koperasi Mandara Sedana Kuta, saya ingin konsultasi simulasi pinjaman:\n- Jenis: ${currentType.name}\n- Plafon: ${formatRupiah(plafon)}\n- Tenor: ${tenor} Bulan\n- Angsuran per bulan: ${formatRupiah(calculations.angsuranPerBulan || 0)}`;

  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden print:border-none print:shadow-none">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-900 text-white relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Kalkulator Simulasi Pinjaman Resmi</h2>
            <p className="text-teal-200 text-xs sm:text-sm">
              Sesuai Buku Saku Digital 2024: Perhitungan suku bunga transparan, biaya administrasi, provisi &amp; estimasi dana bersih
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* LEFT COLUMN: Input Controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* Jenis Pinjaman */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Pilih Jenis Fasilitas Pinjaman
            </label>
            <select
              value={selectedTypeIndex}
              onChange={(e) => handleSelectType(Number(e.target.value))}
              className="w-full p-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
            >
              {LOAN_TYPES.map((type, idx) => (
                <option key={idx} value={idx}>
                  {type.name}
                </option>
              ))}
            </select>
            <div className="mt-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <p className="leading-relaxed text-[11px]">{currentType.note}</p>
            </div>
          </div>

          {/* Plafon Pinjaman */}
          <div>
            <div className="flex justify-between items-center mb-2 gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Plafon Pinjaman Diajukan
              </label>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/60 rounded-lg px-2.5 py-1">
                <span className="text-teal-600 dark:text-teal-400 font-bold text-xs">Rp</span>
                {currentType.plafonOptions ? (
                  <span className="font-mono text-sm font-bold text-teal-600 dark:text-teal-400">
                    {plafon.toLocaleString("id-ID")}
                  </span>
                ) : (
                  <input
                    type="number"
                    value={plafon}
                    onChange={(e) => setPlafon(Number(e.target.value) || 0)}
                    onBlur={() => {
                      const clamped = Math.min(
                        Math.max(plafon, currentType.minPlafon),
                        currentType.maxPlafon
                      );
                      setPlafon(clamped);
                    }}
                    className="w-28 sm:w-36 font-mono text-sm font-bold text-teal-600 dark:text-teal-400 bg-transparent focus:outline-none text-right"
                  />
                )}
              </div>
            </div>

            {currentType.plafonOptions ? (
              <div className="grid grid-cols-2 gap-3 mt-2">
                {currentType.plafonOptions.map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => setPlafon(amt)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                      plafon === amt
                        ? "bg-teal-600 text-white border-teal-600 shadow-md"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500"
                    }`}
                  >
                    {formatRupiah(amt)}
                  </button>
                ))}
              </div>
            ) : (
              <>
                <input
                  type="range"
                  min={currentType.minPlafon}
                  max={currentType.maxPlafon}
                  step={currentType.plafonStep || 500000}
                  value={plafon}
                  onChange={(e) => setPlafon(Number(e.target.value))}
                  className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <span>Min: {formatRupiah(currentType.minPlafon)}</span>
                  <span>Maks: {formatRupiah(currentType.maxPlafon)}</span>
                </div>
              </>
            )}
          </div>

          {/* Suku Bunga Selection (jika tipe pinjaman memiliki rentang bunga seperti 1,2% s/d 1,5%) */}
          {currentType.rateMin !== currentType.rateMax && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Pilihan Suku Bunga Pinjaman
                </label>
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400">
                  {selectedRate}% / bulan (flat)
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1.2, 1.35, 1.5].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setSelectedRate(r)}
                    className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedRate === r
                        ? "bg-teal-600 text-white border-teal-600 shadow"
                        : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {r}% / bln {r === 1.2 ? "(Promo)" : r === 1.5 ? "(Maks)" : "(Standar)"}
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 mt-1">
                Sesuai Buku Saku 2024: Suku bunga riil berkisar 1,2%–1,5%/bulan ditetapkan komite kredit berdasarkan profil risiko &amp; agunan.
              </p>
            </div>
          )}

          {/* Jangka Waktu (Tenor) */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Jangka Waktu (Tenor)
              </label>
              <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                {currentType.isDaily
                  ? "100 Hari (Harian)"
                  : `${tenor} Bulan (${Math.round((tenor / 12) * 10) / 10} Tahun)`}
              </span>
            </div>

            {currentType.isDaily ? (
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200">
                Jangka waktu PINJARO adalah <strong>tetap 100 hari</strong> dengan setoran angsuran harian (tidak bulanan).
              </div>
            ) : currentType.isNoInterest ? (
              <div className="p-3 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200">
                Jangka waktu Pinjaman Modal Koperasi adalah <strong>tetap 50 bulan</strong> tanpa bunga.
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                {(currentType.allowedTenors || [12, 24, 36, 48, 60]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTenor(t)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition-all border ${
                      tenor === t
                        ? "bg-teal-600 text-white border-teal-600 shadow"
                        : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500"
                    }`}
                  >
                    {t >= 12 ? `${t / 12} Thn (${t} Bln)` : `${t} Bln`}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-200 flex gap-2">
            <HelpCircle className="w-4 h-4 shrink-0 text-amber-600 mt-0.5" />
            <span>
              Perhitungan bersifat simulasi resmi sesuai aturan Buku Saku 2024. Persetujuan dan pencairan aktual tetap tunduk pada verifikasi berkas dan keputusan Komite Kredit Koperasi Mandara Sedana Kuta.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: Summary Output Card */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative">
            <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
              <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                {calculations.isDaily ? "Estimasi Angsuran Harian" : "Estimasi Angsuran Bulanan"}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 font-mono mt-1">
                {calculations.isDaily
                  ? formatRupiah(calculations.angsuranPerHari || 0)
                  : formatRupiah(calculations.angsuranPerBulan || 0)}
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {calculations.isDaily
                  ? "per hari selama 100 hari (pembayaran harian)"
                  : `per bulan selama ${tenor} bulan`}
              </span>
            </div>

            <div className="py-4 space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">Pokok Pinjaman:</span>
                <span className="font-bold text-slate-900 dark:text-slate-200 font-mono">
                  {formatRupiah(plafon)}
                </span>
              </div>

              {calculations.isDaily ? (
                <>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Pokok per Hari:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono">
                      {formatRupiah(calculations.pokokPerHari || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Bunga per Hari (0,09%):</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono">
                      {formatRupiah(calculations.bungaPerHari || 0)}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Pokok per Bulan:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono">
                      {formatRupiah(calculations.pokokPerBulan || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">
                      Bunga per Bulan ({currentType.isNoInterest ? "0%" : `${selectedRate}%`}):
                    </span>
                    <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono">
                      {formatRupiah(calculations.bungaPerBulan || 0)}
                    </span>
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <span className="text-slate-600 dark:text-slate-400">
                  Total Bunga ({calculations.isDaily ? "100 Hari" : `${tenor} Bulan`}):
                </span>
                <span className="font-semibold text-slate-800 dark:text-slate-300 font-mono">
                  {formatRupiah(calculations.totalBunga)}
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t border-slate-200 dark:border-slate-700">
                <span className="text-slate-900 dark:text-slate-200 font-bold">Total Pengembalian:</span>
                <span className="font-bold text-teal-700 dark:text-teal-300 font-mono">
                  {formatRupiah(calculations.totalPengembalian)}
                </span>
              </div>

              {/* Rincian Biaya Transparan (PDF Standard) */}
              <div className="pt-3 border-t border-dashed border-slate-200 dark:border-slate-700 text-xs">
                <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Rincian Potongan Awal Saat Pencairan:
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Biaya Provisi (0,5%):</span>
                  <span className="font-mono">{formatRupiah(calculations.biayaProvisi)}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>
                    Biaya Administrasi{" "}
                    {"adminPercent" in calculations && calculations.adminPercent
                      ? `(${calculations.adminPercent}%):`
                      : ":"}
                  </span>
                  <span className="font-mono">{formatRupiah(calculations.biayaAdmin)}</span>
                </div>
                <div className="flex justify-between text-slate-600 dark:text-slate-400">
                  <span>Biaya Materai:</span>
                  <span className="font-mono">{formatRupiah(calculations.biayaMaterai)}</span>
                </div>
                <div className="flex justify-between font-bold text-emerald-600 dark:text-emerald-400 pt-1.5 border-t border-slate-200 dark:border-slate-700">
                  <span>Estimasi Dana Diterima Bersih:</span>
                  <span className="font-mono">{formatRupiah(calculations.danaDiterima)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi &amp; Ajukan via WA</span>
              </a>
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-1.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Hasil</span>
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full mt-4 flex items-center justify-between p-3 rounded-xl bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
          >
            <span>
              {showSchedule ? "Sembunyikan" : "Tampilkan"} Jadwal Angsuran Pinjaman
            </span>
            <ChevronDown
              className={`w-4 h-4 transform transition-transform ${
                showSchedule ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Schedule Table */}
      {showSchedule && (
        <div className="p-6 sm:p-8 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40">
          <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-600" />
            <span>
              {calculations.isDaily
                ? "Tabel Jadwal Angsuran Harian (Kelipatan 10 Hari)"
                : `Tabel Jadwal Angsuran Bulanan (${tenor} Bulan)`}
            </span>
          </h3>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 max-h-80 overflow-y-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold uppercase sticky top-0 border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="px-4 py-3">Periode</th>
                  <th className="px-4 py-3">Angsuran Pokok</th>
                  <th className="px-4 py-3">Bunga</th>
                  <th className="px-4 py-3">Total Angsuran</th>
                  <th className="px-4 py-3">Sisa Pokok</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-700 font-mono">
                {calculations.schedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/50">
                    <td className="px-4 py-2 font-bold font-sans">{row.label}</td>
                    <td className="px-4 py-2">{formatRupiah(row.pokok)}</td>
                    <td className="px-4 py-2">{formatRupiah(row.bunga)}</td>
                    <td className="px-4 py-2 font-bold text-teal-600 dark:text-teal-400">
                      {formatRupiah(row.total)}
                    </td>
                    <td className="px-4 py-2 text-slate-600 dark:text-slate-400">
                      {formatRupiah(row.sisaPokok)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
