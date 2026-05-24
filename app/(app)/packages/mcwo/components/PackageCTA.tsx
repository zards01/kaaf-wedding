"use client";

import { motion } from "framer-motion";

export default function PackageCTA() {
  const handleWhatsApp = () => {
    const message =
      "Halo, saya tertarik dengan layanan MC / WO / Engagement";
    
    window.open(
      `https://wa.me/628821458144?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-24 px-6 bg-black">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="
          max-w-5xl mx-auto
          p-12
          rounded-3xl
          bg-gradient-to-r
          from-[#d4b15a]/20
          to-transparent
          border border-[#d4b15a]/20
          text-center
        "
      >
        <h2 className="text-5xl text-[#f5e7b2] mb-6">
          Ready To Plan Your Event?
        </h2>

        <p className="text-neutral-300 mb-8">
          Konsultasikan kebutuhan acara Anda sekarang juga.
        </p>

        <button
          onClick={handleWhatsApp}
          className="
            px-10 py-4
            bg-[#d4b15a]
            text-black
            rounded-full
            font-semibold
          "
        >
          Konsultasi Sekarang
        </button>
      </motion.div>
    </section>
  );
}