// ============================================
// LOADING PAGE — Premium skeleton with brand identity
// ============================================

export default function Loading() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-teal-50/30 dark:from-slate-900 dark:to-teal-900/10 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated logo spinner */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-teal-100 dark:border-teal-800" />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-teal-500 border-r-cyan-400 animate-spin" />
          {/* Inner ring slow */}
          <div
            className="absolute inset-3 rounded-full border-2 border-primary-200 dark:border-primary-800 animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
          />
          {/* Center dot */}
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-cyan-400 animate-pulse shadow-md shadow-teal-300/50" />
        </div>

        {/* Brand name */}
        <div className="text-center space-y-1">
          <p className="text-sm font-bold text-teal-700 dark:text-teal-400 tracking-wide">
            Mandara Sedana Kuta
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 animate-pulse">
            Memuat halaman...
          </p>
        </div>

        {/* Skeleton content preview */}
        <div className="w-full max-w-md space-y-3 mt-4">
          <div className="h-4 skeleton w-3/4 mx-auto" />
          <div className="h-4 skeleton w-1/2 mx-auto" />
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="h-20 skeleton rounded-xl" />
            <div className="h-20 skeleton rounded-xl" />
            <div className="h-20 skeleton rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
