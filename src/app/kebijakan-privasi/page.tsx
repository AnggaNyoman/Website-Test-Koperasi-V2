import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Koperasi Mandara Sedana Kuta",
  description:
    "Kebijakan Privasi perlindungan data pribadi anggota Koperasi Mandara Sedana Kuta dan pengguna aplikasi Madata Mobile sesuai UU PDP No. 27/2022.",
};

export default function KebijakanPrivasiPage() {
  return (
    <div className="min-h-screen">
      {/* Header Banner - Bright & Luminous */}
      <div className="bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center relative overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="teal">
            Perlindungan Privasi Anggota
          </SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white mb-3 tracking-tight mt-3 leading-tight [text-wrap:balance]">
            Kebijakan <span className="text-gradient">Privasi</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Komitmen kami dalam melindungi data pribadi anggota dan pengguna sesuai Undang-Undang Perlindungan Data Pribadi (UU PDP No. 27/2022).
          </p>
        </div>
      </div>

      {/* Breadcrumb Bar */}
      <div className="bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Kebijakan Privasi" }]} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-12 border border-slate-200 dark:border-slate-700 shadow-sm space-y-8 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          <div>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Terakhir diperbarui: 1 Januari 2024</span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-2 mb-4">
              1. Pendahuluan
            </h2>
            <p>
              Koperasi Mandara Sedana Kuta (disebut &quot;Koperasi&quot;, &quot;Kami&quot;) berkomitmen untuk melindungi dan menghormati hak privasi setiap anggota, calon anggota, serta pengguna aplikasi Madata Mobile. Kebijakan Privasi ini mengatur bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi Anda sesuai dengan Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi (UU PDP).
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              2. Data Pribadi yang Kami Kumpulkan
            </h2>
            <p className="mb-3">
              Kami mengumpulkan informasi yang Anda berikan secara langsung saat mendaftar, mengajukan simpanan atau pinjaman, serta saat menggunakan aplikasi Madata Mobile, mencakup:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Data Identitas:</strong> Nama lengkap, Nomor Induk Kependudukan (NIK), foto KTP, foto Kartu Keluarga, tempat dan tanggal lahir, jenis kelamin.</li>
              <li><strong>Data Kontak:</strong> Alamat tempat tinggal di Bali, nomor telepon/WhatsApp, dan alamat email.</li>
              <li><strong>Data Keuangan & Pekerjaan:</strong> Pekerjaan, estimasi penghasilan bulanan, nomor rekening bank pendukung, dan riwayat transaksi simpan pinjam di koperasi.</li>
              <li><strong>Data Perangkat & Aplikasi:</strong> Alamat IP, jenis perangkat seluler, versi sistem operasi, dan log aktivitas transaksi pada aplikasi Madata Mobile.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              3. Tujuan Penggunaan Data Pribadi
            </h2>
            <p className="mb-3">Data pribadi Anda digunakan untuk:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Verifikasi identitas dan kelayakan menjadi anggota koperasi sesuai AD/ART.</li>
              <li>Memproses pembukaan simpanan, pencairan pinjaman, dan layanan keuangan anggota.</li>
              <li>Menyediakan layanan transaksi digital melalui aplikasi Madata Mobile (pembelian pulsa, token listrik, bayar BPJS/PDAM).</li>
              <li>Mematuhi kewajiban pelaporan berkala kepada Dinas Koperasi dan UKM serta instansi regulator berwenang.</li>
              <li>Mengirimkan informasi resmi, pengumuman RAT, dan notifikasi transaksi penting.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              4. Keamanan dan Penyimpanan Data
            </h2>
            <p>
              Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang ketat, termasuk enkripsi data SSL/TLS 256-bit, firewall proteksi server, serta kontrol akses terbatas hanya bagi staf yang berwenang. Kami tidak pernah menjual atau membagikan data pribadi Anda kepada pihak ketiga manapun untuk kepentingan pemasaran komersial tanpa persetujuan eksplisit Anda.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              5. Hak Pemilik Data Pribadi
            </h2>
            <p className="mb-3">
              Sesuai UU PDP, sebagai pemilik data pribadi Anda berhak untuk:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Mengakses dan memperoleh salinan data pribadi Anda yang tersimpan di sistem kami.</li>
              <li>Memperbarui atau membetulkan data pribadi yang tidak akurat.</li>
              <li>Menarik kembali persetujuan pemrosesan data pribadi dengan konsekuensi penghentian layanan koperasi terkait.</li>
              <li>Mengajukan pengaduan kepada pihak berwenang atas dugaan pelanggaran data.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              6. Hubungi Petugas Pelindungan Data (DPO)
            </h2>
            <p>
              Jika Anda memiliki pertanyaan, keberatan, atau ingin menggunakan hak Anda terkait data pribadi, silakan hubungi tim kami melalui:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm mt-3 space-y-1">
              <div><strong>Koperasi Mandara Sedana Kuta</strong></div>
              <div>Alamat: Jl. Legian Kuta Gang Bendesa No.5, Kuta, Badung — Bali</div>
              <div>Email: info@mandarasedanakuta.co.id</div>
              <div>WhatsApp: +62 813-9430-6999</div>
            </div>
          </div>
        </div>
      </div>

</div>
  );
}
