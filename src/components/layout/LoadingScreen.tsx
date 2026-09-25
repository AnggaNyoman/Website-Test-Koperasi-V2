"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  CheckCircle2,
  Lock,
  Wifi,
} from "lucide-react";

// ============================================
// ULTRA-PREMIUM "WAH & RAME TAPI MINIMALIS" LOADING SCREEN
// 60 FPS Engine + Dynamic Telemetry + Cosmic Rings + Ambient Mesh
// ============================================

const STATUS_STEPS = [
  { threshold: 0, text: "Menginisialisasi modul perbankan digital..." },
  { threshold: 25, text: "Menghubungkan jaringan aman terenkripsi..." },
  { threshold: 55, text: "Memuat portofolio simpanan & pinjaman..." },
  { threshold: 80, text: "Sinkronisasi layanan Madata Mobile..." },
  { threshold: 96, text: "Sistem siap. Selamat datang!" },
];

// Partikel ambient melayang di latar belakang
const AMBIENT_PARTICLES = [
  { id: 1, size: 4, x: "15%", y: "20%", duration: 5.2, delay: 0 },
  { id: 2, size: 6, x: "82%", y: "25%", duration: 6.5, delay: 0.8 },
  { id: 3, size: 3, x: "22%", y: "78%", duration: 5.8, delay: 1.2 },
  { id: 4, size: 5, x: "78%", y: "72%", duration: 6.0, delay: 0.4 },
  { id: 5, size: 4, x: "48%", y: "12%", duration: 5.5, delay: 1.5 },
  { id: 6, size: 5, x: "12%", y: "55%", duration: 6.2, delay: 0.7 },
  { id: 7, size: 4, x: "88%", y: "50%", duration: 5.0, delay: 1.0 },
];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [statusText, setStatusText] = useState(STATUS_STEPS[0].text);
  const animFrameRef = useRef<number | null>(null);

  // Kunci scroll saat loading
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  // ENGINE 60 FPS ULTRA SMOOTH
  useEffect(() => {
    const startTime = performance.now();
    const duration = 1600; // 1.6 detik: ritme pas untuk mengamati animasi yang kaya dan meriah

    // Easing natural quintic
    const easeOutQuint = (t: number) => 1 - Math.pow(1 - t, 5);

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const normalizedTime = Math.min(1, elapsed / duration);
      const easedProgress = Math.min(100, Math.round(easeOutQuint(normalizedTime) * 100));

      setProgress(easedProgress);

      for (let i = STATUS_STEPS.length - 1; i >= 0; i--) {
        if (easedProgress >= STATUS_STEPS[i].threshold) {
          setStatusText(STATUS_STEPS[i].text);
          break;
        }
      }

      if (normalizedTime < 1) {
        animFrameRef.current = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setVisible(false);
        }, 400);
      }
    };

    animFrameRef.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  const isCelebration = progress >= 99;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="futuristic-loading-screen"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.7,
              ease: [0.76, 0, 0.24, 1], // Luxury curtain lift
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F8FAFC] text-slate-800 select-none overflow-hidden"
        >
          {/* ============================================================ */}
          {/* LATAR BELAKANG: MESH GRID HALUS + MULTI-AURORA GLOW (RAME TAPI SEJUK) */}
          {/* ============================================================ */}
          
          {/* Latar Belakang Gradasi Halus */}
          <div className="absolute inset-0 bg-gradient-to-b from-teal-50/60 via-slate-50 to-cyan-50/50 pointer-events-none" />

          {/* Pola Grid Geometris Presisi (High-Tech Minimalist Grid) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#065a740a_1px,transparent_1px),linear-gradient(to_bottom,#065a740a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

          {/* Fluid Aurora Orbs (Warna Emas, Zamrud, Cyan, & Teal) */}
          <motion.div
            animate={{
              scale: isCelebration ? 1.5 : [1, 1.25, 1],
              opacity: isCelebration ? 0.65 : [0.35, 0.55, 0.35],
              rotate: [0, 90, 180],
            }}
            transition={{
              duration: 8,
              repeat: isCelebration ? 0 : Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-[440px] h-[440px] sm:w-[540px] sm:h-[540px] rounded-full bg-gradient-to-tr from-teal-400/25 via-emerald-400/20 to-cyan-400/25 blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1.2, 0.9, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute w-80 h-80 rounded-full bg-gradient-to-bl from-amber-300/25 via-teal-300/15 to-sky-300/20 blur-3xl pointer-events-none"
          />

          {/* Partikel Cahaya Mengambang Halus */}
          {AMBIENT_PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              animate={{
                y: [0, -18, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: "easeInOut",
              }}
              style={{
                width: p.size,
                height: p.size,
                left: p.x,
                top: p.y,
              }}
              className="absolute rounded-full bg-teal-500/30 blur-[0.5px] pointer-events-none"
            />
          ))}

          {/* ============================================================ */}
          {/* KONTEN UTAMA */}
          {/* ============================================================ */}
          <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-lg w-full">
            
            {/* 1. TOP STATUS BADGE DENGAN INDIKATOR RADAR LIVE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200/90 text-[11px] font-semibold text-slate-600 mb-6 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-wide">KOPERASI MANDARA SEDANA KUTA</span>
              <span className="text-slate-300">•</span>
              <span className="text-teal-700 font-bold flex items-center gap-1">
                <Lock className="w-3 h-3 text-teal-600" />
                SISTEM ONLINE
              </span>
            </motion.div>

            {/* 2. PANGGUNG LOGO UTAMA: MINIMALIS, TENANG & ELEGAN */}
            <div className="relative mb-5 flex items-center justify-center">
              
              {/* Soft Breathing Ambient Halo (Tenang, Halus, Tidak Menyilaukan) */}
              <motion.div
                animate={{
                  scale: isCelebration ? 1.25 : [0.95, 1.08, 0.95],
                  opacity: isCelebration ? 0.45 : [0.15, 0.28, 0.15],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-teal-400/25 to-cyan-400/25 blur-2xl pointer-events-none"
              />

              {/* LOGO RESMI: BERSIH, MINIMALIS & MEWAH */}
              <motion.div
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{
                  scale: isCelebration ? 1.05 : [1, 1.02, 1],
                  opacity: 1,
                }}
                transition={{
                  scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 },
                }}
                className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center z-10"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/logo.png"
                    alt="Logo Koperasi Mandara Sedana Kuta"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-contain drop-shadow-[0_8px_20px_rgba(6,90,116,0.16)]"
                    priority
                  />

                  {/* Cahaya Pendar Lembut dari Titik Tengah (Minimalis, Tenang & Enak Dipandang) */}
                  <motion.div
                    animate={{
                      scale: [0.9, 1.15, 0.9],
                      opacity: [0.08, 0.22, 0.08],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.2,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(10,188,240,0.35)_0%,rgba(6,90,116,0.12)_45%,transparent_75%)] blur-lg pointer-events-none -z-10"
                  />
                </div>
              </motion.div>
            </div>

            {/* 3. NAMA BRAND & MOTTO DENGAN SENTUHAN EMAS */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="mb-4"
            >
              <h2 className="text-base sm:text-lg font-black text-slate-800 tracking-wider uppercase font-sans">
                Koperasi Mandara Sedana Kuta
              </h2>
              <div className="flex items-center justify-center gap-1.5 mt-1">
                <span className="h-[1px] w-6 bg-gradient-to-r from-transparent to-amber-400" />
                <p className="text-xs font-bold text-teal-700 tracking-widest uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                  <span>Bersama Wujudkan Impian</span>
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-400" />
                </p>
                <span className="h-[1px] w-6 bg-gradient-to-l from-transparent to-amber-400" />
              </div>
            </motion.div>

            {/* 4. LIVE TELEMETRY CHIPS (RAME, MODERN, BERGERAK TAPI TETAP RAPI) */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-sm mb-4">
              {/* Chip 1: Jaringan */}
              <div
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] font-semibold transition-all duration-300 border ${
                  progress >= 25
                    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/30 shadow-xs"
                    : "bg-slate-100/80 text-slate-400 border-slate-200"
                }`}
              >
                <Wifi className={`w-3 h-3 ${progress >= 25 ? "text-emerald-600" : "text-slate-400"}`} />
                <span>SSL Secure</span>
                {progress >= 25 && <CheckCircle2 className="w-3 h-3 text-emerald-600 ml-0.5" />}
              </div>

              {/* Chip 2: Madata Cloud */}
              <div
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] font-semibold transition-all duration-300 border ${
                  progress >= 60
                    ? "bg-teal-500/10 text-teal-700 border-teal-500/30 shadow-xs"
                    : "bg-slate-100/80 text-slate-400 border-slate-200"
                }`}
              >
                <Zap className={`w-3 h-3 ${progress >= 60 ? "text-teal-600 fill-teal-600" : "text-slate-400"}`} />
                <span>Madata Core</span>
                {progress >= 60 && <CheckCircle2 className="w-3 h-3 text-teal-600 ml-0.5" />}
              </div>

              {/* Chip 3: Legalitas */}
              <div
                className={`flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-[10px] font-semibold transition-all duration-300 border ${
                  progress >= 85
                    ? "bg-cyan-500/10 text-cyan-800 border-cyan-500/30 shadow-xs"
                    : "bg-slate-100/80 text-slate-400 border-slate-200"
                }`}
              >
                <ShieldCheck className={`w-3 h-3 ${progress >= 85 ? "text-cyan-600" : "text-slate-400"}`} />
                <span>Terverifikasi</span>
                {progress >= 85 && <CheckCircle2 className="w-3 h-3 text-cyan-600 ml-0.5" />}
              </div>
            </div>

            {/* 5. BILAH PROGRES KEKINIAN DENGAN GLOWING SPARK TIP */}
            <div className="w-full max-w-sm flex flex-col items-center gap-2">
              <div className="w-full h-2 bg-slate-200/90 rounded-full overflow-hidden relative shadow-inner p-[1px] border border-slate-200">
                <div
                  className="h-full bg-gradient-to-r from-teal-600 via-cyan-500 to-emerald-500 rounded-full transition-[width] duration-75 ease-linear relative"
                  style={{ width: `${progress}%` }}
                >
                  {/* Titik Percikan Cahaya Ujung Progres */}
                  {progress > 4 && progress < 100 && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(10,188,240,1)] border border-teal-300" />
                  )}
                </div>
              </div>

              {/* Status Teks Dinamis & Persentase Tabular Mono */}
              <div className="flex items-center justify-between w-full px-1">
                <span className="text-[11px] font-medium text-slate-600 tracking-wide flex items-center gap-1.5 truncate">
                  {progress === 100 ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  ) : (
                    <Sparkles className="w-3 h-3 text-teal-600 animate-spin shrink-0" />
                  )}
                  <span className="truncate">{statusText}</span>
                </span>

                <span className="font-mono text-xs font-extrabold text-teal-800 bg-white px-2.5 py-0.5 rounded-md border border-slate-200/80 shadow-2xs tabular-nums shrink-0 ml-2">
                  {progress}%
                </span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
