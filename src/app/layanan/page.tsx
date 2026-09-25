"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wallet,
  PiggyBank,
  Coins,
  Clock,
  Briefcase,
  CreditCard,
  GraduationCap,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calculator,
  ShieldCheck,
  Smartphone,
  Droplet,
  ArrowLeftRight,
  Phone,
  HeartPulse,
  Search,
  Building2,
  Sparkles,
  Percent,
  Calendar,
  Shield,
  MessageCircle,
  X,
  FileText,
  BadgePercent,
  TrendingUp,
  Award,
  ChevronDown,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionBadge from "@/components/ui/SectionBadge";
import { WHATSAPP_URL } from "@/lib/constants";

// Detailed product catalog aligned strictly with official KSP Mandara Sedana Kuta regulations
interface DetailedProduct {
  id: string;
  title: string;
  category: "simpanan" | "pinjaman";
  tagline: string;
  description: string;
  rate: string;
  rateType: "bunga" | "tanpa-bunga" | "bagi-hasil";
  tenor: string;
  plafonOrDeposit: string;
  agunan: string;
  highlights: string[];
  color: string;
  iconName: string;
  isPopular?: boolean;
  image: string;
}

const ALL_PRODUCTS: DetailedProduct[] = [
  // --- SIMPANAN ---
  {
    id: "sirela",
    title: "SIRELA (Simpanan Sukarela)",
    category: "simpanan",
    tagline: "Tabungan fleksibel setor & tarik harian",
    description:
      "Simpanan sukarela untuk kebutuhan transaksi harian anggota. Setor dan tarik bebas kapan saja melalui kantor cabang, PDL, transfer bank, VA, maupun Madata Mobile.",
    rate: "2,0% p.a.",
    rateType: "bunga",
    tenor: "Fleksibel (Tanpa Tenor)",
    plafonOrDeposit: "Awal Rp10.000, lanjut Rp5.000",
    agunan: "Bebas disetor dan ditarik sewaktu-waktu pada hari dan jam kerja operasional kantor, via PDL, transfer bank, VA, maupun aplikasi Madata Mobile.",
    highlights: [
      "Bunga 2% p.a dihitung harian & dibukukan tgl 27",
      "Biaya administrasi ringan Rp2.000/bulan",
      "Saldo minimal Rp10.000 (minimal ber-bunga Rp300.000)",
      "Terhubung penuh ke ekosistem Madata Mobile 24 Jam",
    ],
    color: "from-teal-600 to-cyan-600",
    iconName: "Coins",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sijaka",
    title: "SIJAKA (Simpanan Berjangka)",
    category: "simpanan",
    tagline: "Investasi deposito berjangka imbal hasil prima",
    description:
      "Investasi simpanan berjangka dengan bunga kompetitif di atas rata-rata perbankan umum. Dilengkapi sertifikat Bilyet resmi bermaterai dan opsi perpanjangan otomatis (ARO).",
    rate: "3,8% – 6,2% p.a.",
    rateType: "bunga",
    tenor: "3, 6, dan 12 Bulan",
    plafonOrDeposit: "Minimal Rp5.000.000",
    agunan: "Pencairan pokok dilakukan saat jatuh tempo (3, 6, atau 12 bulan) dengan menyerahkan bilyet SIJAKA asli. Pencairan sebelum jatuh tempo dikenakan penalti bunga 3 bulan terakhir dan bunga berjalan hangus.",
    highlights: [
      "3 Bulan: 3,8% p.a. | 6 Bulan: 5,0% p.a. | 12 Bulan: 6,2% p.a.",
      "Gratis biaya administrasi bulanan 100%",
      "Fitur Auto Roll Over (ARO) pokok atau pokok + bunga",
      "Bilyet resmi berbadan hukum & dapat diagunkan",
    ],
    color: "from-teal-700 to-emerald-600",
    iconName: "Clock",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sirena",
    title: "SIRENA (Simpanan Berencana)",
    category: "simpanan",
    tagline: "Tabungan komitmen rutin dengan bunga majemuk",
    description:
      "Solusi cerdas merencanakan dana pendidikan, pernikahan, atau pensiun melalui komitmen setoran rutin bulanan dengan imbal hasil bunga majemuk berjenjang.",
    rate: "4,37% – 4,79% p.a.",
    rateType: "bunga",
    tenor: "1 hingga 10 Tahun",
    plafonOrDeposit: "Rutin min. Rp25.000/bulan",
    agunan: "Pencairan simpanan dilakukan saat jatuh tempo sesuai periode kontrak (1–10 tahun). Penarikan/penutupan sebelum waktu jatuh temponya dikenakan penalti bunga 3 bulan terakhir dan bunga berjalan hangus.",
    highlights: [
      "Bunga majemuk progresif bertumbuh hingga 4,79% p.a.",
      "Rumus bunga majemuk Mn = M0(1+b)^n",
      "Dilengkapi Buku Tabungan & Bilyet SIRENA resmi",
      "Dapat dijadikan agunan fasilitas pinjaman",
    ],
    color: "from-blue-600 to-teal-600",
    iconName: "PiggyBank",
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sirena-plus",
    title: "SIRENA PLUS",
    category: "simpanan",
    tagline: "Penempatan tunggal jangka panjang bunga tinggi",
    description:
      "Simpanan berencana dengan sistem satu kali penempatan dana di awal untuk jangka waktu 5 hingga 10 tahun dengan akumulasi bunga majemuk optimal.",
    rate: "7,80% – 8,47% p.a.",
    rateType: "bunga",
    tenor: "5 hingga 10 Tahun",
    plafonOrDeposit: "Minimal Rp5.000.000 (di awal)",
    agunan: "Pencairan simpanan dilakukan saat jatuh tempo (5–10 tahun). Penarikan sebelum jatuh tempo dikenakan penalti bunga 3 bulan terakhir dan bunga berjalan tidak dibayarkan.",
    highlights: [
      "Imbal hasil bunga tertinggi hingga 8,47% per tahun",
      "Cukup 1 kali setor di awal tanpa kewajiban bulanan",
      "Sangat cocok untuk dana pensiun & perencanaan masa depan",
      "Bilyet resmi berbadan hukum & dapat diagunkan",
    ],
    color: "from-indigo-600 to-teal-700",
    iconName: "TrendingUp",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "simpel",
    title: "SIMPEL (Simpanan Pelajar)",
    category: "simpanan",
    tagline: "Tabungan edukasi literasi keuangan anak sekolah",
    description:
      "Tabungan khusus pelajar tingkat SD, SMP, hingga SMA melalui program kerja sama resmi sekolah (PKS) dengan skema perwalian guru yang ditunjuk.",
    rate: "2,0% p.a.",
    rateType: "bunga",
    tenor: "Sesuai Masa Sekolah",
    plafonOrDeposit: "Awal Rp10.000, lanjut Rp5.000",
    agunan: "Tidak dapat ditarik sewaktu-waktu secara bebas; penarikan harus sesuai syarat dan ketentuan Perjanjian Kerja Sama (PKS) sekolah. Penutupan rekening atas permintaan sendiri hanya dapat dilakukan setelah siswa lulus dari sekolah bersangkutan (dibuktikan dengan copy ijazah).",
    highlights: [
      "Bunga harian 2% p.a dibukukan tgl 27 setiap bulan",
      "Buku tabungan resmi atas nama siswa dengan perwalian guru",
      "Biaya administrasi bulanan ringan Rp2.000,-",
      "Saldo minimal mengendap Rp10.000 (min. bunga Rp300.000)",
    ],
    color: "from-teal-500 to-emerald-500",
    iconName: "GraduationCap",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sikelung",
    title: "SIKELUNG (Simpanan Ketekan Galungan)",
    category: "simpanan",
    tagline: "Tabungan harian terdisiplin hari raya dengan bingkisan",
    description:
      "Simpanan terencana jangka waktu 200 hari dengan pendebetan harian otomatis dari SIRELA. Dana otomatis dipindahkan ke rekening SIRELA saat jatuh tempo 200 hari beserta bingkisan hari raya Galungan.",
    rate: "Bonus Bingkisan",
    rateType: "tanpa-bunga",
    tenor: "200 Hari",
    plafonOrDeposit: "Mulai Rp5.000 / hari via autodebet",
    agunan: "Hanya dapat ditarik setelah jatuh tempo 200 hari (masa pencairan), di mana saldo otomatis dipindahkan ke rekening SIRELA anggota untuk dapat ditarik. Pencairan sebelum 200 hari hanya dapat diproses atas persetujuan khusus MOD.",
    highlights: [
      "Setoran otomatis autodebet harian dari SIRELA",
      "Jangka waktu tepat 200 hari menyambut hari raya Galungan",
      "Bonus bingkisan bagi anggota tertib (maks. toleransi absen setor 7 hari)",
      "Gratis biaya administrasi bulanan 100% & tanpa bunga",
    ],
    color: "from-amber-600 to-teal-600",
    iconName: "Coins",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "simpanan-pokok-wajib",
    title: "Simpanan Pokok & Wajib",
    category: "simpanan",
    tagline: "Modal kepemilikan dan keanggotaan resmi koperasi",
    description:
      "Simpanan tanda bukti keanggotaan yang menjadi modal sendiri koperasi. Menjadi landasan hak suara dan kepemilikan dalam Rapat Anggota Tahunan (RAT).",
    rate: "Modal Keanggotaan",
    rateType: "bagi-hasil",
    tenor: "Selama Menjadi Anggota",
    plafonOrDeposit: "Pokok Rp10rb, Wajib Rp10rb/bln",
    agunan: "Tidak dapat ditarik selama masih menjadi anggota aktif koperasi. Simpanan Wajib dapat diambil kembali saat anggota resmi berhenti dari keanggotaan.",
    highlights: [
      "Syarat mutlak untuk menikmati seluruh fasilitas koperasi",
      "Mendukung permodalan mandiri bersama seluruh anggota",
      "Akses perlindungan duka Daperma s/d Rp40 Juta",
      "Nominal sangat terjangkau untuk seluruh lapisan masyarakat",
    ],
    color: "from-slate-700 to-slate-900",
    iconName: "Wallet",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },

  // --- PINJAMAN ---
  {
    id: "pinjaro",
    title: "PINJARO (Pinjaman Harian Mikro)",
    category: "pinjaman",
    tagline: "Pembiayaan usaha mikro cepat tanpa agunan",
    description:
      "Pinjaman modal kerja harian untuk pedagang pasar, warung kelontong, dan pelaku UMKM dengan pencairan cepat dan angsuran harian yang sangat terjangkau.",
    rate: "0,09% / Hari",
    rateType: "bunga",
    tenor: "100 Hari",
    plafonOrDeposit: "Rp500.000 – Rp5.000.000",
    agunan: "Tanpa Agunan (Tanpa Jaminan Fisik)",
    highlights: [
      "Pencairan cepat 1x24 jam langsung setelah survei lokasi usaha",
      "Peminjam perdana maks. Rp3 Juta, lancar bisa naik s/d Rp5 Juta",
      "Biaya hanya materai Rp10.000 (tanpa potongan provisi/administrasi)",
      "Pelunasan dipercepat dihitung dari angsuran per hari x sisa hari, bukan sisa pokok",
    ],
    color: "from-cyan-600 to-teal-600",
    iconName: "Zap",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-modal",
    title: "Pinjaman Modal Koperasi (Bunga 0%)",
    category: "pinjaman",
    tagline: "Pinjaman tanpa bunga khusus peningkatan kelas anggota",
    description:
      "Program pembiayaan istimewa tanpa bunga (0% Bunga) untuk membantu anggota menambah simpanan modal agar memenuhi syarat klasifikasi Silver atau Gold.",
    rate: "0% Flat (Tanpa Bunga)",
    rateType: "tanpa-bunga",
    tenor: "50 Bulan",
    plafonOrDeposit: "Plafon Rp5.000.000 & Rp10.000.000",
    agunan: "Tanpa Agunan Fisik (Dijamin Simpanan)",
    highlights: [
      "Bunga 0% murni — cicilan flat Rp100rb atau Rp200rb/bulan",
      "Biaya administrasi satu kali: Rp50rb (5jt) / Rp100rb (10jt)",
      "Otomatis meningkatkan status keanggotaan koperasi",
      "Dilindungi Daperma & BPJS Ketenagakerjaan BPU",
    ],
    color: "from-emerald-600 to-teal-700",
    iconName: "Percent",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-usaha",
    title: "Pinjaman Usaha Produktif",
    category: "pinjaman",
    tagline: "Ekspansi bisnis, modal kerja & perputaran stok",
    description:
      "Fasilitas kredit modal kerja untuk pelaku usaha yang membutuhkan penambahan stok barang dagang, alat produksi, atau pembukaan cabang baru.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Sesuai Kebutuhan & Nilai Agunan (BMPP)",
    agunan: "BPKB Kendaraan / SHM Tanah & Bangunan",
    highlights: [
      "Plafon fleksibel disesuaikan kapasitas omzet usaha",
      "Suku bunga adil 1,2% – 1,5% flat per bulan",
      "Biaya provisi 0,5% dan administrasi mulai 1%",
      "Plafon di atas Rp100 juta wajib agunan SHM",
    ],
    color: "from-teal-700 to-slate-800",
    iconName: "Briefcase",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-yadnya",
    title: "Pinjaman Yadnya & Sosial",
    category: "pinjaman",
    tagline: "Bunga khusus upacara keagamaan & kebutuhan adat",
    description:
      "Pinjaman khusus yang dirancang untuk mendukung kelancaran upacara panca yadnya dan kegiatan adat dengan suku bunga istimewa jauh lebih rendah dari pinjaman komersial.",
    rate: "1,0% / Bulan (Bunga Khusus)",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Sesuai Kebutuhan Upacara & Kapasitas",
    agunan: "BPKB Kendaraan atau SHM (> 100jt SHM)",
    highlights: [
      "Bunga istimewa hanya 1,0% flat per bulan (subsidi sosial koperasi)",
      "Syarat ringkas cukup lampirkan informasi upacara yadnya",
      "Tenor leluasa hingga 60 bulan agar cicilan tetap terjangkau",
      "Wujud nyata kepedulian koperasi terhadap kearifan lokal",
    ],
    color: "from-indigo-600 to-cyan-600",
    iconName: "HeartPulse",
    isPopular: true,
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-kpr",
    title: "Pinjaman KPR / Tanah",
    category: "pinjaman",
    tagline: "Pembiayaan rumah hunian atau pembelian kavling tanah",
    description:
      "Kredit kepemilikan rumah atau pembelian kavling tanah anggota dengan proses yang cepat dan angsuran terukur hingga 10 tahun.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 10 Tahun",
    plafonOrDeposit: "Sesuai Nilai Agunan (Maks. BMPP)",
    agunan: "Sertifikat Hak Milik (SHM) Rumah/Tanah yang Dibeli",
    highlights: [
      "Tenor panjang hingga 10 tahun (120 bulan)",
      "Bekerja sama dengan notaris rekanan terpercaya",
      "Penilaian agunan adil dan proses transparan",
      "Pelunasan dipercepat diperkenankan",
    ],
    color: "from-slate-700 to-teal-800",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-renovasi",
    title: "Pinjaman Renovasi",
    category: "pinjaman",
    tagline: "Perbaikan dan peningkatan kualitas bangunan tempat tinggal atau usaha",
    description:
      "Pembiayaan renovasi rumah tinggal, ruko, atau tempat usaha anggota agar lebih nyaman dan meningkatkan nilai aset properti.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Sesuai Rencana Anggaran Biaya (BMPP)",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    highlights: [
      "Jangka waktu 1 hingga 5 tahun (12–60 bulan)",
      "Administrasi 1% (1–2 th), 1,5% (3–4 th), 2% (5 th)",
      "Provisi 0,5% dari plafon pembiayaan",
      "Syarat cukup KTP, KK, usaha jelas & rekening SIRELA",
    ],
    color: "from-teal-800 to-slate-900",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-investasi",
    title: "Pinjaman Investasi",
    category: "pinjaman",
    tagline: "Pengadaan mesin, peralatan produktif, dan aset jangka panjang",
    description:
      "Pembiayaan pembelian peralatan usaha, pembangunan fasilitas fisik, atau aset produktif yang mendukung pertumbuhan bisnis anggota dalam jangka panjang.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 10 Tahun",
    plafonOrDeposit: "Sesuai Kebutuhan Investasi (BMPP)",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    highlights: [
      "Tenor leluasa hingga 10 tahun (120 bulan)",
      "Mendukung modernisasi peralatan kerja anggota",
      "Perhitungan suku bunga adil dan kompetitif",
      "Didampingi konsultasi keuangan dari staf koperasi",
    ],
    color: "from-cyan-700 to-teal-900",
    iconName: "TrendingUp",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-motor",
    title: "Pinjaman Sepeda Motor",
    category: "pinjaman",
    tagline: "Kredit sepeda motor baru atau bekas berkualitas",
    description:
      "Pembiayaan kepemilikan sepeda motor dengan suku bunga flat 1,3% per bulan dan tenor 1 hingga 2 tahun dengan agunan kendaraan yang dibeli.",
    rate: "1,3% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 2 Tahun",
    plafonOrDeposit: "Sesuai Harga Motor (Maks. BMPP)",
    agunan: "BPKB Sepeda Motor yang Dibeli",
    highlights: [
      "Suku bunga flat 1,3% per bulan",
      "Tenor 12 atau 24 bulan",
      "Biaya administrasi 1%, provisi 0,5%",
      "Bisa untuk unit baru maupun unit bekas",
    ],
    color: "from-primary-600 to-teal-700",
    iconName: "CreditCard",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-mobil",
    title: "Pinjaman Mobil",
    category: "pinjaman",
    tagline: "Kredit mobil niaga atau keluarga baru & seken",
    description:
      "Solusi pembiayaan kepemilikan mobil untuk keperluan niaga, operasional usaha, maupun mobilitas keluarga dengan proses cepat dan bunga transparan.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Sesuai Harga Mobil & DP (BMPP)",
    agunan: "BPKB Mobil yang Dibeli",
    highlights: [
      "Tenor hingga 5 tahun (60 bulan)",
      "Bunga flat 1,2% – 1,5% per bulan",
      "Asuransi kendaraan terjamin selama masa pembiayaan",
      "BPKB tersimpan aman di khazanah kantor koperasi",
    ],
    color: "from-teal-600 to-cyan-700",
    iconName: "CreditCard",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-multiguna",
    title: "Pinjaman Multiguna",
    category: "pinjaman",
    tagline: "Solusi likuiditas terpercaya untuk segala macam keperluan",
    description:
      "Pembiayaan fleksibel untuk berbagai keperluan anggota yang tidak tercover jenis pinjaman lain, dengan syarat agunan berharga dan bunga terjangkau.",
    rate: "1,2% – 1,5% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Sesuai Kebutuhan (Maks. BMPP)",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    highlights: [
      "Penggunaan dana fleksibel untuk beragam kebutuhan",
      "Tenor 1 hingga 5 tahun",
      "Administrasi 1%–2%, provisi 0,5%",
      "Pelunasan dipercepat diperkenankan",
    ],
    color: "from-primary-700 to-cyan-800",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-back-to-back",
    title: "Pinjaman Back to Back",
    category: "pinjaman",
    tagline: "Pinjaman kilat beragunan simpanan sendiri di koperasi",
    description:
      "Pembiayaan dengan jaminan simpanan anggota sendiri di koperasi (buku SIRELA atau bilyet SIJAKA). Proses persetujuan instan dengan suku bunga khusus.",
    rate: "1,5%/bln + Bunga Simpanan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Maksimal 90% dari Nilai Simpanan",
    agunan: "Buku SIRELA / Bilyet SIJAKA Asli",
    highlights: [
      "Plafon hingga 90% dari nilai simpanan agunan",
      "Suku bunga 1,5% ditambah bunga simpanan yang berjalan",
      "Simpanan tetap menghasilkan bunga selama masa pinjaman",
      "Proses pencairan sangat cepat dan mudah",
    ],
    color: "from-emerald-700 to-teal-800",
    iconName: "Coins",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-sinergi",
    title: "Pinjaman Sinergi (Payroll)",
    category: "pinjaman",
    tagline: "Pinjaman karyawan via kerjasama pemotongan gaji (PKS)",
    description:
      "Fasilitas pembiayaan khusus bagi karyawan di perusahaan mitra yang telah memiliki PKS dengan Koperasi Mandara Sedana Kuta dengan skema potong gaji.",
    rate: "1,2% / Bulan",
    rateType: "bunga",
    tenor: "1 hingga 5 Tahun",
    plafonOrDeposit: "Bebas s/d BMPP (Tanpa Agunan s/d 10 Juta)",
    agunan: "Payroll PKS (> Rp100jt menggunakan SHM)",
    highlights: [
      "Tanpa agunan fisik untuk plafon hingga Rp 10.000.000,-",
      "Suku bunga ringan hanya 1,2% per bulan",
      "Pembayaran otomatis terpotong dari slip gaji bulanan",
      "Wajib rekomendasi resmi dari HRD / Pimpinan Perusahaan",
    ],
    color: "from-teal-800 to-slate-900",
    iconName: "Briefcase",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

// Mapping icon components
const iconComponents: Record<string, typeof Wallet> = {
  Wallet,
  PiggyBank,
  Coins,
  Clock,
  Briefcase,
  CreditCard,
  GraduationCap,
  Zap,
  Building2,
  Percent,
  TrendingUp,
  HeartPulse,
};

const ppobCategories = [
  {
    title: "Simpan Pinjam Mandara",
    desc: "Cek saldo, mutasi rekening, setor simpanan & bayar angsuran realtime",
    icon: Wallet,
    tag: "Core Banking",
  },
  {
    title: "Token Listrik & PLN Pasca",
    desc: "Beli token listrik prabayar atau bayar tagihan bulanan PLN tanpa antre",
    icon: Zap,
    tag: "Utilitas",
  },
  {
    title: "Pulsa & Paket Data All Operator",
    desc: "Telkomsel, Indosat, XL, Tri, Smartfren dengan harga grosir kompetitif",
    icon: Smartphone,
    tag: "Telekomunikasi",
  },
  {
    title: "Tagihan PDAM Air Minum",
    desc: "Mendukung pembayaran PDAM Kota Denpasar, Kabupaten Badung, & sekitarnya",
    icon: Droplet,
    tag: "Utilitas",
  },
  {
    title: "Top-up E-Wallet & E-Money",
    desc: "Isi saldo GoPay, OVO, DANA, ShopeePay, LinkAja dalam hitungan detik",
    icon: CreditCard,
    tag: "Dompet Digital",
  },
  {
    title: "Transfer Dana Antar-Bank",
    desc: "Kirim uang ke seluruh rekening bank umum nasional secara instan",
    icon: ArrowLeftRight,
    tag: "Transfer",
  },
  {
    title: "Telepon & Internet Pascabayar",
    desc: "Tagihan Telkom IndiHome, Biznet, dan telepon kabel rumah",
    icon: Phone,
    tag: "Internet",
  },
  {
    title: "Iuran BPJS Kesehatan",
    desc: "Pembayaran iuran kepesertaan BPJS Kesehatan keluarga tepat waktu",
    icon: HeartPulse,
    tag: "Jaminan Sosial",
  },
];

export default function LayananPage() {
  const [filter, setFilter] = useState<"all" | "simpanan" | "pinjaman">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      // Category filter
      if (filter !== "all" && item.category !== filter) return false;

      // Search query filter
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.tagline.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.rate.toLowerCase().includes(q) ||
        item.agunan.toLowerCase().includes(q) ||
        item.tenor.toLowerCase().includes(q)
      );
    });
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* ============================================================ */}
      {/* 1. INSTITUTIONAL HERO HEADER - Fresh, Bright & Minimalist */}
      {/* ============================================================ */}
      <div className="relative bg-gradient-to-br from-slate-50 via-teal-50/50 to-cyan-50/40 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 py-14 md:py-18 px-4 text-center overflow-hidden border-b border-slate-200/80 dark:border-slate-800">
        <div className="relative z-10 max-w-4xl mx-auto">
          <SectionBadge variant="cyan">Katalog Layanan &amp; Produk Keuangan</SectionBadge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white tracking-tight mt-3 mb-4 leading-tight [text-wrap:balance]">
            Solusi Keuangan <span className="text-gradient">Transparan &amp; Terpercaya</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed [text-wrap:balance]">
            Pilihan produk simpanan dengan imbal hasil terukur dan pembiayaan pinjaman bersahabat yang berlandaskan legalitas resmi Kemenkop UKM.
          </p>

          {/* Quick Legal Assurance Tag */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 bg-white dark:bg-slate-800 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 shadow-xs">
            <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> Badan Hukum No. 004723/BH/M KUKM.2/VII/2017
            </span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-600">•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
              <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> Terlindungi Daperma &amp; BPJS Ketenagakerjaan
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. BREADCRUMB BAR */}
      {/* ============================================================ */}
      <div className="bg-white dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-800 py-3 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[{ label: "Layanan" }]} />
        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. SEARCH & DYNAMIC FILTER BAR */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === "all"
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Semua Produk ({ALL_PRODUCTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("simpanan")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === "simpanan"
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Simpanan Anggota ({ALL_PRODUCTS.filter((p) => p.category === "simpanan").length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("pinjaman")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  filter === "pinjaman"
                    ? "bg-teal-700 text-white shadow-sm"
                    : "bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                Pinjaman & Kredit ({ALL_PRODUCTS.filter((p) => p.category === "pinjaman").length})
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari produk, suku bunga, SIJAKA, tanpa agunan..."
                className="w-full pl-10 pr-9 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Search Result Summary Counter */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700/60 pt-3">
            <span>
              Menampilkan <strong className="text-slate-800 dark:text-slate-200">{filteredProducts.length}</strong> produk keuangan
              {searchQuery && ` untuk kata kunci "${searchQuery}"`}
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="/produk"
                className="text-teal-700 dark:text-teal-400 font-semibold hover:underline flex items-center gap-1"
              >
                <FileText className="w-3.5 h-3.5" /> Lihat Tabel Spesifikasi Lengkap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. PRODUCT CARDS GRID (FINTECH SPECIFICATION CARDS) */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
            <Search className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">Tidak ada produk yang cocok</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              Silakan coba kata kunci pencarian lain atau klik tombol reset filter kategori di atas.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 bg-teal-700 text-white rounded-xl text-xs font-bold hover:bg-teal-600 transition-colors"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProducts.map((product) => {
                const IconComponent = iconComponents[product.iconName] || Wallet;
                const isSimpanan = product.category === "simpanan";
                const waMessage = encodeURIComponent(
                  `Halo Customer Service KSP Mandara Sedana Kuta, saya ingin berkonsultasi mengenai produk ${product.title}. Mohon informasi persyaratan dan prosedurnya.`
                );

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative w-full min-w-0 h-full"
                  >
                    {/* Top Modern Header (No Stock Photos) */}
                    <div className="p-5 sm:p-6 pb-2 flex items-start justify-between gap-3 min-w-0">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${product.color} text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform shrink-0`}
                        >
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <span
                              className={`inline-block text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-md ${
                                isSimpanan
                                  ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                                  : "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800"
                              }`}
                            >
                              {isSimpanan ? "Simpanan" : "Pinjaman"}
                            </span>
                            {product.isPopular && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-200/90 dark:bg-amber-400/20 dark:text-amber-300 px-2 py-0.5 rounded-md border border-amber-300 dark:border-amber-700/50">
                                <Sparkles className="w-2.5 h-2.5" /> Favorit
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Floating Rate Tag */}
                      <span className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-extrabold text-[11px] sm:text-xs shrink-0 border border-slate-200/80 dark:border-slate-600 text-right ml-auto">
                        {product.rate}
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 pt-3 flex-1 flex flex-col justify-between min-w-0">
                      <div className="min-w-0">
                        {/* Title & Tagline */}
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors break-words">
                          {product.title}
                        </h3>
                        <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-3 line-clamp-1 break-words">
                          {product.tagline}
                        </p>

                        {/* Quick Specs 2-Column Badges - Prevent overflow */}
                        <div className="grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-700/60 mb-3 text-xs w-full min-w-0 max-w-full overflow-hidden">
                          <div className="min-w-0">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium truncate">
                              {isSimpanan ? "Tenor / Waktu" : "Pilihan Tenor"}
                            </span>
                            <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] truncate block" title={product.tenor}>
                              {product.tenor}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block font-medium truncate">
                              {isSimpanan ? "Setoran Dana" : "Plafon Pinjaman"}
                            </span>
                            <span className="font-bold text-slate-800 dark:text-slate-200 text-[11px] truncate block" title={product.plafonOrDeposit}>
                              {product.plafonOrDeposit}
                            </span>
                          </div>
                        </div>

                        {/* Top 2 Key Highlights */}
                        <div className="space-y-1.5 mb-3 min-w-0">
                          {product.highlights.slice(0, 2).map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 min-w-0">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                              <span className="leading-tight text-[11.5px] line-clamp-1 break-words min-w-0 flex-1">{point}</span>
                            </div>
                          ))}
                        </div>

                        {/* Toggle Drawer for Full Text & Requirements */}
                        <button
                          type="button"
                          onClick={() => toggleExpand(product.id)}
                          className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-200 transition-colors py-1"
                        >
                          <span>{expandedCardId === product.id ? "Tutup Rincian" : "Lihat Syarat & Deskripsi Lengkap"}</span>
                          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedCardId === product.id ? "rotate-180" : ""}`} />
                        </button>

                        {/* Collapsible Details */}
                        {expandedCardId === product.id && (
                          <div className="mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-700/60 text-xs space-y-2 text-slate-600 dark:text-slate-300 animate-fadeIn">
                            <p className="leading-relaxed text-[11.5px] break-words">{product.description}</p>
                            <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/50">
                              <span className="font-semibold text-slate-800 dark:text-slate-200 block text-[10.5px]">
                                {isSimpanan ? "Ketentuan Penarikan:" : "Ketentuan Agunan / Jaminan:"}
                              </span>
                              <span className="text-[11px] text-slate-600 dark:text-slate-400 break-words">{product.agunan}</span>
                            </div>
                            {product.highlights.slice(2).length > 0 && (
                              <div className="space-y-1 pt-1">
                                {product.highlights.slice(2).map((point, idx) => (
                                  <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                                    <span className="break-words">{point}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Dual Action Buttons (Fintech CTA) */}
                    <div className="p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2 min-w-0">
                      <Link
                        href={isSimpanan ? "/simulasi#simpanan" : "/simulasi#pinjaman"}
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 hover:text-teal-800 dark:hover:text-white bg-teal-50 dark:bg-teal-950/60 hover:bg-teal-100 dark:hover:bg-teal-900/60 px-3 py-2 rounded-xl transition-all border border-teal-200 dark:border-teal-800/40 flex-1 text-center min-w-0 truncate"
                      >
                        <Calculator className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                        <span className="truncate">Simulasi</span>
                      </Link>
                      <a
                        href={`https://wa.me/6281394306999?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-slate-900 bg-primary-500 hover:bg-primary-400 px-3.5 py-2 rounded-xl transition-all shadow-xs hover:shadow-md flex-1 text-center min-w-0 truncate"
                      >
                        <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">Konsultasi</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
             {/* ============================================================ */}
      {/* 5. BENEFITS & REGULATORY ASSURANCE STRIP - Clean & Minimalist */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl bg-white dark:bg-slate-800/90 p-8 sm:p-10 border border-slate-200/90 dark:border-slate-700 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <SectionBadge variant="cyan">Standar Tata Kelola Koperasi</SectionBadge>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-2 text-slate-900 dark:text-white">
              Keunggulan Bertransaksi di KSP Mandara Sedana Kuta
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-2">
              Prinsip kehati-hatian finansial, transparansi informasi, dan kepatuhan penuh pada regulasi perkoperasian nasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 shadow-xs border border-teal-100 dark:border-teal-800/40">
                <BadgePercent className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Bunga Bersaing & Transparan
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Tidak ada biaya tersembunyi. Rumus perhitungan bunga anuitas, flat harian, maupun deposito dijelaskan tuntas di awal akad.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-xs border border-cyan-100 dark:border-cyan-800/40">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Perlindungan Dana Anggota
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Didukung perlindungan Daperma hingga Rp40 Juta serta keikutsertaan BPJS Ketenagakerjaan BPU untuk anggota klasifikasi khusus.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-xs border border-emerald-100 dark:border-emerald-800/40">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mb-1">
                  Transparansi Laporan Tahunan
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                  Setiap keaktifan simpanan dan pinjaman anggota dikelola secara amanah dan dilaporkan transparan dalam Rapat Anggota Tahunan (RAT).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. DIGITAL ECOSYSTEM & PPOB DASHBOARD */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <SectionBadge variant="cyan">Ekosistem Digital Madata Mobile</SectionBadge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-3 [text-wrap:balance]">
              Semua Kebutuhan Pembayaran dalam Genggaman
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2 [text-wrap:balance]">
              Selain simpan pinjam, anggota dapat menikmati kemudahan transaksi tagihan utilitas, pulsa, dan transfer antar-bank secara instan 24 jam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ppobCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/60 hover:border-teal-400 dark:hover:border-teal-500 hover:shadow-md transition-all rounded-2xl p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/80 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 border border-teal-100 dark:border-teal-800/40">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/60 px-2 py-0.5 rounded-md">
                        {item.tag}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Aktif 24/7 di Madata
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Download CTA Box */}
          <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-slate-900 dark:to-teal-950/40 p-6 rounded-2xl border border-teal-100 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shrink-0 shadow-md">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Belum Menginstal Aplikasi Madata Mobile?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  Unduh gratis di Google Play Store dan aktifkan layanan digital banking koperasi Anda.
                </p>
              </div>
            </div>
            <Link
              href="/madata-mobile"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-400 text-slate-900 font-bold px-5 py-2.5 rounded-xl shadow-sm transition-all whitespace-nowrap active:scale-95 text-xs sm:text-sm"
            >
              <Smartphone className="w-4 h-4" />
              Pelajari Madata Mobile
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 7. INSTITUTIONAL CALL TO ACTION BANNER - Vibrant & Modern */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center bg-gradient-to-r from-teal-800 via-teal-900 to-cyan-900 text-white p-10 md:p-12 rounded-3xl shadow-xl relative overflow-hidden border border-teal-700/50">
          <div className="relative z-10 max-w-3xl mx-auto">
            <SectionBadge variant="cyan">Bantuan & Konsultasi Finansial</SectionBadge>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 tracking-tight mt-2 leading-tight [text-wrap:balance]">
              Butuh Konsultasi Pembiayaan atau Perhitungan Simulasi?
            </h3>
            <p className="text-teal-200 text-xs sm:text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed [text-wrap:balance]">
              Tim analis kredit dan petugas pelayanan kami siap membantu menghitung plafon, tenor ideal, dan persyaratan yang paling pas untuk rencana keuangan Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <Link
                href="/simulasi"
                className="bg-primary-500 hover:bg-primary-400 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all flex items-center gap-2 text-xs sm:text-sm active:scale-95"
              >
                <Calculator className="w-4 h-4" />
                Kalkulator Simulasi Pinjaman & Simpanan
              </Link>
              <a
                href="https://wa.me/6281394306999?text=Halo%20KSP%20Mandara%20Sedana%20Kuta,%20saya%20ingin%20konsultasi%20layanan%20koperasi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                Chat WhatsApp Customer Service
              </a>
              <Link
                href="/produk"
                className="bg-teal-800/80 hover:bg-teal-700 text-teal-100 border border-teal-600/60 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2 text-xs sm:text-sm"
              >
                <FileText className="w-4 h-4" />
                Tabel Spesifikasi Produk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
