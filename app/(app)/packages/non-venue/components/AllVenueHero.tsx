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

       {/* ================= CTA ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-12
              flex flex-col md:flex-row
              items-star 
              gap-5
            "
          >

            {/* Primary */}
            {/* <Link
              href="/contact"
              className="
                px-8 py-4
                rounded-full
                bg-[#d4b15a]
                text-black
                font-medium
                hover:scale-105
                transition duration-300
              "
            >
              Lihat Paket Wedding
            </Link> */}

            {/* Secondary */}
            <a
              href="https://wa.me/628821458144"
              target="_blank"
              className="
                px-8 py-4
                rounded-full
                border border-[#d4b15a]
                text-[#f1df9b]
                hover:bg-[#d4b15a]
                hover:text-black
                transition duration-300
              "
            >
              Konsultasi WhatsApp
            </a>

          </motion.div>

          {/* ================= CONTACT ================= */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
              delay: 1,
            }}
            className="
              mt-14
              flex flex-col md:flex-row
              items-center justify-center
              gap-5
              text-sm
              tracking-[0.2em]
              text-neutral-400
            "
          >

            <p>
              Instagram :
              <span className="text-[#f5e7b2] ml-2">
                @kaaf.weddingorganizer
              </span>
            </p>

            <div className="hidden md:block w-2 h-2 rounded-full bg-[#d4b15a]" />

            <p>
              WhatsApp :
              <span className="text-[#f5e7b2] ml-2">
                088 2145 8144
              </span>
            </p>

          </motion.div>

       

      </div>
    </section>
  );
}