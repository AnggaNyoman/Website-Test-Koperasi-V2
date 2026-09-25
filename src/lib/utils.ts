// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Format number as Indonesian Rupiah
 */
export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format number with thousand separator (Indonesian)
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("id-ID").format(num);
}

/**
 * Format date to Indonesian locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

/**
 * Calculate flat-rate loan amortization schedule
 */
export function calculateFlatLoan(
  principal: number,
  ratePerMonth: number,
  tenorMonths: number
) {
  const monthlyInterest = (principal * ratePerMonth) / 100;
  const monthlyPrincipal = principal / tenorMonths;
  const totalMonthly = monthlyPrincipal + monthlyInterest;
  const totalInterest = monthlyInterest * tenorMonths;
  const totalBayar = principal + totalInterest;

  const schedule = Array.from({ length: tenorMonths }, (_, i) => ({
    bulan: i + 1,
    angsuranPokok: monthlyPrincipal,
    angsuranBunga: monthlyInterest,
    totalAngsuran: totalMonthly,
    sisaPinjaman: principal - monthlyPrincipal * (i + 1),
  }));

  return {
    angsuranPokok: monthlyPrincipal,
    angsuranBunga: monthlyInterest,
    totalAngsuran: totalMonthly,
    totalBunga: totalInterest,
    totalBayar,
    schedule,
  };
}

/**
 * Calculate effective-rate loan amortization schedule
 */
export function calculateEffectiveLoan(
  principal: number,
  annualRate: number,
  tenorMonths: number
) {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonthly =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenorMonths)) /
    (Math.pow(1 + monthlyRate, tenorMonths) - 1);

  let balance = principal;
  const schedule = [];
  let totalInterest = 0;

  for (let i = 1; i <= tenorMonths; i++) {
    const interest = balance * monthlyRate;
    const principalPayment = totalMonthly - interest;
    balance -= principalPayment;
    totalInterest += interest;

    schedule.push({
      bulan: i,
      angsuranPokok: principalPayment,
      angsuranBunga: interest,
      totalAngsuran: totalMonthly,
      sisaPinjaman: Math.max(0, balance),
    });
  }

  return {
    angsuranPokok: totalMonthly - principal * (annualRate / 100 / 12),
    angsuranBunga: principal * (annualRate / 100 / 12),
    totalAngsuran: totalMonthly,
    totalBunga: totalInterest,
    totalBayar: principal + totalInterest,
    schedule,
  };
}

/**
 * Calculate savings projection
 */
export function calculateSavings(
  initialDeposit: number,
  monthlyDeposit: number,
  annualRate: number,
  tenorYears: number
): { totalSaldo: number; totalBunga: number; totalSetor: number } {
  const months = tenorYears * 12;
  const monthlyRate = annualRate / 100 / 12;
  let balance = initialDeposit;
  let totalInterest = 0;
  const totalSetor = initialDeposit + monthlyDeposit * months;

  for (let i = 0; i < months; i++) {
    const interest = balance * monthlyRate;
    totalInterest += interest;
    balance += interest + monthlyDeposit;
  }

  return {
    totalSaldo: balance,
    totalBunga: totalInterest,
    totalSetor,
  };
}

/**
 * Build WhatsApp deeplink with pre-filled registration message
 */
export function buildWhatsAppRegistrationLink(
  data: Record<string, string>,
  phone = "6281394306999"
): string {
  const message = encodeURIComponent(
    `Halo Koperasi Mandara Sedana Kuta\n\nSaya ingin mendaftar sebagai anggota baru:\n\n` +
      `*Data Diri:*\n` +
      `Nama Lengkap: ${data.namaLengkap || "-"}\n` +
      `NIK: ${data.nik || "-"}\n` +
      `Tempat/Tgl Lahir: ${data.tempatLahir || "-"} / ${data.tanggalLahir || "-"}\n` +
      `Jenis Kelamin: ${data.jenisKelamin === "L" ? "Laki-laki" : "Perempuan"}\n\n` +
      `*Alamat:*\n` +
      `${data.alamatLengkap || "-"}\n` +
      `${data.kelurahan || "-"}, ${data.kecamatan || "-"}\n` +
      `${data.kabupaten || "-"}, Bali ${data.kodePos || ""}\n\n` +
      `*Pekerjaan:*\n` +
      `${data.pekerjaan || "-"}${data.namaUsaha ? ` (${data.namaUsaha})` : ""}\n` +
      `Penghasilan: ${data.penghasilan || "-"}/bulan\n\n` +
      `Kontak: ${data.noTelpon || "-"}\n` +
      `Email: ${data.email || "-"}\n\n` +
      `Mohon konfirmasi untuk proses pendaftaran selanjutnya. Terima kasih!`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

/**
 * Detect mobile OS for smart app banner
 */
export function getMobileOS(): "android" | "ios" | "other" {
  if (typeof navigator === "undefined") return "other";
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  return "other";
}

/**
 * Clamp number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Get YouTube embed URL
 */
export function getYouTubeEmbed(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
}

/**
 * Get YouTube thumbnail with fallback
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: "maxresdefault" | "hqdefault" | "mqdefault" = "maxresdefault"
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}
