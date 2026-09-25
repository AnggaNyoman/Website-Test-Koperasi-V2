"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
export default function MadataFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apakah aplikasi Madata Mobile gratis diunduh dan digunakan?",
      a: "Ya! Aplikasi Madata Mobile 100% gratis diunduh di Google Play Store tanpa biaya pendaftaran atau biaya berlangganan bulanan aplikasi.",
    },
    {
      q: "Bagaimana jika saya lupa PIN atau akun terblokir?",
      a: "Jika Anda lupa PIN atau salah memasukkan PIN sebanyak 3 kali, silakan hubungi Customer Service kami via WhatsApp di 0813-9430-6999 atau kunjungi kantor Pusat/Cabang dengan membawa e-KTP untuk reset PIN akun Anda.",
    },
    {
      q: "Kapan versi iOS (iPhone/iPad) tersedia di App Store?",
      a: "Versi iOS saat ini sedang dalam tahap akhir pengembangan dan integrasi keamanan. Kami akan mengumumkan segera setelah resmi dirilis di Apple App Store.",
    },
    {
      q: "Apakah transaksi di Madata Mobile aman?",
      a: "Sangat aman. Seluruh data transaksi dienkripsi dengan standar keamanan perbankan (SSL 256-bit), dilengkapi autentikasi biometrik sidik jari, dan setiap transaksi finansial wajib memasukkan 6 digit PIN.",
    },
    {
      q: "Bagaimana jika saya ingin mengganti nomor HP yang terdaftar?",
      a: "Demi menjaga keamanan dana simpanan, perubahan nomor HP harus dilakukan secara langsung di kantor Koperasi Mandara Sedana Kuta (Legian atau Sesetan) dengan verifikasi fisik dokumen KTP asli.",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
        <span className="text-xs uppercase font-bold tracking-wider text-teal-600 dark:text-teal-400">
          Tanya Jawab Aplikasi
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-2 [text-wrap:balance]">
          Pertanyaan Seputar Madata Mobile
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
          Jawaban praktis untuk pertanyaan yang sering ditanyakan oleh anggota.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-800 shadow-sm overflow-hidden transition-all"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-slate-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 dark:text-slate-500 transform transition-transform shrink-0 ml-2 ${
                    isOpen ? "rotate-180 text-teal-600 dark:text-teal-400" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-900/30">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
