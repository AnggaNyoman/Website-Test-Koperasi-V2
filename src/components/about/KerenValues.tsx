"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { KEREN_VALUES } from "@/lib/constants";

import { Maximize2, X, Sparkles, CheckCircle } from "lucide-react";
export default function KerenValues() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activeValue = KEREN_VALUES[activeTab];

  return (
    <section id="nilai-keren" ref={ref} className="section-py bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-950/60 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 text-gold" />
            <span>Budaya & Filosofi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 [text-wrap:balance]">
            Nilai-Nilai Luhur <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-primary-500 to-cyan-500">KEREN</span>
          </h2>
          <p className="text-black dark:text-slate-300 text-base sm:text-lg">
            Nilai kerja dan budaya organisasi yang menjadi landasan integritas seluruh insan Koperasi Mandara Sedana Kuta dalam melayani anggota.
          </p>
        </div>

        {/* Infographic Banner & Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Infographic Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative group">
              <div className="relative aspect-[16/9] w-full cursor-pointer rounded-2xl border border-teal-200/60 dark:border-teal-700/40 overflow-hidden" onClick={() => setIsLightboxOpen(true)}>
                <Image
                  src="/infografis-keren.png"
                  alt="Infografis Nilai KEREN Koperasi Mandara Sedana Kuta"
                  fill
                  quality={95}
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 dark:bg-slate-900/90 text-black dark:text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <Maximize2 className="w-3.5 h-3.5" /> Klik Perbesar
                  </span>
                </div>
              </div>
              <p className="text-center text-xs text-black dark:text-slate-400 mt-2 font-medium">
                Peta Konsep Nilai Inti KEREN Koperasi Mandara Sedana Kuta
              </p>
            </div>
          </motion.div>

          {/* Value Letters Interactive Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Letter Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {KEREN_VALUES.map((val, idx) => {
                const isActive = activeTab === idx;
                return (
                  <button
                    key={`${val.letter}-${idx}`}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 min-w-[56px] sm:min-w-[70px] py-3 px-2 rounded-xl font-bold text-center transition-all duration-300 flex flex-col items-center gap-1 border ${
                      isActive
                        ? "bg-white dark:bg-slate-800 shadow-lg border-teal-500 scale-105 text-black dark:text-white"
                        : "bg-white/60 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-black dark:text-slate-400"
                    }`}
                  >
                    <span
                      className="text-2xl sm:text-3xl font-black"
                      style={{ color: isActive ? val.color : undefined }}
                    >
                      {val.letter}
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium truncate max-w-[80px]">
                      {val.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Value Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: activeValue.color }}
                />
                
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shadow-md text-white"
                    style={{ backgroundColor: activeValue.color }}
                  >
                    {activeValue.letter}
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-black dark:text-slate-500">
                      Prinsip Nilai
                    </span>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {activeValue.title}
                    </h3>
                  </div>
                </div>

                <p className="text-black dark:text-slate-200 text-base sm:text-lg leading-relaxed mb-6">
                  {activeValue.description}
                </p>

                <div className="flex items-center gap-2 text-sm text-teal-600 dark:text-teal-400 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Diterapkan aktif dalam operasional & pelayanan setiap hari</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 5 Cards Overview Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {KEREN_VALUES.map((val, idx) => (
            <div
              key={`card-${val.letter}-${idx}`}
              onClick={() => setActiveTab(idx)}
              className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between h-full ${
                activeTab === idx
                  ? "border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 shadow-md"
                  : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-sm text-white shadow-sm"
                    style={{ backgroundColor: val.color }}
                  >
                    {val.letter}
                  </span>
                  <h4 className="font-bold text-sm text-black dark:text-white">
                    {val.title}
                  </h4>
                </div>
                <p className="text-xs text-black dark:text-slate-400 line-clamp-3">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-slate-300 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src="/infografis-keren.png"
                alt="Infografis Nilai KEREN Full"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
