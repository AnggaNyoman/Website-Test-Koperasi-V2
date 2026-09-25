"use client";

import { motion } from "framer-motion";
import { HISTORY_TIMELINE } from "@/lib/constants";
import { History, Star, Building, TrendingUp, Smartphone, MapPin, Rocket, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Star,
  Building,
  TrendingUp,
  Smartphone,
  MapPin,
  Rocket,
};

export default function SejarahTimeline() {
  return (
    <section id="sejarah" className="section-py px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300 text-sm font-semibold mb-4">
            <History className="w-4 h-4 text-cyan-600" />
            <span>Perjalanan Kami</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 [text-wrap:balance]">
            Sejarah &amp; Tonggak Pencapaian
          </h2>
          <p className="text-black dark:text-slate-300 text-base sm:text-lg">
            Dari awal berdirinya hingga transformasi perbankan digital masa kini, komitmen kami untuk memajukan perekonomian seluruh anggota dan masyarakat terus bertumbuh.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-teal-200 dark:border-teal-800/60 ml-4 sm:ml-32 space-y-12">
          {HISTORY_TIMELINE.map((item, idx) => {
            const Icon = iconMap[item.icon] || Star;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-10 group"
              >
                {/* Year tag for larger screens placed to the left */}
                <div className="hidden sm:block absolute -left-32 top-1.5 w-24 text-right">
                  <span className="font-extrabold text-lg text-teal-700 dark:text-teal-400">
                    {item.year}
                  </span>
                </div>

                {/* Node icon circle */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-teal-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-teal-50 dark:group-hover:bg-teal-950 transition-all">
                  <Icon className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                </div>

                {/* Content Box */}
                <div className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow relative">
{/* Mobile Year Badge */}
                  <span className="sm:hidden inline-block px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold text-xs mb-2">
                    {item.year}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed text-left [text-wrap:pretty]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
