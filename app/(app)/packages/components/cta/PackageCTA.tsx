"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PackageCTA() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <Image
        src="/cta-wedding.jpg"
        alt="Wedding CTA"
        fill
        className="object-cover scale-105"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

      {/* Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4b15a]/20 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Small Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-6"
        >
          Wujudkan Hari Bahagiamu
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
          className="font-heading text-5xl md:text-7xl text-[#f5e7b2] leading-tight mb-8"
        >
          Siap Merancang
          <br />
          Pernikahan Impianmu?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-neutral-300 leading-8 mb-10"
        >
          Konsultasikan konsep pernikahan impianmu bersama tim KAAF Wedding
          Organizer. Dari intimate wedding hingga all-in package premium,
          semuanya kami siapkan dengan detail terbaik.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5"
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/628821458144"
            target="_blank"
            className="px-8 py-4 rounded-full bg-[#d4b15a] text-black font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-[#d4b15a]/30"
          >
            Konsultasi Sekarang
          </a>

          {/* Portfolio CTA */}
          <a
            href="/portfolio"
            className="px-8 py-4 rounded-full border border-[#d4b15a] text-[#f5e7b2] hover:bg-[#d4b15a] hover:text-black transition duration-300"
          >
            Lihat Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}