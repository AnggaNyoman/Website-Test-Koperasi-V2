"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ShieldCheck,
  MessageCircle,
  Clock,
} from "lucide-react";

import { SITE_CONFIG, WHATSAPP_URL, CONTACT } from "@/lib/constants";

// ============================================
// FOOTER COMPONENT - CLEAN & MINIMALIST
// ============================================

const footerLinks = {
  koperasi: [
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/tentang-kami#visi-misi", label: "Visi & Misi" },
    { href: "/tentang-kami#nilai-keren", label: "Nilai KEREN" },
    { href: "/tentang-kami#struktur", label: "Struktur Organisasi" },
    { href: "/daftar-anggota", label: "Tingkatan Kartu Anggota" },
  ],
  layanan: [
    { href: "/layanan", label: "Semua Layanan" },
    { href: "/produk", label: "Simpanan & SIJAKA" },
    { href: "/produk#pinjaman", label: "Fasilitas Pinjaman" },
    { href: "/simulasi", label: "Simulasi Keuangan" },
    { href: "/madata-mobile", label: "Madata Mobile" },
  ],
  legal: [
    { href: "/daftar-anggota", label: "Daftar Anggota" },
    { href: "/kebijakan-privasi", label: "Kebijakan Privasi" },
    { href: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* 1. Brand & Info (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Koperasi Mandara Sedana Kuta"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm sm:text-base leading-tight">
                  Koperasi Mandara Sedana Kuta
                </p>
                <p className="text-teal-400 text-xs mt-0.5">
                  Bersama Wujudkan Impian
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Koperasi Simpan Pinjam modern berbasis di Bali. Solusi keuangan terpercaya dengan layanan digital Madata Mobile.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-0.5">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Badan Hukum: {SITE_CONFIG.legalitas}</span>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={SITE_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube KOPERASI MADATA CHANNEL"
                title="YouTube"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-red-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-800"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={`https://instagram.com/${SITE_CONFIG.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-800"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={`https://facebook.com/${SITE_CONFIG.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-800"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="WhatsApp CS"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-105 border border-slate-800"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Navigasi Koperasi (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              Koperasi
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.koperasi.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Layanan (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {footerLinks.layanan.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Kontak & Kantor (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white mb-3 text-xs uppercase tracking-wider">
              Kontak &amp; Kantor
            </h4>
            
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">{SITE_CONFIG.whatsappFormatted} (WhatsApp)</span>
              </a>

              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-teal-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="text-slate-300">{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1 border-t border-slate-800/80">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Pusat:</span>
                  <span>{SITE_CONFIG.offices.pusat.address}, {SITE_CONFIG.offices.pusat.city}</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-200 font-medium block">Cabang:</span>
                  <span>{SITE_CONFIG.offices.cabang.address}, {SITE_CONFIG.offices.cabang.city}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-slate-500 pt-0.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Jam Layanan: {CONTACT.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hairline Divider & Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
