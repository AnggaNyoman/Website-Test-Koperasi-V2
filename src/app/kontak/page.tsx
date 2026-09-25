import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Kontak Kami & Lokasi Kantor | Koperasi Mandara Sedana Kuta",
  description:
    "Hubungi Koperasi Mandara Sedana Kuta. Kunjungi Kantor Pusat di Legian Kuta dan Kantor Cabang di Sesetan Denpasar. Layanan WhatsApp resmi +62 813-9430-6999.",
};

export default function KontakPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="cyan">
            Layanan Pelanggan &amp; Lokasi Kantor
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Hubungi &amp; Kunjungi <span className="text-gradient">Koperasi Kami</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-center [text-wrap:balance]">
            Kami siap menyambut dan melayani setiap kebutuhan finansial Anda di Kantor Pusat Legian, Kantor Cabang Sesetan, atau secara daring melalui WhatsApp resmi.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Kontak" }]} />
        </div>
      </div>

      {/* Main Interactive Contact Content */}
      <ContactContent />
    </div>
  );
}
