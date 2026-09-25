// ============================================
// TYPESCRIPT INTERFACES & TYPES
// ============================================

export interface Video {
  id: string;
  title: string;
  category: string;
  videoId: string;
  thumbnail: string;
  url: string;
  description?: string;
}

export type VideoItem = Video;

export type VideoCategory = "Semua" | "Profil" | "Komunitas" | "Podcast" | "Sosial" | string;

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  location?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: "simpanan" | "pinjaman" | "layanan";
  color: string;
}

export interface SimpananProduct {
  jenis: string;
  setoran: string;
  bunga: string;
  keterangan: string;
  highlight?: boolean;
}

export interface PinjamanProduct {
  jenis: string;
  plafon: string;
  bunga: string;
  tenor: string;
  highlight?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  icon?: string;
}

export interface KerenValue {
  letter: string;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

export interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  icon: string;
}

// Registration Form Types
export interface RegistrationFormData {
  // Step 1: Data Diri
  namaLengkap: string;
  nik: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: "L" | "P";
  statusPerkawinan: "belum_menikah" | "menikah" | "cerai";

  // Step 2: Alamat
  alamatLengkap: string;
  kelurahan: string;
  kecamatan: string;
  kabupaten: string;
  kodePos: string;

  // Step 3: Kontak & Pekerjaan
  noTelpon: string;
  email: string;
  pekerjaan: string;
  namaUsaha?: string;
  penghasilan: string;

  // Step 4: Upload (handled separately)
  fotoKTP?: File;
  fotoKK?: File;

  // Agreements
  setujuADART: boolean;
}

// Contact Form Types
export interface ContactFormData {
  nama: string;
  email: string;
  noTelpon: string;
  pesan: string;
}

// Simulator Types
export interface LoanSimulationResult {
  angsuranPokok: number;
  angsuranBunga: number;
  totalAngsuran: number;
  totalBunga: number;
  totalBayar: number;
  schedule: AmortizationRow[];
}

export interface AmortizationRow {
  bulan: number;
  angsuranPokok: number;
  angsuranBunga: number;
  totalAngsuran: number;
  sisaPinjaman: number;
}

export interface SavingsSimulationResult {
  totalSaldo: number;
  totalBunga: number;
  totalSetor: number;
}

// NavLink type
export interface NavLink {
  href: string;
  label: string;
  children?: NavLink[];
}
