"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6 overflow-hidden">

      {/* ================= GLOW ================= */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      {/* ================= OVERLAY ================= */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/40
          via-black/70
          to-black
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">

        {/* Subtitle */}
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
          }}
          className="
            uppercase
            tracking-[0.45em]
            text-[#d4b15a]
            text-sm
            mb-6
          "
        >
          Hubungi Kami
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="
            font-heading
            text-5xl
            md:text-7xl
            lg:text-8xl
            text-[#f5e7b2]
            leading-[1.1]
            mb-8
          "
        >
          Wujudkan
          <br />
          Pernikahan Impian
          <br />
          Bersama Kami
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
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            text-neutral-400
            leading-8
            text-base md:text-lg
            max-w-2xl
            mx-auto
            mb-12
          "
        >
          Konsultasikan kebutuhan wedding, engagement,
          intimate wedding, hingga event spesial Anda
          bersama tim profesional KAAF Wedding Organizer.
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
            delay: 0.4,
          }}
          className="
            flex flex-col sm:flex-row
            items-center justify-center
            gap-5
          "
        >

          {/* WhatsApp */}
          <a
            href="https://wa.me/628821458144"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
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
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/kaaf.weddingorganizer"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-8 py-4
              rounded-full
              border border-[#d4b15a]
              text-[#f5e7b2]
              hover:bg-[#d4b15a]
              hover:text-black
              transition duration-300
            "
          >
            Instagram Kami
          </a>

        </motion.div>

        {/* ================= CONTACT INFO ================= */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
            mt-14
            flex flex-col md:flex-row
            items-center justify-center
            gap-5
            text-sm
            tracking-[0.2em]
            text-neutral-500
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