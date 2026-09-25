import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import { AlertTriangle } from "lucide-react";
export const metadata: Metadata = {
  title: "Syarat & Ketentuan | Koperasi Mandara Sedana Kuta",
  description:
    "Syarat & Ketentuan keanggotaan Koperasi Simpan Pinjam Mandara Sedana Kuta dan ketentuan penggunaan aplikasi perbankan Madata Mobile.",
};

export default function SyaratKetentuanPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="cyan">
            Ketentuan Resmi
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Syarat &amp; <span className="text-gradient">Ketentuan</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Ketentuan umum keanggotaan Koperasi Mandara Sedana Kuta dan tata cara penggunaan aplikasi Madata Mobile.
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Syarat & Ketentuan" }]} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Berlaku efektif sejak: 1 Januari 2024</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              A. Ketentuan Keanggotaan Koperasi
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <p>
                1. <strong>Definisi Anggota:</strong> Anggota Koperasi Mandara Sedana Kuta adalah Warga Negara Indonesia yang berdomisili di Provinsi Bali yang telah memenuhi syarat pendaftaran, melunasi Simpanan Pokok, serta disahkan oleh pengurus koperasi.
              </p>
              <p>
                2. <strong>Hak Anggota:</strong> Setiap anggota berhak menghadiri, berbicara, dan memberikan suara dalam Rapat Anggota Tahunan (RAT), memilih dan/atau dipilih menjadi pengurus/pengawas, serta memanfaatkan seluruh program dan layanan simpanan maupun pinjaman koperasi.
              </p>
              <p>
                3. <strong>Kewajiban Anggota:</strong> Anggota wajib mematuhi Anggaran Dasar & Anggaran Rumah Tangga (AD/ART), keputusan Rapat Anggota, membayar Simpanan Wajib secara teratur, memelihara kebersamaan, dan menjaga nama baik koperasi.
              </p>
              <p>
                4. <strong>Berakhirnya Keanggotaan:</strong> Keanggotaan berakhir apabila anggota meninggal dunia, mengundurkan diri atas permintaan sendiri secara tertulis, atau diberhentikan oleh pengurus karena melanggar AD/ART.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              B. Ketentuan Penggunaan Aplikasi Madata Mobile
            </h2>
            <div className="space-y-3 text-xs sm:text-sm">
              <p>
                1. <strong>Pendaftaran & Aktivasi:</strong> Layanan Madata Mobile hanya dapat diaktifkan oleh anggota terdaftar dengan nomor HP/WhatsApp yang telah diverifikasi oleh pengurus koperasi.
              </p>
              <p>
                2. <strong>Kerahasiaan PIN & Akun:</strong> Anggota bertanggung jawab penuh atas kerahasiaan 6 digit PIN transaksi dan kredensial biometrik. Pihak Koperasi tidak pernah meminta PIN kepada anggota melalui media apa pun.
              </p>
              <p>
                3. <strong>Transaksi Digital:</strong> Setiap transaksi yang diotorisasi menggunakan PIN atau biometrik dianggap sah dan mengikat anggota yang bersangkutan.
              </p>
              <p>
                4. <strong>Biaya Transaksi PPOB:</strong> Biaya admin tagihan listrik, BPJS, PDAM, pulsa, atau transfer antar dompet digital mengikuti tarif standar yang tertera jelas sebelum konfirmasi pembayaran di layar aplikasi.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              C. Penolakan & Tanggung Jawab Terbatas (Disclaimer)
            </h2>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-2">
              <div className="flex items-center gap-2 font-bold">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Pengawasan & Status Hukum</span>
              </div>
              <p>
                Koperasi Mandara Sedana Kuta adalah Koperasi Simpan Pinjam yang berbadan hukum resmi No. 004723/BH/M KUKM.2/VII/2017 serta diawasi oleh Dinas Koperasi dan UKM Provinsi Bali dan Kementerian Koperasi dan UKM Republik Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>

</div>
  );
}
