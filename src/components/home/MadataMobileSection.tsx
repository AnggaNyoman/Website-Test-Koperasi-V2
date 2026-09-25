"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Wallet,
  Phone,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Fingerprint,
  Smartphone,
  CheckCircle2,
  QrCode,
  Sparkles,
  Layers,
  ArrowRight,
} from "lucide-react";
import dynamic from "next/dynamic";
import { SITE_CONFIG, MADATA_FEATURES } from "@/lib/constants";
import { getMobileOS } from "@/lib/utils";

// Lazy load QR code
const QRCodeSVG = dynamic(
  () => import("qrcode.react").then((m) => m.QRCodeSVG),
  { ssr: false, loading: () => <div className="w-28 h-28 skeleton rounded-xl" /> }
);

const featureIconMap: Record<string, React.ElementType> = {
  Wallet,
  Phone,
  Zap,
  ArrowUpRight,
  Shield: ShieldCheck,
  Fingerprint,
};

const SHOWCASE_TABS = [
  {
    id: "beranda",
    label: "Beranda",
    image: "/app/madata-showcase-1.png",
    caption: "Cek saldo, mutasi, & ringkasan rekening secara realtime 24 jam",
  },
  {
    id: "tagihan",
    label: "Tagihan PPOB",
    image: "/app/madata-showcase-2.png",
    caption: "Token PLN, pulsa, paket data, PDAM, hingga iuran BPJS Kesehatan",
  },
  {
    id: "transfer",
    label: "Transfer",
    image: "/app/madata-showcase-3.png",
    caption: "Transfer instan antar-bank nasional & pembayaran angsuran",
  },
  {
    id: "produk",
    label: "Produk Koperasi",
    image: "/app/madata-showcase-4.png",
    caption: "Pantau simpanan SIRELA, SIJAKA, & ajukan pinjaman mikro PINJARO",
  },
  {
    id: "autodebet",
    label: "Auto Debet",
    image: "/app/madata-showcase-5.png",
    caption: "Bayar simpanan wajib dan cicilan pinjaman otomatis tepat waktu",
  },
  {
    id: "merchant",
    label: "Merchant",
    image: "/app/madata-showcase-6.png",
    caption: "Beli kebutuhan harian & kuliner dari merchant binaan koperasi",
  },
];

