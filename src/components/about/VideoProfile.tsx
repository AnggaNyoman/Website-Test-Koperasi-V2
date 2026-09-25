"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Video } from "lucide-react";
import { getYouTubeEmbed } from "@/lib/utils";
// ============================================
// VIDEO PROFILE SECTION
// ============================================

const VIDEO_ID = "qLutMmpkLEo";
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const EMBED_URL = getYouTubeEmbed(VIDEO_ID);

export default function VideoProfile() {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-py bg-white dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="badge bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-3">
            <Video size={14} />
            Video Profil
          </span>
          <h2 className="section-title">
            Kenali Kami <span className="text-gradient">Lebih Dekat</span>
          </h2>
          <p className="section-subtitle mx-auto mt-2">
            Saksikan perjalanan Koperasi Mandara Sedana Kuta dalam video profil resmi kami.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-brand-lg"
        >
          {!playing ? (
            /* Thumbnail with play button */
            <div
              className="relative aspect-video cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              <Image
                src={THUMBNAIL}
                alt="Thumbnail Video Profil Koperasi Mandara Sedana Kuta"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-teal-900/40 group-hover:bg-teal-900/30 transition-colors" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-primary-500 flex items-center justify-center shadow-glow-green"
                >
                  <Play size={32} className="text-white ml-1 fill-white" />
                </motion.div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-teal-900/90 to-transparent">
                <p className="text-white font-semibold text-lg">
                  Company Profile — Koperasi Mandara Sedana Kuta
                </p>
                <p className="text-teal-200 text-sm">Klik untuk memutar video</p>
              </div>
            </div>
          ) : (
            /* YouTube iframe */
            <div className="relative aspect-video">
              <iframe
                src={EMBED_URL}
                title="Video Profil Koperasi Mandara Sedana Kuta"
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
