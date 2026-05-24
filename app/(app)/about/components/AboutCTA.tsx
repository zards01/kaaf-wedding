"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/about/cta-bg.jpg"
          alt="Consultation"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/40" />
      </div>

      {/* Gold Glow */}
      <div className="absolute top-10 left-10 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[120px]" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-5">
            Siap Memulai?
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b] leading-tight mb-6">
            Wujudkan Acara Impian
            <br />
            Bersama Kami
          </h2>

          <p className="text-neutral-300 max-w-2xl mx-auto leading-8 mb-10">
            Dari intimate wedding hingga luxury celebration,
            kami siap membantu mewujudkan acara yang elegan,
            berkesan, dan tak terlupakan.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <Link
            href="/contact"
            className="
              px-8 py-4 rounded-full
              bg-[#d4b15a]
              text-black
              font-semibold
              hover:scale-105
              transition duration-300
            "
          >
            Konsultasi Sekarang
          </Link>

          <Link
            href="/gallery"
            className="
              px-8 py-4 rounded-full
              border border-[#d4b15a]
              text-[#f1df9b]
              hover:bg-[#d4b15a]
              hover:text-black
              transition duration-300
            "
          >
            Lihat Portfolio
          </Link>
        </motion.div>

      </div>
    </section>
  );
}