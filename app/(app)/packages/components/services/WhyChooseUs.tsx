"use client";

import { motion } from "framer-motion";
import {
  Crown,
  Camera,
  Utensils,
  Flower2,
  Mic2,
  CalendarHeart,
} from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Wedding Planner Profesional",
    description:
      "Perencanaan acara dari awal hingga hari bahagia Anda dengan pendampingan penuh.",
  },
  {
    icon: Flower2,
    title: "Dekorasi Elegan",
    description:
      "Konsep dekorasi premium dengan sentuhan mewah dan estetika modern.",
  },
  {
    icon: Utensils,
    title: "Catering Berkualitas",
    description:
      "Pilihan buffet, stall, dan menu spesial untuk tamu Anda.",
  },
  {
    icon: Camera,
    title: "Dokumentasi Wedding",
    description:
      "Foto dan video cinematic untuk mengabadikan setiap momen terbaik.",
  },
  {
    icon: Mic2,
    title: "MC & Entertainment",
    description:
      "MC profesional, singer, sound system, hingga entertainment lengkap.",
  },
  {
    icon: CalendarHeart,
    title: "Hari H Lebih Tenang",
    description:
      "Tim WO profesional memastikan acara berjalan lancar tanpa drama.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 px-6 bg-[#050505] overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Layanan Premium
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-[#f5e7b2] mb-6">
            Semua Kebutuhan Pernikahan Dalam Satu Tempat
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Kami menghadirkan pengalaman pernikahan yang praktis,
            elegan, dan terorganisir agar Anda bisa fokus menikmati
            momen bahagia bersama pasangan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-xl shadow-black/30"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[#d4b15a]/10 blur-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4b15a]/20 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#d4b15a]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#f5e7b2] mb-4">
                    {service.title}
                  </h3>

                  <p className="text-neutral-400 leading-7 text-sm">
                    {service.description}
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