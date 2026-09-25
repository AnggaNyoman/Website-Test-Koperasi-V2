"use client";

interface BaliDividerProps {
  className?: string;
  variant?: "lotus" | "pepatran" | "wave" | "minimal";
  flip?: boolean;
  color?: string;
  opacity?: number;
}

/**
 * Minimalist, elegant section divider replacing heavy ethnic ornaments
 */
export default function BaliDivider({
  className = "",
}: BaliDividerProps) {
  return (
    <div
      className={`relative w-full flex items-center justify-center py-4 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div className="w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
    </div>
  );
}
