"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AllVenueHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-28">
      
      <Image
        src="/packages/nonvenue.png"
        alt="All In Non Venue"
        fill
        className="object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-5"
        >
          Paket Wedding
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl text-[#f5e7b2] mb-6"
        >
          All In Non Venue
          <br />
          Wedding Package
        </motion.h1>

        <p className="text-neutral-300 max-w-2xl leading-8 mb-8">
          Paket lengkap + catering + dekorasi + dokumentasi
          + wedding organizer untuk memudahkan hari spesialmu.
        </p>
 <div className="mt-10 mb-10">
          <h3 className="text-4xl font-bold text-[#d4b15a]">
            Mulai 50 Jutaan
          </h3>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">

          <button
            className="
              px-8 py-4 rounded-full
              bg-[#d4b15a] text-black font-semibold
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(212,177,90,0.35)]
              active:scale-95
            "
          >
            Konsultasi Sekarang
          </button>

        </div>

       

      </div>
    </section>
  );
}