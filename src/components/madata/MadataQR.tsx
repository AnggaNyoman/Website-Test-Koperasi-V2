"use client";

import { QRCodeSVG } from "qrcode.react";
import { SITE_CONFIG } from "@/lib/constants";
import { QrCode, ExternalLink } from "lucide-react";

export default function MadataQR() {
  return (
    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200 dark:border-slate-700/80 shadow-lg relative overflow-hidden mb-12 md:mb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: QR Code Container */}
        <div className="lg:col-span-5 flex flex-col items-center text-center">
          <div className="bg-white p-6 rounded-3xl shadow-2xl border-4 border-teal-500/30 relative mb-4">
            <QRCodeSVG
              value={SITE_CONFIG.googlePlayUrl}
              size={200}
              level="H"
              includeMargin={true}
              imageSettings={{
                src: "/madata-logo.png",
                x: undefined,
                y: undefined,
                height: 40,
                width: 40,
                excavate: true,
              }}
            />
          </div>
          <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
            <QrCode className="w-4 h-4 text-teal-600" /> Scan dengan Kamera Smartphone
          </span>
          <a
            href={SITE_CONFIG.googlePlayUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-xs text-teal-600 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
          >
            Buka tautan langsung di Google Play <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Right Column: 3 Steps How to Install */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
            Panduan Mudah
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 mb-6 tracking-tight [text-wrap:balance]">
            Cara Mulai Menggunakan Madata Mobile
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-teal-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                1
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Unduh Aplikasi dari Google Play
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Buka Google Play Store di HP Android Anda, cari kata kunci <strong>Madata Mobile</strong> atau scan QR code di samping, lalu tekan tombol Install.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                2
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Aktivasi Akun Anggota
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Buka aplikasi dan masukkan Nomor Anggota Koperasi serta nomor handphone WhatsApp yang telah terdaftar di kantor Koperasi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary-600 text-white font-bold flex items-center justify-center shrink-0 shadow-md">
                3
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base mb-1">
                  Buat PIN &amp; Nikmati Kemudahan
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Buat 6 digit PIN rahasia dan aktifkan sidik jari (biometrik). Anda langsung dapat mengecek saldo simpanan dan bertransaksi 24/7!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
