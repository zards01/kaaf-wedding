"use client";
import { motion } from "framer-motion";
export default function PackageCTA() {
  return (
    <section className="py-24 px-6 bg-black text-center">
      <h2 className="font-heading text-5xl text-[#f5e7b2] mb-6">
        Konsultasikan Wedding Impianmu
      </h2>

      <p className="text-neutral-400 mb-8">
        Hubungi tim KAAF sekarang untuk mendapatkan penawaran terbaik.
      </p>
<div>
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