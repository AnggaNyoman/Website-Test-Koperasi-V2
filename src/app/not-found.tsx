import Link from "next/link";
import { Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 bg-slate-50 dark:bg-slate-900/60">
      <div className="max-w-lg w-full text-center bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
        <div className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-primary-500 to-cyan-500 mb-4 font-mono">
          404
        </div>

        <h1 className="text-2xl font-bold text-black dark:text-white mb-2">
          Halaman Tidak Ditemukan
        </h1>

        <p className="text-sm text-black dark:text-slate-300 mb-8 leading-relaxed">
          Mohon maaf, halaman yang Anda tuju tidak tersedia atau telah dipindahkan. Silakan kembali ke beranda atau gunakan menu navigasi.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-black dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 font-bold text-xs sm:text-sm transition-colors"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Pusat Bantuan FAQ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
