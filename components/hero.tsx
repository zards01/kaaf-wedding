"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* ================= BACKGROUND ================= */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-105
        "
        style={{
          backgroundImage: "url('/hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/40
          via-black/30
          to-black
        "
      />

      {/* Gold Glow */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[700px] h-[700px]
          bg-[#d4b15a]/10
          blur-[180px]
          rounded-full
        "
      />

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative z-10
          min-h-screen
          flex items-center justify-center
          text-center
          px-6
        "
      >

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="max-w-5xl"
        >

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              uppercase
              tracking-[0.5em]
              text-[#d4b15a]
              text-xs md:text-sm
              mb-6
            "
          >
            KAAF Wedding Organizer
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
            }}
            className="
              font-heading
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              text-[#f5e7b2]
              leading-[0.95]
              mb-8
            "
          >
            Momen
            <br />
            Tak Terlupakan
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
            className="
              max-w-2xl
              mx-auto
              text-neutral-300
              leading-8
              text-sm md:text-lg
            "
          >
            Menghadirkan pengalaman pernikahan yang elegan
            dengan sentuhan mewah, suasana intim, dan
            kenangan indah yang akan selalu dikenang.
          </motion.p>

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
              delay: 0.8,
              duration: 0.8,
            }}
            className="
              mt-12
              flex flex-col sm:flex-row
              items-center justify-center
              gap-5
            "
          >

            {/* Primary Button */}
            <Link
              href="/contact"
              className="
                px-8 py-4
                rounded-full
                bg-[#d4b15a]
                text-black
                font-semibold
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(212,177,90,0.35)]
                active:scale-95
              "
            >
              Konsultasi Sekarang
            </Link>

            {/* Secondary Button */}
            <Link
              href="/gallery"
              className="
                px-8 py-4
                rounded-full
                border border-[#d4b15a]
                text-[#f1df9b]
                transition-all duration-300
                hover:bg-[#d4b15a]
                hover:text-black
                hover:scale-105
                active:scale-95
              "
            >
              Lihat Galeri
            </Link>

          </motion.div>

        </motion.div>

      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div
        className="
          absolute bottom-0 left-0
          w-full h-40
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

    </section>
  );
}