"use client";

import { useState } from "react";
import { SIMPANAN_PRODUCTS } from "@/lib/constants";
import { Sparkles, ChevronDown, Calculator, CheckCircle2, Coins, PiggyBank, Clock, Wallet } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, typeof PiggyBank> = {
  "01.01.xxxxx": Wallet,
  "01.02.xxxxx": Wallet,
  "01.03.xxxxx": Coins,
  "01.04.xxxxx": Clock,
  "01.05.xxxxx": PiggyBank,
  "01.06.xxxxx": PiggyBank,
  "01.07.xxxxx": PiggyBank,
  "01.09.xxxxx": Coins,
};

export default function SimpananTable() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {SIMPANAN_PRODUCTS.map((item, idx) => {
        const isExpanded = expandedIndex === idx;
        const IconComponent = iconMap[item.kode] || PiggyBank;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 bg-white dark:bg-slate-800/95 shadow-sm hover:shadow-md overflow-hidden ${
              item.highlight
                ? "border-teal-500/40 ring-1 ring-teal-500/20"
                : "border-slate-200 dark:border-slate-700/80"
            }`}
          >
            {/* Top Accent Strip for Highlighted Items */}
            {item.highlight && (
              <div className="h-1 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-500" />
            )}

            <div className="p-5 sm:p-6">
              {/* Product Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/60 flex items-center justify-center text-teal-700 dark:text-teal-300 shrink-0 shadow-xs">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.jenis}
                      </h3>
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-teal-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                          <Sparkles className="w-3 h-3" /> Populer
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                      Kode Produk: {item.kode}
                    </span>
                  </div>
                </div>

                {/* Suku Bunga Pill */}
                <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-1 bg-emerald-50/80 dark:bg-emerald-950/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 sm:hidden">
                    Imbal Hasil / Bunga:
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-extrabold text-sm border border-emerald-200 dark:border-emerald-800/60">
                    {item.bunga}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 text-right max-w-[220px]">
                    {item.bungaDetail}
                  </span>
                </div>
              </div>

              {/* Spacious Specification Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 my-4">
                {/* 1. Ketentuan Setoran */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Ketentuan Setoran
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {item.setoran}
                  </p>
                </div>

                {/* 2. Biaya Administrasi & Saldo */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Biaya &amp; Saldo Minimum
                  </span>
                  <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    <span>Adm: {item.adm || "Gratis (Bebas Biaya)"}</span>
                    {item.saldoMin && (
                      <span className="block text-xs font-normal text-slate-500 dark:text-slate-400 mt-0.5">
                        Min. Saldo: {item.saldoMin}
                      </span>
                    )}
                  </div>
                </div>

                {/* 3. Ketentuan Penarikan */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Ketentuan Penarikan
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    {item.penarikan || "Dapat ditarik sewaktu-waktu sesuai ketentuan."}
                  </p>
                </div>
              </div>

              {/* Expandable Info / Terms Section */}
              {isExpanded && (
                <div className="mb-4 p-4 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2 animate-fadeIn">
                  <div>
                    <span className="font-bold text-teal-900 dark:text-teal-300 block mb-1">
                      Deskripsi &amp; Ketentuan:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left [text-wrap:pretty]">
                      {item.keterangan}
                    </p>
                  </div>
                  {item.fitur && (
                    <div className="pt-2 border-t border-teal-200/50 dark:border-teal-800/40 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-teal-800 dark:text-teal-300">
                        {item.fitur}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Card Footer: Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors"
                >
                  <span>{isExpanded ? "Sembunyikan Rincian" : "Lihat Rincian Lengkap"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                <Link
                  href="/simulasi#simpanan"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white rounded-xl transition-all border border-teal-200 dark:border-teal-800 shadow-2xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Hitung Simulasi</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
