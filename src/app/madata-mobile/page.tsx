import type { Metadata } from "next";
import MadataHero from "@/components/madata/MadataHero";
import MadataFeatures from "@/components/madata/MadataFeatures";
import MadataQR from "@/components/madata/MadataQR";
import MadataFAQ from "@/components/madata/MadataFAQ";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Madata Mobile | Aplikasi Perbankan Koperasi Mandara Sedana Kuta",
  description:
    "Unduh Madata Mobile — aplikasi mobile banking resmi Koperasi Mandara Sedana Kuta. Cek saldo, bayar tagihan listrik, BPJS, PDAM, pulsa, dan top up OVO/GoPay 24/7.",
};

export default function MadataMobilePage() {
  return (
    <div className="min-h-screen">
      {/* Hero with phone mockup */}
      <MadataHero />

      {/* Breadcrumb */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Madata Mobile" }]} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Grid */}
        <MadataFeatures />

        {/* QR Code & Installation Guide */}
        <MadataQR />

        {/* Video Tutorial Section */}
        <div className="py-12 md:py-16">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10">
            <span className="text-xs uppercase font-bold tracking-wider text-teal-600 dark:text-teal-400">
              Video Panduan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1 mb-2 [text-wrap:balance]">
              Tutorial Registrasi &amp; Penggunaan
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed [text-wrap:pretty]">
              Tonton video panduan langkah demi langkah cara mengaktifkan akun dan bertransaksi di Madata Mobile.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-slate-900 aspect-video relative">
            <iframe
              src="https://www.youtube.com/embed/qLutMmpkLEo?rel=0"
              title="Tutorial Madata Mobile"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* App FAQ */}
        <MadataFAQ />
      </div>

</div>
  );
}
