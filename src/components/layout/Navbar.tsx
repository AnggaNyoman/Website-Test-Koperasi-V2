"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Download,
  UserPlus,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL, SITE_CONFIG } from "@/lib/constants";
// ============================================
// NAVBAR COMPONENT
// Sticky, blur-bg, hamburger mobile, dropdown desktop
// ============================================

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* Skip to content (accessibility) */}
      <a href="#main-content" className="skip-to-content">
        Lewati ke konten utama
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800 ${
          isScrolled ? "shadow-md" : "shadow-xs"
        }`}
      >

        <nav
          className="w-full h-[66px] sm:h-[70px] flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 2xl:px-12"
          aria-label="Navigasi Utama"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group"
            aria-label="Koperasi Mandara Sedana Kuta — Beranda"
          >
            <div className="relative w-10 h-10 transition-transform group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="Logo Koperasi Mandara Sedana Kuta"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight whitespace-nowrap text-slate-900 dark:text-white">
                Mandara Sedana Kuta
              </p>
              <p className="text-[10px] leading-tight font-medium whitespace-nowrap text-teal-700 dark:text-cyan-400">
                Bersama Wujudkan Impian
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={dropdownRef} className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative">
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === link.href ? null : link.href
                        )
                      }
                      className="flex items-center gap-1 px-2.5 py-2 rounded-lg text-[13px] 2xl:text-sm font-semibold tracking-tight whitespace-nowrap text-slate-800 dark:text-slate-100 hover:text-teal-700 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                      aria-expanded={activeDropdown === link.href}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`shrink-0 transition-transform duration-200 ${
                          activeDropdown === link.href ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-52 bg-white dark:bg-slate-800 rounded-xl shadow-card-hover border border-slate-100 dark:border-slate-700 py-2 z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-4 py-2 text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-teal-700 dark:hover:text-cyan-300 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-2.5 py-2 rounded-lg text-[13px] 2xl:text-sm font-semibold tracking-tight whitespace-nowrap text-slate-800 dark:text-slate-100 hover:text-teal-700 dark:hover:text-cyan-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1.5 2xl:gap-2 shrink-0">
            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
                className="w-9 h-9 flex items-center justify-center rounded-lg shrink-0 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>
            )}

            {/* CTA Buttons — desktop only. Icon-only between xl/2xl to avoid overflow, full label from 2xl up */}
            <div className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
              <Link
                href="/daftar-anggota"
                aria-label="Gabung Anggota"
                className="flex items-center gap-1.5 px-3 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-semibold text-teal-800 dark:text-teal-200 border border-teal-600/30 dark:border-teal-500/30 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-800/30 transition-all duration-200 whitespace-nowrap"
              >
                <UserPlus size={15} className="shrink-0" />
                <span className="hidden 2xl:inline">Gabung Anggota</span>
              </Link>
              <Link
                href="/madata-mobile"
                aria-label="Download App"
                className="flex items-center gap-1.5 px-3 2xl:px-4 py-2 text-[13px] 2xl:text-sm font-semibold bg-primary-500 text-black rounded-xl hover:bg-primary-400 hover:shadow-glow-green transition-all duration-200 active:scale-95 whitespace-nowrap"
              >
                <Download size={15} className="shrink-0" />
                <span className="hidden 2xl:inline">Download App</span>
              </Link>
            </div>

            {/* WhatsApp button — tablet */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi via WhatsApp"
              className="hidden sm:flex xl:hidden w-9 h-9 items-center justify-center rounded-lg text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-200"
            >
              <Phone size={18} />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileOpen}
              className="xl:hidden w-10 h-10 flex items-center justify-center rounded-xl text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm xl:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-white dark:bg-slate-900 shadow-2xl xl:hidden overflow-y-auto scrollbar-thin"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image src="/logo.png" alt="" fill sizes="32px" className="object-contain" />
                  </div>
                  <span className="font-bold text-sm text-teal-800 dark:text-white">
                    Mandara Sedana Kuta
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Tutup menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="p-4 space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-xl text-sm font-medium tracking-tight text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 rounded-lg text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* CTA Buttons */}
              <div className="p-4 pt-0 space-y-2 border-t border-slate-100 dark:border-slate-800 mt-2">
                <Link
                  href="/daftar-anggota"
                  onClick={() => setMobileOpen(false)}
                  className="btn-outline w-full"
                >
                  <UserPlus size={16} />
                  Gabung Anggota
                </Link>
                <Link
                  href="/madata-mobile"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full"
                >
                  <Download size={16} />
                  Download Madata Mobile
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} />
                  Hubungi WhatsApp
                </a>

                {/* Theme toggle in mobile */}
                <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    {theme === "dark" ? "Mode Gelap" : "Mode Terang"}
                  </span>
                  {mounted && (
                    <button
                      onClick={toggleTheme}
                      className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                      aria-label="Toggle tema"
                    >
                      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
