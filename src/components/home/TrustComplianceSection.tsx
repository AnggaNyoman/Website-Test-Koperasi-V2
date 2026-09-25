"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  Award,
  Users2,
  FileCheck2,
  Building2,
  Lock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import SectionBadge from "@/components/ui/SectionBadge";

const COMPLIANCE_PILLARS = [
  {
    icon: Scale,
    title: "Badan Hukum Resmi Kemenkop UKM",
    registration: "No. 004723/BH/M KUKM.2/VII/2017",
    description:
      "Beroperasi penuh secara sah di bawah izin dan pembinaan Kementerian Koperasi dan UKM Republik Indonesia dengan tata kelola berbasis regulasi nasional.",
    color: "from-teal-600 to-teal-800",
  },
  {
    icon: ShieldCheck,
    title: "Perlindungan Dana Daperma",
    registration: "Jaminan Proteksi Finansial",
    description:
      "Simpanan dan fasilitas pinjaman anggota terlindungi program Daperma (Dana Perlindungan Bersama) hingga santunan maksimal Rp 40.000.000.",
    color: "from-cyan-600 to-teal-700",
  },
  {
    icon: Award,
    title: "BPJS Ketenagakerjaan BPU",
    registration: "Program JKK, JK & JHT Anggota",
    description:
      "Memberikan perlindungan jaminan kecelakaan kerja dan hari tua bagi anggota klasifikasi Gold & Platinum untuk kenyamanan berusaha dan masa depan keluarga.",
    color: "from-emerald-600 to-teal-700",
  },
  {
    icon: FileCheck2,
    title: "Audit SPI & Kepatuhan RAT 100%",
    registration: "Transparansi & Akuntabilitas",
    description:
      "Laporan pertanggungjawaban keuangan dan tata kelola organisasi diaudit berkala oleh Pengawas serta dilaporkan transparan dalam Rapat Anggota Tahunan (RAT).",
    color: "from-slate-700 to-slate-900",
  },
];

const TRUST_STATS = [
  { value: "3.500+", label: "Anggota Aktif Terdaftar", sub: "Masyarakat & Pelaku UMKM" },
  { value: "100%", label: "Kepatuhan RAT Tahunan", sub: "Pertanggungjawaban Sah" },
  { value: "12", label: "Produk Simpan & Pinjam", sub: "Bunga Kompetitif & Jelas" },
  { value: "24/7", label: "Akses Madata Mobile", sub: "PPOB & Transfer Realtime" },
];

export default function TrustComplianceSection() {
  return (
    <section className="relative py-14 sm:py-18 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute top-0 right-1/3 w-80 h-80 bg-teal-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-200/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionBadge variant="cyan">Tata Kelola &amp; Kepatuhan Regulasi</SectionBadge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-extrabold tracking-tight leading-snug mt-3 [text-wrap:balance]">
            <span className="block text-slate-900 dark:text-white">
              Kepercayaan Anda Didukung
            </span>
            <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-600 dark:from-teal-300 dark:via-cyan-400 dark:to-teal-300 bg-clip-text text-transparent">
              Legalitas Resmi &amp; Tata Kelola Sehat
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base mt-3 leading-relaxed [text-wrap:balance] max-w-2xl mx-auto">
            KSP Mandara Sedana Kuta menjunjung tinggi prinsip kehati-hatian finansial, akuntabilitas audit, serta jaminan perlindungan dana untuk seluruh anggota.
          </p>
        </div>

        {/* 4 Compliance Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {COMPLIANCE_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.3 }}
                className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/40 px-2 py-0.5 rounded-md mb-2">
                    {pillar.registration}
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-2 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Verified Performance Metrics Strip - Clean & Minimalist */}
        <div className="rounded-2xl bg-white dark:bg-slate-800/90 p-6 sm:p-8 border border-slate-200/90 dark:border-slate-700 shadow-sm">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((stat, i) => (
              <div key={i} className="border-r border-slate-200 dark:border-slate-700 last:border-r-0 px-2">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-teal-700 dark:text-teal-400 font-mono mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Sistem keuangan terintegrasi dengan pengawasan berjenjang dan transparansi laporan keuangan.
            </span>
            <Link
              href="/tentang-kami"
              className="inline-flex items-center gap-1 font-bold text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors shrink-0"
            >
              Pelajari Legalitas &amp; Pengurus
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
