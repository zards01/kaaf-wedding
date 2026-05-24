"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24 md:pt-32">
      
      {/* Gold Glow */}
      <div className="absolute top-10 md:top-20 left-0 md:left-20 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#d4b15a]/10 blur-[100px] md:blur-[140px] rounded-full" />

      <div className="absolute bottom-10 md:bottom-20 right-0 md:right-20 w-[280px] md:w-[500px] h-[280px] md:h-[500px] bg-[#d4b15a]/10 blur-[100px] md:blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#d4b15a] text-xs md:text-sm mb-4"
          >
            Tentang KAAF
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl text-[#f5e7b2] leading-tight mb-5"
          >
            Merancang
            <br />
            Momen Bahagia
            <br />
            Menjadi Kenangan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 text-sm md:text-base leading-7 md:leading-8 max-w-xl mx-auto lg:mx-0 mb-8 md:mb-10"
          >
            KAAF Wedding Organizer hadir untuk membantu setiap pasangan
            mewujudkan pernikahan impian dengan perencanaan matang,
            eksekusi profesional, dan sentuhan elegan di setiap detail.
          </motion.p>

          {/* MINI STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-4 md:gap-6 max-w-xl mx-auto lg:mx-0"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#d4b15a]">
                300+
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm mt-2">
                Wedding Event
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#d4b15a]">
                5+
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm mt-2">
                Tahun Pengalaman
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#d4b15a]">
                50+
              </h3>
              <p className="text-neutral-400 text-xs md:text-sm mt-2">
                Partner Venue
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative order-1 lg:order-2"
        >
          <div className="relative h-[350px] sm:h-[450px] md:h-[650px] rounded-[25px] md:rounded-[40px] overflow-hidden shadow-2xl shadow-[#d4b15a]/20">
            <Image
              src="/about/logokaaf.png"
              alt="KAAF Wedding Organizer"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-4 left-4 md:-bottom-8 md:-left-8 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-xl">
            <p className="text-[#d4b15a] text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2">
              Sejak
            </p>

            <h3 className="text-2xl md:text-3xl font-heading text-white">
              2019
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
}