"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, CheckCircle2, Award, Building2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function LegalitasSection() {
  const legalDocs = [
    {
      title: "Badan Hukum Koperasi",
      number: SITE_CONFIG.legalitas,
      issuer: "Kementerian Koperasi dan UKM RI",
      date: "Juli 2017",
      status: "Resmi & Aktif",
      desc: "Legalitas pendirian koperasi primer tingkat provinsi dengan keanggotaan sah di wilayah Bali.",
    },
    {
      title: "Izin Usaha Simpan Pinjam (USP)",
      number: "Data menyusul",
      issuer: "Dinas Koperasi & UKM Provinsi Bali",
      date: "—",
      status: "Perlu Verifikasi",
      desc: "Izin operasional untuk menyelenggarakan kegiatan simpanan dan pembiayaan pinjaman anggota.",
    },
    {
      title: "Nomor Induk Berusaha (NIB)",
      number: "Data menyusul",
      issuer: "Lembaga OSS - Kementerian Investasi/BKPM",
      date: "—",
      status: "Perlu Verifikasi",
      desc: "Identitas pelaku usaha terpadu nasional yang menjamin kepatuhan berusaha di Indonesia.",
    },
    {
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      number: "Data menyusul",
      issuer: "Direktorat Jenderal Pajak RI",
      date: "—",
      status: "Perlu Verifikasi",
      desc: "Wajib pajak badan hukum yang berkontribusi nyata pada penerimaan negara dan daerah.",
    },
  ];

  return (
    <section id="legalitas" className="section-py bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Kepatuhan Hukum & Regulasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 [text-wrap:balance]">
            Legalitas &amp; Izin Operasional
          </h2>
          <p className="text-black dark:text-slate-300 text-base sm:text-lg">
            Koperasi Mandara Sedana Kuta beroperasi dengan landasan hukum yang sah, diawasi oleh otoritas pemerintah terkait untuk keamanan dana setiap anggota.
          </p>
        </div>

        {/* Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white border border-teal-500/30 shadow-2xl relative overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0 text-teal-300">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-teal-300">
                  Keputusan Menteri Koperasi & UKM RI
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Badan Hukum: {SITE_CONFIG.legalitas}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                  Diawasi secara resmi oleh Dinas Koperasi dan Usaha Kecil Menengah Provinsi Bali. Seluruh laporan keuangan diaudit berkala sesuai standar akuntansi koperasi Indonesia.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Status: Terverifikasi Aktif</span>
            </div>
          </div>
        </div>

        {/* Legal Documents Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {legalDocs.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-base">
                      {doc.title}
                    </h4>
                    <span className="text-xs text-black dark:text-slate-400">
                      Penerbit: {doc.issuer}
                    </span>
                  </div>
                </div>
                <span className="shrink-0 text-[11px] font-semibold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-full border border-teal-200 dark:border-teal-800">
                  {doc.status}
                </span>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 mb-3 border border-slate-100 dark:border-slate-800">
                <div className="text-[11px] text-black dark:text-slate-500 font-medium">Nomor Registrasi / Dokumen:</div>
                <div className="font-mono text-xs sm:text-sm font-bold text-teal-700 dark:text-teal-300">
                  {doc.number}
                </div>
              </div>

              <p className="text-xs text-black dark:text-slate-300 leading-relaxed">
                {doc.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Regulatory Governance Statement */}
        <div className="rounded-2xl p-6 bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <Building2 className="w-6 h-6 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex-1">
            <strong>Kepatuhan Regulasi Koperasi Simpan Pinjam:</strong> Koperasi Mandara Sedana Kuta tunduk pada UU No. 25 Tahun 1992 tentang Perkoperasian, Peraturan Menteri Koperasi dan UKM No. 8 Tahun 2023, serta regulasi perpajakan yang berlaku di Republik Indonesia.
          </div>
        </div>
      </div>
    </section>
  );
}
