"use client";

import { useState, useEffect } from "react";
import LoanSimulator from "@/components/simulasi/LoanSimulator";
import SavingsSimulator from "@/components/simulasi/SavingsSimulator";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import { HandCoins, PiggyBank, HelpCircle, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SimulasiPage() {
  const [activeTab, setActiveTab] = useState<"pinjaman" | "simpanan">("pinjaman");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#simpanan") {
        setActiveTab("simpanan");
      } else if (hash === "#pinjaman") {
        setActiveTab("pinjaman");
      }
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="cyan">
            Perencanaan Finansial Mandara
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Kalkulator &amp; <span className="text-gradient">Simulasi Keuangan</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Rencanakan keputusan finansial Anda secara bijak dan transparan dengan kalkulator pinjaman serta simulasi imbal hasil simpanan kami.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Simulasi" }]} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Toggle Switch */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner">
            <button
              onClick={() => setActiveTab("pinjaman")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "pinjaman"
                  ? "bg-teal-600 text-white shadow-md scale-102"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <HandCoins className="w-4 h-4" />
              <span>Simulasi Pinjaman</span>
            </button>
            <button
              onClick={() => setActiveTab("simpanan")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === "simpanan"
                  ? "bg-teal-600 text-white shadow-md scale-102"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <PiggyBank className="w-4 h-4" />
              <span>Simulasi Simpanan</span>
            </button>
          </div>
        </div>

        {/* Selected Simulator */}
        <div className="mb-16">
          {activeTab === "pinjaman" ? <LoanSimulator /> : <SavingsSimulator />}
        </div>

        {/* Tips & Financial Education Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-950 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Tips Mengajukan Pinjaman Bijak
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                  <span>Pastikan total cicilan bulanan Anda tidak melebihi 30-35% dari total penghasilan bersih bulanan.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                  <span>Sesuaikan jangka waktu (tenor) dengan perputaran arus kas usaha Anda agar angsuran tidak membebani operasional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" />
                  <span>Gunakan pembiayaan terutama untuk aset produktif yang mampu menghasilkan pendapatan berkelanjutan.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Keuntungan Simpanan di Koperasi
                </h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>Bunga simpanan berjangka hingga 6,2% p.a. (SIJAKA) dan simpanan berencana s/d 8,47% p.a. (SIRENA PLUS), lebih kompetitif dibanding rata-rata tabungan bank umum.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>Simpanan dikelola secara amanah dengan tata kelola profesional dan transparan untuk kemaslahatan bersama seluruh anggota.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>Pantau dan kelola saldo simpanan secara fleksibel 24/7 melalui aplikasi Madata Mobile.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Bright & Fresh */}
        <div className="text-center rounded-2xl p-8 bg-gradient-to-br from-teal-50 via-cyan-50/40 to-white dark:from-slate-800 dark:to-slate-900 border border-teal-200/80 dark:border-teal-800/50 shadow-sm">
          <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Sudah Menemukan Skema yang Tepat?</h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Daftarkan diri Anda sebagai anggota resmi Koperasi Mandara Sedana Kuta dan wujudkan rencana keuangan Anda bersama kami.
          </p>
          <Link
            href="/daftar-anggota"
            className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-sm transition-all text-sm active:scale-95"
          >
            <span>Daftar Jadi Anggota Sekarang</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
</div>
  );
}
