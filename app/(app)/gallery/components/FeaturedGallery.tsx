"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedGallery() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-5">
            Featured Wedding
          </p>

          <h2 className="font-heading text-5xl text-[#f5e7b2] leading-tight mb-8">
            Elegant
            <br />
            Luxury Celebration
          </h2>

          <p className="text-neutral-400 leading-8 max-w-lg">
            Dokumentasi wedding eksklusif dengan sentuhan elegan,
            intimate, dan cinematic yang menghadirkan pengalaman
            visual premium.
          </p>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative h-[650px] rounded-[40px] overflow-hidden"
        >
          <Image
            src="/gallery/0628-YON09788.jpg"
            alt="Featured Wedding"
            fill
            className="object-cover hover:scale-105 transition duration-[2000ms]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </motion.div>

      </div>

    </section>
  );
}