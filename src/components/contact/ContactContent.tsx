"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Clock,
  MessageCircle,
  Building,
  Phone,
  ExternalLink,
  Navigation,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  Send,
  Calendar,
  Share2,
  Users,
} from "lucide-react";
import { SITE_CONFIG, CONTACT, WHATSAPP_URL } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactContent() {
  const [activeBranch, setActiveBranch] = useState<"pusat" | "cabang">("pusat");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Live operational hours calculation in WITA (UTC+8)
  const officeStatus = useMemo(() => {
    try {
      const now = new Date();
      // Convert to Bali / WITA time (UTC+8)
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const witaDate = new Date(utc + 3600000 * 8);
      const day = witaDate.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = witaDate.getHours();
      const minute = witaDate.getMinutes();
      const timeInMinutes = hour * 60 + minute;

      // Monday - Friday (1 - 5): 08:00 - 15:30 (480 - 930)
      // Saturday (6): 08:00 - 13:00 (480 - 780)
      // Sunday (0): Closed
      if (day >= 1 && day <= 5) {
        if (timeInMinutes >= 480 && timeInMinutes <= 930) {
          return { isOpen: true, text: "Buka Sekarang (08:00 – 15:30 WITA)", badge: "bg-emerald-500" };
        }
      } else if (day === 6) {
        if (timeInMinutes >= 480 && timeInMinutes <= 780) {
          return { isOpen: true, text: "Buka Layanan Terbatas (08:00 – 13:00 WITA)", badge: "bg-emerald-500" };
        }
      }
      return { isOpen: false, text: "Sedang Tutup • Buka kembali hari kerja 08:00 WITA", badge: "bg-amber-500" };
    } catch {
      return { isOpen: true, text: "Jam Kerja: 08:00 – 15:30 WITA", badge: "bg-emerald-500" };
    }
  }, []);

  const branchData = {
    pusat: {
      name: "Kantor Pusat Legian",
      type: "Kantor Pusat Operasional & Manajemen",
      address: SITE_CONFIG.offices.pusat.address,
      city: SITE_CONFIG.offices.pusat.city,
      coordinates: SITE_CONFIG.offices.pusat.coordinates,
      mapsUrl: SITE_CONFIG.offices.pusat.mapsUrl,
      googleMapsDirect: SITE_CONFIG.offices.pusat.mapsDirect,
      phone: CONTACT.phoneFormatted,
      image: "/office/kantor-pusat-2.jpg",
      facilities: [
        "Customer Service & Teller Lengkap",
        "Ruang Konsultasi Finansial VIP",
        "Area Parkir Kendaraan Nyaman",
        "Ruang Pelayanan Ber-AC & Nyaman",
        "Akses Wi-Fi Khusus Anggota",
      ],
      description:
        "Berada di kawasan strategis Legian Kuta. Melayani seluruh administrasi keanggotaan, pembukaan simpanan deposito SIJAKA, pengajuan fasilitas pinjaman modal, serta layanan kas tunai harian anggota dengan pelayanan cepat dan terpercaya.",
    },
    cabang: {
      name: "Kantor Cabang Sesetan",
      type: "Kantor Pelayanan Anggota Denpasar",
      address: SITE_CONFIG.offices.cabang.address,
      city: SITE_CONFIG.offices.cabang.city,
      coordinates: SITE_CONFIG.offices.cabang.coordinates,
      mapsUrl: SITE_CONFIG.offices.cabang.mapsUrl,
      googleMapsDirect: SITE_CONFIG.offices.cabang.mapsDirect,
      phone: CONTACT.phoneFormatted,
      image: "/office/kantor-pusat-1.jpg",
      facilities: [
        "Layanan Simpanan & Setoran Kas",
        "Konsultasi Pengajuan Pinjaman",
        "Aktivasi Aplikasi Madata Mobile",
        "Lokasi Mudah Dijangkau di Sesetan",
        "Area Parkir Sepeda Motor & Mobil",
      ],
      description:
        "Memudahkan akses pelayanan bagi seluruh anggota yang berdomisili di Denpasar Selatan dan sekitarnya. Menyediakan pelayanan transaksi harian, konsultasi pengembangan usaha mikro, dan pembukaan rekening simpanan dengan standar kenyamanan terbaik.",
    },
  };

  const currentBranch = branchData[activeBranch];

  const quickTopics = [
    {
      title: "Pinjaman Bunga 0%",
      desc: "Plafon Rp5jt & Rp10jt cicilan flat tanpa bunga",
      waText: "Halo Admin KSP Mandara Sedana Kuta, saya ingin konsultasi mengenai Pinjaman Modal Koperasi Bunga 0%. Mohon info persyaratan dan jadwalnya.",
      icon: "💳",
      color: "hover:border-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20",
    },
    {
      title: "Simpanan & Deposito",
      desc: "SIJAKA bunga kompetitif hingga 6,2% p.a.",
      waText: "Halo Admin KSP Mandara Sedana Kuta, saya tertarik membuka Simpanan Berjangka SIJAKA. Mohon info suku bunga dan persyaratannya.",
      icon: "💰",
      color: "hover:border-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20",
    },
    {
      title: "Daftar Anggota Baru",
      desc: "SIPO & SIWA awal hanya Rp10.000 resmi",
      waText: "Halo Admin KSP Mandara Sedana Kuta, saya ingin mendaftar menjadi anggota koperasi baru. Bagaimana prosedur dan kelengkapan berkasnya?",
      icon: "📝",
      color: "hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-teal-950/20",
    },
    {
      title: "Madata Mobile",
      desc: "Aktivasi akun, transaksi, dan panduan fitur",
      waText: "Halo Admin KSP Mandara Sedana Kuta, saya ingin bantuan mengenai aktivasi aplikasi Madata Mobile.",
      icon: "📱",
      color: "hover:border-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-950/20",
    },
  ];

  const contactFaqs = [
    {
      q: "Apakah saya harus datang langsung ke kantor untuk mendaftar sebagai anggota?",
      a: "Tidak harus datang langsung. Anda dapat melakukan pendaftaran secara daring melalui formulir pendaftaran di website ini atau melalui aplikasi Madata Mobile. Staf kami akan memverifikasi berkas identitas Anda secara aman dan segera menghubungi Anda kembali.",
    },
    {
      q: "Berapa jam operasional layanan kas di kantor pusat dan cabang?",
      a: "Layanan kas dan teller beroperasi setiap hari kerja Senin hingga Jumat pukul 08:00 – 15:30 WITA, dan hari Sabtu pukul 08:00 – 13:00 WITA. Pada hari Minggu serta hari libur nasional kantor tutup.",
    },
    {
      q: "Apakah kantor cabang Sesetan melayani seluruh pengajuan fasilitas pinjaman?",
      a: "Ya, kantor cabang Sesetan melayani konsultasi serta penerimaan berkas pengajuan seluruh 12 jenis fasilitas pinjaman, mulai dari Pinjaman Modal Koperasi Bunga 0%, Mikro PINJARO, hingga Pinjaman Usaha dan Yadnya.",
    },
    {
      q: "Bagaimana cara tercepat untuk berkonsultasi dengan customer service?",
      a: "Cara tercepat adalah melalui WhatsApp Resmi kami di +62 813-9430-6999 pada jam kerja. Tim Customer Service kami siap merespons setiap pertanyaan anggota secara ramah dan profesional.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-16 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* ============================================================ */}
      {/* 1. INTERACTIVE LIVE STATUS & TOP CHANNEL CARDS */}
      {/* ============================================================ */}
      <div>
        {/* Live Status Pill */}
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6 bg-slate-100 dark:bg-slate-800/80 p-3 sm:px-5 rounded-2xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200">
            <span className={`w-2.5 h-2.5 rounded-full ${officeStatus.badge} animate-pulse shrink-0`} />
            <span>{officeStatus.text}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>Zona Waktu Bali (WITA / UTC+8)</span>
          </div>
        </div>

        {/* 4 Interactive Touchpoint Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                  Respon Cepat
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                  Online
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                WhatsApp Resmi
              </h3>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 mt-1">
                {SITE_CONFIG.whatsappFormatted}
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500">
              <span>Chat WhatsApp Sekarang</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 2: Layanan Kantor & Tatap Muka */}
          <a
            href="#lokasi-kantor"
            className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-700 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Building className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-cyan-600 dark:text-cyan-400">
                  Tatap Muka
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300">
                  2 Kantor
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Kantor Operasional
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Pusat Legian &amp; Cabang Sesetan
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-teal-700 dark:text-teal-400 group-hover:text-teal-600">
              <span>Lihat Lokasi &amp; Peta</span>
              <Navigation className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/10 dark:bg-teal-500/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-emerald-700 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-teal-600 dark:text-teal-400">
                  Surat &amp; Dokumen
                </span>
                <span className="text-[10px] font-semibold text-slate-400">Resmi</span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-[13px] break-all" title={SITE_CONFIG.email}>
                {SITE_CONFIG.email}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Korespondensi formal manajemen
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-teal-700 dark:text-teal-400 group-hover:text-teal-600">
              <span>Kirim Email</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>

          {/* Card 4: Media Sosial Resmi (YouTube, Instagram, Facebook) */}
          <div className="group relative bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 via-rose-500/10 to-blue-500/10 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-rose-600 to-blue-600 text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                <Share2 className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[11px] uppercase font-bold tracking-wider text-rose-600 dark:text-rose-400">
                  Media Sosial Resmi
                </span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300">
                  3 Kanal
                </span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Kanal Digital Koperasi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                YouTube, Instagram &amp; Facebook
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 dark:text-slate-300">
                Pilih Platform:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={SITE_CONFIG.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buka YouTube: KOPERASI MADATA CHANNEL"
                  aria-label="YouTube KOPERASI MADATA CHANNEL"
                  className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/60 text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href={`https://instagram.com/${SITE_CONFIG.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buka Instagram: @koperasimandarasedanakuta"
                  aria-label="Instagram Koperasi Mandara Sedana Kuta"
                  className="w-9 h-9 rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={`https://facebook.com/${SITE_CONFIG.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Buka Facebook: Koperasi Mandara Sedana Kuta"
                  aria-label="Facebook Koperasi Mandara Sedana Kuta"
                  className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-xs"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. QUICK WHATSAPP INQUIRY PILLS */}
      {/* ============================================================ */}
      <div className="bg-gradient-to-br from-teal-900 via-slate-900 to-cyan-950 rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-teal-800/40">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pattern-dots opacity-15 pointer-events-none" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-800/60 text-teal-300 text-xs font-semibold mb-2 border border-teal-700/50">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Layanan Kilat Anggota
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Pilih Topik &amp; Konsultasi Langsung
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 text-left leading-relaxed [text-wrap:pretty]">
                Pilih topik di bawah untuk langsung terhubung ke staf Customer Service koperasi dengan pesan pembuka otomatis.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-500 hover:bg-primary-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shrink-0 w-fit"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Buka WhatsApp Umum</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {quickTopics.map((topic, i) => (
              <a
                key={i}
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(topic.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex flex-col justify-between group cursor-pointer ${topic.color}`}
              >
                <div>
                  <div className="text-2xl mb-2">{topic.icon}</div>
                  <h4 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                    {topic.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-0.5 leading-snug">{topic.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-teal-300 font-semibold">
                  <span>Chat Topik Ini</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE OFFICE SHOWCASE (PUSAT & SESETAN) */}
      {/* ============================================================ */}
      <div id="lokasi-kantor" className="space-y-6 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-800 dark:text-cyan-300 text-xs font-semibold mb-2 border border-cyan-200 dark:border-cyan-700/50">
            <Building className="w-3.5 h-3.5" />
            Kunjungan Tatap Muka
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Lokasi Kantor &amp; Pelayanan Kami
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1.5 text-center leading-relaxed [text-wrap:pretty]">
            Kunjungi kantor kami untuk bertatap muka langsung dengan staf profesional, pengurusan bilyet simpanan deposito resmi, dan verifikasi berkas permohonan pinjaman modal.
          </p>
        </div>

        {/* Tab Segmented Control */}
        <div className="flex justify-center px-2">
          <div className="inline-flex flex-col sm:flex-row p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-inner max-w-full w-full sm:w-auto gap-1 sm:gap-0">
            <button
              type="button"
              onClick={() => setActiveBranch("pusat")}
              className={`flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeBranch === "pusat"
                  ? "bg-white dark:bg-slate-700 text-teal-700 dark:text-teal-300 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Building className="w-4 h-4 shrink-0" />
              <span>Kantor Pusat Legian (Kuta)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveBranch("cabang")}
              className={`flex items-center justify-center gap-2 px-4 sm:px-8 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeBranch === "cabang"
                  ? "bg-white dark:bg-slate-700 text-cyan-700 dark:text-cyan-300 shadow-sm"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <Building className="w-4 h-4 shrink-0" />
              <span>Kantor Cabang Sesetan (Denpasar)</span>
            </button>
          </div>
        </div>

        {/* Branch Interactive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBranch}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            {/* Left Column: Office Photo & Information */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300">
                    {currentBranch.type}
                  </span>
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                    {officeStatus.isOpen ? "Buka Hari Ini" : "Tutup"}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {currentBranch.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed text-left [text-wrap:pretty]">
                  {currentBranch.description}
                </p>

                {/* Building Photo in HD */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 my-5 group">
                  <Image
                    src={currentBranch.image}
                    alt={`Gedung ${currentBranch.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                    <span className="flex items-center gap-1.5 drop-shadow-sm">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {currentBranch.city}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-mono">
                      GPS: {currentBranch.coordinates}
                    </span>
                  </div>
                </div>

                {/* Address & Quick Contacts */}
                <div className="space-y-3 bg-slate-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-700/60 text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">Alamat Lengkap</span>
                      <span className="text-slate-600 dark:text-slate-300 leading-snug block">
                        {currentBranch.address}, {currentBranch.city}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    <MessageCircle className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 block">Layanan WhatsApp Resmi</span>
                      <span className="text-slate-600 dark:text-slate-300 block">
                        {currentBranch.phone} (Khusus Pesan WhatsApp)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Key Facilities Badges */}
                <div className="mt-4">
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block mb-2 uppercase tracking-wider">
                    Fasilitas Kantor
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700 dark:text-slate-300">
                    {currentBranch.facilities.map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-[11.5px]">{fac}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={currentBranch.googleMapsDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs shadow-md transition-all flex-1 text-center justify-center cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(
                    `Halo Admin KSP Mandara Sedana Kuta, saya ingin menanyakan rute dan janji temu ke ${currentBranch.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors shrink-0 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Chat Admin Kantor</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed with Specific Coordinates */}
            <div className="lg:col-span-6 relative bg-slate-100 dark:bg-slate-900 min-h-[380px] lg:min-h-[520px]">
              <iframe
                src={currentBranch.mapsUrl}
                title={`Peta Lokasi ${currentBranch.name}`}
                className="w-full h-full border-none min-h-[380px] lg:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
                <span className="hidden sm:inline-flex bg-black/75 backdrop-blur-xs text-white text-[11px] font-mono px-2.5 py-1 rounded-lg">
                  📍 {currentBranch.coordinates}
                </span>
                <a
                  href={currentBranch.googleMapsDirect}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold border border-slate-200 dark:border-slate-700 hover:bg-white transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-teal-600" />
                  Buka Rute
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ============================================================ */}
      {/* 4. CONTACT FORM & FAQ ACCORDION SECTION */}
      {/* ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Smart Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right Column: FAQ Accordion & Trust Reassurance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700 shadow-lg space-y-4">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                Pertanyaan Yang Sering Diajukan
              </h3>
            </div>

            <div className="space-y-2.5">
              {contactFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 dark:border-slate-700 overflow-hidden bg-slate-50/60 dark:bg-slate-900/40"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-3.5 text-left text-xs font-bold text-slate-900 dark:text-slate-100 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                    >
                      <span className="pr-3 leading-snug">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-teal-600 dark:text-teal-400" : "text-slate-400"
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-3.5 pb-3.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200/60 dark:border-slate-800 pt-2.5 text-left [text-wrap:pretty]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legalitas & Keamanan Box */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50/50 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-6 border border-teal-200/80 dark:border-teal-800/40 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-teal-900 dark:text-teal-200 font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Keamanan &amp; Kerahasiaan Data</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-left [text-wrap:pretty]">
              Seluruh pesan, data identitas, dan permohonan yang Anda kirimkan diproteksi dengan kerahasiaan penuh sesuai ketentuan Kementerian Koperasi dan UKM RI serta Dinas Koperasi Provinsi Bali (Badan Hukum No. 004723/BH/M KUKM.2/VII/2017).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
