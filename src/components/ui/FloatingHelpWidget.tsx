"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Calculator,
  Smartphone,
  MapPin,
  X,
  Clock,
  ShieldCheck,
  ChevronRight,
  Headphones,
} from "lucide-react";
import { WHATSAPP_URL, CONTACT } from "@/lib/constants";

export default function FloatingHelpWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50">
      {/* Expanded Help Panel Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-900 p-4 text-white relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <Headphones className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-xs sm:text-sm tracking-tight leading-tight">
                      Layanan Bantuan Anggota
                    </h4>
                    <p className="text-[10px] text-teal-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      CS Online • Respon Cepat
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Tutup menu bantuan"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Operating Hours Note */}
              <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-teal-200">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-300" /> Kas: 08:00 - 15:30 WITA
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-300" /> Kemenkop UKM
                </span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="p-3 space-y-2">
              {/* WhatsApp Direct */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/60 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Chat WhatsApp Official
                    </div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-300">
                      Konsultasi pinjaman & pendaftaran
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Simulasi Calculator Shortcut */}
              <Link
                href="/simulasi"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/50 border border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-800 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Kalkulator Simulasi
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Hitung angsuran pinjaman & deposito
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Madata Mobile Shortcut */}
              <Link
                href="/madata-mobile"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/50 border border-slate-200 dark:border-slate-700 hover:border-teal-200 dark:hover:border-teal-800 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Madata Mobile App
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Cek saldo, transfer, & tagihan PPOB
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              {/* Lokasi Kantor & Kunjungan */}
              <Link
                href="/kontak#lokasi-kantor"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/50 border border-slate-200 dark:border-slate-700 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-900 dark:text-white">
                      Lokasi Kantor &amp; Rute
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Pusat Legian &amp; Cabang Sesetan
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button / Pill */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Tutup bantuan" : "Buka bantuan dan konsultasi WhatsApp"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-full shadow-xl transition-all duration-300 ${
          isOpen
            ? "bg-slate-800 text-white border border-slate-700"
            : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/30"
        }`}
      >
        {/* Pulse Green Dot Indicator */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-200" />
        </span>

        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <MessageCircle className="w-5 h-5" />
        )}

        <span className="text-xs font-bold tracking-tight pr-1">
          {isOpen ? "Tutup" : "Bantuan & CS"}
        </span>
      </motion.button>
    </div>
  );
}
