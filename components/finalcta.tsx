"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4b15a]/10 blur-[160px]" />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-6"
        >
          Wujudkan Pernikahan Impian Anda
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: false }}
          className="font-heading text-5xl md:text-7xl text-[#f1df9b] leading-tight"
        >
          Hari Spesial
          <br />
          Dimulai Dari Sini
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          viewport={{ once: false }}
          className="mt-8 max-w-2xl mx-auto text-neutral-400 leading-8"
        >
          Percayakan seluruh momen berharga Anda kepada tim profesional kami.
          Dari konsep hingga pelaksanaan, kami siap menciptakan wedding
          elegan dan tak terlupakan.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          viewport={{ once: false }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-5"
        >

          {/* Primary Button */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="
              group relative overflow-hidden
              px-10 py-4 rounded-full
              bg-[#d4b15a]
              text-black
              font-medium
              transition duration-500
              hover:scale-105
              hover:shadow-[0_0_40px_rgba(212,177,90,0.35)]
            "
          >

            <span className="relative z-10">
              Konsultasi Sekarang
            </span>

            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition duration-500" />

          </a>

          {/* Secondary Button */}
          <a
            href="#gallery"
            className="
              px-10 py-4 rounded-full
              border border-[#d4b15a]/40
              text-[#f1df9b]
              hover:bg-[#d4b15a]
              hover:text-black
              transition duration-500
            "
          >
            Lihat Galeri
          </a>

        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{ once: false }}
          className="mt-14 text-neutral-500 text-sm tracking-[0.2em]"
        >
          ✦ Elegant • Luxury • Timeless ✦
        </motion.div>

      </div>

    </section>
  );
}