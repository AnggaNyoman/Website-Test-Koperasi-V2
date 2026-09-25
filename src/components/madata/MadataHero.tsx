"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE_CONFIG } from "@/lib/constants";
import { Star, ShieldCheck, Download, Smartphone } from "lucide-react";

export default function MadataHero() {
  const [os, setOs] = useState<"android" | "ios" | "other">("other");
  const [slide, setSlide] = useState(0);
  const screens = [
    { src: "/app/madata-showcase-1.png", title: "Beranda & Saldo" },
    { src: "/app/madata-showcase-2.png", title: "Bayar Tagihan PPOB" },
    { src: "/app/madata-showcase-3.png", title: "Transfer & Pembayaran" },
    { src: "/app/madata-showcase-4.png", title: "Produk Simpan Pinjam" },
    { src: "/app/madata-showcase-5.png", title: "Auto Debet Terjadwal" },
    { src: "/app/madata-showcase-6.png", title: "Merchant Komunitas Koperasi" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [screens.length]);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/android/i.test(userAgent)) {
      setOs("android");
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      setOs("ios");
    }
  }, []);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-teal-50/40 to-cyan-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 text-slate-900 dark:text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200/80 dark:border-slate-800">
      {/* Subtle modern dot grid */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Smart OS Badge */}
          {os === "android" && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs font-semibold mb-6">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Perangkat Android Terdeteksi — Tersedia di Google Play</span>
            </div>
          )}
          {os === "ios" && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-800 dark:text-blue-300 text-xs font-semibold mb-6">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Perangkat iOS Terdeteksi — Versi iOS Segera Hadir</span>
            </div>
          )}

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="w-12 h-12 relative rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 bg-white p-1">
              <Image
                src="/madata-logo.png"
                alt="Madata Mobile Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs uppercase tracking-wider font-extrabold text-teal-700 dark:text-cyan-400">
              Aplikasi Mobile Banking Resmi
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight mb-4 leading-tight text-slate-900 dark:text-white [text-wrap:balance]">
            Madata Mobile <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600">
              Koperasi Dalam Genggaman
            </span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Akses seluruh layanan simpan pinjam Koperasi Mandara Sedana Kuta kapan pun dan di mana pun. Cek saldo, transfer, bayar tagihan PPOB hingga pembelian pulsa dalam satu aplikasi praktis.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href={SITE_CONFIG.googlePlayUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:-translate-y-0.5 shadow-md shadow-black/10"
            >
              <img
                src="/badges/google-play-badge.svg"
                alt="Unduh di Google Play"
                className="h-12 sm:h-14 w-auto"
              />
            </a>

            <div className="relative inline-block opacity-50 cursor-not-allowed">
              <img
                src="/badges/app-store-badge.svg"
                alt="Segera hadir di App Store"
                className="h-12 sm:h-14 w-auto grayscale"
              />
              <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow">
                Segera
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Aman &amp; Terenkripsi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Rating 4.8 di Google Play Store</span>
            </div>
          </div>
        </div>

        {/* Right Column: Authentic Smartphone Mockup Frame (Border HP) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[275px] sm:max-w-[295px]">
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-teal-500/20 dark:bg-cyan-500/15 blur-2xl rounded-[44px] scale-95 pointer-events-none" />

            {/* Smartphone Outer Chassis & Clean Border HP */}
            <div className="relative rounded-[42px] sm:rounded-[46px] p-[9px] sm:p-[11px] bg-slate-900 dark:bg-slate-950 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border-[2.5px] border-slate-750 dark:border-slate-800 ring-1 ring-black/40">
              {/* Subtle Top Speaker Slit */}
              <div className="absolute top-2.5 inset-x-0 z-20 flex justify-center pointer-events-none">
                <div className="w-14 h-1 rounded-full bg-slate-800 dark:bg-slate-700/80 border border-slate-700/40" />
              </div>

              {/* Inner Screen Bezel */}
              <div className="relative rounded-[32px] sm:rounded-[36px] overflow-hidden bg-slate-950 aspect-[9/19] shadow-inner">
                {/* Slides Container */}
                <div className="relative w-full h-full">
                  {screens.map((item, i) => (
                    <div
                      key={item.src}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        i === slide ? "opacity-100" : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        quality={95}
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 275px, 295px"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Phone Bottom Home Swipe Bar */}
                <div className="absolute bottom-1.5 inset-x-0 z-20 flex justify-center pointer-events-none">
                  <div className="w-24 h-1 bg-white/50 dark:bg-white/40 rounded-full shadow-xs" />
                </div>
              </div>
            </div>

            {/* Slide indicators with caption */}
            <div className="mt-4 text-center">
              <p className="text-xs font-bold text-teal-800 dark:text-cyan-300 mb-2">
                {screens[slide].title}
              </p>
              <div className="flex items-center justify-center gap-1.5">
                {screens.map((item, i) => (
                  <button
                    key={item.src}
                    onClick={() => setSlide(i)}
                    aria-label={`Tampilkan layar ${item.title}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === slide
                        ? "w-6 bg-teal-600 dark:bg-cyan-400"
                        : "w-1.5 bg-slate-300 dark:bg-white/40 hover:bg-slate-400 dark:hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
