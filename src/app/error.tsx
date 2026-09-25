"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, Bug } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// ============================================
// ERROR PAGE — Premium Design
// ============================================

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-amber-50/30 dark:from-slate-900 dark:to-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-100/40 dark:bg-amber-900/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-teal-100/30 dark:bg-teal-900/10 blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="relative max-w-md w-full"
      >
        {/* Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 shadow-2xl text-center">
          {/* Icon with rings */}
          <div className="relative flex justify-center mb-6">
            <div className="absolute w-20 h-20 rounded-2xl bg-amber-100 dark:bg-amber-950 animate-ping opacity-20" />
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-950 dark:to-orange-950 text-amber-600 dark:text-amber-400 flex items-center justify-center shadow-lg"
            >
              <AlertTriangle className="w-10 h-10" />
            </motion.div>
          </div>

          {/* Error code badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full text-xs font-bold border border-amber-200 dark:border-amber-800 mb-4">
            <Bug className="w-3 h-3" />
            Kesalahan Teknis
          </div>

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Oops! Ada Kendala
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 leading-relaxed">
            Mohon maaf, terjadi kendala teknis saat memuat halaman ini. Tim
            kami akan segera memperbaikinya.
          </p>

          {/* Error digest */}
          {error.digest && (
            <p className="text-xs text-slate-400 dark:text-slate-600 font-mono mb-6 bg-slate-50 dark:bg-slate-900 rounded-lg px-3 py-2 border border-slate-100 dark:border-slate-700">
              ID: {error.digest}
            </p>
          )}

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent mb-6" />

          <div className="flex gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-teal-500/20 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Coba Lagi
            </motion.button>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold text-sm rounded-xl transition-colors"
              >
                <Home className="w-4 h-4" />
                Beranda
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Subtle footer text */}
        <p className="text-center text-xs text-slate-400 mt-4">
          Butuh bantuan?{" "}
          <a
            href="https://wa.me/6281394306999"
            className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
          >
            Hubungi CS kami
          </a>
        </p>
      </motion.div>
    </div>
  );
}
