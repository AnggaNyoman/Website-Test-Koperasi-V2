"use client";

import { useState } from "react";
import { PINJAMAN_PRODUCTS } from "@/lib/constants";
import { Sparkles, ChevronDown, Calculator, ShieldCheck, Briefcase, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function PinjamanTable() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {PINJAMAN_PRODUCTS.map((item, idx) => {
        const isExpanded = expandedIndex === idx;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 bg-white dark:bg-slate-800/95 shadow-sm hover:shadow-md overflow-hidden ${
              item.highlight
                ? "border-cyan-500/40 ring-1 ring-cyan-500/20"
                : "border-slate-200 dark:border-slate-700/80"
            }`}
          >
            {/* Top Accent Strip for Highlighted Items */}
            {item.highlight && (
              <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-500" />
            )}

            <div className="p-5 sm:p-6">
              {/* Product Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700/60">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200/80 dark:border-cyan-800/60 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shrink-0 shadow-xs">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {item.jenis}
                      </h3>
                      {item.highlight && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-cyan-600 text-white px-2.5 py-0.5 rounded-full shadow-xs">
                          <Sparkles className="w-3 h-3" /> Populer
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-cyan-700 dark:text-cyan-400 uppercase tracking-wide">
                      Kategori: {item.kategori}
                    </span>
                  </div>
                </div>

                {/* Suku Bunga Pill */}
                <div className="flex sm:flex-col items-baseline sm:items-end justify-between gap-1 bg-cyan-50/80 dark:bg-cyan-950/40 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 sm:hidden">
                    Suku Bunga:
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-xl bg-cyan-100 dark:bg-cyan-950/80 text-cyan-800 dark:text-cyan-300 font-extrabold text-sm border border-cyan-200 dark:border-cyan-800/60">
                    {item.bunga}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 text-right">
                    Suku Bunga Adil &amp; Transparan
                  </span>
                </div>
              </div>

              {/* Spacious Specification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 my-4">
                {/* 1. Plafon Pembiayaan */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Plafon Pinjaman
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {item.plafon}
                  </p>
                  {item.plafonDetail && (
                    <p className="text-[11px] text-teal-600 dark:text-teal-400 mt-1 font-medium">
                      {item.plafonDetail}
                    </p>
                  )}
                </div>

                {/* 2. Jangka Waktu / Tenor */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Jangka Waktu (Tenor)
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                    {item.tenor}
                  </p>
                </div>

                {/* 3. Ketentuan Agunan */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                    Jaminan / Agunan
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug">
                    {item.agunan}
                  </p>
                </div>
              </div>

              {/* Expandable Syarat & Biaya Drawer */}
              {isExpanded && (
                <div className="mb-4 p-4 rounded-xl bg-cyan-50/60 dark:bg-cyan-950/30 border border-cyan-200/80 dark:border-cyan-800/60 text-xs sm:text-sm text-slate-700 dark:text-slate-200 space-y-2.5 animate-fadeIn">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-cyan-100 dark:border-cyan-900/40">
                      <span className="font-bold text-cyan-900 dark:text-cyan-300 block mb-1">
                        Persyaratan Pengajuan:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left [text-wrap:pretty]">
                        {item.syarat}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/80 dark:bg-slate-800/80 border border-cyan-100 dark:border-cyan-900/40">
                      <span className="font-bold text-cyan-900 dark:text-cyan-300 block mb-1">
                        Ketentuan Biaya &amp; Administrasi:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left [text-wrap:pretty]">
                        {item.biaya}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Card Footer: Action Buttons */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-700/60 rounded-xl transition-colors"
                >
                  <span>{isExpanded ? "Sembunyikan Syarat & Biaya" : "Lihat Syarat & Ketentuan"}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                </button>

                <Link
                  href="/simulasi#pinjaman"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white rounded-xl transition-all border border-cyan-200 dark:border-cyan-800 shadow-2xs"
                >
                  <Calculator className="w-3.5 h-3.5" />
                  <span>Hitung Angsuran</span>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
