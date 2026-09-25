"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { SITE_CONFIG } from "@/lib/constants";
import { Send, CheckCircle2, Loader2, MessageSquare, Sparkles, User, Mail, Phone, Tag } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  phone: z
    .string()
    .min(10, "Nomor telepon minimal 10 digit")
    .regex(/^(?:\+62|62|0)8[1-9][0-9]{6,10}$/, "Format nomor HP tidak valid (contoh: 081234567890)"),
  subject: z.string().min(3, "Subjek pesan minimal 3 karakter"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>("Konsultasi Pinjaman");

  const topicOptions = [
    "Konsultasi Pinjaman",
    "Info Simpanan / Deposito",
    "Pendaftaran Anggota",
    "Layanan Madata Mobile",
    "Lainnya",
  ];

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "Konsultasi Pinjaman",
    },
  });

  const handleSelectTopic = (topic: string) => {
    setSelectedTopic(topic);
    setValue("subject", topic, { shouldValidate: true });
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call & save to localStorage
      const existing = JSON.parse(localStorage.getItem("contact_messages") || "[]");
      existing.push({ ...data, createdAt: new Date().toISOString() });
      localStorage.setItem("contact_messages", JSON.stringify(existing));

      // Construct WhatsApp message URL
      const text = `Halo Admin KSP Mandara Sedana Kuta,\n\nNama: ${data.name}\nEmail: ${data.email}\nNo. HP: ${data.phone}\nKategori / Subjek: ${data.subject}\n\nPesan:\n${data.message}`;
      const waUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;

      toast.success("Pesan Berhasil Terkirim!", {
        description: "Terima kasih! Kami akan segera menghubungi Anda kembali.",
      });

      setIsSuccess(true);
      reset();

      // Open WA in a new window/tab after a short pause
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1200);
    } catch {
      toast.error("Gagal mengirim pesan", {
        description: "Silakan coba lagi atau hubungi langsung via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-9 border border-slate-200 dark:border-slate-700 shadow-xl relative overflow-hidden">
      {/* Top Header */}
      <div className="flex items-center gap-3 mb-6 pb-5 border-b border-slate-100 dark:border-slate-700/60">
        <div className="w-11 h-11 rounded-2xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 shadow-xs">
          <MessageSquare className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider block">
            Formulir Komunikasi Resmi
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Kirim Pesan ke Manajemen Koperasi
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Diterima langsung oleh staf Customer Service &amp; dibalas dalam 1x24 jam kerja.
          </p>
        </div>
      </div>

      {isSuccess ? (
        <div className="text-center py-12 px-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-sm animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Pesan Anda Telah Terkirim!
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto mb-6 leading-relaxed">
            Terima kasih! Pesan dan data kontak Anda sudah kami simpan. Layanan WhatsApp juga akan dibuka otomatis untuk konfirmasi kilat.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="px-6 py-2.5 bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs rounded-xl transition-all shadow-md"
          >
            Kirim Pertanyaan Lainnya
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Quick Subject Chips */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
              Pilih Kategori Kebutuhan Anda
            </label>
            <div className="flex flex-wrap gap-2">
              {topicOptions.map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => handleSelectTopic(topic)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    selectedTopic === topic
                      ? "bg-teal-700 text-white shadow-sm ring-2 ring-teal-500/30"
                      : "bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
            <input type="hidden" {...register("subject")} />
            {errors.subject && (
              <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.subject.message}</p>
            )}
          </div>

          {/* Name & Email 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="I Wayan..."
                  {...register("name")}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.name
                      ? "border-red-500 dark:border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                Alamat Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="nama@email.com"
                  {...register("email")}
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                    errors.email
                      ? "border-red-500 dark:border-red-500"
                      : "border-slate-200 dark:border-slate-700"
                  }`}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Nomor Handphone / WhatsApp Aktif <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="tel"
                placeholder="081234567890"
                {...register("phone")}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                  errors.phone
                    ? "border-red-500 dark:border-red-500"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.phone.message}</p>
            )}
          </div>

          {/* Message Area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
              Isi Pertanyaan / Pesan Anda <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              placeholder="Tuliskan pertanyaan atau kebutuhan Anda secara jelas..."
              {...register("message")}
              className={`w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors ${
                errors.message
                  ? "border-red-500 dark:border-red-500"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-[11px] mt-1 font-medium">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md transition-all disabled:opacity-50 text-xs sm:text-sm cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Mengirimkan Pesan...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Pesan &amp; Buka WhatsApp</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
