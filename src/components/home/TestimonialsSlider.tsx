"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
// ============================================
// TESTIMONIALS — Grid 3-up on desktop, slider on mobile
// ============================================

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const testimonial = TESTIMONIALS[current];

  // For desktop: show 3 at a time in a grid
  const getThreeIndices = () => {
    return [
      current % total,
      (current + 1) % total,
      (current + 2) % total,
    ];
  };

  const GRADIENT_AVATARS = [
    "from-teal-500 to-cyan-400",
    "from-primary-500 to-cyan-500",
    "from-amber-500 to-orange-400",
    "from-purple-500 to-pink-500",
    "from-emerald-500 to-teal-400",
  ];

  return (
    <section
      ref={ref}
      className="section-py bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12 space-y-3"
        >
          <span className="badge bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
            ⭐ Testimoni Anggota
          </span>
          <h2 className="section-title">
            Kata Mereka tentang{" "}
            <span className="text-gradient">Mandara Sedana Kuta</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Kepercayaan lebih dari 2.231 anggota aktif menjadi kebanggaan kami
          </p>
        </motion.div>

        {/* DESKTOP: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {getThreeIndices().map((idx, pos) => {
            const t = TESTIMONIALS[idx];
            const avatarGradient =
              GRADIENT_AVATARS[idx % GRADIENT_AVATARS.length];
            return (
              <motion.div
                key={`${idx}-${pos}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: pos * 0.1, duration: 0.5 }}
                className={`relative bg-white dark:bg-slate-800/60 rounded-2xl border p-6 flex flex-col justify-between gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full ${
                  pos === 0
                    ? "border-primary-200 dark:border-primary-700/40 ring-1 ring-primary-200/50 dark:ring-primary-700/30"
                    : "border-slate-100 dark:border-slate-700/50"
                }`}
              >
                {/* Quote icon */}
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  <Quote
                    size={18}
                    className="text-primary-500 fill-primary-200 dark:fill-primary-700"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed italic flex-1">
                  &ldquo;{t.content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-700/50">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${avatarGradient} flex items-center justify-center text-white font-bold text-base shrink-0`}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm leading-none">
                      {t.name}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {t.role}
                    </p>
                    {t.location && (
                      <p className="text-xs text-cyan-600 dark:text-cyan-400 mt-0.5 font-medium">
                        📍 {t.location}
                      </p>
                    )}
                  </div>
                </div>

                {/* Featured badge */}
                {pos === 0 && (
                  <span className="absolute top-4 right-4 text-[10px] bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-700/40 px-2 py-0.5 rounded-full font-bold">
                    Terbaru
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE: Single card slider */}
        <div className="md:hidden relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/50 p-6 shadow-lg flex flex-col gap-4"
            >
              {/* Quote icon */}
              <div className="flex justify-center">
                <div className="w-11 h-11 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <Quote size={20} className="text-primary-500 fill-primary-200" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-slate-600 dark:text-slate-200 text-sm md:text-base leading-relaxed italic text-center">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                    GRADIENT_AVATARS[current % GRADIENT_AVATARS.length]
                  } flex items-center justify-center text-white font-bold text-xl`}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
                  {testimonial.role}
                </p>
                {testimonial.location && (
                  <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium">
                    📍 {testimonial.location}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-card-hover border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-cyan-400 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Testimoni berikutnya"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-card-hover border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-cyan-400 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimoni ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2.5 bg-primary-500 shadow-glow-green"
                  : "w-2.5 h-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

        {/* Desktop navigation arrows below grid */}
        <div className="hidden md:flex justify-center gap-3 mt-6">
          <button
            onClick={prev}
            aria-label="Testimoni sebelumnya"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Testimoni berikutnya"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-card border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-md transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
