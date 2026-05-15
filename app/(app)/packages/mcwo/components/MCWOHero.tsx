"use client";

import { motion } from "framer-motion";

export default function MCWOHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6">
      <div className="absolute inset-0 bg-[url('/packages/mcwo.png')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 text-center max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.4em] text-[#d4b15a] mb-4"
        >
          MC • WO • Engagement
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl text-[#f5e7b2] font-heading mb-6"
        >
          Make Your Special Day Perfect
        </motion.h1>

        <p className="text-neutral-300 max-w-2xl mx-auto leading-8">
          Profesional MC, Wedding Organizer, Wedding Planner, 
          hingga paket engagement lengkap untuk hari spesial Anda.
        </p>
      </div>
    </section>
  );
}