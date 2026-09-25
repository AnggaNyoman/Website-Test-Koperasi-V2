import type { Metadata } from "next";
import VideoGallery from "@/components/gallery/VideoGallery";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";

export const metadata: Metadata = {
  title: "Galeri Video | Koperasi Mandara Sedana Kuta",
  description:
    "Tonton dokumentasi kegiatan, profil koperasi, podcast keuangan, dan bakti sosial Koperasi Mandara Sedana Kuta di Pulau Bali.",
};

export default function GaleriPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="cyan">
            Dokumentasi &amp; Media Resmi
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Galeri Media &amp; <span className="text-gradient">Video Koperasi</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Saksikan ragam kegiatan, komitmen pelayanan, edukasi finansial, dan kebersamaan komunitas anggota kami di Bali.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Galeri" }]} />
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <VideoGallery />
      </div>

</div>
  );
}
