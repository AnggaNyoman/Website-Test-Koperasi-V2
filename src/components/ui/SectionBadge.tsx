import React from "react";

interface SectionBadgeProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: "teal" | "cyan" | "gold" | "primary";
}

export default function SectionBadge({
  icon,
  children,
  className = "",
  variant = "teal",
}: SectionBadgeProps) {
  const variants = {
    teal: "bg-teal-50 dark:bg-teal-950/60 border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300",
    cyan: "bg-cyan-50 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-300",
    gold: "bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300",
    primary: "bg-primary-50 dark:bg-primary-950/60 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs sm:text-sm font-semibold mb-4 shadow-sm ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </div>
  );
}
