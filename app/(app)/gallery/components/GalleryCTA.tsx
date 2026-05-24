"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GalleryCTA() {
  return (
    <section className="relative py-40 px-6 overflow-hidden bg-black">

      {/* ================= GLOW ================= */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4b15a]/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[140px]" />

      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* ================= LABEL ================= */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.7,
          }}
          className="
            uppercase
            tracking-[0.45em]
            text-[#d4b15a]
            text-sm
            mb-6
          "
        >
          Wujudkan Pernikahan Impian Anda
        </motion.p>

        {/* ================= TITLE ================= */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 0.1,
          }}
          className="
            font-heading
            text-4xl
            md:text-6xl
            text-[#f5e7b2]
            leading-tight
            mb-8
          "
        >
          Jadikan Setiap Momen
          <br />
          Pernikahan Anda
          <br />
          Begitu Istimewa
        </motion.h2>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            text-neutral-400
            max-w-2xl
            mx-auto
            leading-8
            mb-12
          "
        >
          Kami percaya setiap pernikahan memiliki cerita yang unik.
          Dengan sentuhan elegan dan perhatian pada setiap detail,
          kami membantu menciptakan momen yang indah dan tak terlupakan.
        </motion.p>

        
        {/* ================= BUTTON ================= */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: false }}
  transition={{
    duration: 0.8,
    delay: 0.3,
  }}
  className="
    flex flex-col sm:flex-row
    items-center justify-center
    gap-5
    mb-14
  "
>

  {/* Primary */}
  <a
    href="https://wa.me/628821458144"
    target="_blank"
    className="
      px-10 py-4
      rounded-full
      bg-[#d4b15a]
      text-black
      font-medium
      hover:scale-105
      transition duration-300
    "
  >
    Konsultasi via WhatsApp
  </a>

  {/* Secondary */}
  <a
    href="https://instagram.com/kaaf.weddingorganizer"
    target="_blank"
    className="
      px-10 py-4
      rounded-full
      border border-[#d4b15a]
      text-[#f5e7b2]
      hover:bg-[#d4b15a]
      hover:text-black
      transition duration-300
    "
  >
    Lihat Instagram
  </a>

</motion.div>

{/* ================= CONTACT INFO ================= */}
<motion.div
  initial={{
    opacity: 0,
    y: 20,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: false }}
  transition={{
    duration: 0.8,
    delay: 0.4,
  }}
  className="
    flex flex-col md:flex-row
    items-center justify-center
    gap-6
    text-neutral-400
    text-sm
    tracking-[0.15em]
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