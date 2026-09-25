"use client";

import { Wallet, Phone, Zap, ArrowUpRight, ShieldCheck, Fingerprint, BellRing, PieChart, CalendarClock, Store } from "lucide-react";
export default function MadataFeatures() {
  const features = [
    {
      icon: Wallet,
      title: "Cek Saldo & Riwayat Mutasi",
      desc: "Lihat saldo simpanan pokok, wajib, dan sukarela Anda secara real-time disertai histori transaksi terperinci.",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Phone,
      title: "Pulsa & Paket Data Semua Operator",
      desc: "Isi ulang kuota internet dan pulsa seluler untuk Telkomsel, Indosat, XL, Tri, dan Smartfren kapan saja.",
      color: "from-cyan-500 to-teal-600",
    },
    {
      icon: Zap,
      title: "Token Listrik PLN 24 Jam",
      desc: "Beli token listrik prabayar atau bayar tagihan pascabayar langsung tanpa perlu keluar rumah saat tengah malam.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: CalendarClock,
      title: "Auto Debet Terjadwal",
      desc: "Atur jadwal pembayaran simpanan wajib, angsuran pinjaman, dan transaksi rutin tepat waktu secara otomatis.",
      color: "from-blue-600 to-teal-600",
    },
    {
      icon: Store,
      title: "Merchant Komunitas Koperasi",
      desc: "Cari dan beli kebutuhan sehari-hari serta aneka kuliner dari merchant anggota binaan koperasi di sekitar Anda.",
      color: "from-emerald-600 to-teal-700",
    },
    {
      icon: ArrowUpRight,
      title: "Top Up OVO, GoPay & E-Wallet",
      desc: "Pengisian saldo e-wallet instan untuk berbagai kebutuhan transaksi digital harian keluarga Anda.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: ShieldCheck,
      title: "Bayar Tagihan PDAM & BPJS",
      desc: "Pembayaran iuran BPJS Kesehatan dan tagihan air PDAM di seluruh Bali tepat waktu tanpa denda keterlambatan.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Fingerprint,
      title: "Keamanan Login Biometrik",
      desc: "Dukungan autentikasi sidik jari (fingerprint) dan pengenalan wajah (Face ID) untuk perlindungan akun maksimal.",
      color: "from-purple-500 to-indigo-700",
    },
    {
      icon: BellRing,
      title: "Notifikasi Transaksi Real-time",
      desc: "Setiap mutasi dana simpanan atau pembayaran tagihan diverifikasi instan dengan bukti pembayaran digital.",
      color: "from-teal-600 to-cyan-600",
    },
    {
      icon: PieChart,
      title: "Pantau Riwayat & Mutasi Transparan",
      desc: "Fitur pencatatan transparan untuk memantau mutasi rekening dan keaktifan simpan pinjam Anda secara berkala.",
      color: "from-amber-600 to-amber-700",
    },
  ];

  return (
    <div className="py-12 md:py-16">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <span className="text-xs uppercase font-bold tracking-wider text-teal-600 dark:text-teal-400">
          Fitur Unggulan
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-1 mb-4 [text-wrap:balance]">
          Semua Kebutuhan Finansial dalam Satu Layar
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
          Madata Mobile menghadirkan kemudahan transaksi digital terlengkap khusus untuk kemudahan seluruh anggota koperasi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full"
            >
              <div>
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center shadow-md mb-3.5 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
