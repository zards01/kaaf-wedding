"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background */}
      <Image
        src="/gallery/hero.jpg"
        alt="Wedding Gallery"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" />

      {/* Glow */}
      <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[160px]" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="uppercase tracking-[0.5em] text-[#d4b15a] text-sm mb-6">
            Wedding Gallery
          </p>

          <h1 className="font-heading text-5xl md:text-8xl text-[#f5e7b2] leading-tight mb-8">
            Capturing
            <br />
            Timeless Moments
          </h1>

          <p className="text-neutral-300 max-w-2xl mx-auto leading-8 text-lg">
            Setiap momen memiliki cerita. Kami mengabadikan detail,
            emosi, dan kehangatan yang akan dikenang selamanya.
          </p>

        </motion.div>

      </div>

    </section>
  );
}