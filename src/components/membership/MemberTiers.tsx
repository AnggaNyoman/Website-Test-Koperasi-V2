"use client";

import { useState } from "react";
import Image from "next/image";
import { MEMBER_TIERS } from "@/lib/constants";
import { CheckCircle2, Maximize2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MemberTiers() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <section className="section-py bg-slate-50 dark:bg-slate-900/50">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300">
            Klasifikasi Anggota
          </span>
          <h2 className="section-title">
            Tingkatan <span className="text-gradient">Keanggotaan</span>
          </h2>
          <p className="section-subtitle">
            Semakin besar total Simpanan Anggota Anda, semakin lengkap manfaat, perlindungan asuransi, dan fasilitas pinjaman yang Anda terima.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {MEMBER_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Card HD Image Preview */}
              {tier.image && (
                <div
                  className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-700 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedCard(tier.image)}
                >
                  <Image
                    src={tier.image}
                    alt={`Kartu Anggota ${tier.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    quality={95}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-slate-900/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      <Maximize2 className="w-3 h-3" />
                      HD
                    </span>
                  </div>
                </div>
              )}

              {/* Pembatas antara Desain Kartu & Penjelasan di Bawahnya */}
              <div className="w-full border-b border-slate-200 dark:border-slate-700 relative">
                <div className={`h-1 w-full bg-gradient-to-r ${tier.color}`} />
              </div>

              {/* Penjelasan di Bawah Desain */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Tier Title */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                      Anggota {tier.name}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Tier
                    </span>
                  </div>

                  {/* Ketentuan Simpanan */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700/60 mb-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 block mb-0.5">
                      Syarat Total Simpanan:
                    </span>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {tier.threshold}
                    </p>
                  </div>

                  {/* Daftar Manfaat */}
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {tier.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-8">
          Klasifikasi anggota disesuaikan otomatis berdasarkan total Simpanan Anggota dan dievaluasi secara berkala oleh Koperasi Mandara Sedana Kuta.
        </p>
      </div>

      {/* Lightbox Modal for HD Card preview */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <Image
                  src={selectedCard}
                  alt="Kartu Anggota HD"
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
