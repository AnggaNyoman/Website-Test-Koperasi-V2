"use client";

import { useState, useRef } from "react";
import { FAQ_DATA } from "@/lib/constants";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import {
  ChevronDown,
  Search,
  HelpCircle,
  MessageCircle,
  X,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";

// ============================================
// FAQ PAGE — Smooth accordion + search highlight
// ============================================

const CATEGORIES = [
  "Semua",
  "Anggota",
  "Simpanan",
  "Pinjaman",
  "Madata Mobile",
  "Umum",
];

function highlight(text: string, query: string) {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark
        key={i}
        className="bg-primary-200 dark:bg-primary-800/50 text-primary-900 dark:text-primary-100 rounded px-0.5"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function FAQPage() {
  const [selectedCat, setSelectedCat] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq1");
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredFaqs = FAQ_DATA.filter((item) => {
    const matchesCat =
      selectedCat === "Semua" || item.category === selectedCat;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const toggleOpen = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="teal">Pusat Bantuan &amp; Informasi</SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Pertanyaan Yang Sering{" "}
            <span className="text-gradient">Diajukan</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Temukan jawaban lengkap seputar keanggotaan, produk simpanan, pengajuan pinjaman, hingga aplikasi Madata Mobile.
          </p>

          {/* Stat badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {[
              { value: `${FAQ_DATA.length}`, label: "Pertanyaan" },
              { value: `${CATEGORIES.length - 1}`, label: "Kategori" },
              { value: "24/7", label: "Layanan CS" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-center"
              >
                <div className="text-white font-bold text-lg leading-none">
                  {s.value}
                </div>
                <div className="text-teal-300 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "FAQ" }]} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Cari pertanyaan... (contoh: bunga, syarat pinjaman, login)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-teal-600 text-white shadow-md shadow-teal-500/20 scale-105"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-400 hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        {searchQuery && (
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center mb-6">
            Menampilkan{" "}
            <span className="font-bold text-teal-600 dark:text-teal-400">
              {filteredFaqs.length}
            </span>{" "}
            hasil untuk &ldquo;{searchQuery}&rdquo;
          </p>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3 mb-16">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, i) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`rounded-2xl border bg-white dark:bg-slate-800 shadow-sm overflow-hidden transition-all duration-200 ${
                      isOpen
                        ? "border-teal-200 dark:border-teal-700/60 shadow-md shadow-teal-100/50 dark:shadow-teal-900/30"
                        : "border-slate-200 dark:border-slate-700"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleOpen(faq.id)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors group"
                    >
                      <span className="flex items-start gap-3 pr-4">
                        <span
                          className={`shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                            isOpen
                              ? "bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-700/40"
                              : "bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-600"
                          }`}
                        >
                          {faq.category}
                        </span>
                        <span
                          className={`text-sm sm:text-base font-bold leading-snug transition-colors ${
                            isOpen
                              ? "text-teal-700 dark:text-teal-300"
                              : "text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400"
                          }`}
                        >
                          {highlight(faq.question, searchQuery)}
                        </span>
                      </span>
                      <div
                        className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${
                          isOpen
                            ? "bg-teal-50 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400"
                            : "bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500"
                        }`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Smooth accordion content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                            opacity: { duration: 0.25 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-5 pt-0 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 bg-gradient-to-b from-slate-50/80 to-transparent dark:from-slate-900/30 dark:to-transparent">
                            <div className="pt-4">
                              {highlight(faq.answer, searchQuery)}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700"
              >
                <HelpCircle className="w-14 h-14 text-slate-200 dark:text-slate-700 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-1">
                  Tidak ada pertanyaan yang sesuai
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-xs">
                  Coba kata kunci lain atau hubungi CS kami
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Still have questions CTA */}
        <div className="relative rounded-2xl p-8 bg-gradient-to-r from-slate-900 to-teal-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl text-center md:text-left overflow-hidden border border-slate-800">
          <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-1">
              Masih Memiliki Pertanyaan Lain?
            </h3>
            <p className="text-teal-200 text-xs sm:text-sm">
              Tim layanan pelanggan kami siap membantu Anda setiap hari kerja
              melalui WhatsApp atau telepon.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-black font-bold px-6 py-3 rounded-2xl shadow-lg shadow-primary-500/20 hover:shadow-glow-green transition-all text-sm active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat WhatsApp CS</span>
          </a>
        </div>
      </div>
    </div>
  );
}
