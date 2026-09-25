import type { Metadata } from "next";
import RegistrationForm from "@/components/forms/RegistrationForm";
import MemberTiers from "@/components/membership/MemberTiers";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";

import { CheckCircle2, ShieldCheck, Award, FileText } from "lucide-react";
export const metadata: Metadata = {
  title: "Pendaftaran Anggota Online | Koperasi Mandara Sedana Kuta",
  description:
    "Daftar menjadi anggota resmi Koperasi Mandara Sedana Kuta secara online. Nikmati berbagai produk simpanan berbunga kompetitif, pinjaman modal usaha, dan pelayanan finansial terpercaya.",
};

export default function DaftarAnggotaPage() {
  const syaratList = [
    "Warga Negara Indonesia (WNI) dibuktikan dengan KTP yang sah",
    "Memiliki Kartu Keluarga (KK) yang masih berlaku",
    "Berdomisili di wilayah Provinsi Bali (9 Kabupaten/Kota)",
    "Berusia minimal 17 tahun atau sudah menikah",
    "Mengisi formulir pendaftaran anggota dengan data yang benar",
    "Menyetujui Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) Koperasi",
    "Membayar Simpanan Pokok Rp 10.000 & Simpanan Wajib Rp 10.000 (setoran awal keanggotaan)",
  ];

  const benefitList = [
    "Akses penuh ke aplikasi mobile banking Madata Mobile (24/7)",
    "Partisipasi aktif dalam kemajuan dan program kesejahteraan koperasi",
    "Fasilitas pinjaman mulai dari bunga 1% per bulan sesuai jenis pinjaman",
    "Berbagai pilihan simpanan dengan bunga hingga 8,47% per tahun (SIRENA PLUS)",
    "Hak suara setara dalam Rapat Anggota Tahunan (RAT)",
  ];

  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-amber-50/30 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="gold">
            Formulir Pendaftaran Resmi
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Pendaftaran <span className="text-gradient">Anggota Koperasi</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Mari bertumbuh bersama lebih dari 2.231 anggota lainnya. Bersama Koperasi Mandara Sedana Kuta, wujudkan impian finansial Anda.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Daftar Anggota" }]} />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left / Main Column: Multi-step Form */}
          <div className="lg:col-span-8">
            <RegistrationForm />
          </div>

          {/* Right Column: Requirements & Benefits Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Syarat Keanggotaan Card */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 shadow-md relative">
<div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-teal-600" />
                <h3 className="font-bold text-black dark:text-white text-base">
                  Syarat Menjadi Anggota
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-black dark:text-slate-300">
                {syaratList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Manfaat Keanggotaan Card */}
            <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-6 shadow-md relative border border-teal-700/50">
<div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="font-bold text-white text-base">
                  Keuntungan Anggota
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-teal-100">
                {benefitList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legalitas & Keamanan */}
            <div className="bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-5 border border-slate-200 dark:border-slate-700 text-xs text-black flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
              <div>
                <strong>Badan Hukum Sah:</strong> Koperasi primer berbadan hukum No. 004723/BH/M KUKM.2/VII/2017 diawasi Dinas Koperasi Provinsi Bali.
              </div>
            </div>
          </div>
        </div>
      </div>

      <MemberTiers />

    </div>
  );
}
