"use client";

import { useState, useMemo } from "react";
import { formatRupiah } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { PiggyBank, TrendingUp, Sparkles, MessageCircle, HelpCircle } from "lucide-react";

const SAVINGS_OPTIONS = [
  { id: "sirela", name: "SIRELA (Simpanan Sukarela)", rate: 2.0, isDeposit: false, desc: "Bebas setor & tarik kapan saja (hari kerja & Madata Mobile)", withdrawNote: "Bebas setor dan tarik sewaktu-waktu pada hari dan jam kerja operasional kantor atau via Madata Mobile." },
  { id: "simpel", name: "SIMPEL (Simpanan Pelajar)", rate: 2.0, isDeposit: false, desc: "Khusus pelajar via PKS, penarikan sesuai PKS/lulus", withdrawNote: "Penarikan tidak bisa bebas sewaktu-waktu; harus sesuai ketentuan PKS sekolah atau setelah siswa lulus." },
  { id: "sijaka-3", name: "SIJAKA 3 Bulan", rate: 3.8, isDeposit: true, tenor: 3, desc: "Bunga 3,8% p.a., pencairan saat jatuh tempo 3 bulan", withdrawNote: "Pencairan pokok dilakukan saat jatuh tempo 3 bulan dengan menyerahkan bilyet asli." },
  { id: "sijaka-6", name: "SIJAKA 6 Bulan", rate: 5.0, isDeposit: true, tenor: 6, desc: "Bunga 5,0% p.a., pencairan saat jatuh tempo 6 bulan", withdrawNote: "Pencairan pokok dilakukan saat jatuh tempo 6 bulan dengan menyerahkan bilyet asli." },
  { id: "sijaka-12", name: "SIJAKA 12 Bulan", rate: 6.2, isDeposit: true, tenor: 12, desc: "Bunga 6,2% p.a., pencairan saat jatuh tempo 12 bulan", withdrawNote: "Pencairan pokok dilakukan saat jatuh tempo 12 bulan dengan menyerahkan bilyet asli." },
  {
    id: "sirena", name: "SIRENA (Simpanan Berencana)", rate: 4.37, isDeposit: false,
    desc: "Setoran rutin bulanan, pencairan saat jatuh tempo (1–10 tahun)",
    withdrawNote: "Pencairan dana dilakukan saat jatuh tempo sesuai tenor pilihan (1 hingga 10 tahun). Pencairan sebelum tempo kena penalti bunga 3 bulan terakhir.",
    rateTable: [
      { tenor: 12, rate: 4.37 }, { tenor: 24, rate: 4.37 }, { tenor: 36, rate: 4.47 },
      { tenor: 48, rate: 4.53 }, { tenor: 60, rate: 4.58 }, { tenor: 72, rate: 4.63 },
      { tenor: 84, rate: 4.67 }, { tenor: 96, rate: 4.71 }, { tenor: 108, rate: 4.75 },
      { tenor: 120, rate: 4.79 },
    ],
  },
  {
    id: "sirena-plus", name: "SIRENA PLUS", rate: 7.8, isDeposit: true,
    desc: "Penempatan sekali di awal (min. Rp5jt), pencairan saat jatuh tempo (5–10 th)",
    withdrawNote: "Pencairan dana dilakukan saat jatuh tempo sesuai tenor pilihan (5 hingga 10 tahun).",
    rateTable: [
      { tenor: 60, rate: 7.80 }, { tenor: 72, rate: 8.00 }, { tenor: 84, rate: 8.20 },
      { tenor: 96, rate: 8.30 }, { tenor: 108, rate: 8.40 }, { tenor: 120, rate: 8.47 },
    ],
  },
  { id: "sikelung", name: "SIKELUNG (Ketekan Galungan)", rate: 0, isDeposit: false, fixedDays: 200, desc: "Setoran harian 200 hari, dicairkan saat jatuh tempo 200 hari", withdrawNote: "Hanya dapat ditarik setelah jatuh tempo 200 hari. Saldo otomatis dipindahkan ke rekening SIRELA anggota beserta bingkisan Galungan." },
];

