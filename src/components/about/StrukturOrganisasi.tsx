"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Users,
  Maximize2,
  X,
  ShieldCheck,
  Briefcase,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  Layers,
  TrendingUp,
  CheckCircle2,
  FolderTree,
  ChevronRight,
} from "lucide-react";

interface SubordinateDivision {
  blueHeader: string;
  lead: string;
  greenBoxes: string[];
}

interface PillarItem {
  id: string;
  pilarNumber: number;
  title: string;
  officialHeader: string;
  role: string;
  color: string;
  badgeBg: string;
  icon: typeof ShieldCheck;
  description: string;
  responsibilities: string[];
  greenBoxesDirect?: string[];
  subordinateDivisions?: SubordinateDivision[];
}

export default function StrukturOrganisasi() {
  const [activeTab, setActiveTab] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // 4 PILAR UTAMA KOPERASI MANDARA SEDANA KUTA
  const fourPillars: PillarItem[] = [
    {
      id: "pengawas",
      pilarNumber: 1,
      title: "Pengawas",
      officialHeader: "PENGAWAS",
      role: "Dewan Pengawas Independen",
      color: "#2563eb",
      badgeBg: "from-blue-600 to-indigo-600",
      icon: ShieldCheck,
      description:
        "Melakukan pengawasan independen terhadap kebijakan tata kelola, kepatuhan AD/ART, regulasi Kemenkop UKM, serta pemeriksaan berkala atas operasional kas dan aset koperasi.",
      responsibilities: [
        "Audit berkala atas tata kelola keuangan dan kepatuhan AD/ART",
        "Pemeriksaan independen terhadap manajemen risiko operasional",
        "Rekomendasi tertulis kepada Pengurus dan RAT demi perlindungan anggota",
      ],
      greenBoxesDirect: ["SPI (Satuan Pengawas Internal)"],
    },
    {
      id: "manajer-utama",
      pilarNumber: 2,
      title: "Manajer Utama",
      officialHeader: "MANAJER UTAMA",
      role: "Pimpinan Eksekutif Tertinggi",
      color: "#0d9488",
      badgeBg: "from-teal-600 to-emerald-600",
      icon: Briefcase,
      description:
        "Pimpinan eksekutif tertinggi yang memimpin perumusan strategi bisnis, kebijakan operasional makro, pengelolaan likuiditas, serta mengoordinasikan Manajer Operasional dan Manajer Bisnis.",
      responsibilities: [
        "Penetapan arah strategis dan target tahunan koperasi",
        "Supervisi tertinggi terhadap kinerja operasional, ekspansi, dan inovasi",
        "Pertanggungjawaban kepada Pengurus dan Rapat Anggota Tahunan (RAT)",
      ],
      greenBoxesDirect: ["Sekretariat Eksekutif & Tata Kelola Direksi"],
    },
    {
      id: "manajer-operasional",
      pilarNumber: 3,
      title: "Manajer Operasional",
      officialHeader: "MANAJER OPERASIONAL",
      role: "Koordinator 4 Divisi Operasional",
      color: "#059669",
      badgeBg: "from-emerald-600 to-teal-600",
      icon: Layers,
      description:
        "Memimpin dan memastikan standar pelayanan prima pada 4 divisi operasional harian koperasi: SDM & Umum, Dana & Pelayanan, Keuangan, serta Pinjaman.",
      responsibilities: [
        "Pengawasan efisiensi pelayanan kas, simpanan, dan pencairan pinjaman",
        "Mitigasi risiko likuiditas harian dan ketepatan akuntansi keuangan",
        "Penerapan SOP dan pembinaan SDM berbudaya kerja KEREN",
      ],
      subordinateDivisions: [
        {
          blueHeader: "SDM, UMUM & KESEKRETARIATAN",
          lead: "Insan Koperasi, Administrasi & Fasilitas",
          greenBoxes: ["SDM & Humas", "Kesekretariatan & Umum", "Cleaning Service"],
        },
        {
          blueHeader: "DANA & PELAYANAN",
          lead: "Simpanan, Layanan Kas & Kemitraan",
          greenBoxes: [
            "Supervisor",
            "Teller & PDL",
            "Member Care & Service (MCS)",
            "Member Prioritas & Sekolah",
          ],
        },
        {
          blueHeader: "KEUANGAN",
          lead: "Akuntansi, Neraca & Likuiditas",
          greenBoxes: ["Keuangan & Pelaporan"],
        },
        {
          blueHeader: "PINJAMAN",
          lead: "Analisa Kredit, Agunan & Penagihan",
          greenBoxes: [
            "Account Officer (AO)",
            "Admin Pinjaman",
            "Penanganan Pinjaman Bermasalah",
          ],
        },
      ],
    },
    {
      id: "manajer-bisnis",
      pilarNumber: 4,
      title: "Manajer Bisnis",
      officialHeader: "MANAJER BISNIS",
      role: "Koordinator Inovasi, Cabang & Treasury",
      color: "#0891b2",
      badgeBg: "from-cyan-600 to-blue-600",
      icon: TrendingUp,
      description:
        "Memimpin ekspansi keanggotaan, inovasi digital Madata Mobile, kemitraan strategis, serta operasional Kantor Cabang Sesetan dan pengelolaan treasury.",
      responsibilities: [
        "Akselerasi inovasi teknologi digital dan keamanan sistem Madata Mobile",
        "Supervisi operasional dan ekspansi keanggotaan Kantor Cabang Sesetan",
        "Pengembangan portofolio usaha produktif dan optimalisasi treasury",
      ],
      subordinateDivisions: [
        {
          blueHeader: "TI, RND & PROMOSI",
          lead: "Teknologi Madata & Pemasaran",
          greenBoxes: ["TI & RND", "Tim Promosi"],
        },
        {
          blueHeader: "KEPALA CABANG SESETAN",
          lead: "Pelayanan Wilayah Denpasar Selatan",
          greenBoxes: ["Teller & MCS", "PDL (Petugas Dinas Luar)"],
        },
        {
          blueHeader: "BISNIS & TREASURY",
          lead: "Usaha Produktif & Likuiditas",
          greenBoxes: ["Tim Bisnis & Pengelolaan Treasury"],
        },
      ],
    },
  ];

  const currentPilar = fourPillars[activeTab];
  const CurrentIcon = currentPilar.icon;

  // Prevent background scroll when modal open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
        setIsZoomed(false);
      }
    };
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <section
      id="struktur"
      ref={ref}
      className="section-py bg-slate-50 dark:bg-slate-900/60 relative overflow-hidden"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5 text-teal-600" />
            <span>Tata Kelola Resmi Badan Hukum No: 004723/BH/M KUKM.2/VII/2017</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 [text-wrap:balance]">
            Struktur Organisasi &amp; <span className="text-gradient">4 Pilar Manajemen</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Dikelola secara akuntabel melalui 4 pilar kepemimpinan utama: Dewan Pengawas, Manajer Utama, Manajer Operasional, dan Manajer Bisnis beserta seluruh divisi dan unit kerja pendukungnya.
          </p>
        </div>

        {/* Compact 2-Column Layout (Like Model KEREN) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8">
          {/* LEFT: Infographic Visual Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4 group">
              <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100 dark:border-slate-700/60">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-teal-700 dark:text-teal-400">
                  Bagan Struktur Resmi Koperasi
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setIsZoomed(false);
                    setIsLightboxOpen(true);
                  }}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-white transition-colors"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Buka HD</span>
                </button>
              </div>

              {/* Clickable Image Container */}
              <div
                className="relative aspect-[16/10] w-full cursor-pointer rounded-xl bg-slate-50 dark:bg-slate-900 overflow-hidden border border-slate-100 dark:border-slate-700 flex items-center justify-center p-2 group"
                onClick={() => {
                  setIsZoomed(false);
                  setIsLightboxOpen(true);
                }}
              >
                <Image
                  src="/struktur-organisasi.png"
                  alt="Bagan Struktur Manajemen Koperasi Mandara Sedana Kuta"
                  fill
                  quality={95}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                    <Maximize2 className="w-3 h-3 text-teal-600" />
                    Klik untuk Memperbesar
                  </span>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span>Klik gambar untuk tampilan bagan penuh HD</span>
                <a
                  href="/struktur-organisasi.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-teal-700 dark:text-teal-400 font-semibold hover:underline"
                >
                  <ExternalLink className="w-3 h-3" /> Tab Baru
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Interactive Tab Selector & Active Pillar Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-4"
          >
            {/* 4 Pillars Tab Buttons (Compact like KEREN letter tabs) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {fourPillars.map((p, idx) => {
                const isActive = activeTab === idx;
                const Icon = p.icon;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`py-2 px-2.5 rounded-xl font-bold text-center transition-all duration-200 flex flex-col items-center justify-center gap-1 border ${
                      isActive
                        ? "bg-white dark:bg-slate-800 shadow-md border-teal-500 scale-[1.02] text-slate-900 dark:text-white"
                        : "bg-white/70 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <div className="flex items-center gap-1.5">
                      <Icon
                        className="w-3.5 h-3.5"
                        style={{ color: isActive ? p.color : undefined }}
                      />
                      <span
                        className="text-[10px] font-black uppercase tracking-wider"
                        style={{ color: isActive ? p.color : undefined }}
                      >
                        Pilar {p.pilarNumber}
                      </span>
                    </div>
                    <span className="text-xs font-extrabold truncate max-w-full">
                      {p.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Detail Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Accent Color Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: currentPilar.color }}
                />

                <div>
                  {/* Header Row */}
                  <div className="flex items-start justify-between gap-3 mb-3 pb-3 border-b border-slate-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs shrink-0"
                        style={{ backgroundColor: currentPilar.color }}
                      >
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[9.5px] uppercase font-black tracking-wider px-2 py-0.5 rounded-md"
                            style={{
                              backgroundColor: `${currentPilar.color}15`,
                              color: currentPilar.color,
                            }}
                          >
                            PILAR {currentPilar.pilarNumber}
                          </span>
                          <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                            {currentPilar.role}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                          {currentPilar.officialHeader}
                        </h3>
                      </div>
                    </div>

                    {/* Direct Green Box if Pengawas / Manajer Utama */}
                    {currentPilar.greenBoxesDirect && (
                      <div className="shrink-0 text-right">
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                          Kotak Hijau:
                        </span>
                        {currentPilar.greenBoxesDirect.map((gb, gIdx) => (
                          <span
                            key={gIdx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300 font-bold text-[11px] border border-emerald-300 dark:border-emerald-800"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            {gb}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Compact Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 text-left [text-wrap:pretty]">
                    {currentPilar.description}
                  </p>

                  {/* 3 Responsibilities in compact pills */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Fokus Utama &amp; Tanggung Jawab:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {currentPilar.responsibilities.map((resp, rIdx) => (
                        <div
                          key={rIdx}
                          className="flex items-start gap-1.5 p-2 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-[11px] text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-tight line-clamp-3">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Subordinate Divisions (For Pilar 3 & 4) */}
                  {currentPilar.subordinateDivisions && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10.5px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 flex items-center gap-1">
                          <FolderTree className="w-3.5 h-3.5" />
                          Divisi Box Biru &amp; Staf Kotak Hijau:
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentPilar.subordinateDivisions.map((div, dIdx) => (
                          <div
                            key={dIdx}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60"
                          >
                            <span className="text-[10px] font-mono font-bold text-teal-700 dark:text-teal-400 block mb-0.5">
                              {div.blueHeader}
                            </span>
                            <span className="text-[10.5px] text-slate-500 dark:text-slate-400 block mb-1.5 font-medium">
                              {div.lead}
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {div.greenBoxes.map((gb, gIdx) => (
                                <span
                                  key={gIdx}
                                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-100/90 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 text-[10px] font-semibold border border-emerald-300/80 dark:border-emerald-800"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  {gb}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 4 Compact Cards Overview Grid (Like KEREN's 5 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {fourPillars.map((p, idx) => {
            const isSelected = activeTab === idx;
            const Icon = p.icon;
            return (
              <div
                key={`overview-card-${p.id}`}
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "border-teal-500 bg-teal-50/60 dark:bg-teal-950/30 shadow-xs ring-1 ring-teal-500/50"
                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs text-white shadow-xs shrink-0"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.pilarNumber}
                      </span>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          PILAR {p.pilarNumber}
                        </span>
                        <h4 className="font-extrabold text-xs text-slate-900 dark:text-white truncate max-w-[150px]">
                          {p.officialHeader}
                        </h4>
                      </div>
                    </div>
                    <Icon className="w-4 h-4 text-slate-400 shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mb-2 leading-relaxed">
                    {p.role}
                  </p>
                </div>

                {/* Subordinate Green Units summary tag */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-[10px]">
                  <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                    {p.greenBoxesDirect
                      ? p.greenBoxesDirect[0]
                      : `${p.subordinateDivisions?.length || 0} Divisi Box Biru`}
                  </span>
                  <span className="text-teal-600 dark:text-teal-400 font-semibold flex items-center">
                    Detail <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL: FULL RESOLUTION HD VIEWPORT */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-md flex flex-col items-center justify-center p-2 sm:p-4 md:p-6"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Modal Box */}
            <div
              className="relative w-full max-w-6xl max-h-[92vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 shrink-0 bg-slate-50/80 dark:bg-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    Bagan Struktur Manajemen Koperasi Mandara Sedana Kuta (Resolusi HD)
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsZoomed(!isZoomed)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-xs font-semibold text-slate-800 dark:text-slate-100 transition-colors"
                  >
                    {isZoomed ? (
                      <>
                        <ZoomOut className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Sesuaikan Layar</span>
                      </>
                    ) : (
                      <>
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Perbesar 100%</span>
                      </>
                    )}
                  </button>
                  <a
                    href="/struktur-organisasi.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900 text-xs font-semibold text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Buka Tab Asli</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(false)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Image Viewport */}
              <div
                className={`relative flex-1 overflow-auto bg-white p-4 flex items-center justify-center min-h-[50vh] ${
                  isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <div
                  className={`transition-all duration-300 ${
                    isZoomed ? "w-[180%] max-w-none shrink-0" : "w-full max-h-[75vh]"
                  }`}
                >
                  <img
                    src="/struktur-organisasi.png"
                    alt="Bagan Struktur Manajemen Koperasi Mandara Sedana Kuta HD Full"
                    className="w-full h-auto object-contain mx-auto select-none"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Footer info in Modal */}
              <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/80 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Klik gambar untuk berganti antara mode zoom 100% dan mode fit-screen.</span>
                <span className="font-mono">Badan Hukum No: 004723/BH/M KUKM.2/VII/2017</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
