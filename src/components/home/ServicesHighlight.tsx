"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Wallet,
  PiggyBank,
  Coins,
  Clock,
  Briefcase,
  CreditCard,
  GraduationCap,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Building2,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

// ============================================
// SERVICES HIGHLIGHT — HOME PAGE
// ============================================

const iconMap: Record<string, React.ElementType> = {
  Wallet,
  PiggyBank,
  Coins,
  Clock,
  Briefcase,
  CreditCard,
  GraduationCap,
  Zap,
  HeartHandshake,
  Building2,
};

export default function ServicesHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const simpanan = SERVICES.filter((s) => s.category === "simpanan");
  const pinjaman = SERVICES.filter((s) => s.category === "pinjaman").slice(0, 4);

  return (
    <section
      ref={ref}
      className="section-py bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-slate-200 dark:bg-slate-800" />
      <div className="absolute inset-0 pattern-dots opacity-25 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <span className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
            Layanan Finansial Unggulan
          </span>
          <h2 className="section-title">
            Solusi Keuangan{" "}
            <span className="text-gradient">Lengkap &amp; Terpercaya</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Dari simpanan berbunga kompetitif hingga pinjaman modal usaha anggota, semua kebutuhan finansial Anda tersedia dengan proses transparan dan aman.
          </p>
        </motion.div>

        {/* Simpanan Section */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600/10 dark:bg-teal-500/20 flex items-center justify-center">
                <PiggyBank size={20} className="text-teal-600 dark:text-teal-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-teal-800 dark:text-teal-200">
                  Produk Simpanan Pilihan
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Tabungan aman berbadan hukum dengan bunga kompetitif
                </p>
              </div>
            </div>
            <Link
              href="/layanan#simpanan"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 hover:text-teal-900 transition-colors"
            >
              <span>Semua Simpanan</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {simpanan.map((service, i) => {
              const Icon = iconMap[service.icon] || Wallet;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                >
                  {/* Modern Icon & Rate Header */}
                  <div className="p-5 pb-0 flex items-start justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform shrink-0`}
                    >
                      <Icon size={22} />
                    </div>
                    {service.rate && (
                      <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-cyan-300 border border-teal-200/80 dark:border-teal-800">
                        {service.rate}
                      </span>
                    )}
                  </div>

                  {/* Body content */}
                  <div className="p-5 pt-4 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <Link
                        href="/layanan#simpanan"
                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 dark:text-teal-400 hover:gap-1.5 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Pelajari Detail
                        <ArrowUpRight size={13} />
                      </Link>
                      <Link
                        href="/simulasi#simpanan"
                        className="text-[11px] font-semibold text-slate-500 hover:text-teal-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Simulasi
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Pinjaman Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="flex items-center justify-between mb-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Briefcase size={20} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Fasilitas Pinjaman Usaha &amp; Multiguna
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Solusi pembiayaan fleksibel untuk modal kerja anggota
                </p>
              </div>
            </div>
            <Link
              href="/layanan#pinjaman"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 hover:text-teal-900 transition-colors"
            >
              <span>Semua Pinjaman (12 Jenis)</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pinjaman.map((service, i) => {
              const Icon = iconMap[service.icon] || Briefcase;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                >
                  {/* Modern Icon & Rate Header */}
                  <div className="p-5 pb-0 flex items-start justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-md text-white group-hover:scale-105 transition-transform shrink-0`}
                    >
                      <Icon size={22} />
                    </div>
                    {service.rate && (
                      <span className="text-[11px] font-extrabold px-2.5 py-1 rounded-lg bg-cyan-50 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800">
                        {service.rate}
                      </span>
                    )}
                  </div>

                  {/* Body content */}
                  <div className="p-5 pt-4 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mt-1.5 line-clamp-3">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                      <Link
                        href="/layanan#pinjaman"
                        className="inline-flex items-center gap-1 text-xs font-bold text-teal-700 dark:text-teal-400 hover:gap-1.5 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Pelajari Detail
                        <ArrowUpRight size={13} />
                      </Link>
                      <Link
                        href="/simulasi#pinjaman"
                        className="text-[11px] font-semibold text-slate-500 hover:text-teal-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Simulasi
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-12 sm:mt-14"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 p-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-xs text-slate-600 dark:text-slate-300 font-medium px-3">
              Ingin melihat perbandingan bunga dan syarat lengkap?
            </span>
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-500 hover:bg-primary-400 text-slate-950 font-bold text-xs rounded-xl shadow-xs transition-all active:scale-95"
            >
              <span>Buka Katalog Lengkap</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
