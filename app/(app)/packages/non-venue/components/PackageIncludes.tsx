"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Sparkles,
  Camera,
  Utensils,
  Users,
  ClipboardList,
  Mic2,
  Music,
  Crown,
} from "lucide-react";

const includes = [
  
  {
    title: "MUA & Attire",
    icon: Crown,
  },
  {
    title: "Dekorasi",
    icon: Sparkles,
  },
  {
    title: "Dokumentasi Photo & Video",
    icon: Camera,
  },
  {
    title: "Catering Buffet & Stall",
    icon: Utensils,
  },
  {
    title: "WO On The Day",
    icon: Users,
  },
  {
    title: "Wedding Planner",
    icon: ClipboardList,
  },
  {
    title: "Master of Ceremony",
    icon: Mic2,
  },
  {
    title: "Sound & Entertainment",
    icon: Music,
  },
];

export default function PackageIncludes() {
  return (
    <section className="relative py-20 md:py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-xs md:text-sm mb-4">
            Paket Lengkap
          </p>

          <h2 className="font-heading text-3xl md:text-5xl text-[#f5e7b2] mb-5 leading-tight">
            Semua Sudah Kami Siapkan
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-7 text-sm md:text-base">
            Tidak perlu repot mencari vendor satu per satu.
            Semua kebutuhan wedding kamu sudah tersedia dalam satu paket.
          </p>
        </motion.div>

        {/* Compact List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {includes.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.0,
                  delay: index * 0.00,
                }}
                whileHover={{
                  x: 6,
                }}
                className="
                  group
                  flex items-center gap-4
                  p-5
                  rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-[#d4b15a]/30
                  transition
                "
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4b15a]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#d4b15a]" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-white text-sm md:text-base font-medium">
                    {item.title}
                  </h3>

                  {/* Underline */}
                  <div className="w-10 h-[2px] bg-[#d4b15a] rounded-full mt-2 group-hover:w-16 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}