export default function MadataMobileSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [os, setOs] = useState<"android" | "ios" | "other">("other");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setOs(getMobileOS());
  }, []);

  const features = MADATA_FEATURES;

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-950 relative overflow-hidden border-t border-b border-slate-200/80 dark:border-slate-800"
      id="madata"
    >
      {/* Soft contemporary ambient lights (luminous, not murky) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-400/10 dark:bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ======================================================== */}
          {/* LEFT: Information & Official App Branding */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Official Madata Mobile Icon Badge */}
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-white p-1 shrink-0">
                <Image
                  src="/madata-logo.png"
                  alt="Madata Mobile App Icon"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-bold text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2.5 py-0.5 rounded-full border border-teal-200 dark:border-teal-800/50">
                  <Sparkles className="w-3 h-3 text-cyan-500" /> Aplikasi Mobile Banking Resmi
                </span>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Madata Mobile Apps
                </h3>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight [text-wrap:balance]">
                Layanan Koperasi Modern{" "}
                <span className="bg-gradient-to-r from-teal-700 via-cyan-600 to-emerald-600 dark:from-teal-400 dark:via-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">
                  Dalam Satu Sentuhan
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed [text-wrap:balance]">
                Nikmati kenyamanan transaksi perbankan digital KSP Mandara Sedana Kuta kapan pun dan di mana pun. Cek saldo, bayar tagihan harian, top up e-money, dan kelola simpanan secara instan.
              </p>
            </div>

            {/* Feature Mini Cards - Clean & Minimalist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {features.map((f, i) => {
                const Icon = featureIconMap[f.icon] || Wallet;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-100 dark:border-teal-800/40 group-hover:scale-105 transition-transform">
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                        {f.title}
                      </h4>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug mt-0.5">
                        {f.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Download Buttons & Hints */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.googlePlayUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-download-playstore"
                className="inline-block transition-transform hover:-translate-y-0.5 active:scale-95 shadow-sm hover:shadow-md"
              >
                <img
                  src="/badges/google-play-badge.svg"
                  alt="Unduh di Google Play"
                  className="h-11 sm:h-12 w-auto"
                />
              </a>

              <div
                className="relative inline-block opacity-60 cursor-not-allowed"
                title="Segera tersedia di App Store"
              >
                <img
                  src="/badges/app-store-badge.svg"
                  alt="Segera hadir di App Store"
                  className="h-11 sm:h-12 w-auto grayscale"
                />
                <span className="absolute -top-2.5 -right-1 text-[9px] bg-slate-700 text-white px-1.5 py-0.5 rounded-full font-bold">
                  Segera
                </span>
              </div>
            </div>

            {os === "android" && (
              <p className="text-xs text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 rounded-xl px-3 py-2 w-fit">
                <Smartphone size={13} />
                Terdeteksi perangkat Android — unduh langsung di Google Play Store
              </p>
            )}
          </motion.div>

          {/* ======================================================== */}
          {/* RIGHT: Authentic Showcase Card + Interactive Tab Switcher */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col items-center justify-center gap-6"
          >
            {/* Interactive Screen Tab Pills */}
            <div className="w-full flex items-center justify-center flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs max-w-lg">
              {SHOWCASE_TABS.map((tab, idx) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all text-center ${
                    activeTab === idx
                      ? "bg-teal-700 text-white shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Authentic Smartphone Showcase */}
            <div className="relative group w-full max-w-[285px] sm:max-w-[305px]">
              {/* Soft ambient halo behind device */}
              <div className="absolute inset-0 bg-teal-500/20 dark:bg-cyan-500/15 blur-3xl rounded-[48px] scale-95 pointer-events-none" />

              {/* Smartphone Outer Chassis */}
              <div className="relative rounded-[42px] sm:rounded-[46px] p-2.5 sm:p-3 bg-slate-900 dark:bg-slate-950 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border-[2.5px] border-slate-750 dark:border-slate-800 ring-1 ring-black/40">
                {/* Speaker slit */}
                <div className="absolute top-2 inset-x-0 z-20 flex justify-center pointer-events-none">
                  <div className="w-14 h-1 rounded-full bg-slate-800 dark:bg-slate-700/80" />
                </div>

                {/* Inner Screen */}
                <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-slate-950 aspect-[9/18.5] shadow-inner">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.25 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={SHOWCASE_TABS[activeTab].image}
                        alt={`Madata Mobile — ${SHOWCASE_TABS[activeTab].label}`}
                        fill
                        quality={95}
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 285px, 305px"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Phone Bottom Home Swipe Bar */}
                  <div className="absolute bottom-1.5 inset-x-0 z-20 flex justify-center pointer-events-none">
                    <div className="w-24 h-1 bg-white/50 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Unified Feature Caption & Compact QR Scan Bar */}
            <div className="w-full max-w-[380px] bg-white dark:bg-slate-800 rounded-2xl p-3.5 border border-slate-200/90 dark:border-slate-700 shadow-sm flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[11px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider truncate">
                    {SHOWCASE_TABS[activeTab].label}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-snug line-clamp-2">
                  {SHOWCASE_TABS[activeTab].caption}
                </p>
              </div>

              {/* Compact QR Code for phone scan */}
              <div className="shrink-0 flex items-center gap-2 pl-3 border-l border-slate-200 dark:border-slate-700">
                <a
                  href={SITE_CONFIG.googlePlayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 shadow-2xs hover:scale-105 transition-transform block"
                  title="Klik atau Scan QR untuk unduh di Google Play"
                >
                  <QRCodeSVG
                    value={SITE_CONFIG.googlePlayUrl}
                    size={46}
                    bgColor="transparent"
                    fgColor="#065A74"
                    level="M"
                  />
                </a>
                <div className="hidden sm:block text-left text-[10px] leading-tight">
                  <strong className="block text-slate-800 dark:text-slate-200">Scan QR</strong>
                  <span className="text-slate-400">Play Store</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
