"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Users,
  Sparkles,
  Download,
  Clock3,
  CalendarCheck,
  TrendingUp,
  ChevronDown,
} from "lucide-react";

import { HERO_SLIDES } from "@/lib/constants";
// ============================================
// REVOLUTION-STYLE HERO SLIDER
// Auto-play, arrows, dots, swipe support, particles
// ============================================

// Particle configs — decorative floating elements per slide
const PARTICLES = [
  { size: 6, top: "15%", left: "8%", delay: 0, duration: 7 },
  { size: 4, top: "35%", left: "3%", delay: 1.5, duration: 5 },
  { size: 8, top: "65%", left: "12%", delay: 0.8, duration: 9 },
  { size: 5, top: "80%", left: "5%", delay: 2.2, duration: 6 },
  { size: 7, top: "20%", right: "10%", delay: 0.3, duration: 8 },
  { size: 3, top: "50%", right: "6%", delay: 1.8, duration: 5.5 },
  { size: 9, top: "75%", right: "14%", delay: 0.6, duration: 7.5 },
  { size: 4, top: "40%", right: "3%", delay: 2.5, duration: 6.5 },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const total = HERO_SLIDES.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5500);
    return () => clearInterval(id);
  }, [next, paused]);

  // Touch / swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        next();
      } else {
        prev();
      }
    }
  };

  const slide = HERO_SLIDES[current];

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const [direction, setDirection] = useState(1);
  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };
  const handleNext = () => {
    setDirection(1);
    next();
  };
  const handlePrev = () => {
    setDirection(-1);
    prev();
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Slide utama"
    >
      {/* Background gradient */}
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={`bg-${current}`}
          custom={direction}
          variants={{
            enter: { opacity: 0 },
            center: { opacity: 1 },
            exit: { opacity: 0 },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} animated-gradient`}
        />
      </AnimatePresence>

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />

      {/* Floating decorative particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 backdrop-blur-sm pointer-events-none"
          style={{
            width: p.size * 4,
            height: p.size * 4,
            top: p.top,
            left: "left" in p ? p.left : undefined,
            right: "right" in p ? (p as { right: string }).right : undefined,
          }}
          animate={{
            y: [0, -20, 5, -15, 0],
            x: [0, 10, -5, 8, 0],
            opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
            scale: [1, 1.2, 0.9, 1.1, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large decorative rings */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-white/5 border border-white/10 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 border border-white/10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full bg-primary-500/5 border border-primary-500/10 pointer-events-none" />

      {/* Subtle modern dot pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />

      {/* Slide Content */}
      <div className="relative z-10 section-container h-full flex items-center py-20 lg:py-0 min-h-[100svh]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
          {/* Text content */}
          <div className="order-2 lg:order-1 space-y-6">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={`content-${current}`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/95 text-sm font-semibold border border-white/25 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-tight drop-shadow-sm [text-wrap:balance]"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg md:text-xl text-cyan-200 font-semibold"
                >
                  {slide.subtitle}
                </motion.p>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-white/80 text-sm sm:text-base max-w-lg leading-relaxed text-left [text-wrap:balance]"
                >
                  {slide.description}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-3"
                >
                  {slide.ctaHref.startsWith("http") ? (
                    <a
                      href={slide.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-500 text-black font-bold rounded-xl hover:bg-primary-400 hover:shadow-glow-green active:scale-95 transition-all duration-200 shadow-lg shadow-primary-500/20"
                    >
                      {slide.cta}
                      <ArrowRight size={18} />
                    </a>
                  ) : (
                    <Link
                      href={slide.ctaHref}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-500 text-black font-bold rounded-xl hover:bg-primary-400 hover:shadow-glow-green active:scale-95 transition-all duration-200 shadow-lg shadow-primary-500/20"
                    >
                      {slide.cta}
                      <ArrowRight size={18} />
                    </Link>
                  )}
                  {slide.ctaSecondaryHref.startsWith("http") ? (
                    <a
                      href={slide.ctaSecondaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-all duration-200 shadow-lg"
                    >
                      {slide.ctaSecondary}
                    </a>
                  ) : (
                    <Link
                      href={slide.ctaSecondaryHref}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/15 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/30 hover:bg-white/25 transition-all duration-200 shadow-lg"
                    >
                      {slide.ctaSecondary}
                    </Link>
                  )}
                </motion.div>

                {/* Trust stats (slide 1 only) */}
                {current === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.45 }}
                    className="flex items-center gap-6 pt-2"
                  >
                    {[
                      { label: "Anggota", value: "2.231+" },
                      { label: "Tahun Berdiri", value: "2017" },
                      { label: "Total Aset", value: "Rp90M+" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="text-white font-bold text-lg leading-none">
                          {s.value}
                        </div>
                        <div className="text-white/60 text-[11px] mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Visual side — logo/illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${current}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem] relative"
                >
                  {/* Glow ring behind image */}
                  <div className="absolute inset-0 rounded-3xl bg-white/5 blur-2xl scale-110 pointer-events-none" />

                  {current === 1 ? (
                    /* Madata Mobile app slide keeps the app logo */
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src="/madata-logo.png"
                        alt="Madata Mobile"
                        className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
                      />
                    </div>
                  ) : current === 2 ? (
                    /* Slide shows growth, savings & member prosperity */
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 ring-4 ring-white/10">
                      <img
                        src="https://images.unsplash.com/photo-1633158829875-e5316a358c6f?w=800&q=80&fm=jpg&fit=crop"
                        alt="Ilustrasi pertumbuhan simpanan dan kemakmuran anggota"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  ) : (
                    /* Other slides show the actual cooperative building */
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 ring-4 ring-white/10">
                      <img
                        src="/office/kantor-pusat-1.jpg"
                        alt="Gedung Kantor Koperasi Mandara Sedana Kuta"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  {/* Floating badges — content matches each slide's theme */}
                  {current === 0 && (
                    <>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                          <Users className="w-5 h-5 text-primary-700" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-900 leading-none">
                            2.231+
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            Anggota Aktif
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-primary-500 rounded-2xl shadow-2xl px-4 py-2.5 flex items-center gap-2 border-2 border-white/40"
                      >
                        <TrendingUp className="w-4 h-4 text-slate-900 shrink-0" />
                        <div className="text-xs font-extrabold text-slate-900 leading-none">
                          Rp90M+ Aset
                        </div>
                      </motion.div>
                    </>
                  )}

                  {current === 1 && (
                    <>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                          <Download className="w-5 h-5 text-primary-700" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-900 leading-none">
                            Gratis
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            Download di Play Store
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-primary-500 rounded-2xl shadow-2xl px-4 py-2.5 flex items-center gap-2 border-2 border-white/40"
                      >
                        <Clock3 className="w-4 h-4 text-slate-900 shrink-0" />
                        <div className="text-xs font-extrabold text-slate-900 leading-none">
                          Layanan 24/7
                        </div>
                      </motion.div>
                    </>
                  )}

                  {current === 2 && (
                    <>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                        className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3 border border-slate-100"
                      >
                        <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                          <CalendarCheck className="w-5 h-5 text-primary-700" />
                        </div>
                        <div>
                          <div className="text-sm font-extrabold text-slate-900 leading-none">
                            Aman &amp; Terpercaya
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium">
                            Koperasi Berbadan Hukum
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-primary-500 rounded-2xl shadow-2xl px-4 py-2.5 flex items-center gap-2 border-2 border-white/40"
                      >
                        <Sparkles className="w-4 h-4 text-slate-900 shrink-0" />
                        <div className="text-xs font-extrabold text-slate-900 leading-none">
                          Bunga Kompetitif
                        </div>
                      </motion.div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Slide sebelumnya"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25 hover:scale-110 transition-all duration-200"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={handleNext}
        aria-label="Slide berikutnya"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/25 hover:scale-110 transition-all duration-200"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Pergi ke slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-8 h-2.5 bg-primary-400 shadow-glow-green"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>


      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        {!paused && (
          <motion.div
            key={current}
            className="h-full bg-gradient-to-r from-primary-500 to-cyan-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.5, ease: "linear" }}
          />
        )}
      </div>
    </section>
  );
}
