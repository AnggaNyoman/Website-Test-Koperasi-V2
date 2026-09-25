"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, Check } from "lucide-react";
import Link from "next/link";

// ============================================
// COOKIE CONSENT BANNER
// ============================================
export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25 }}
          className="fixed bottom-20 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-sm z-50"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-card-hover border border-slate-100 dark:border-slate-700 p-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 dark:bg-teal-900/50 flex items-center justify-center shrink-0">
                <Cookie size={18} className="text-teal-600 dark:text-teal-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                  Penggunaan Cookie
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Kami menggunakan cookie untuk meningkatkan pengalaman Anda.
                  Lihat{" "}
                  <Link
                    href="/kebijakan-privasi"
                    className="text-cyan-600 dark:text-cyan-400 underline hover:no-underline"
                    onClick={accept}
                  >
                    Kebijakan Privasi
                  </Link>{" "}
                  kami.
                </p>
              </div>
              <button
                onClick={decline}
                aria-label="Tolak dan tutup"
                className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shrink-0"
              >
                <X size={14} />
              </button>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={decline}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                Tolak
              </button>
              <button
                onClick={accept}
                className="flex-1 py-2 px-3 rounded-xl text-xs font-bold bg-primary-500 text-slate-950 hover:bg-primary-400 transition-colors flex items-center justify-center gap-1"
              >
                <Check size={13} />
                Terima
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
