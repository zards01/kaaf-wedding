"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-6 overflow-hidden">
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4"
        >
          Contact Us
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-7xl text-[#f5e7b2] mb-6"
        >
          Let’s Create Your Dream Wedding
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-neutral-400 leading-8 max-w-2xl mx-auto mb-8"
        >
          Konsultasikan kebutuhan wedding, engagement, atau event spesial Anda bersama tim profesional kami.
        </motion.p>

        <a
          href="#contact-form"
          className="px-8 py-4 rounded-full bg-[#d4b15a] text-black font-semibold"
        >
          Book Consultation
        </a>
      </div>
    </section>
  );
}