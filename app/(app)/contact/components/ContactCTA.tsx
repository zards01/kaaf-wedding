"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          max-w-5xl
          mx-auto
          p-12
          rounded-3xl
          text-center
          border border-[#d4b15a]/20
          bg-gradient-to-r from-[#d4b15a]/10 to-transparent
        "
      >
        <h2 className="text-4xl md:text-5xl text-[#f5e7b2] mb-6">
          Ready To Plan Your Special Day?
        </h2>

        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
          Hubungi kami sekarang dan konsultasikan acara impian Anda bersama tim profesional.
        </p>

        <a
          href="https://wa.me/628821458144"
          target="_blank"
          className="px-8 py-4 rounded-full bg-[#d4b15a] text-black font-semibold"
        >
          Contact via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}