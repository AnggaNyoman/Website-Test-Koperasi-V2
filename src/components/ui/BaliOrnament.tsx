"use client";

// ============================================
// MINIMALIST ACCENT UTILITIES
// Replaces heavy ethnic motifs with sleek subtle accents
// ============================================

interface BaliOrnamentProps {
  className?: string;
  opacity?: number;
  color?: string;
}

export interface BaliCornerProps extends BaliOrnamentProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: number;
}

/** Minimalist horizontal divider */
export function BaliLotus({ className = "" }: BaliOrnamentProps) {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent ${className}`} />
  );
}

/** Neutral corner accent */
export function BaliCorner() {
  return null;
}

/** Neutral border accent */
export function BaliPepatranBorder({ className = "" }: BaliOrnamentProps) {
  return (
    <div className={`w-full h-px bg-slate-100 dark:bg-slate-800 ${className}`} />
  );
}

/** Floating background accent — neutral dot */
export function BaliFloatingOrn() {
  return null;
}

/** Wave pattern neutral */
export function BaliWavePattern() {
  return null;
}