export default function SavingsSimulator() {
  const [selectedType, setSelectedType] = useState(SAVINGS_OPTIONS[0].id);
  const [initialDeposit, setInitialDeposit] = useState<number>(1000000);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(200000);
  const [durationMonths, setDurationMonths] = useState<number>(12);

  const currentOption = SAVINGS_OPTIONS.find((s) => s.id === selectedType) || SAVINGS_OPTIONS[0];
  const tenorOptions = currentOption.rateTable
    ? currentOption.rateTable.map((r) => r.tenor)
    : currentOption.isDeposit
    ? [currentOption.tenor || 12]
    : [6, 12, 24, 36];

  const effectiveRate = currentOption.rateTable
    ? currentOption.rateTable.find((r) => r.tenor === durationMonths)?.rate ?? currentOption.rateTable[0].rate
    : currentOption.rate;

  const handleSelectType = (id: string) => {
    setSelectedType(id);
    const opt = SAVINGS_OPTIONS.find((s) => s.id === id);
    if (!opt) return;
    if (opt.fixedDays) {
      setDurationMonths(Math.round(opt.fixedDays / 30));
    } else if (opt.rateTable) {
      setDurationMonths(opt.rateTable[0].tenor);
    } else if (opt.isDeposit) {
      setDurationMonths(opt.tenor || 12);
    } else {
      setDurationMonths(12);
    }
    const minAllowed = opt.fixedDays
      ? 5000
      : opt.id === "sirena-plus" || opt.id.startsWith("sijaka")
      ? 5000000
      : 10000;
    const maxAllowed = opt.fixedDays ? 200000 : 100000000;
    setInitialDeposit((prev) => Math.min(Math.max(prev, minAllowed), maxAllowed));
    if (opt.id === "sirena") {
      setMonthlyDeposit((prev) => Math.max(prev, 25000));
    }
  };

  // Calculation
  const result = useMemo(() => {
    const rateAnnual = effectiveRate / 100;
    const rateMonthly = rateAnnual / 12;

    if (currentOption.fixedDays) {
      // SIKELUNG: daily deposit, no interest, fixed 200 hari
      const totalHari = currentOption.fixedDays;
      const totalSetoran = initialDeposit * totalHari;
      return {
        totalSetoran,
        totalBunga: 0,
        totalSaldo: totalSetoran,
        duration: Math.round(totalHari / 30),
        isDaily: true,
        totalHari,
      };
    }

    if (currentOption.id === "sirena-plus" || currentOption.id === "sirena") {
      // SIRENA & SIRENA PLUS: Rumus Bunga Majemuk Mn = M0 * (1 + b)^n
      const n = durationMonths;
      const b = (effectiveRate / 100) / 12; // bunga majemuk per bulan

      if (currentOption.isDeposit) {
        // SIRENA PLUS: Penempatan sekali di awal
        const M0 = initialDeposit;
        const Mn = Math.round(M0 * Math.pow(1 + b, n));
        const grossInterest = Mn - M0;
        const tax = grossInterest > 240000 ? Math.round(grossInterest * 0.1) : 0;
        const netInterest = grossInterest - tax;
        const finalBalance = M0 + netInterest;

        return {
          totalSetoran: M0,
          totalBunga: grossInterest,
          pajak: tax,
          bungaBersih: netInterest,
          totalSaldo: finalBalance,
          duration: n,
        };
      } else {
        // SIRENA: Setoran rutin bulanan dengan bunga majemuk akumulatif
        let balance = initialDeposit;
        let totalInvested = initialDeposit;

        for (let m = 1; m <= n; m++) {
          const interestMonth = balance * b;
          balance += interestMonth + monthlyDeposit;
          totalInvested += monthlyDeposit;
        }

        const grossInterest = Math.round(balance - totalInvested);
        const tax = grossInterest > 240000 ? Math.round(grossInterest * 0.1) : 0;
        const netInterest = grossInterest - tax;

        return {
          totalSetoran: totalInvested,
          totalBunga: grossInterest,
          pajak: tax,
          bungaBersih: netInterest,
          totalSaldo: Math.round(totalInvested + netInterest),
          duration: n,
        };
      }
    }

    if (currentOption.isDeposit) {
      // SIJAKA: (Saldo x %Bunga x Hari) / 365
      const months = durationMonths;
      const days = months * 30.416; // rata-rata hari
      const grossInterest = Math.round((initialDeposit * (effectiveRate / 100) * days) / 365);
      const tax = grossInterest > 240000 ? Math.round(grossInterest * 0.1) : 0;
      const netInterest = grossInterest - tax;
      const totalSaldo = initialDeposit + netInterest;

      return {
        totalSetoran: initialDeposit,
        totalBunga: grossInterest,
        pajak: tax,
        bungaBersih: netInterest,
        totalSaldo,
        duration: months,
      };
    } else {
      // SIRELA & SIMPEL: bunga bulanan rata-rata, pajak 10% jika bunga > 240.000
      let balance = initialDeposit;
      let totalInvested = initialDeposit;
      let totalGrossInterest = 0;

      for (let m = 1; m <= durationMonths; m++) {
        const monthlyInterest = (balance * (effectiveRate / 100) * 30) / 365;
        totalGrossInterest += monthlyInterest;
        balance += monthlyInterest + monthlyDeposit;
        totalInvested += monthlyDeposit;
      }

      const grossInterest = Math.round(totalGrossInterest);
      const tax = grossInterest > 240000 ? Math.round(grossInterest * 0.1) : 0;
      const netInterest = grossInterest - tax;

      return {
        totalSetoran: totalInvested,
        totalBunga: grossInterest,
        pajak: tax,
        bungaBersih: netInterest,
        totalSaldo: Math.round(totalInvested + netInterest),
        duration: durationMonths,
      };
    }
  }, [currentOption, initialDeposit, monthlyDeposit, durationMonths, effectiveRate]);

  const waMessage = `Halo Koperasi Mandara Sedana Kuta, saya tertarik dengan produk ${currentOption.name}:\n- Setoran Awal: ${formatRupiah(initialDeposit)}\n- Estimasi Saldo Akhir: ${formatRupiah(result.totalSaldo)}`;
  const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
      <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-800 to-cyan-900 text-white relative">
<div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300">
            <PiggyBank className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Kalkulator Simulasi Simpanan</h2>
            <p className="text-cyan-200 text-xs sm:text-sm">
              Hitung potensi imbal hasil tabungan sukarela dan deposito berjangka Anda
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Pilih Jenis Tabungan */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Pilihan Simpanan
            </label>
            <select
              value={selectedType}
              onChange={(e) => handleSelectType(e.target.value)}
              className="w-full p-3 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {SAVINGS_OPTIONS.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.name}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-teal-600 dark:text-teal-400 font-medium mt-1.5">
              {currentOption.desc}
            </p>
          </div>

          {/* Setoran Awal / Harian */}
          <div>
            <div className="flex justify-between items-center mb-2 gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                {currentOption.fixedDays ? "Setoran Harian" : currentOption.isDeposit ? "Nominal Penempatan" : "Setoran Awal"}
              </label>
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/60 rounded-lg px-2 py-1">
                <span className="text-teal-600 dark:text-teal-400 font-bold text-xs sm:text-sm">Rp</span>
                <input
                  type="number"
                  value={initialDeposit}
                  onChange={(e) => setInitialDeposit(Number(e.target.value) || 0)}
                  onBlur={(e) => {
                    const min = currentOption.fixedDays ? 5000 : currentOption.id === "sirena-plus" || currentOption.id.startsWith("sijaka") ? 5000000 : 10000;
                    const max = currentOption.fixedDays ? 200000 : 100000000;
                    const val = Number(e.target.value) || 0;
                    setInitialDeposit(Math.min(Math.max(val, min), max));
                  }}
                  className="w-24 sm:w-32 font-mono text-sm sm:text-base font-bold text-teal-600 dark:text-teal-400 bg-transparent focus:outline-none text-right"
                />
              </div>
            </div>
            <input
              type="range"
              min={
                currentOption.fixedDays
                  ? 5000
                  : currentOption.id === "sirena-plus"
                  ? 5000000
                  : currentOption.id.startsWith("sijaka")
                  ? 5000000
                  : 10000
              }
              max={currentOption.fixedDays ? 200000 : 100000000}
              step={currentOption.fixedDays ? 5000 : currentOption.isDeposit ? 500000 : 10000}
              value={Math.min(
                Math.max(
                  initialDeposit,
                  currentOption.fixedDays ? 5000 : currentOption.id === "sirena-plus" || currentOption.id.startsWith("sijaka") ? 5000000 : 10000
                ),
                currentOption.fixedDays ? 200000 : 100000000
              )}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="w-full accent-teal-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              <span>
                {currentOption.fixedDays
                  ? "Rp 5 Rb"
                  : currentOption.id === "sirena-plus" || currentOption.id.startsWith("sijaka")
                  ? "Rp 5 Jt (Min.)"
                  : "Rp 10 Rb"}
              </span>
              <span>{currentOption.fixedDays ? "Rp 200 Rb" : "Rp 100 Jt"}</span>
            </div>
          </div>

          {/* Setoran Rutin Bulanan (hanya untuk sukarela tanpa tabel bunga) */}
          {!currentOption.isDeposit && !currentOption.fixedDays && (
            <div>
              <div className="flex justify-between items-center mb-2 gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Setoran Rutin Bulanan
                </label>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700/60 rounded-lg px-2 py-1">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold text-xs sm:text-sm">Rp</span>
                  <input
                    type="number"
                    value={monthlyDeposit}
                    onChange={(e) => setMonthlyDeposit(Number(e.target.value) || 0)}
                    onBlur={(e) => {
                      const min = currentOption.id === "sirena" ? 25000 : 0;
                      const val = Number(e.target.value) || 0;
                      setMonthlyDeposit(Math.min(Math.max(val, min), 5000000));
                    }}
                    className="w-24 sm:w-32 font-mono text-sm sm:text-base font-bold text-cyan-600 dark:text-cyan-400 bg-transparent focus:outline-none text-right"
                  />
                </div>
              </div>
              <input
                type="range"
                min={currentOption.id === "sirena" ? 25000 : 0}
                max={5000000}
                step={currentOption.id === "sirena" ? 25000 : 50000}
                value={Math.min(Math.max(monthlyDeposit, currentOption.id === "sirena" ? 25000 : 0), 5000000)}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                className="w-full accent-cyan-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                <span>{currentOption.id === "sirena" ? "Rp 25 Rb (Min.)" : "Rp 0"}</span>
                <span>Rp 5 Jt / bln</span>
              </div>
            </div>
          )}

          {/* Jangka Waktu (tenor dari tabel bunga, atau pilihan bebas untuk simpanan sukarela) */}
          {!currentOption.fixedDays && (currentOption.rateTable || !currentOption.isDeposit) && (
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Jangka Waktu {currentOption.rateTable && `(Bunga ${effectiveRate}%/thn)`}
                </label>
                <span className="font-bold text-slate-900 dark:text-slate-200 text-sm">
                  {durationMonths} Bulan ({Math.round((durationMonths / 12) * 10) / 10} Tahun)
                </span>
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
                {tenorOptions.map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setDurationMonths(m)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all ${
                      durationMonths === m
                        ? "bg-teal-600 text-white border-teal-600 shadow"
                        : "bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-teal-500"
                    }`}
                  >
                    {m >= 12 ? `${m / 12} Thn` : `${m} Bln`}
                  </button>
                ))}
              </div>
            </div>
          )}

          {currentOption.withdrawNote && (
            <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 text-xs text-amber-900 dark:text-amber-200">
              <span className="font-bold block mb-0.5">Ketentuan Pencairan / Penarikan:</span>
              <span>{currentOption.withdrawNote}</span>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800 text-[11px] text-teal-800 dark:text-teal-200 flex gap-2">
            <HelpCircle className="w-4 h-4 shrink-0 text-teal-600 mt-0.5" />
            <span>
              Simpanan di Koperasi Mandara Sedana Kuta berbadan hukum resmi Kemenkop UKM serta terlindungi program proteksi Daperma.
            </span>
          </div>
        </div>

        {/* Output Results */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 relative h-full flex flex-col justify-between">
            <div>
              <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-700">
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                  Estimasi Saldo Akhir
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-400 font-mono mt-1">
                  {formatRupiah(result.totalSaldo)}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  setelah {result.isDaily ? `${result.totalHari} hari` : `${result.duration} bulan`}
                </span>
              </div>

              <div className="py-4 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Total Dana Pokok Terkumpul:</span>
                  <span className="font-bold text-slate-900 dark:text-slate-200 font-mono">
                    {formatRupiah(result.totalSetoran)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Suku Bunga Efektif:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {currentOption.fixedDays ? "Tanpa bunga" : `${effectiveRate}% per tahun`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Estimasi Bunga (Bruto):</span>
                  <span className="font-bold text-teal-600 dark:text-teal-400 font-mono">
                    + {formatRupiah(result.totalBunga)}
                  </span>
                </div>
                {"pajak" in result && (result.pajak || 0) > 0 && (
                  <>
                    <div className="flex justify-between text-xs text-amber-600 dark:text-amber-400">
                      <span>Pajak Bunga PPh Final (10%):</span>
                      <span className="font-mono">- {formatRupiah(result.pajak || 0)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      <span>Bunga Bersih Diterima:</span>
                      <span className="font-mono">+ {formatRupiah(result.bungaBersih || 0)}</span>
                    </div>
                  </>
                )}
                <div className="flex justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                  <span className="text-slate-900 dark:text-slate-200 font-bold">Total Nilai Akhir:</span>
                  <span className="font-extrabold text-teal-700 dark:text-teal-300 font-mono text-base">
                    {formatRupiah(result.totalSaldo)}
                  </span>
                </div>
              </div>

              {/* Visual ratio bar */}
              <div className="pt-2">
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                  <div
                    className="bg-teal-600 h-full"
                    style={{
                      width: `${Math.min(100, (result.totalSetoran / result.totalSaldo) * 100)}%`,
                    }}
                    title="Dana Pokok"
                  />
                  <div
                    className="bg-amber-400 h-full"
                    style={{
                      width: `${Math.max(0, (result.totalBunga / result.totalSaldo) * 100)}%`,
                    }}
                    title="Bunga"
                  />
                </div>
                <div className="flex justify-between text-[11px] text-slate-600 dark:text-slate-400 mt-1.5 font-medium">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600" /> Pokok (
                    {Math.round((result.totalSetoran / result.totalSaldo) * 100)}%)
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Bunga (
                    {Math.round((result.totalBunga / result.totalSaldo) * 100)}%)
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Buka Simpanan via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
