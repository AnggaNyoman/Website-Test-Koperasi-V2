"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  UserPlus,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
// ============================================
// CTA SECTION — "Siap Bergabung?"
// ============================================

export default function CTASection() {
  return (
    <section className="section-py relative overflow-hidden">
      {/* Radiant vibrant gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600 animated-gradient" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Modern pattern overlay */}
      <div className="absolute inset-0 pattern-dots opacity-15 pointer-events-none" />

      {/* Animated floating shapes */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-primary-500 pointer-events-none"
      />
      <motion.div
        animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-1/4 w-4 h-4 rounded-full bg-white/20 pointer-events-none"
      />
      <motion.div
        animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-16 left-1/3 w-3 h-3 rounded-full bg-primary-400/30 pointer-events-none"
      />

      {/* Border accent top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="section-container relative z-10 text-center space-y-10">
        {/* Icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex justify-center"
        >
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-white/10 animate-ping" />
            <div className="w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
              <Sparkles size={28} className="text-primary-300" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-sm tracking-tight [text-wrap:balance]">
            Siap Bergabung Bersama Kami?
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Jadilah bagian dari keluarga besar Koperasi Mandara Sedana Kuta.
            Wujudkan impian keuangan Anda bersama lebih dari{" "}
            <span className="text-primary-300 font-bold">2.231 anggota aktif</span>{" "}
            di seluruh Bali.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/daftar-anggota"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-primary-500 text-black font-bold text-base rounded-2xl hover:bg-primary-400 active:scale-95 transition-all duration-200 shadow-xl shadow-primary-500/25 hover:shadow-glow-green"
          >
            <UserPlus size={20} />
            Daftar Anggota Sekarang
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white/15 backdrop-blur-sm text-white font-semibold text-base rounded-2xl border border-white/30 hover:bg-white/25 active:scale-95 transition-all duration-200 shadow-lg"
          >
            <Phone size={20} />
            Hubungi via WhatsApp
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/70 text-xs"
        >
          {[
            "Badan Hukum Resmi Kemenkop",
            "Diawasi Dinas Koperasi Prov. Bali",
            "Bunga Simpanan Kompetitif",
            "Layanan Digital 24/7",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-primary-400 shrink-0" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
