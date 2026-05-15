"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[0.5em] text-[#d4b15a] text-sm mb-6">
            KAAF Wedding Organizer
          </p>

          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl text-[#f5e7b2] leading-none mb-8">
            Momen
            <br />
            Tak Terlupakan
          </h1>

          <p className="max-w-2xl mx-auto text-neutral-300 leading-8 font-body">
            Menghadirkan pengalaman pernikahan yang elegan dengan
            sentuhan mewah, suasana intim, dan kenangan indah
            yang akan selalu dikenang.
          </p>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5">

            <button className="px-8 py-4 rounded-full bg-[#d4b15a] text-black font-medium hover:scale-105 transition duration-300">
              Konsultasi Sekarang
            </button>

            <button className="px-8 py-4 rounded-full border border-[#d4b15a] text-[#f1df9b] hover:bg-[#d4b15a] hover:text-black transition duration-300">
              Lihat Galeri
            </button>

          </div>
        </motion.div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}