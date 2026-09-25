// ============================================
// SITE-WIDE CONSTANTS & CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: "Koperasi Mandara Sedana Kuta",
  shortName: "Mandara Sedana Kuta",
  tagline: "Bersama Wujudkan Impian",
  description:
    "Koperasi Simpan Pinjam modern berbasis di Bali. Solusi keuangan terpercaya untuk anggota sejahtera dengan layanan digital melalui Madata Mobile.",
  legalitas: "No. 004723/BH/M KUKM.2/VII/2017",
  whatsapp: "6281394306999",
  whatsappFormatted: "+62 813-9430-6999",
  whatsappText: "Halo%20Koperasi%20Mandara%20Sedana%20Kuta",
  email: "info@mandarasedanakuta.co.id",
  instagram: "koperasimandarasedanakuta",
  facebook: "koperasimandarasedanakuta",
  youtube: "https://youtube.com/@koperasimadatachannel5957?si=c6gr5QIstviq5bx6",
  youtubeName: "KOPERASI MADATA CHANNEL",
  googlePlayUrl:
    "https://play.google.com/store/apps/details?id=sevanam.com.madatamobileapps&pcampaignid=web_share",
  youtubeProfile: "https://youtu.be/qLutMmpkLEo",
  offices: {
    pusat: {
      name: "Kantor Pusat Legian",
      address: "Jl. Legian Kuta Gang Bendesa No.5",
      city: "Kuta, Badung — Bali",
      coordinates: "-8.7143616, 115.1727784",
      mapsUrl:
        "https://www.google.com/maps?q=-8.7143616,115.1727784&hl=id&z=18&output=embed",
      mapsDirect:
        "https://www.google.com/maps/dir/?api=1&destination=-8.7143616,115.1727784",
    },
    cabang: {
      name: "Kantor Cabang Sesetan",
      address: "Jl. Tukad Banyu Sari No. 100, Sesetan",
      city: "Denpasar Selatan — Bali",
      coordinates: "-8.6839753, 115.2177335",
      mapsUrl:
        "https://www.google.com/maps?q=-8.6839753,115.2177335&hl=id&z=18&output=embed",
      mapsDirect:
        "https://www.google.com/maps/dir/?api=1&destination=-8.6839753,115.2177335",
    },
  },
  ga4Id: "G-XXXXXXXXXX", // Replace with actual GA4 ID
};

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${SITE_CONFIG.whatsappText}`;

export const CONTACT = {
  phone: "+62 813-9430-6999",
  phoneFormatted: "+62 813-9430-6999",
  whatsapp: "6281394306999",
  whatsappFormatted: "+62 813-9430-6999",
  email: SITE_CONFIG.email,
  hours: "08:00 - 15:30 WITA",
};

export const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  {
    href: "/tentang-kami",
    label: "Tentang Kami",
    children: [
      { href: "/tentang-kami#visi-misi", label: "Visi & Misi" },
      { href: "/tentang-kami#nilai-keren", label: "Nilai KEREN" },
      { href: "/tentang-kami#struktur", label: "Struktur Organisasi" },
    ],
  },
  {
    href: "/layanan",
    label: "Layanan",
    children: [
      { href: "/layanan#simpanan", label: "Simpanan" },
      { href: "/layanan#pinjaman", label: "Pinjaman" },
    ],
  },
  { href: "/produk", label: "Produk" },
  { href: "/simulasi", label: "Simulasi" },
  { href: "/madata-mobile", label: "Madata Mobile" },
  { href: "/galeri", label: "Galeri" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontak", label: "Kontak" },
];

export const STATS = [
  {
    value: 2231,
    suffix: "+",
    label: "Anggota Aktif",
    icon: "Users",
    color: "text-primary-500",
  },
  {
    value: 90,
    suffix: "M+",
    prefix: "Rp ",
    label: "Total Aset Koperasi",
    icon: "TrendingUp",
    color: "text-cyan-500",
  },
  {
    value: 2017,
    suffix: "",
    label: "Tahun Berdiri",
    icon: "Calendar",
    color: "text-gold",
  },
  {
    value: 2,
    suffix: "",
    label: "Kantor Cabang",
    icon: "MapPin",
    color: "text-primary-500",
  },
];

export const VIDEOS = [
  {
    id: "v1",
    title: "Profile Company Koperasi Mandara Sedana Kuta",
    category: "Profil",
    videoId: "qLutMmpkLEo",
    thumbnail: "https://img.youtube.com/vi/qLutMmpkLEo/maxresdefault.jpg",
    url: "https://youtu.be/qLutMmpkLEo",
    description: "Profil resmi Koperasi Mandara Sedana Kuta, visi, misi, dan komitmen pelayanan anggota.",
  },
  {
    id: "v2",
    title: "Dari Hobi Kulineran Bali, Hingga Akhirnya Memutuskan Untuk Buka Usaha Warung Babi Guling",
    category: "Komunitas",
    videoId: "8iTTaLASq2Q",
    thumbnail: "https://img.youtube.com/vi/8iTTaLASq2Q/maxresdefault.jpg",
    url: "https://youtu.be/8iTTaLASq2Q",
    description: "Kisah inspiratif anggota binaan Koperasi Mandara Sedana Kuta mengembangkan usaha kuliner.",
  },
  {
    id: "v3",
    title: "Apa itu Koperasi Mandara Sedana Kuta",
    category: "Podcast",
    videoId: "4ewvB-QrRMY",
    thumbnail: "https://img.youtube.com/vi/4ewvB-QrRMY/maxresdefault.jpg",
    url: "https://youtu.be/4ewvB-QrRMY",
    description: "Penjelasan mendalam mengenai legalitas, peran, dan layanan Koperasi Mandara Sedana Kuta.",
  },
  {
    id: "v4",
    title: "Solidaritas MADATA: Kunjungan Koperasi Mandara Sedana Kuta ke Merajan Pasek Dalem Ciwa Gaduh",
    category: "Sosial",
    videoId: "bozMSASoYjY",
    thumbnail: "https://img.youtube.com/vi/bozMSASoYjY/maxresdefault.jpg",
    url: "https://youtu.be/bozMSASoYjY",
    description: "Aksi solidaritas dan kepedulian sosial Koperasi Mandara Sedana Kuta ke masyarakat.",
  },
  {
    id: "v5",
    title: "RIMA Coffee & Eatery, Tempat Nongkrong Nyaman di Jalan Legian",
    category: "Komunitas",
    videoId: "VCwF0PuNzlo",
    thumbnail: "https://img.youtube.com/vi/VCwF0PuNzlo/maxresdefault.jpg",
    url: "https://youtu.be/VCwF0PuNzlo",
    description: "Liputan usaha anggota Madata Community di kawasan Legian Kuta.",
  },
  {
    id: "v6",
    title: "\"Warung Buah Asih\" Menyediakan Buah Buahan Segar, di Jalan Mataram Kuta",
    category: "Komunitas",
    videoId: "WeJucv95Plg",
    thumbnail: "https://img.youtube.com/vi/WeJucv95Plg/maxresdefault.jpg",
    url: "https://youtu.be/WeJucv95Plg",
    description: "Dukungan pembiayaan usaha mikro untuk Warung Buah Asih di Jalan Mataram Kuta.",
  },
  {
    id: "v7",
    title: "Berawal dari Hobi Membongkar Mesin Motor, Kini Buka Usaha Bengkel Mobil, \"KUTA MESARI SERVICE AUTO\"",
    category: "Komunitas",
    videoId: "Ig4_VQ2Dopc",
    thumbnail: "https://img.youtube.com/vi/Ig4_VQ2Dopc/maxresdefault.jpg",
    url: "https://youtu.be/Ig4_VQ2Dopc",
    description: "Perjalanan sukses membuka usaha bengkel mobil didukung pembiayaan koperasi.",
  },
  {
    id: "v8",
    title: "Modal Panggang di Rumah, Hasilnya Bikin Heboh! Warung BBQ Mek Made",
    category: "Komunitas",
    videoId: "cGLsiMFDMQ0",
    thumbnail: "https://img.youtube.com/vi/cGLsiMFDMQ0/maxresdefault.jpg",
    url: "https://youtu.be/cGLsiMFDMQ0",
    description: "Kisah sukses Warung BBQ Mek Made binaan ekosistem wirausaha Madata.",
  },
  {
    id: "v9",
    title: "Padmi Avail | Produk Kesehatan Wanita Bersama Madata Community",
    category: "Komunitas",
    videoId: "RBE9t6sC4WM",
    thumbnail: "https://img.youtube.com/vi/RBE9t6sC4WM/maxresdefault.jpg",
    url: "https://youtu.be/RBE9t6sC4WM",
    description: "Kolaborasi anggota Madata Community dalam mengembangkan produk kesehatan wanita.",
  },
  {
    id: "v10",
    title: "Peran Generasi Muda Dalam Berkoperasi di Era Digitalisasi Pat 1",
    category: "Podcast",
    videoId: "xeXlnnKA9h0",
    thumbnail: "https://img.youtube.com/vi/xeXlnnKA9h0/maxresdefault.jpg",
    url: "https://youtu.be/xeXlnnKA9h0",
    description: "Podcast edukasi peran generasi muda memajukan koperasi modern era digital Part 1.",
  },
  {
    id: "v11",
    title: "Peran Generasi Muda Dalam Berkoperasi di Era Digitalisasi Pat 2",
    category: "Podcast",
    videoId: "MWAaUEN-Q_U",
    thumbnail: "https://img.youtube.com/vi/MWAaUEN-Q_U/maxresdefault.jpg",
    url: "https://youtu.be/MWAaUEN-Q_U",
    description: "Lanjutan obrolan inspiratif peran pemuda dan digitalisasi koperasi Part 2.",
  },
  {
    id: "v12",
    title: "Produk Koperasi Mandara Sedana Kuta",
    category: "Podcast",
    videoId: "_f00S8DFEEg",
    thumbnail: "https://img.youtube.com/vi/_f00S8DFEEg/maxresdefault.jpg",
    url: "https://youtu.be/_f00S8DFEEg",
    description: "Ulasan komprehensif produk simpanan, deposito, dan rencana masa depan anggota.",
  },
  {
    id: "v13",
    title: "Produk Pinjaman Koperasi Mandara Sedana Kuta",
    category: "Podcast",
    videoId: "SmadUIfRCw4",
    thumbnail: "https://img.youtube.com/vi/SmadUIfRCw4/maxresdefault.jpg",
    url: "https://youtu.be/SmadUIfRCw4",
    description: "Panduan memilih produk pinjaman usaha, mikro, multiguna, dan ketentuan kredit koperasi.",
  },
  {
    id: "v14",
    title: "Peran Penting SPI dalam Tata Kelola Koperasi Mandara Sedana Kuta",
    category: "Podcast",
    videoId: "9lM3dDRpHFA",
    thumbnail: "https://img.youtube.com/vi/9lM3dDRpHFA/maxresdefault.jpg",
    url: "https://youtu.be/9lM3dDRpHFA",
    description: "Edukasi peran Satuan Pengawas Internal (SPI) menjaga akuntabilitas dan tata kelola koperasi.",
  },
  {
    id: "v15",
    title: "\"Apa Itu SDM? Kunci Sukses Koperasi & Budaya KEREN MADATA!\"",
    category: "Podcast",
    videoId: "RTk82Mh3thk",
    thumbnail: "https://img.youtube.com/vi/RTk82Mh3thk/maxresdefault.jpg",
    url: "https://youtu.be/RTk82Mh3thk",
    description: "Pentingnya manajemen SDM profesional dan penanaman nilai budaya KEREN Madata.",
  },
  {
    id: "v16",
    title: "Solidaritas Madata - Maturan Punia ke Pura Paibon Bendesa Manik Mas Br. Pengabetan Kuta",
    category: "Sosial",
    videoId: "940chlI6sjY",
    thumbnail: "https://img.youtube.com/vi/940chlI6sjY/maxresdefault.jpg",
    url: "https://youtu.be/940chlI6sjY",
    description: "Kegiatan penyerahan punia dan bakti sosial di Br. Pengabetan Kuta.",
  },
  {
    id: "v17",
    title: "Solidaritas Madata - Penyerahan Punia ke Pura Pengungangan Kuta dalam Rangka Pecaruan dan Pujawali",
    category: "Sosial",
    videoId: "8yjPHKYQcWM",
    thumbnail: "https://img.youtube.com/vi/8yjPHKYQcWM/maxresdefault.jpg",
    url: "https://youtu.be/8yjPHKYQcWM",
    description: "Penyerahan punia dalam rangka upacara Pecaruan dan Pujawali di Pura Pengungangan Kuta.",
  },
];

export const KEREN_VALUES = [
  {
    letter: "K",
    title: "Kolaborasi",
    color: "#065A74",
    textColor: "text-white",
    bgGradient: "from-teal-800 to-teal-700",
    description:
      "Bersinergi dengan stakeholder, mitra, dan lintas unit dengan semangat gotong royong untuk membangun ekosistem koperasi yang terintegrasi, memperluas jaringan, serta mendorong pertumbuhan usaha anggota secara berkelanjutan.",
  },
  {
    letter: "E",
    title: "Etika",
    color: "#0ABCF0",
    textColor: "text-white",
    bgGradient: "from-cyan-600 to-cyan-500",
    description:
      "Menjaga integritas, kejujuran, transparansi, komitmen dan tanggung jawab dalam setiap tindakan.",
  },
  {
    letter: "R",
    title: "Responsif",
    color: "#10B981",
    textColor: "text-white",
    bgGradient: "from-emerald-600 to-emerald-500",
    description:
      "Tanggap terhadap kebutuhan anggota dan perubahan lingkungan usaha.",
  },
  {
    letter: "E",
    title: "Empati",
    color: "#F97316",
    textColor: "text-white",
    bgGradient: "from-orange-600 to-orange-500",
    description:
      "Memahami dan peduli terhadap kesejahteraan anggota, rekan kerja, alam dan lingkungan sekitar.",
  },
  {
    letter: "N",
    title: "Niat Bertumbuh",
    color: "#F59E0B",
    textColor: "text-white",
    bgGradient: "from-amber-600 to-amber-500",
    description:
      "Selalu belajar, tumbuh, dan berinovasi dengan semangat memperbaiki diri dan organisasi, seraya bersyukur atas setiap proses yang dijalani.",
  },
];

export const SERVICES = [
  // --- 1. SIMPANAN (6 Produk Resmi Sesuai PDF) ---
  {
    id: "simpanan-pokok",
    title: "Simpanan Pokok (SIPO)",
    description:
      "Simpanan awal saat mendaftar menjadi anggota sebesar Rp 10.000. Merupakan modal sendiri koperasi dan tidak dapat ditarik selama menjadi anggota.",
    icon: "Wallet",
    category: "simpanan",
    color: "from-teal-600 to-teal-800",
    rate: "Modal Awal Rp 10.000",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "simpanan-wajib",
    title: "Simpanan Wajib (SIWA)",
    description:
      "Setoran rutin anggota sebesar Rp 10.000 per bulan sebagai modal sendiri koperasi. Dapat ditarik kembali saat berhenti dari keanggotaan.",
    icon: "PiggyBank",
    category: "simpanan",
    color: "from-cyan-600 to-teal-700",
    rate: "Rp 10.000 / bln",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sirela",
    title: "SIRELA (Simpanan Sukarela)",
    description:
      "Tabungan sukarela bebas setor dan ditarik kapan saja pada hari dan jam kerja atau via Madata Mobile. Setoran awal min. Rp 10.000, lanjut min. Rp 5.000. Bunga 2% p.a. harian dibayar tiap tgl 27 (min. saldo ber-bunga Rp 300.000). Adm Rp 2.000/bln.",
    icon: "Coins",
    category: "simpanan",
    color: "from-primary-600 to-cyan-600",
    rate: "2,0% p.a.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sijaka",
    title: "SIJAKA (Simpanan Berjangka)",
    description:
      "Deposito berjangka penempatan min. Rp 5.000.000 dengan tenor 3 bln (3,8% p.a.), 6 bln (5,0% p.a.), atau 12 bln (6,2% p.a.). Bebas biaya administrasi. Pencairan pokok dilakukan saat jatuh tempo dengan menyerahkan bilyet asli (pencairan sebelum tempo dikenakan penalti bunga 3 bulan terakhir).",
    icon: "Clock",
    category: "simpanan",
    color: "from-teal-700 to-cyan-500",
    rate: "3,8% – 6,2% p.a.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sirena",
    title: "SIRENA (Simpanan Berencana)",
    description:
      "Tabungan berencana setoran rutin mulai Rp 25.000/bulan dengan jangka waktu 1 hingga 10 tahun. Imbal hasil bunga majemuk berjenjang hingga 4,79% p.a. Pencairan dilakukan saat jatuh tempo (pencairan sebelum tempo dikenakan penalti bunga 3 bulan terakhir dan bunga berjalan hangus).",
    icon: "PiggyBank",
    category: "simpanan",
    color: "from-blue-600 to-teal-600",
    rate: "4,37% – 4,79% p.a.",
    image: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sirena-plus",
    title: "SIRENA PLUS",
    description:
      "Simpanan berencana penempatan tunggal di awal minimal Rp 5.000.000 untuk jangka waktu 5 hingga 10 tahun dengan bunga majemuk tinggi hingga 8,47% per tahun. Pencairan dilakukan saat jatuh tempo.",
    icon: "TrendingUp",
    category: "simpanan",
    color: "from-indigo-600 to-teal-700",
    rate: "7,80% – 8,47% p.a.",
    image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "simpel",
    title: "SIMPEL (Simpanan Pelajar)",
    description:
      "Simpanan khusus pelajar via PKS sekolah dengan perwalian guru. Setoran awal min. Rp 10.000, bunga 2% p.a., adm Rp 2.000/bln. Penarikan tidak bisa bebas sewaktu-waktu dan wajib mengikuti ketentuan PKS sekolah atau saat siswa telah lulus.",
    icon: "GraduationCap",
    category: "simpanan",
    color: "from-teal-500 to-emerald-500",
    rate: "2,0% p.a.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sikelung",
    title: "SIKELUNG (Simpanan Ketekan Galungan)",
    description:
      "Tabungan harian berjangka 200 hari via autodebet SIRELA mulai Rp 5.000/hari. Tanpa bunga, bebas biaya administrasi. Saldo otomatis dicairkan ke rekening SIRELA saat jatuh tempo 200 hari beserta bonus bingkisan hari raya Galungan.",
    icon: "Coins",
    category: "simpanan",
    color: "from-amber-600 to-teal-600",
    rate: "Bonus Bingkisan",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },

  // --- 2. PINJAMAN (12 Produk Resmi Sesuai PDF) ---
  {
    id: "pinjaro",
    title: "PINJARO (Pinjaman Harian Mikro)",
    description:
      "Pinjaman tanpa agunan fisik untuk pelaku usaha mikro. Plafon Rp 500 ribu – Rp 5 juta (pertama kali maks. Rp 3 juta), tenor 100 hari, bunga 0,09% per hari, biaya materai Rp 10.000.",
    icon: "Zap",
    category: "pinjaman",
    color: "from-cyan-600 to-primary-600",
    rate: "0,09% / hari",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-usaha",
    title: "Pinjaman Usaha",
    description:
      "Pembiayaan modal kerja pengembangan usaha anggota. Plafon sesuai kebutuhan & nilai agunan s/d BMPP (di atas Rp 100 juta wajib SHM). Suku bunga 1,2% – 1,5% per bulan, tenor 1–5 tahun.",
    icon: "Briefcase",
    category: "pinjaman",
    color: "from-primary-600 to-primary-800",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-modal",
    title: "Pinjaman Modal Koperasi",
    description:
      "Pembiayaan khusus anggota untuk menambah simpanan modal agar naik ke klasifikasi Silver/Gold. Bunga 0% (Tanpa Bunga), tenor tetap 50 bulan, plafon Rp 5 juta (adm Rp 50rb) atau Rp 10 juta (adm Rp 100rb).",
    icon: "Coins",
    category: "pinjaman",
    color: "from-teal-600 to-emerald-600",
    rate: "Bunga 0%",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-kpr",
    title: "Pinjaman KPR / Tanah",
    description:
      "Pembiayaan pembelian rumah atau tanah dengan agunan SHM objek yang dibeli. Bunga 1,2% – 1,5% per bulan, tenor fleksibel 1 hingga 10 tahun (maksimal s/d BMPP).",
    icon: "Building2",
    category: "pinjaman",
    color: "from-teal-600 to-primary-600",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-renovasi",
    title: "Pinjaman Renovasi",
    description:
      "Pembiayaan perbaikan dan renovasi rumah tinggal, ruko, atau tempat usaha. Bunga 1,2% – 1,5% per bulan, tenor 1–5 tahun. Agunan wajib (> Rp 100 juta menggunakan SHM).",
    icon: "Building2",
    category: "pinjaman",
    color: "from-slate-700 to-teal-800",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-investasi",
    title: "Pinjaman Investasi",
    description:
      "Pembiayaan pengadaan alat produksi, mesin, kendaraan operasional, atau pembangunan gedung. Bunga 1,2% – 1,5% per bulan, tenor 1 hingga 10 tahun dengan agunan yang sah.",
    icon: "Briefcase",
    category: "pinjaman",
    color: "from-cyan-700 to-teal-900",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-motor",
    title: "Pinjaman Sepeda Motor",
    description:
      "Pembiayaan pembelian sepeda motor baru maupun bekas dengan agunan BPKB motor yang dibeli. Bunga flat 1,3% per bulan, jangka waktu 1 hingga 2 tahun (12 atau 24 bulan).",
    icon: "CreditCard",
    category: "pinjaman",
    color: "from-primary-500 to-teal-700",
    rate: "1,3% / bln",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-mobil",
    title: "Pinjaman Mobil",
    description:
      "Pembiayaan pembelian mobil niaga atau keluarga baru/bekas dengan agunan BPKB mobil yang dibeli. Bunga 1,2% – 1,5% per bulan, tenor 1 hingga 5 tahun.",
    icon: "CreditCard",
    category: "pinjaman",
    color: "from-teal-600 to-cyan-700",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-yadnya",
    title: "Pinjaman Yadnya (Sosial Keagamaan)",
    description:
      "Pinjaman bunga istimewa 1,0% per bulan khusus pembiayaan upacara panca yadnya dan kegiatan keagamaan anggota di Bali. Tenor 1 hingga 5 tahun dengan agunan.",
    icon: "HeartHandshake",
    category: "pinjaman",
    color: "from-indigo-600 to-cyan-600",
    rate: "1,0% / bln (Khusus)",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-multiguna",
    title: "Pinjaman Multiguna",
    description:
      "Pembiayaan fleksibel untuk berbagai keperluan mendesak yang tidak tercover jenis pinjaman lain. Bunga 1,2% – 1,5% per bulan, tenor 1–5 tahun dengan agunan berharga.",
    icon: "Briefcase",
    category: "pinjaman",
    color: "from-primary-700 to-cyan-800",
    rate: "1,2% – 1,5% / bln",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-back-to-back",
    title: "Pinjaman Back to Back",
    description:
      "Kredit dengan jaminan simpanan sendiri di koperasi (buku SIRELA atau bilyet SIJAKA). Plafon s/d 90% dari nilai simpanan agunan, bunga 1,5%/bulan + bunga simpanan, tenor 1–5 tahun.",
    icon: "Coins",
    category: "pinjaman",
    color: "from-emerald-700 to-teal-800",
    rate: "1,5% / bln + bunga simpanan",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pinjaman-sinergi",
    title: "Pinjaman Sinergi (Payroll)",
    description:
      "Pinjaman khusus karyawan perusahaan rekanan dengan sistem potong gaji via PKS resmi. Plafon tanpa agunan s/d Rp 10.000.000,-, bunga 1,2% per bulan, tenor 1–5 tahun.",
    icon: "Briefcase",
    category: "pinjaman",
    color: "from-teal-800 to-slate-900",
    rate: "1,2% / bln",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },
];

export const SIMPANAN_PRODUCTS = [
  {
    kode: "01.03.xxxxx",
    jenis: "SIRELA (Simpanan Sukarela)",
    singkatan: "SIRELA",
    setoran: "Awal min. Rp10.000, selanjutnya min. Rp5.000",
    bunga: "2% p.a.",
    bungaDetail: "Perhitungan harian, dibayarkan tgl 27 setiap bulan",
    adm: "Rp2.000/bulan",
    saldoMin: "Rp10.000 (saldo min bunga Rp300.000)",
    pajak: "10% jika nominal bunga melampaui Rp240.000",
    penarikan: "Bebas disetor dan ditarik sewaktu-waktu pada hari dan jam kerja operasional kantor cabang, PDL, transfer bank, VA, maupun aplikasi Madata Mobile.",
    keterangan: "Pola konvensional. Setor dan tarik fleksibel kapan saja untuk kebutuhan harian anggota.",
    highlight: true,
  },
  {
    kode: "01.04.xxxxx",
    jenis: "SIJAKA (Simpanan Berjangka)",
    singkatan: "SIJAKA",
    setoran: "Min. Rp5.000.000 (sekali di awal)",
    bunga: "3,8% – 6,2% p.a.",
    bungaDetail: "3 bulan: 3,8% p.a. | 6 bulan: 5,0% p.a. | 12 bulan: 6,2% p.a.",
    adm: "Gratis biaya administrasi bulanan",
    saldoMin: "Rp5.000.000 (sesuai bilyet)",
    tenor: "3, 6, dan 12 bulan",
    bilyet: "Dilengkapi Bilyet SIJAKA resmi bermaterai",
    penarikan: "Pencairan pokok dilakukan saat jatuh tempo (3, 6, atau 12 bulan) dengan menyerahkan bilyet SIJAKA asli. Pencairan sebelum waktu jatuh tempo dikenakan penalti pemotongan bunga yang telah dibayarkan 3 bulan terakhir dan bunga berjalan tidak dibayarkan.",
    fitur: "Auto Roll Over (ARO) & dapat dijadikan agunan pinjaman",
    keterangan: "Investasi deposito berjangka dengan imbal hasil maksimal dan opsi perpanjangan otomatis pokok atau bunga.",
    highlight: true,
  },
  {
    kode: "01.05.xxxxx",
    jenis: "SIRENA (Simpanan Berencana)",
    singkatan: "SIRENA",
    setoran: "Rutin min. Rp25.000/bulan",
    bunga: "4,37% – 4,79% p.a.",
    bungaDetail: "1-2 th (4,37%), 3 th (4,47%), 4 th (4,53%), 5 th (4,58%), 6 th (4,63%), 7 th (4,67%), 8 th (4,71%), 9 th (4,75%), 10 th (4,79%)",
    tenor: "1 hingga 10 tahun (bunga majemuk bulanan)",
    bilyet: "Dilengkapi Kartu SIRENA & Bilyet",
    adm: "Gratis biaya administrasi bulanan",
    penarikan: "Pencairan simpanan dilakukan saat jatuh tempo sesuai periode kontrak yang dipilih (1 hingga 10 tahun). Penarikan/penutupan sebelum waktu jatuh temponya dikenakan penalti berupa pemotongan bunga yang telah dibayarkan 3 (tiga) bulan terakhir dan bunga berjalan tidak dibayarkan.",
    fitur: "Bunga majemuk Mn = M0(1+b)^n & dapat dijadikan agunan pinjaman",
    keterangan: "Tabungan terencana masa depan dengan komitmen setoran rutin bulanan dan bunga majemuk.",
    highlight: false,
  },
  {
    kode: "01.06.xxxxx",
    jenis: "SIRENA PLUS (Simpanan Berencana Plus)",
    singkatan: "SIRENA PLUS",
    setoran: "Min. Rp5.000.000 (sekali di awal)",
    bunga: "7,80% – 8,47% p.a.",
    bungaDetail: "5 th (7,80%), 6 th (8,00%), 7 th (8,20%), 8 th (8,30%), 9 th (8,40%), 10 th (8,47%)",
    tenor: "5 hingga 10 tahun",
    bilyet: "Dilengkapi Kartu & Bilyet SIRENA PLUS",
    adm: "Gratis biaya administrasi bulanan",
    penarikan: "Pencairan simpanan dilakukan saat jatuh tempo (5 hingga 10 tahun). Penutupan sebelum jatuh tempo dikenakan penalti pemotongan bunga yang telah dibayarkan 3 bulan terakhir dan bunga berjalan tidak dibayarkan.",
    fitur: "Penempatan tunggal di awal, imbal hasil tinggi majemuk, agunan pinjaman",
    keterangan: "Simpanan jangka panjang dengan hasil optimal untuk persiapan pensiun atau dana abadi.",
    highlight: true,
  },
  {
    kode: "01.07.xxxxx",
    jenis: "SIMPEL (Simpanan Pelajar)",
    singkatan: "SIMPEL",
    setoran: "Awal min. Rp10.000, selanjutnya min. Rp5.000",
    bunga: "2% p.a.",
    bungaDetail: "Perhitungan harian, dibayarkan tgl 27",
    adm: "Rp2.000/bulan",
    saldoMin: "Rp10.000 (saldo min bunga Rp300.000)",
    penarikan: "Tidak dapat ditarik sewaktu-waktu secara bebas; penarikan harus sesuai dengan syarat dan ketentuan dalam Perjanjian Kerja Sama (PKS) antara Koperasi dengan Komite/Kepala Sekolah. Penutupan rekening atas permintaan sendiri hanya dapat dilakukan setelah siswa lulus dari sekolah bersangkutan (dibuktikan dengan copy ijazah).",
    fitur: "Kerja sama PKS Komite/Kepala Sekolah & perwalian guru",
    keterangan: "Edukasi gemar menabung sejak dini untuk pelajar SD, SMP, SMA dengan prosedur mudah.",
    highlight: false,
  },
  {
    kode: "01.09.xxxxx",
    jenis: "SIKELUNG (Simpanan Ketekan Galungan)",
    singkatan: "SIKELUNG",
    setoran: "Harian via autodebet SIRELA (min. Rp5.000/hari)",
    bunga: "Tanpa bunga",
    tenor: "Periode 200 hari",
    adm: "Tanpa biaya administrasi bulanan",
    penarikan: "Hanya dapat ditarik setelah jatuh tempo 200 hari (masa pencairan), di mana saldo secara otomatis dipindahkan dari rekening SIKELUNG ke rekening SIRELA anggota untuk kemudian dapat ditransaksikan/ditarik. Pencairan sebelum 200 hari hanya dapat diproses atas persetujuan khusus MOD.",
    fitur: "Bonus bingkisan di akhir periode (maks. toleransi absen setor 7 kali)",
    keterangan: "Tabungan harian terdisiplin menjelang hari raya Galungan, dana otomatis cair ke SIRELA saat jatuh tempo 200 hari.",
    highlight: false,
  },
];

export const PINJAMAN_PRODUCTS = [
  {
    id: "pinjaro",
    jenis: "PINJARO (Pinjaman Harian Mikro)",
    kategori: "Mikro",
    plafon: "Rp500.000 – Rp5.000.000",
    plafonDetail: "Peminjam pertama maks. Rp3.000.000. Riwayat lancar dapat naik s/d Rp5.000.000",
    bunga: "0,09%/hari",
    tenor: "100 hari",
    agunan: "Tanpa agunan (tidak diwajibkan)",
    biaya: "Materai Rp10.000",
    syarat: "Copy KTP, KK, usaha dan tempat usaha jelas, memiliki rekening SIRELA",
    pelunasan: "Pelunasan dipercepat diperkenankan (nominal pelunasan dihitung dari angsuran per hari dikalikan sisa hari, bukan sisa pokok)",
    highlight: true,
  },
  {
    id: "usaha",
    jenis: "Pinjaman Usaha",
    kategori: "Produktif",
    plafon: "Sesuai pengajuan & nilai agunan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 5 tahun",
    agunan: "Wajib agunan (> Rp100 juta menggunakan SHM)",
    biaya: "Adm 1% (1-2 th), 1,5% (3-4 th), 2% (5 th ke atas) | Provisi 0,5% | Materai, Asuransi, Notaris sesuai tagihan",
    syarat: "Copy KTP, KK, tempat usaha jelas, memiliki rekening SIRELA",
    highlight: true,
  },
  {
    id: "modal-koperasi",
    jenis: "Pinjaman Modal Koperasi",
    kategori: "Khusus Anggota",
    plafon: "Rp5.000.000 & Rp10.000.000",
    plafonDetail: "Khusus untuk menambah simpanan anggota hingga mencapai klasifikasi Silver/Gold",
    bunga: "0% (Tanpa Bunga)",
    tenor: "50 bulan",
    agunan: "Tanpa agunan fisik (dijamin simpanan anggota)",
    biaya: "Adm Rp50.000 (plafon 5jt) / Rp100.000 (plafon 10jt) | Materai sesuai penggunaan",
    syarat: "Copy KTP, KK, rekening SIRELA aktif",
    highlight: true,
  },
  {
    id: "kpr",
    jenis: "Pinjaman KPR / Tanah",
    kategori: "Properti",
    plafon: "Sesuai pengajuan & nilai agunan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 10 tahun",
    agunan: "SHM rumah/tanah yang dibeli",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris sesuai tagihan",
    syarat: "Copy KTP, KK, bukti penghasilan, SIRELA",
    highlight: false,
  },
  {
    id: "renovasi",
    jenis: "Pinjaman Renovasi",
    kategori: "Konsumtif / Produktif",
    plafon: "Sesuai pengajuan & nilai agunan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 5 tahun",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris",
    syarat: "Copy KTP, KK, RAB renovasi, SIRELA",
    highlight: false,
  },
  {
    id: "investasi",
    jenis: "Pinjaman Investasi",
    kategori: "Investasi",
    plafon: "Sesuai kebutuhan investasi & agunan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 10 tahun",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris",
    syarat: "Copy KTP, KK, proposal investasi / alat, SIRELA",
    highlight: false,
  },
  {
    id: "motor",
    jenis: "Pinjaman Sepeda Motor",
    kategori: "Kendaraan",
    plafon: "Sesuai harga kendaraan (maks. BMPP)",
    bunga: "1,3%/bulan",
    tenor: "1 – 2 tahun",
    agunan: "BPKB kendaraan yang dibeli (baru / bekas)",
    biaya: "Adm 1% (1-2 tahun) | Provisi 0,5% | Asuransi sesuai tagihan",
    syarat: "Copy KTP, KK, brosur/invoice kendaraan, SIRELA",
    highlight: false,
  },
  {
    id: "mobil",
    jenis: "Pinjaman Mobil",
    kategori: "Kendaraan",
    plafon: "Sesuai harga kendaraan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 5 tahun",
    agunan: "BPKB kendaraan yang dibeli",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris",
    syarat: "Copy KTP, KK, invoice dealer, SIRELA",
    highlight: false,
  },
  {
    id: "yadnya",
    jenis: "Pinjaman Yadnya",
    kategori: "Sosial Budaya",
    plafon: "Sesuai kebutuhan upacara & kapasitas anggota (maks. BMPP)",
    bunga: "1,0%/bulan (Bunga Khusus)",
    tenor: "1 – 5 tahun",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris",
    syarat: "Copy KTP, KK, informasi upacara yadnya, SIRELA",
    highlight: true,
  },
  {
    id: "multiguna",
    jenis: "Pinjaman Multiguna",
    kategori: "Serbaguna",
    plafon: "Sesuai kebutuhan (maks. BMPP)",
    bunga: "1,2% – 1,5%/bulan",
    tenor: "1 – 5 tahun",
    agunan: "Agunan wajib (> Rp100 juta menggunakan SHM)",
    biaya: "Adm 1%-2% | Provisi 0,5% | Asuransi & Notaris",
    syarat: "Copy KTP, KK, bukti penghasilan, SIRELA",
    highlight: false,
  },
  {
    id: "back-to-back",
    jenis: "Pinjaman Back to Back",
    kategori: "Cash Collateral",
    plafon: "Maksimal 90% dari nilai simpanan agunan",
    bunga: "1,5%/bulan + suku bunga simpanan",
    tenor: "1 – 5 tahun",
    agunan: "Simpanan anggota di koperasi (SIRELA / SIJAKA)",
    biaya: "Adm 1%-2% | Provisi 0,5%",
    syarat: "Bilyet SIJAKA / Buku SIRELA asli, KTP, KK",
    highlight: false,
  },
  {
    id: "sinergi",
    jenis: "Pinjaman Sinergi",
    kategori: "Payroll Karyawan",
    plafon: "Bebas s/d BMPP (tanpa agunan maks. Rp10.000.000)",
    bunga: "1,2%/bulan",
    tenor: "1 – 5 tahun",
    agunan: "Payroll / PKS Perusahaan (> Rp100jt menggunakan SHM)",
    biaya: "Adm 1%-2% | Provisi 0,5%",
    syarat: "PKS Perusahaan, rekomendasi HRD/pimpinan, slip gaji, SIRELA",
    highlight: false,
  },
];

export const MEMBERSHIP_TIERS = [
  {
    tier: "Reguler",
    color: "emerald",
    image: "/cards/card-reguler.jpg",
    simpanan: "SIPO Rp10.000 + SIWA Rp10.000/bln",
    deskripsi:
      "Anggota yang melakukan setoran Simpanan Anggota sebesar Simpanan Pokok Rp10.000 dan Simpanan Wajib Rp10.000 untuk selanjutnya melakukan setoran simpanan wajib Rp10.000 setiap bulannya.",
    layanan: "Pelayanan simpanan koperasi",
    pinjamanTanpaAgunan: "Tidak tersedia",
    bpjsTk: "Tidak didaftarkan",
    santunanDuka: "Pengembalian seluruh setoran simpanan anggota setelah dikurangi biaya administrasi penutupan.",
    manfaat: [
      "Mendapatkan pelayanan simpanan resmi di Koperasi",
      "Setoran Simpanan Pokok awal: Rp10.000,- (sekali di awal)",
      "Setoran Simpanan Wajib: Rp10.000,- per bulan",
      "Pengembalian simpanan penuh saat tutup usia (setelah dipotong biaya administrasi)",
    ],
  },
  {
    tier: "Blue",
    color: "blue",
    image: "/cards/card-blue.jpg",
    simpanan: "Rp260.000 s/d < Rp5.000.000",
    deskripsi:
      "Anggota yang total Simpanan Anggotanya berjumlah Rp260.000 dan belum mencapai jumlah Rp5.000.000. Terbagi menjadi Anggota Aktif (setoran tertib / keterlambatan ≤ 1 tahun) dan Anggota Pasif.",
    layanan: "Pelayanan simpanan dan pinjaman sesuai ketentuan koperasi",
    pinjamanTanpaAgunan: "Menggunakan agunan standar",
    bpjsTk: "Tidak didaftarkan",
    santunanDuka:
      "Santunan duka koperasi Rp500.000,- + Santunan keaktifan Rp500.000,- (anggota aktif) + Uang senilai kain kafan 1 gulung.",
    manfaat: [
      "Mendapatkan pelayanan simpanan dan pinjaman sesuai ketentuan koperasi",
      "Santunan duka dari koperasi Rp500.000,-",
      "Santunan keaktifan anggota Rp500.000,- (bagi Anggota Aktif)",
      "Bantuan uang senilai kain kafan 1 gulung",
      "Pengembalian semua simpanan anggota setelah dikurangi biaya administrasi penutupan",
    ],
  },
  {
    tier: "Silver",
    color: "slate",
    image: "/cards/card-silver.jpg",
    simpanan: "Rp5.000.000 s/d < Rp10.000.000",
    deskripsi:
      "Anggota yang total Simpanan Anggotanya Rp5.000.000 ke atas tetapi belum mencapai jumlah Rp10.000.000.",
    layanan: "Pelayanan simpanan dan pinjaman prioritas",
    pinjamanTanpaAgunan: "Maksimal Rp5.000.000,- (suku bunga khusus)",
    bpjsTk: "BPJS Ketenagakerjaan BPU (JKK & JK) bagi anggota usia <65 tahun",
    santunanDuka:
      "Santunan duka koperasi Rp1.000.000,- + Kain kafan 1 gulung + Santunan BPJS Ketenagakerjaan (atau Daperma Rp5.000.000,- jika non-BPJS).",
    manfaat: [
      "Pelayanan simpanan dan pinjaman dengan fasilitas prioritas",
      "Didaftarkan program BPJS Ketenagakerjaan BPU (JKK & JK) bagi usia <65 tahun",
      "Dapat memperoleh pinjaman tanpa agunan maksimal Rp5.000.000,- dengan suku bunga khusus",
      "Santunan duka dari koperasi Rp1.000.000,-",
      "Bantuan uang senilai kain kafan 1 gulung",
      "Santunan klaim dari BPJS Ketenagakerjaan sesuai ketentuan",
      "Santunan duka Program Dana Pertanggungan Bersama (Daperma) Rp5.000.000,- bagi non-BPJS",
      "Pengembalian semua simpanan anggota dikurangi biaya administrasi penutupan",
    ],
  },
  {
    tier: "Gold",
    color: "amber",
    image: "/cards/card-gold.jpg",
    simpanan: "Rp10.000.000 s/d < Rp20.000.000",
    deskripsi:
      "Anggota yang total Simpanan Anggotanya Rp10.000.000 ke atas tetapi belum mencapai jumlah Rp20.000.000.",
    layanan: "Pelayanan simpanan, pinjaman eksekutif, dan pembinaan usaha",
    pinjamanTanpaAgunan: "Maksimal Rp10.000.000,- (suku bunga khusus)",
    bpjsTk: "BPJS Ketenagakerjaan BPU Lengkap (JKK, JK, dan JHT) bagi usia <65 tahun",
    santunanDuka:
      "Santunan duka koperasi Rp1.000.000,- + Kain kafan + Karangan bunga + Santunan BPJS TK (atau Daperma Rp20.000.000,- jika non-BPJS).",
    manfaat: [
      "Didaftarkan BPJS Ketenagakerjaan BPU 3 Program: JKK, JK, dan JHT (Hari Tua) usia <65 th",
      "Dapat memperoleh pinjaman tanpa agunan maksimal Rp10.000.000,- dengan suku bunga khusus",
      "Santunan duka dari koperasi Rp1.000.000,-",
      "Bantuan uang senilai kain kafan 1 gulung",
      "Karangan bunga ucapan duka cita resmi dari Koperasi",
      "Santunan resmi dari BPJS Ketenagakerjaan",
      "Santunan duka Program Dana Pertanggungan Bersama (Daperma) Rp20.000.000,- bagi non-BPJS",
      "Pengembalian semua simpanan anggota dikurangi biaya administrasi penutupan",
    ],
  },
  {
    tier: "Platinum",
    color: "indigo",
    image: "/cards/card-platinum.jpg",
    simpanan: "Rp20.000.000 ke atas",
    deskripsi:
      "Anggota yang total Simpanan Anggotanya Rp20.000.000 ke atas. Merupakan tier keanggotaan tertinggi dengan perlindungan proteksi dan plafon pinjaman tertinggi.",
    layanan: "Pelayanan VVIP, pendampingan usaha, dan prioritas pencairan",
    pinjamanTanpaAgunan: "Maksimal Rp20.000.000,- (suku bunga khusus)",
    bpjsTk: "BPJS Ketenagakerjaan BPU Lengkap (JKK, JK, dan JHT) bagi usia <65 tahun",
    santunanDuka:
      "Santunan duka koperasi Rp1.000.000,- + Kain kafan + Karangan bunga + BPJS TK + Santunan Daperma Rp10.000.000,- (atau Daperma Rp40.000.000,- jika non-BPJS).",
    manfaat: [
      "Didaftarkan BPJS Ketenagakerjaan BPU 3 Program: JKK, JK, dan JHT (Hari Tua) usia <65 th",
      "Dapat memperoleh pinjaman tanpa agunan maksimal Rp20.000.000,- dengan suku bunga khusus",
      "Santunan duka dari koperasi Rp1.000.000,-",
      "Bantuan uang senilai kain kafan 1 gulung",
      "Karangan bunga ucapan duka cita resmi dari Koperasi",
      "Santunan resmi dari BPJS Ketenagakerjaan",
      "Santunan duka Program Dana Pertanggungan Bersama (Daperma) Rp10.000.000,-",
      "Santunan duka Program Daperma sebesar Rp40.000.000,- bagi yang tidak ikut BPJS",
      "Pengembalian semua simpanan anggota dikurangi biaya administrasi penutupan",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "I Wayan Sudiarta",
    role: "Pedagang Pasar — Anggota sejak 2018",
    content:
      "Berkat pinjaman modal usaha dari Koperasi Mandara Sedana Kuta, warung saya berkembang pesat. Prosesnya mudah dan tidak ribet. Tim koperasi juga sangat membantu dan ramah!",
    rating: 5,
    location: "Badung, Bali",
  },
  {
    id: "t2",
    name: "Ni Luh Putu Arisani",
    role: "Pengusaha Kerajinan — Anggota sejak 2019",
    content:
      "Madata Mobile sangat memudahkan saya cek saldo dan bayar tagihan. Tidak perlu antri di kantor lagi. Fitur lengkap dan mudah digunakan, bahkan oleh orang tua sekalipun.",
    rating: 5,
    location: "Denpasar, Bali",
  },
  {
    id: "t3",
    name: "Kadek Wirawan",
    role: "Petani — Anggota sejak 2020",
    content:
      "Simpanan berjangka saya menghasilkan bunga yang lumayan. Uang saya aman dan berkembang. Koperasi ini benar-benar membantu perekonomian keluarga kami di Bali.",
    rating: 5,
    location: "Gianyar, Bali",
  },
  {
    id: "t4",
    name: "Made Sutrisna",
    role: "Guru Honorer — Anggota sejak 2021",
    content:
      "Pinjaman pendidikan sangat membantu biaya kuliah anak saya. Bunga ringan dan cicilan terjangkau. Terima kasih Koperasi Mandara Sedana Kuta sudah membantu impian keluarga kami!",
    rating: 5,
    location: "Tabanan, Bali",
  },
  {
    id: "t5",
    name: "Ni Made Dwi Astuti",
    role: "Ibu Rumah Tangga — Anggota sejak 2022",
    content:
      "Saya suka banget dengan layanan simpanan sukarelanya. Bisa setor dan tarik kapan saja. Pelayanan Koperasi Mandara Sedana Kuta selalu ramah dan profesional.",
    rating: 5,
    location: "Klungkung, Bali",
  },
];

export const FAQ_DATA = [
  {
    id: "faq1",
    category: "Anggota",
    question: "Apa saja syarat untuk menjadi anggota Koperasi Mandara Sedana Kuta?",
    answer:
      "Syarat menjadi anggota: (1) WNI dengan KTP yang masih berlaku, (2) Kartu Keluarga (KK), (3) Berdomisili di Provinsi Bali, (4) Usia minimal 17 tahun atau sudah menikah, (5) Mengisi formulir pendaftaran, (6) Menyetujui AD/ART koperasi, dan (7) Membayar Simpanan Pokok Rp 10.000 & Simpanan Wajib Rp 10.000.",
  },
  {
    id: "faq2",
    category: "Anggota",
    question: "Bagaimana proses pendaftaran anggota baru?",
    answer:
      "Anda dapat mendaftar secara online melalui formulir di website ini, lalu tim kami akan menghubungi Anda via WhatsApp dalam 1x24 jam. Untuk menyelesaikan pendaftaran, Anda perlu datang ke kantor kami (Pusat di Legian atau Cabang di Sesetan) dengan membawa KTP dan KK asli.",
  },
  {
    id: "faq3",
    category: "Simpanan",
    question: "Berapa bunga simpanan berjangka yang ditawarkan?",
    answer:
      "Bunga SIJAKA (Simpanan Berjangka): 3,8%/tahun untuk tenor 3 bulan, 5%/tahun untuk tenor 6 bulan, dan 6,2%/tahun untuk tenor 12 bulan. Minimum penempatan Rp 5.000.000. Bunga dapat berubah sesuai kebijakan dan hasil Rapat Anggota.",
  },
  {
    id: "faq4",
    category: "Simpanan",
    question: "Apakah simpanan saya aman?",
    answer:
      "Ya, simpanan anggota aman karena: (1) Koperasi diawasi oleh Dinas Koperasi Provinsi Bali dan Kemenkop UKM RI, (2) Koperasi memiliki badan hukum resmi No. 004723/BH/M KUKM.2/VII/2017, dan (3) Dana dikelola secara profesional dengan tata kelola yang transparan.",
  },
  {
    id: "faq4b",
    category: "Simpanan",
    question: "Bagaimana ketentuan penarikan dana untuk setiap produk simpanan?",
    answer:
      "Ketentuan penarikan dana diatur resmi berdasarkan jenis produk: (1) SIRELA: bebas ditarik sewaktu-waktu pada hari dan jam kerja operasional kantor atau via Madata Mobile; (2) SIJAKA: dicairkan saat jatuh tempo (3, 6, atau 12 bulan) dengan bilyet asli; (3) SIRENA & SIRENA PLUS: dicairkan saat jatuh tempo (1–10 th untuk SIRENA, 5–10 th untuk SIRENA PLUS), penarikan sebelum tempo dikenakan penalti bunga 3 bulan terakhir & bunga berjalan hangus; (4) SIMPEL: tidak dapat ditarik bebas sewaktu-waktu, penarikan harus sesuai kesepakatan PKS sekolah atau saat siswa telah lulus; (5) SIKELUNG: hanya dapat ditarik setelah jatuh tempo 200 hari, saldo otomatis dipindahkan ke rekening SIRELA; (6) Simpanan Pokok & Wajib: tidak dapat ditarik selama masih menjadi anggota aktif koperasi.",
  },
  {
    id: "faq5",
    category: "Pinjaman",
    question: "Berapa maksimal pinjaman yang bisa saya ajukan?",
    answer:
      "Plafon pinjaman tergantung jenis: PINJARO (pinjaman harian mikro) Rp500 ribu - Rp5 juta tanpa agunan, sedangkan pinjaman lain (Usaha, KPR/Tanah, Renovasi, Investasi, Mobil, dll) plafonnya fleksibel sesuai pengajuan dan nilai agunan, maksimal sebesar BMPP (Batas Maksimum Pemberian Pinjaman). Besaran pinjaman disetujui berdasarkan kemampuan bayar dan riwayat simpanan anggota.",
  },
  {
    id: "faq6",
    category: "Pinjaman",
    question: "Apa saja biaya yang dikenakan saat mengajukan pinjaman?",
    answer:
      "Biaya pinjaman (untuk pinjaman beragunan seperti Usaha, KPR/Tanah, Renovasi, dll) meliputi: Biaya Administrasi 1% (tenor 1-2 tahun), 1,5% (3-4 tahun), atau 2% (5 tahun ke atas) dari plafon; Provisi 0,5% dari plafon; serta biaya materai, asuransi, dan notaris sesuai penggunaan/tagihan. PINJARO (pinjaman harian mikro) hanya dikenakan biaya materai Rp10.000 tanpa provisi.",
  },
  {
    id: "faq7",
    category: "Pinjaman",
    question: "Bagaimana cara mengajukan pinjaman?",
    answer:
      "Pengajuan pinjaman bisa dilakukan dengan: (1) Datang langsung ke kantor Pusat (Legian) atau Cabang (Sesetan), (2) Menghubungi kami via WhatsApp di +62 813-9430-6999, atau (3) Menggunakan fitur simulasi di website untuk memperkirakan cicilan terlebih dahulu.",
  },
  {
    id: "faq8",
    category: "Madata Mobile",
    question: "Apa itu Madata Mobile dan bagaimana cara mengunduhnya?",
    answer:
      "Madata Mobile adalah aplikasi perbankan digital Koperasi Mandara Sedana Kuta yang memungkinkan anggota mengakses layanan keuangan kapan saja dan di mana saja. Unduh di Google Play Store dengan kata kunci 'Madata Mobile' atau scan QR code yang tersedia di website kami.",
  },
  {
    id: "faq9",
    category: "Madata Mobile",
    question: "Fitur apa saja yang tersedia di Madata Mobile?",
    answer:
      "Madata Mobile menyediakan: Cek Saldo & Mutasi Rekening, Pembelian Pulsa & Paket Data, Pembelian Token Listrik, Top Up OVO & GoPay, Pembayaran BPJS Kesehatan & PDAM, dan Login Biometrik (sidik jari/wajah) untuk keamanan ekstra.",
  },
  {
    id: "faq12",
    category: "Umum",
    question: "Di mana saja kantor Koperasi Mandara Sedana Kuta?",
    answer:
      "Koperasi Mandara Sedana Kuta memiliki 2 kantor: (1) Kantor Pusat di Jl. Legian Kuta Gang Bendesa No.5, Kuta, Badung, Bali. (2) Kantor Cabang di Jl. Tukad Banyu Sari No. 100, Sesetan, Denpasar Selatan, Bali. Hubungi kami via WhatsApp +62 813-9430-6999 untuk informasi jam operasional.",
  },
];

export const HISTORY_TIMELINE = [
  {
    year: "2017",
    title: "Berdirinya Koperasi",
    description:
      "Koperasi Mandara Sedana Kuta resmi berdiri dengan Badan Hukum No. 004723/BH/M KUKM.2/VII/2017 yang ditetapkan oleh Kemenkop UKM RI pada bulan Juli.",
    icon: "Star",
  },
  {
    year: "2017",
    title: "Pembukaan Kantor Pusat",
    description:
      "Kantor Pusat resmi dibuka di Jl. Legian Kuta Gang Bendesa No.5, Kuta, mulai melayani anggota dengan produk simpanan dan pinjaman.",
    icon: "Building",
  },
  {
    year: "2017",
    title: "Peluncuran Madata Mobile",
    description:
      "Aplikasi Madata Mobile diluncurkan, membawa layanan koperasi ke genggaman anggota sejak awal berdirinya koperasi.",
    icon: "Smartphone",
  },
  {
    year: "2026",
    title: "Pembukaan Kantor Cabang Sesetan",
    description:
      "Kantor Cabang Sesetan resmi dibuka di Jl. Tukad Banyu Sari No. 100, Denpasar Selatan, memperluas jangkauan layanan koperasi.",
    icon: "MapPin",
  },
  {
    year: "Dan Seterusnya",
    title: "Terus Berkembang Bersama Anggota",
    description:
      "Koperasi Mandara Sedana Kuta terus bertumbuh dan berinovasi bersama seluruh anggota, berkomitmen mewujudkan kesejahteraan bersama selamanya.",
    icon: "Rocket",
  },
];

export const MADATA_FEATURES = [
  {
    icon: "Wallet",
    title: "Cek Saldo & Mutasi",
    description: "Pantau saldo simpanan dan riwayat transaksi Anda real-time kapan saja.",
  },
  {
    icon: "Phone",
    title: "Beli Pulsa & Paket Data",
    description: "Isi ulang pulsa dan paket internet semua operator dengan mudah.",
  },
  {
    icon: "Zap",
    title: "Token Listrik PLN",
    description: "Beli token listrik prabayar langsung dari aplikasi, 24 jam sehari.",
  },
  {
    icon: "ArrowUpRight",
    title: "Top Up OVO & GoPay",
    description: "Isi saldo dompet digital OVO dan GoPay dengan satu ketukan.",
  },
  {
    icon: "Shield",
    title: "Bayar BPJS & PDAM",
    description: "Bayar iuran BPJS Kesehatan dan tagihan air PDAM tanpa antri.",
  },
  {
    icon: "Fingerprint",
    title: "Login Biometrik",
    description: "Keamanan ekstra dengan autentikasi sidik jari atau pengenalan wajah.",
  },
];

export const KABUPATEN_BALI = [
  "Badung",
  "Denpasar",
  "Gianyar",
  "Tabanan",
  "Klungkung",
  "Bangli",
  "Karangasem",
  "Buleleng",
  "Jembrana",
];

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Bersama Wujudkan Impian",
    subtitle: "Koperasi Modern untuk Anggota Sejahtera",
    description:
      "Koperasi Simpan Pinjam terpercaya di Bali dengan layanan digital terdepan. Bergabunglah bersama lebih dari 2.231 anggota aktif dan terus bertambah.",
    cta: "Gabung Sekarang",
    ctaHref: "/daftar-anggota",
    ctaSecondary: "Simulasi Pinjaman",
    ctaSecondaryHref: "/simulasi",
    gradient: "from-teal-700 via-teal-600 to-cyan-600",
    badge: "Koperasi Terpercaya Bali",
  },
  {
    id: 2,
    title: "Madata Mobile — Koperasi di Genggaman Anda",
    subtitle: "Layanan Digital 24/7 Tanpa Batas",
    description:
      "Cek saldo, bayar tagihan, beli pulsa, dan top up dompet digital langsung dari smartphone Anda. Download sekarang!",
    cta: "Download Sekarang",
    ctaHref:
      "https://play.google.com/store/apps/details?id=sevanam.com.madatamobileapps&pcampaignid=web_share",
    ctaSecondary: "Lihat Fitur",
    ctaSecondaryHref: "/madata-mobile",
    gradient: "from-cyan-600 via-teal-500 to-emerald-600",
    badge: "Tersedia di Google Play",
  },
  {
    id: 3,
    title: "Tumbuh & Sejahtera Bersama Anggota",
    subtitle: "Solusi Finansial Amanah & Berkelanjutan",
    description:
      "Dapatkan imbal hasil simpanan kompetitif serta fasilitas pinjaman produktif dengan bunga adil dan proses transparan berbadan hukum resmi.",
    cta: "Daftar Anggota",
    ctaHref: "/daftar-anggota",
    ctaSecondary: "Simulasi Simpanan",
    ctaSecondaryHref: "/simulasi#simpanan",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    badge: "Solusi Finansial Terpercaya",
  },
];

export const MEMBER_TIERS = [
  {
    id: "reguler",
    name: "Reguler",
    image: "/cards/card-reguler.jpg",
    threshold: "Simpanan Pokok Rp10.000 + Simpanan Wajib Rp10.000/bulan",
    color: "from-teal-600 to-emerald-700",
    benefits: [
      "Mendapatkan pelayanan simpanan pada koperasi",
      "Jika meninggal dunia: pengembalian simpanan setelah dikurangi biaya administrasi penutupan",
    ],
  },
  {
    id: "blue",
    name: "Blue",
    image: "/cards/card-blue.jpg",
    threshold: "Total Simpanan Anggota Rp260.000 – < Rp5.000.000",
    color: "from-blue-600 to-cyan-700",
    benefits: [
      "Pelayanan simpanan dan pinjaman sesuai ketentuan koperasi",
      "Santunan duka Rp500.000 & kain kafan jika meninggal dunia",
      "Santunan keaktifan anggota Rp500.000 (bagi Anggota Aktif)",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    image: "/cards/card-silver.jpg",
    threshold: "Total Simpanan Anggota Rp5.000.000 – < Rp10.000.000",
    color: "from-slate-400 via-zinc-400 to-slate-500",
    benefits: [
      "Didaftarkan BPJS Ketenagakerjaan BPU (JKK & JK)",
      "Pinjaman tanpa agunan maksimal Rp5.000.000 dengan bunga khusus",
      "Santunan duka Rp1.000.000 + kain kafan + santunan BPJS/Daperma",
    ],
  },
  {
    id: "gold",
    name: "Gold",
    image: "/cards/card-gold.jpg",
    threshold: "Total Simpanan Anggota Rp10.000.000 – < Rp20.000.000",
    color: "from-amber-500 to-amber-700",
    benefits: [
      "Didaftarkan BPJS Ketenagakerjaan BPU (JKK, JK & JHT)",
      "Pinjaman tanpa agunan maksimal Rp10.000.000 dengan bunga khusus",
      "Santunan duka Rp1.000.000 + karangan bunga + kain kafan + BPJS/Daperma",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    image: "/cards/card-platinum.jpg",
    threshold: "Total Simpanan Anggota Rp20.000.000 ke atas",
    color: "from-neutral-900 via-zinc-900 to-black",
    benefits: [
      "Didaftarkan BPJS Ketenagakerjaan BPU (JKK, JK & JHT)",
      "Pinjaman tanpa agunan maksimal Rp20.000.000 dengan bunga khusus",
      "Santunan duka Rp1.000.000 + karangan bunga + kain kafan + Daperma hingga Rp40.000.000",
    ],
  },
];

export const PPOB_SERVICES = [
  { title: "Simpan Pinjam", icon: "Wallet" },
  { title: "Pembayaran Listrik (PLN)", icon: "Zap" },
  { title: "Penjualan Pulsa Semua Operator", icon: "Smartphone" },
  { title: "Pembayaran PDAM", icon: "Droplet" },
  { title: "Top Up E-Money", icon: "CreditCard" },
  { title: "Transfer Dana", icon: "ArrowLeftRight" },
  { title: "Pembayaran Telepon", icon: "Phone" },
  { title: "Pembayaran BPJS Kesehatan", icon: "HeartPulse" },
];
