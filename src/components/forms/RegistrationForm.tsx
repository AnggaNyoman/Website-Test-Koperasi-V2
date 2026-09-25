"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { KABUPATEN_BALI, SITE_CONFIG } from "@/lib/constants";
import { User, MapPin, Briefcase, FileUp, CheckCircle2, AlertCircle, ArrowRight, ArrowLeft, Upload, PartyPopper, MessageCircle, Check } from "lucide-react";

const registrationSchema = z.object({
  // Step 1: Data Diri
  fullName: z.string().min(3, "Nama lengkap minimal 3 karakter"),
  nik: z.string().length(16, "NIK wajib 16 digit angka").regex(/^\d+$/, "NIK hanya boleh berisi angka"),
  pob: z.string().min(2, "Tempat lahir wajib diisi"),
  dob: z.string().min(1, "Tanggal lahir wajib diisi"),
  gender: z.enum(["Laki-laki", "Perempuan"], { required_error: "Pilih jenis kelamin" }),
  maritalStatus: z.enum(["Belum Menikah", "Menikah", "Pernah Menikah"], {
    required_error: "Pilih status perkawinan",
  }),

  // Step 2: Alamat
  address: z.string().min(5, "Alamat lengkap minimal 5 karakter"),
  kelurahan: z.string().min(2, "Kelurahan / Desa wajib diisi"),
  kecamatan: z.string().min(2, "Kecamatan wajib diisi"),
  kabupaten: z.string().min(1, "Pilih Kabupaten/Kota di Bali"),
  postalCode: z.string().min(5, "Kode pos 5 digit").max(5, "Kode pos 5 digit"),

  // Step 3: Pekerjaan & Kontak
  occupation: z.string().min(2, "Pekerjaan wajib diisi"),
  businessName: z.string().optional(),
  monthlyIncome: z.string().min(1, "Pilih kisaran penghasilan bulanan"),
  phone: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .regex(/^(?:\+62|62|0)8[1-9][0-9]{6,10}$/, "Format nomor WhatsApp tidak valid (contoh: 081234567890)"),
  email: z.string().email("Format email tidak valid"),

  // Step 4: Uploads
  ktpUploaded: z.boolean().refine((val) => val === true, "Foto KTP wajib diunggah"),
  kkUploaded: z.boolean().refine((val) => val === true, "Foto Kartu Keluarga (KK) wajib diunggah"),

  // Step 5: Terms
  agreeTerms: z.boolean().refine((val) => val === true, "Wajib menyetujui AD/ART koperasi"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function RegistrationForm() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [ktpFileName, setKtpFileName] = useState<string>("");
  const [kkFileName, setKkFileName] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      kabupaten: "Badung",
      gender: "Laki-laki",
      maritalStatus: "Menikah",
      monthlyIncome: "Rp 3.000.000 - Rp 5.000.000",
      ktpUploaded: false,
      kkUploaded: false,
      agreeTerms: false,
    },
  });

  const formData = watch();

  const nextStep = async () => {
    let fieldsToValidate: (keyof RegistrationFormData)[] = [];
    if (step === 1) fieldsToValidate = ["fullName", "nik", "pob", "dob", "gender", "maritalStatus"];
    if (step === 2) fieldsToValidate = ["address", "kelurahan", "kecamatan", "kabupaten", "postalCode"];
    if (step === 3) fieldsToValidate = ["occupation", "monthlyIncome", "phone", "email"];
    if (step === 4) fieldsToValidate = ["ktpUploaded", "kkUploaded"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(5, prev + 1));
    } else {
      toast.error("Mohon lengkapi seluruh isian dengan benar sebelum lanjut");
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      // Save data locally
      const existing = JSON.parse(localStorage.getItem("ksp_member_registrations") || "[]");
      const registrationId = `REG-${Date.now().toString().slice(-6)}`;
      const record = {
        ...data,
        registrationId,
        submittedAt: new Date().toISOString(),
      };
      existing.push(record);
      localStorage.setItem("ksp_member_registrations", JSON.stringify(existing));

      // Construct WhatsApp link
      const text = `Halo Admin Koperasi Mandara Sedana Kuta,\nSaya telah mengisi Formulir Pendaftaran Anggota Baru Online via Website.\n\n*Nomor Registrasi:* ${registrationId}\n*Nama Lengkap:* ${data.fullName}\n*NIK:* ${data.nik}\n*TTL:* ${data.pob}, ${data.dob}\n*Domisili:* ${data.kabupaten}, Bali\n*No. WA:* ${data.phone}\n*Pekerjaan:* ${data.occupation}\n\nMohon petunjuk proses verifikasi dokumen selanjutnya. Terima kasih!`;
      const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

      toast.success("Pendaftaran Berhasil Dikirim!", {
        description: "Data Anda telah tersimpan. Silakan konfirmasi ke WhatsApp tim kami.",
      });

      setIsSuccess(true);

      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1500);
    } catch {
      toast.error("Terjadi kendala saat memproses pendaftaran", {
        description: "Silakan hubungi kami langsung via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileUpload = (type: "ktp" | "kk", e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      toast.error("Ukuran file maksimal 2MB");
      return;
    }

    if (type === "ktp") {
      setKtpFileName(file.name);
      setValue("ktpUploaded", true);
      trigger("ktpUploaded");
      toast.success("Foto KTP berhasil dipilih");
    } else {
      setKkFileName(file.name);
      setValue("kkUploaded", true);
      trigger("kkUploaded");
      toast.success("Foto Kartu Keluarga berhasil dipilih");
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden">
      {/* Header Info */}
      <div className="p-6 sm:p-8 bg-gradient-to-r from-teal-800 to-teal-900 text-white relative">
<h2 className="text-xl sm:text-2xl font-bold">Formulir Pendaftaran Anggota Baru</h2>
        <p className="text-teal-200 text-xs sm:text-sm mt-1">
          Lengkapi formulir 5 langkah di bawah untuk mendaftar sebagai anggota resmi Koperasi Mandara Sedana Kuta
        </p>

        {/* Stepper Indicator */}
        <div className="flex items-center justify-between mt-8 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-teal-700/60 -translate-y-1/2 z-0" />
          {[
            { num: 1, label: "Data Diri" },
            { num: 2, label: "Alamat" },
            { num: 3, label: "Pekerjaan" },
            { num: 4, label: "Dokumen" },
            { num: 5, label: "Konfirmasi" },
          ].map((s) => (
            <div key={s.num} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step === s.num
                    ? "bg-amber-400 text-slate-950 ring-4 ring-amber-400/30 font-extrabold"
                    : step > s.num
                    ? "bg-teal-500 text-white"
                    : "bg-teal-950/80 text-teal-300 border border-teal-700"
                }`}
              >
                {step > s.num ? <Check size={16} className="stroke-[3]" /> : s.num}
              </div>
              <span className="hidden sm:block text-[11px] font-medium text-teal-200 mt-1.5">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-10">
        {isSuccess ? (
          /* Success Screen */
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6">
              <PartyPopper className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-2">
              Pendaftaran Berhasil Dikirim!
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm max-w-lg mx-auto leading-relaxed mb-6">
              Terima kasih! Data Anda telah kami terima. Tim kami akan menghubungi Anda via WhatsApp dalam 1x24 jam untuk verifikasi. Pastikan nomor WhatsApp Anda aktif.
            </p>

            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5 max-w-md mx-auto mb-8 text-left text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong>Langkah Terakhir:</strong> Untuk menyelesaikan pendaftaran, Anda perlu datang ke kantor kami (Pusat di Legian atau Cabang di Sesetan) dengan membawa KTP & KK asli untuk penandatanganan buku anggota.
              </div>
            </div>

            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Halo%20Koperasi%20Mandara%20Sedana%20Kuta,%20saya%20sudah%20mendaftar%20online`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-colors text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Buka Konfirmasi WhatsApp</span>
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* STEP 1: Data Diri */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-teal-600" />
                  <span>1. Identitas Data Diri</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Nama Lengkap (Sesuai KTP) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: I Putu Agus Sudarmawan"
                    {...register("fullName")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Nomor Induk Kependudukan (NIK 16 Digit) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="510301xxxxxxxxxx"
                    {...register("nik")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm font-mono focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                  {errors.nik && <p className="text-red-500 text-xs mt-1">{errors.nik.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Tempat Lahir <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Denpasar"
                      {...register("pob")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.pob && <p className="text-red-500 text-xs mt-1">{errors.pob.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Tanggal Lahir (Min. 17 Tahun) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      {...register("dob")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("gender")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Status Perkawinan <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("maritalStatus")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      <option value="Belum Menikah">Belum Menikah</option>
                      <option value="Menikah">Menikah</option>
                      <option value="Pernah Menikah">Pernah Menikah</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Alamat */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-600" />
                  <span>2. Alamat Domisili (Wajib Provinsi Bali)</span>
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Alamat Lengkap (Jalan, No. Rumah, Banjar/RT/RW) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Jl. Legian No. 12, Banjar Pelasa"
                    {...register("address")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Kelurahan / Desa <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Legian"
                      {...register("kelurahan")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.kelurahan && <p className="text-red-500 text-xs mt-1">{errors.kelurahan.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Kecamatan <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Kuta"
                      {...register("kecamatan")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.kecamatan && <p className="text-red-500 text-xs mt-1">{errors.kecamatan.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Kabupaten / Kota (WAJIB Bali) <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register("kabupaten")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    >
                      {KABUPATEN_BALI.map((kab) => (
                        <option key={kab} value={kab}>
                          Kabupaten / Kota {kab}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Kode Pos <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      maxLength={5}
                      placeholder="80361"
                      {...register("postalCode")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm font-mono focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Pekerjaan & Kontak */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                  <span>3. Informasi Pekerjaan & Kontak</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Pekerjaan / Profesi <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Wiraswasta / Karyawan Swasta / PNS"
                      {...register("occupation")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Nama Tempat Kerja / Usaha (Opsional)
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Toko Kerajinan Dewata"
                      {...register("businessName")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                    Estimasi Penghasilan Bulanan <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register("monthlyIncome")}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                  >
                    <option value="< Rp 3.000.000">&lt; Rp 3.000.000</option>
                    <option value="Rp 3.000.000 - Rp 5.000.000">Rp 3.000.000 - Rp 5.000.000</option>
                    <option value="Rp 5.000.000 - Rp 10.000.000">Rp 5.000.000 - Rp 10.000.000</option>
                    <option value="> Rp 10.000.000">&gt; Rp 10.000.000</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Nomor Handphone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="081234567890"
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email@domain.com"
                      {...register("email")}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Upload Dokumen */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <FileUp className="w-5 h-5 text-teal-600" />
                  <span>4. Unggah Dokumen Verifikasi</span>
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  Format yang didukung: JPG, PNG (Maksimal 2MB per dokumen). Foto harus jelas dan terbaca.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* KTP */}
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-teal-500 transition-colors bg-slate-50/50 dark:bg-slate-900/30">
                    <Upload className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      Foto KTP Asli <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      {ktpFileName ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {ktpFileName}
                        </span>
                      ) : (
                        "Pastikan NIK dan foto terlihat jelas"
                      )}
                    </p>
                    <label className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow transition-colors">
                      <span>{ktpFileName ? "Ganti File" : "Pilih File KTP"}</span>
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => handleFileUpload("ktp", e)}
                        className="hidden"
                      />
                    </label>
                    {errors.ktpUploaded && (
                      <p className="text-red-500 text-xs mt-2">{errors.ktpUploaded.message}</p>
                    )}
                  </div>

                  {/* KK */}
                  <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-teal-500 transition-colors bg-slate-50/50 dark:bg-slate-900/30">
                    <Upload className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                      Foto Kartu Keluarga (KK) <span className="text-red-500">*</span>
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
                      {kkFileName ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {kkFileName}
                        </span>
                      ) : (
                        "Seluruh baris anggota keluarga terbaca"
                      )}
                    </p>
                    <label className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl cursor-pointer shadow transition-colors">
                      <span>{kkFileName ? "Ganti File" : "Pilih File KK"}</span>
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={(e) => handleFileUpload("kk", e)}
                        className="hidden"
                      />
                    </label>
                    {errors.kkUploaded && (
                      <p className="text-red-500 text-xs mt-2">{errors.kkUploaded.message}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 5: Konfirmasi & Syarat */}
            {step === 5 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span>5. Konfirmasi Data & Persetujuan</span>
                </h3>

                {/* Ringkasan Data */}
                <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                  <div className="font-bold text-slate-900 dark:text-slate-200 text-sm border-b border-slate-200 dark:border-slate-700 pb-2 mb-2">
                    Ringkasan Pendaftaran
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Nama Lengkap:</span>
                      <div className="font-semibold text-slate-900 dark:text-slate-200">{formData.fullName}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">NIK:</span>
                      <div className="font-semibold text-slate-900 dark:text-slate-200 font-mono">{formData.nik}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Domisili:</span>
                      <div className="font-semibold text-slate-900 dark:text-slate-200">{formData.kabupaten}, Bali</div>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">No. WhatsApp:</span>
                      <div className="font-semibold text-slate-900 dark:text-slate-200 font-mono">{formData.phone}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Pekerjaan:</span>
                      <div className="font-semibold text-slate-900 dark:text-slate-200">{formData.occupation}</div>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">Simpanan Pokok & Wajib:</span>
                      <div className="font-bold text-teal-600 font-mono">Rp 20.000 (Saat Verifikasi)</div>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register("agreeTerms")}
                      className="w-5 h-5 rounded border-slate-300 text-teal-600 focus:ring-teal-500 mt-0.5"
                    />
                    <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      Saya menyatakan bahwa data yang saya isi adalah benar dan sah. Saya bersedia mematuhi Anggaran Dasar & Anggaran Rumah Tangga (AD/ART) serta ketentuan yang berlaku di Koperasi Mandara Sedana Kuta.
                    </span>
                  </label>
                  {errors.agreeTerms && (
                    <p className="text-red-500 text-xs">{errors.agreeTerms.message}</p>
                  )}
                </div>

                {/* Important Notice Box */}
                <div className="p-4 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-xs text-teal-900 dark:text-teal-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Informasi Penting:</strong> Setelah mengisi formulir ini, Anda akan dihubungi oleh tim kami via WhatsApp untuk verifikasi. Untuk menyelesaikan pendaftaran, Anda perlu datang ke kantor kami (Pusat atau Cabang) dengan membawa KTP & KK asli.
                  </div>
                </div>
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/80">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Sebelumnya</span>
                </button>
              ) : <div />}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold transition-colors shadow"
                >
                  <span>Langkah Berikutnya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white text-xs sm:text-sm font-bold transition-all shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Memproses...</span>
                  ) : (
                    <>
                      <span>Kirim Pendaftaran & Hubungi WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
