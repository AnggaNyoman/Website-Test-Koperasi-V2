"use client";

import { useState } from "react";
import Link from "next/link";
import SimpananTable from "@/components/products/SimpananTable";
import PinjamanTable from "@/components/products/PinjamanTable";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import MembershipTiers from "@/components/products/MembershipTiers";
import {
  PiggyBank,
  HandCoins,
  FileCheck2,
  AlertCircle,
  Calculator,
  UserPlus,
  Crown,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProdukPage() {
  const [activeTab, setActiveTab] = useState<"simpanan" | "pinjaman" | "keanggotaan">("simpanan");

  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="teal">
            Buku Saku Digital 2024
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Katalog Produk &amp; <span className="text-gradient">Layanan Anggota</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Spesifikasi resmi produk simpanan, fasilitas pembiayaan pinjaman, serta hak dan manfaat keanggotaan Koperasi Mandara Sedana Kuta.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Produk & Layanan" }]} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab("simpanan")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === "simpanan"
                  ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <PiggyBank className="w-4 h-4" />
              <span>Simpanan (6 Produk)</span>
            </button>
            <button
              onClick={() => setActiveTab("pinjaman")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === "pinjaman"
                  ? "bg-white dark:bg-slate-700 text-cyan-700 dark:text-cyan-300 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <HandCoins className="w-4 h-4" />
              <span>Pinjaman (12 Jenis)</span>
            </button>
            <button
              onClick={() => setActiveTab("keanggotaan")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all whitespace-nowrap ${
                activeTab === "keanggotaan"
                  ? "bg-white dark:bg-slate-700 text-amber-700 dark:text-amber-300 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>Klasifikasi Anggota</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mb-14">
          {activeTab === "simpanan" && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Tabel Spesifikasi Produk Simpanan Resmi
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Berdasarkan Buku Saku Digital 2024: Pola konvensional, imbal hasil kompetitif, aman dan terdaftar.
                  </p>
                </div>
                <Link
                  href="/simulasi#simpanan"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-3.5 py-2 rounded-xl border border-teal-200 dark:border-teal-800 hover:bg-teal-100 dark:hover:bg-teal-900 transition-colors w-fit"
                >
                  <Calculator className="w-3.5 h-3.5" /> Hitung Simulasi Simpanan
                </Link>
              </div>
              <SimpananTable />
            </div>
          )}

          {activeTab === "pinjaman" && (
            <div>
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Tabel Fasilitas Pembiayaan Pinjaman
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Mulai dari pinjaman modal koperasi 0%, harian mikro 0,09%/hari, hingga pinjaman usaha dan properti.
                  </p>
                </div>
                <Link
                  href="/simulasi#pinjaman"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/60 px-3.5 py-2 rounded-xl border border-cyan-200 dark:border-cyan-800 hover:bg-cyan-100 dark:hover:bg-cyan-900 transition-colors w-fit"
                >
                  <Calculator className="w-3.5 h-3.5" /> Hitung Angsuran Kredit
                </Link>
              </div>
              <PinjamanTable />
            </div>
          )}

          {activeTab === "keanggotaan" && (
            <div>
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                  5 Tingkatan Klasifikasi Anggota Resmi
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  Setiap tier anggota dilengkapi fisik kartu resmi, jaminan perlindungan santunan duka hingga Rp40 juta, kepesertaan BPJS Ketenagakerjaan BPU, serta plafon pinjaman khusus.
                </p>
              </div>
              <MembershipTiers />
            </div>
          )}
        </div>

        {/* Ringkasan Biaya & Regulasi Card (Minimalist 2-column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Ketentuan Umum Keanggotaan
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <span>WNI dengan e-KTP dan KK yang sah.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <span>Simpanan Pokok Rp10.000 (sekali di awal) &amp; Simpanan Wajib Rp10.000/bulan.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                <span>Wajib memiliki rekening SIRELA aktif untuk transaksi simpanan dan pinjaman.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Transparansi Biaya Pinjaman
              </h3>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700/60">
                <span className="text-slate-500">Biaya Administrasi</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">1% – 2% (sesuai tenor pinjaman)</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100 dark:border-slate-700/60">
                <span className="text-slate-500">Provisi</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">0,5% dari plafon pinjaman</span>
              </div>
              <div className="flex justify-between items-center py-1.5">
                <span className="text-slate-500">Pelunasan Dipercepat</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">Diperkenankan sesuai ketentuan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-5 border border-slate-800 shadow-lg">
          <div>
            <h3 className="text-lg font-bold mb-1">Daftar Menjadi Anggota Sekarang</h3>
            <p className="text-slate-300 text-xs sm:text-sm">
              Nikmati fasilitas bunga simpanan tinggi, pinjaman berbunga ringan, serta perlindungan BPJS Ketenagakerjaan.
            </p>
          </div>
          <Link
            href="/daftar-anggota"
            className="shrink-0 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-5 py-2.5 rounded-xl shadow transition-all text-xs sm:text-sm"
          >
            <UserPlus className="w-4 h-4" />
            <span>Formulir Pendaftaran Online</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
