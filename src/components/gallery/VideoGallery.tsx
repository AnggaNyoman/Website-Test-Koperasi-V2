"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { VIDEOS, SITE_CONFIG } from "@/lib/constants";
import { VideoItem } from "@/types";
import { Play, Film, ExternalLink } from "lucide-react";
import VideoModal from "./VideoModal";

const CATEGORIES = ["Semua", "Profil", "Komunitas", "Podcast", "Sosial"];

export default function VideoGallery() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const filteredVideos = VIDEOS.filter((v) => {
    if (selectedCategory === "Semua") return true;
    return v.category === selectedCategory;
  });

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 mb-10">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-[13px] font-bold transition-all ${
                isActive
                  ? "bg-teal-600 text-white shadow-teal-500/25 shadow-md scale-102"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:text-teal-600 dark:hover:text-teal-400 shadow-2xs"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Videos Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <AnimatePresence>
          {filteredVideos.map((video) => {
            const hasError = imgErrors[video.id];
            const thumbUrl = hasError
              ? `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`
              : video.thumbnail;

            return (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                onClick={() => setActiveVideo(video)}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-900 shrink-0">
                  <Image
                    src={thumbUrl}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    onError={() => {
                      if (!hasError) {
                        setImgErrors((prev) => ({ ...prev, [video.id]: true }));
                      }
                    }}
                  />

                  {/* Category Pill */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border border-white/20 shadow-xs">
                      {video.category}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-slate-950/25 group-hover:bg-slate-950/10 transition-colors flex items-center justify-center">
                    <div className="w-11 h-11 rounded-full bg-teal-600 group-hover:bg-teal-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Content Info with Balanced Typography */}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    {/* Balanced Title with clean line-clamp & comfortable font size */}
                    <h3 className="font-bold text-slate-900 dark:text-white text-[13.5px] leading-snug line-clamp-2 min-h-[2.6em] group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {video.title}
                    </h3>
                    {/* Balanced Description with clear contrast and comfortable font size */}
                    <p className="text-[11.5px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mt-1.5 min-h-[3em]">
                      {video.description}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 font-bold text-[11px] text-teal-700 dark:text-teal-400 group-hover:gap-2 transition-all">
                      <Film className="w-3.5 h-3.5" />
                      <span>Putar Video</span>
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">
                      HD Media
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Official YouTube Channel Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-red-500/30">
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white text-red-600 flex items-center justify-center shrink-0 shadow-lg">
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
              Official Channel
            </span>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight">
              {SITE_CONFIG.youtubeName}
            </h3>
            <p className="text-xs sm:text-sm text-white/90 mt-0.5 max-w-xl">
              Tonton seluruh video dokumentasi kegiatan, profil koperasi, podcast edukasi keuangan, dan bakti sosial resmi Koperasi Madata di Bali.
            </p>
          </div>
        </div>
        <a
          href={SITE_CONFIG.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-red-600 font-extrabold text-xs sm:text-sm transition-all shadow-md shrink-0 flex items-center gap-2 hover:scale-105"
        >
          <span>Buka YouTube Channel</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Video Modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
