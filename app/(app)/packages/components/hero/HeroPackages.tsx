"use client";

import { motion } from "framer-motion";

export default function HeroPackages() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gold gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

      {/* Glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[150px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl"
        >
          {/* Subtitle */}
          <p className="uppercase tracking-[0.5em] text-[#d4b15a] text-sm mb-6">
            KAAF Wedding Packages
          </p>

          {/* Title */}
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-[#f5e7b2] leading-tight mb-8">
            Wedding Packages
            <br />
            For Your Dream Day
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-neutral-300 leading-8 font-body text-lg">
            Pilihan paket pernikahan eksklusif mulai dari intimate wedding,
            all-in venue package, hingga premium catering experience
            untuk menciptakan hari spesial yang sempurna.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">

            <button className="px-8 py-4 rounded-full bg-[#d4b15a] text-black font-medium hover:scale-105 transition duration-300">
              Explore Packages
            </button>

            <button className="px-8 py-4 rounded-full border border-[#d4b15a] text-[#f1df9b] hover:bg-[#d4b15a] hover:text-black transition duration-300">
              Consultation
            </button>

          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}