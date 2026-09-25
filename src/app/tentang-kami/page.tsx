import type { Metadata } from "next";
import VisiMisi from "@/components/about/VisiMisi";
import VideoProfile from "@/components/about/VideoProfile";
import KerenValues from "@/components/about/KerenValues";
import StrukturOrganisasi from "@/components/about/StrukturOrganisasi";
import LegalitasSection from "@/components/about/LegalitasSection";
import SejarahTimeline from "@/components/about/SejarahTimeline";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal lebih dekat Koperasi Mandara Sedana Kuta — visi, misi, nilai KEREN, struktur organisasi, dan sejarah perkembangan koperasi kami.",
};

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="badge bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-700/50 mb-3 inline-flex font-semibold text-xs">
            Profil Resmi Koperasi
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight leading-tight [text-wrap:balance]">
            Tentang <span className="text-gradient">Kami</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Mengenal lebih dekat Koperasi Mandara Sedana Kuta — tata kelola akuntabel berbadan hukum resmi dan mitra finansial tepercaya Anda di Bali.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Tentang Kami" }]} />
        </div>
      </div>

      {/* Sections */}
      <VisiMisi />
<VideoProfile />
<KerenValues />
<StrukturOrganisasi />
<LegalitasSection />
<SejarahTimeline />
    </div>
  );
}
