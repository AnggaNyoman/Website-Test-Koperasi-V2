"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, Calendar, MapPin } from "lucide-react";
import { STATS } from "@/lib/constants";
// ============================================
// ANIMATED STATISTICS COUNTER
// Triggers when scrolled into view
// ============================================

const iconMap: Record<string, React.ElementType> = {
  Users,
  TrendingUp,
  Calendar,
  MapPin,
};

const GRADIENT_MAP: Record<number, string> = {
  0: "from-primary-500 to-cyan-500",
  1: "from-cyan-500 to-teal-600",
  2: "from-amber-500 to-yellow-400",
  3: "from-primary-600 to-teal-500",
};

function CountUp({
  target,
  duration = 2000,
  started,
}: {
  target: number;
  duration?: number;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing: ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(startValue + eased * (target - startValue)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return <>{count}</>;
}

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-14 md:py-20 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Subtle mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-teal-900/20 pointer-events-none" />
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] || Users;
            const gradient = GRADIENT_MAP[i] || "from-primary-500 to-cyan-500";
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.55 }}
                className="relative text-center group"
              >
                {/* Card */}
                <div className="relative bg-white dark:bg-slate-800/60 rounded-2xl border border-slate-100 dark:border-slate-700/50 shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-1 p-6 lg:p-8 flex flex-col items-center justify-between gap-4 overflow-hidden h-full">
                  {/* Background glow blob */}
                  <div
                    className={`absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Value */}
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tabular-nums leading-none">
                    {stat.prefix && (
                      <span className="text-xl md:text-2xl text-slate-500 dark:text-slate-400">
                        {stat.prefix}
                      </span>
                    )}
                    <CountUp
                      target={stat.value}
                      started={isInView}
                      duration={2000 + i * 200}
                    />
                    {stat.suffix && (
                      <span
                        className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent text-2xl md:text-3xl font-bold`}
                      >
                        {stat.suffix}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium text-center leading-tight">
                    {stat.label}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className={`h-0.5 w-8 group-hover:w-full rounded-full bg-gradient-to-r ${gradient} transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
