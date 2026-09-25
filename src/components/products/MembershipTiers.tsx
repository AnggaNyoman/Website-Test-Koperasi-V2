"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MEMBERSHIP_TIERS } from "@/lib/constants";
import {
  ShieldCheck,
  CreditCard,
  CheckCircle2,
  Maximize2,
  X,
  UserPlus,
  Coins,
  HeartHandshake,
  ExternalLink,
} from "lucide-react";

export default function MembershipTiers() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const activeCardData = MEMBERSHIP_TIERS.find((t) => t.image === selectedCard);

  return (
    <div className="space-y-10">
      {/* Introduction Card - Bright & Luminous */}
      <div className="bg-gradient-to-br from-teal-50 via-cyan-50/40 to-white dark:from-slate-850 dark:to-slate-900 text-slate-900 dark:text-white rounded-2xl p-6 sm:p-8 border border-teal-200/80 dark:border-teal-800/50 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 text-xs font-semibold mb-3 border border-teal-200 dark:border-teal-700/50">
            <Coins className="w-3.5 h-3.5" />
            <span>Simpanan Anggota (SIPO, SIWA, SIJASA, SIASRI)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-slate-900 dark:text-white">
            Klasifikasi &amp; Hak Istimewa Keanggotaan
          </h3>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            Sesuai ketentuan <strong>Buku Saku Digital 2024</strong> (Pasal 1.1 &amp; 1.2), simpanan anggota merupakan modal sendiri Koperasi yang tidak dapat ditarik selama menjadi anggota. Semakin tinggi klasifikasi anggota Anda, semakin besar fasilitas proteksi jaminan kematian BPJS Ketenagakerjaan BPU, plafon pinjaman tanpa agunan, serta santunan duka yang diperoleh.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs">
              <span className="text-teal-700 dark:text-teal-400 text-[11px] block font-medium">Simpanan Pokok</span>
              <strong className="text-slate-900 dark:text-white text-sm">Rp10.000,-</strong>
              <span className="text-slate-400 text-[10px] block mt-0.5">(Sekali di awal)</span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs">
              <span className="text-teal-700 dark:text-teal-400 text-[11px] block font-medium">Simpanan Wajib</span>
              <strong className="text-slate-900 dark:text-white text-sm">Rp10.000,-</strong>
              <span className="text-slate-400 text-[10px] block mt-0.5">(Rutin per bulan)</span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs">
              <span className="text-cyan-700 dark:text-cyan-400 text-[11px] block font-medium">Pinjaman Bebas Agunan</span>
              <strong className="text-slate-900 dark:text-white text-sm">s/d Rp20 Juta</strong>
              <span className="text-slate-400 text-[10px] block mt-0.5">(Silver, Gold, Platinum)</span>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-3 border border-slate-200 dark:border-slate-700 shadow-xs">
              <span className="text-cyan-700 dark:text-cyan-400 text-[11px] block font-medium">Perlindungan BPU</span>
              <strong className="text-slate-900 dark:text-white text-sm">BPJS TK &amp; Daperma</strong>
              <span className="text-slate-400 text-[10px] block mt-0.5">(Santunan s/d Rp40 Juta)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 5 Membership Tiers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {MEMBERSHIP_TIERS.map((tier, idx) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className={`rounded-2xl bg-white dark:bg-slate-800 border overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full ${
              tier.tier === "Platinum"
                ? "border-neutral-700 dark:border-neutral-600 ring-1 ring-neutral-900/30 dark:ring-neutral-400/20"
                : tier.tier === "Gold"
                ? "border-amber-300 dark:border-amber-900 ring-1 ring-amber-500/20"
                : tier.tier === "Silver"
                ? "border-slate-300 dark:border-slate-600 ring-1 ring-slate-400/20"
                : "border-slate-200 dark:border-slate-700"
            }`}
          >
            {/* Card Preview Container */}
            <div className="p-5 sm:p-6 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-700/60">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                      Anggota {tier.tier}
                    </h4>
                    {tier.tier === "Platinum" && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-neutral-950 text-white border border-neutral-700 shadow-sm">
                        Tier Tertinggi
                      </span>
                    )}
                    {tier.tier === "Gold" && (
                      <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-amber-500 text-white shadow-sm">
                        Favorit
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-semibold text-teal-600 dark:text-teal-400">
                    Total Simpanan: {tier.simpanan}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCard(tier.image)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 transition-colors shadow-sm"
                  title="Lihat Kartu Versi HD"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Versi HD</span>
                </button>
              </div>

              {/* Physical Card Representation in HD */}
              <div
                className="relative aspect-[1024/630] w-full rounded-2xl overflow-hidden shadow-lg border border-black/10 dark:border-white/10 group cursor-pointer bg-slate-950"
                onClick={() => setSelectedCard(tier.image)}
              >
                <Image
                  src={tier.image}
                  alt={`Kartu Anggota ${tier.tier} Koperasi Mandara Sedana Kuta`}
                  fill
                  quality={95}
                  priority={idx < 2}
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                    Klik untuk Memperbesar Kartu HD
                  </span>
                </div>
              </div>
            </div>

            {/* Detailed Body Information */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-5">
              <div className="space-y-4">
                {/* Deskripsi Lengkap */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Ketentuan &amp; Syarat Simpanan
                  </h5>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed text-left [text-wrap:pretty]">
                    {tier.deskripsi}
                  </p>
                </div>

                {/* Key Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block font-semibold">
                      Pinjaman Tanpa Agunan
                    </span>
                    <strong className="text-slate-800 dark:text-slate-200">
                      {tier.pinjamanTanpaAgunan}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700">
                    <span className="text-[10px] text-slate-400 block font-semibold">
                      Program BPJS Ketenagakerjaan
                    </span>
                    <strong className="text-slate-800 dark:text-slate-200">
                      {tier.bpjsTk}
                    </strong>
                  </div>
                </div>

                {/* Santunan Kematian / Duka */}
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900 dark:text-amber-200 mb-1">
                    <HeartHandshake className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span>Santunan Duka &amp; Kepulangan</span>
                  </div>
                  <p className="text-amber-800 dark:text-amber-300 text-[11px] leading-relaxed">
                    {tier.santunanDuka}
                  </p>
                </div>

                {/* Rincian Butir Manfaat */}
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Daftar Hak &amp; Manfaat Anggota:
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {tier.manfaat.map((m, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedCard(tier.image)}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white flex items-center gap-1"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Lihat Fisik Kartu HD</span>
                </button>
                <Link
                  href="/daftar-anggota"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-sm transition-colors"
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  <span>Daftar {tier.tier}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for HD Card Preview */}
      <AnimatePresence>
        {selectedCard && activeCardData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6"
            onClick={() => setSelectedCard(null)}
          >
            <div
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/90 dark:bg-slate-800/90">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Kartu Anggota {activeCardData.tier} (Resolusi Asli HD)
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedCard}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 border border-slate-200 dark:border-slate-700 hover:bg-slate-50"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka File Asli</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelectedCard(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center">
                <div className="relative aspect-[1024/630] w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <Image
                    src={selectedCard}
                    alt={`Kartu ${activeCardData.tier} HD`}
                    fill
                    quality={100}
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <p className="text-slate-400 text-xs mt-3 text-center">
                  Desain kartu resmi fisik Koperasi Mandara Sedana Kuta — Format Digital 1024 x 630 HD.
                </p>
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Total Simpanan: {activeCardData.simpanan}</span>
                <Link
                  href="/daftar-anggota"
                  className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Ajukan Pendaftaran Anggota &rarr;
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
