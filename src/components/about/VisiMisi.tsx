"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Eye,
  Target,
  Maximize2,
  X,
  CheckCircle2,
  Award,
  Sparkles,
  TrendingUp,
  ExternalLink,
} from "lucide-react";

export default function VisiMisi() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"visi" | "misi" | "tujuan">("visi");
  const [lightbox, setLightbox] = useState(false);

  const misiPoints = [
    {
      title: "1. Digitalisasi Layanan Koperasi Modern",
      desc: "Mengembangkan dan memperkuat infrastruktur teknologi finansial terpadu melalui aplikasi Madata Mobile, penyediaan sistem Virtual Account, QRIS, transaksi PPOB 24 jam, serta otomasi pencatatan simpan pinjam yang cepat, aman, dan mudah diakses dari mana saja.",
    },
    {
      title: "2. Ekspansi Jaringan Kemitraan & Aksesibilitas",
      desc: "Memperluas jangkauan keanggotaan dan jaringan operasional melalui kerjasama strategis dengan instansi pemerintah, perusahaan swasta (skema pinjaman sinergi potong gaji), komunitas wirausaha, serta pembukaan unit pelayanan kas di sentra-sentra perekonomian masyarakat.",
    },
    {
      title: "3. Inkubasi & Pengembangan Usaha Mikro Anggota",
      desc: "Mendorong daya saing dan akselerasi bisnis anggota melalui penyediaan akses pembiayaan yang mudah dan fleksibel (PINJARO, Kredit Usaha, dan Investasi), pendampingan manajemen keuangan, serta fasilitasi promosi produk anggota dalam wadah ekosistem Madata Community.",
    },
    {
      title: "4. Membangun Ekosistem Koperasi Terintegrasi",
      desc: "Mewujudkan sinergi rantai pasok antaranggota, kegiatan pasar murah gotong-royong, penyediaan kebutuhan pokok bersubsidi, dan program kepedulian sosial yang memperkuat daya beli dan ketahanan ekonomi keluarga anggota secara menyeluruh.",
    },
    {
      title: "5. Tata Kelola Profesional, Berintegritas & Patuh Regulasi",
      desc: "Menjalankan seluruh aktivitas perkoperasian dengan standar tata kelola yang baik (Good Cooperative Governance), transparan, akuntabel, diawasi secara independen oleh Satuan Pengawas Internal (SPI) dan Dewan Pengawas, serta senantiasa menaati regulasi perkoperasian yang berlaku.",
    },
  ];

  const tujuanPoints = [
    {
      title: "Peningkatan Kesejahteraan & Ketahanan Ekonomi Anggota",
      desc: "Membantu setiap anggota mencapai kemandirian finansial yang berkelanjutan melalui produk tabungan berencana berbunga majemuk, fasilitas kredit dengan bunga adil dan terjangkau, serta optimalisasi manfaat simpan pinjam yang terus meningkat setiap tahun buku.",
    },
    {
      title: "Inklusi Keuangan & Literasi Finansial Terbuka",
      desc: "Memberikan akses layanan keuangan formal bagi seluruh lapisan masyarakat, pedagang pasar tradisional, UMKM, hingga generasi muda melalui edukasi pengelolaan kas, simpanan pelajar, dan perencanaan keuangan jangka panjang.",
    },
    {
      title: "Perlindungan Sosial & Jaminan Masa Depan Anggota",
      desc: "Menjamin rasa aman bagi anggota dan ahli waris melalui integrasi perlindungan BPJS Ketenagakerjaan BPU (Jaminan Kecelakaan Kerja, Jaminan Kematian, dan Jaminan Hari Tua), Santunan Dana Pertanggungan Bersama (Daperma), serta santunan duka cita resmi koperasi.",
    },
    {
      title: "Menjadi Koperasi Percontohan Berbasis Digital di Bali",
      desc: "Membangun institusi koperasi yang kokoh, sehat secara permodalan (rasio keuangan prima), modern dalam operasional digital, berbudaya kerja KEREN (Kreatif, Edukatif, Ramah, Empati, Nyata), dan memberi dampak positif bagi kemajuan ekonomi daerah.",
    },
  ];

  // Prevent body scroll during lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
    };
    if (lightbox) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <section
      ref={ref}
      id="visi-misi"
      className="section-py bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <Target className="w-3.5 h-3.5 text-teal-600" />
            <span>Fondasi &amp; Arah Gerak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 [text-wrap:balance]">
            Visi, Misi &amp; <span className="text-gradient">Tujuan Strategis</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Komitmen terarah Koperasi Mandara Sedana Kuta dalam mewujudkan ekosistem keuangan modern yang menyejahterakan seluruh anggota.
          </p>
        </motion.div>

        {/* 2-COLUMN LAYOUT MODEL KEREN */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start mb-6">
          {/* LEFT COLUMN: Visual Infografis Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl border border-slate-200 dark:border-slate-700 p-3.5 sm:p-4 group shadow-sm">
              <div
                className="relative aspect-[3/4] w-full cursor-pointer rounded-xl bg-white flex items-center justify-center p-2 overflow-hidden border border-slate-200 dark:border-slate-700/60"
                onClick={() => setLightbox(true)}
              >
                <Image
                  src="/infografis-visi-misi.png"
                  alt="Infografis Visi dan Misi Koperasi Mandara Sedana Kuta"
                  fill
                  quality={95}
                  className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-teal-600" />
                    Klik untuk Memperbesar
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  Peta Infografis Visi &amp; Misi Resmi
                </span>
                <button
                  onClick={() => setLightbox(true)}
                  className="text-teal-600 dark:text-teal-400 hover:underline font-medium inline-flex items-center gap-1"
                >
                  <Maximize2 className="w-3 h-3" /> Layar Penuh
                </button>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Tabs (Visi, Misi, Tujuan) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7 space-y-5"
          >
            {/* Tab Selector */}
            <div className="flex gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-fit">
              <button
                onClick={() => setActiveTab("visi")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "visi"
                    ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Visi Koperasi</span>
              </button>
              <button
                onClick={() => setActiveTab("misi")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "misi"
                    ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Target className="w-4 h-4" />
                <span>Misi Strategis</span>
              </button>
              <button
                onClick={() => setActiveTab("tujuan")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === "tujuan"
                    ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Tujuan Utama</span>
              </button>
            </div>

            {/* TAB CONTENT: VISI */}
            {activeTab === "visi" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-900 via-teal-850 to-slate-900 text-white shadow-md border border-teal-700/40">
                  <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Pernyataan Visi Utama</span>
                  </div>
                  <blockquote className="text-base sm:text-lg font-medium leading-relaxed text-teal-50">
                    &ldquo;Menjadi koperasi modern dengan jaringan yang luas dan aktif mendukung pengembangan usaha anggota melalui ekosistem koperasi yang terintegrasi untuk meningkatkan pertumbuhan ekonomi anggota yang berkelanjutan.&rdquo;
                  </blockquote>
                </div>

                {/* 3 Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-teal-100 dark:bg-teal-950/60 flex items-center justify-center text-teal-700 dark:text-teal-300 mb-2">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                      Koperasi Modern
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                      Layanan serba digital dengan Madata Mobile &amp; tata kelola akuntabel.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950/60 flex items-center justify-center text-cyan-700 dark:text-cyan-300 mb-2">
                      <Target className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                      Ekosistem Usaha
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                      Pemberdayaan wirausaha anggota dari skala mikro hingga menengah.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-300 mb-2">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                      Kesejahteraan
                    </h4>
                    <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-snug">
                      Pertumbuhan ekonomi inklusif dan tata kelola yang transparan.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB CONTENT: MISI */}
            {activeTab === "misi" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-2.5"
              >
                {misiPoints.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3 transition-all hover:border-teal-400"
                  >
                    <span className="w-6 h-6 rounded-full bg-teal-100 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-0.5">
                        {m.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* TAB CONTENT: TUJUAN */}
            {activeTab === "tujuan" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {tujuanPoints.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3.5"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/60 flex items-center justify-center text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-1">
                        {t.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {t.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX MODAL: FULL UN-CROPPED INFOGRAPHIC */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={() => setLightbox(false)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/80 dark:bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    Infografis Visi dan Misi Koperasi Mandara Sedana Kuta
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="/infografis-visi-misi.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900 text-xs font-semibold text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Buka Tab Asli</span>
                  </a>
                  <button
                    onClick={() => setLightbox(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 w-full overflow-auto p-3 flex items-center justify-center bg-white dark:bg-slate-950 min-h-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/infografis-visi-misi.png"
                  alt="Infografis Visi Misi Full"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "75vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  className="rounded-lg shadow-sm block"
                />
              </div>

              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 text-center text-[11px] text-slate-500 dark:text-slate-400 shrink-0">
                Tekan tombol Esc untuk menutup
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
