"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroPackages() {
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

      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/70" />

      {/* ================= GRADIENT ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-black/50
          to-black
        "
      />

      {/* ================= GOLD GLOW ================= */}
      <div
        className="
          absolute top-1/3 left-1/2
          -translate-x-1/2
          w-[600px] h-[600px]
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
            y: 60,
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

          {/* ================= SUBTITLE ================= */}
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
              duration: 0.8,
              delay: 0.2,
            }}
            className="
              uppercase
              tracking-[0.45em]
              text-[#d4b15a]
              text-xs md:text-sm
              mb-6
            "
          >
            KAAF Wedding Organizer
          </motion.p>

          {/* ================= TITLE ================= */}
          <motion.h1
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
              delay: 0.3,
            }}
            className="
              font-heading
              text-5xl
              md:text-7xl
              lg:text-8xl
              text-[#f5e7b2]
              leading-[1.05]
              mb-8
            "
          >
            Paket Pernikahan
            <br />
            Untuk Hari Istimewa Anda
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            className="
              max-w-2xl
              mx-auto
              text-neutral-300
              leading-8
              text-base md:text-lg
            "
          >
            Pilihan paket pernikahan eksklusif mulai dari intimate wedding,
            venue package, hingga premium catering experience untuk
            menciptakan momen yang elegan, hangat, dan tak terlupakan.
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
              duration: 0.8,
              delay: 0.7,
            }}
            className="
              mt-12
              flex flex-col md:flex-row
              items-center justify-center
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