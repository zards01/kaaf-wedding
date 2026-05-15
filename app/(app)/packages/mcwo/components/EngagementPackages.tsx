"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Gold",
    price: "Rp 5.500.000",
    features: [
      "Makeup & Hijab Do",
      "Dekorasi",
      "Photography",
      "Professional MC",
    ],
    recommended: false,
  },
  {
    name: "Platinum",
    price: "Rp 7.900.000",
    features: [
      "Makeup & Hijab Do",
      "Dekorasi Premium (4m)",
      "Photo & Video",
      "Professional MC",
      "Wedding Organizer",
    ],
    recommended: true,
  },
];

const decorationItems = [
  "Backdrop ukuran 3 meter",
  "Lighting",
  "Welcome Sign Akrilik",
  "2 Standing Flower",
  "Ring Box",
  "Nama di papan",
];

const documentationItems = [
  "1 Photographer",
  "Durasi 4 Jam",
  "File Edited",
  "File via Google Drive",
];

const additionalItems = [
  {
    title: "2 WO Crew",
    price: "Rp 1.500.000",
  },
  {
    title: "3 WO Crew",
    price: "Rp 2.000.000",
  },
  {
    title: "Backdrop per meter",
    price: "Rp 600.000",
  },
];

export default function EngagementPackages() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Engagement Package
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Intimate Engagement Package
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Paket lamaran eksklusif dengan konsep elegan untuk momen spesial 
            bersama keluarga tercinta.
          </p>
        </motion.div>

        {/* Package Cards */}
<div className="grid md:grid-cols-2 gap-8 mb-24">
  {packages.map((pkg, index) => (
    <motion.div
      key={pkg.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="relative group"
    >
      {/* Glow */}
      <div
        className={`absolute -inset-2 blur-2xl rounded-3xl transition duration-500 ${
          pkg.recommended
            ? "bg-[#d4b15a]/20 opacity-100"
            : "bg-[#d4b15a]/10 opacity-0 group-hover:opacity-100"
        }`}
      />

      {/* Badge */}
      {pkg.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-5 py-2 rounded-full bg-[#d4b15a] text-black text-sm font-semibold shadow-lg">
            Most Popular
          </span>
        </div>
      )}

      <div
        className={`relative h-full p-8 rounded-3xl backdrop-blur-xl flex flex-col ${
          pkg.recommended
            ? "bg-[#d4b15a]/10 border-2 border-[#d4b15a]"
            : "bg-white/5 border border-white/10 hover:border-[#d4b15a]/40"
        }`}
      >
        {/* Top Content */}
        <div className="flex-grow">
          <h3 className="font-heading text-4xl text-[#f5e7b2] mb-4">
            {pkg.name}
          </h3>

          <p className="text-[#d4b15a] text-3xl font-bold mb-6">
            {pkg.price}
          </p>

          <div className="w-20 h-[2px] bg-[#d4b15a] rounded-full mb-8" />

          <div className="space-y-4 mb-8">
            {pkg.features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="text-neutral-300 border-b border-white/5 pb-3"
              >
                ✓ {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            w-full
            py-4
            rounded-full
            text-center
            font-semibold
            transition-all duration-300
            ${
              pkg.recommended
                ? "bg-[#d4b15a] text-black hover:bg-[#f5e7b2]"
                : "border border-[#d4b15a]/40 text-[#f5e7b2] hover:bg-[#d4b15a] hover:text-black"
            }
          `}
        >
          Reserve This Package
        </motion.a>
      </div>
    </motion.div>
  ))}
</div>

        {/* Detail Sections */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          
          {/* Decoration */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="font-heading text-2xl text-[#d4b15a] mb-6">
              Dekorasi
            </h3>

            <ul className="space-y-3">
              {decorationItems.map((item, i) => (
                <li key={i} className="text-neutral-300">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Documentation */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="font-heading text-2xl text-[#d4b15a] mb-6">
              Dokumentasi
            </h3>

            <ul className="space-y-3">
              {documentationItems.map((item, i) => (
                <li key={i} className="text-neutral-300">
                  • {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Additional */}
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <h3 className="font-heading text-2xl text-[#d4b15a] mb-6">
              Additional
            </h3>

            <div className="space-y-4">
              {additionalItems.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-white/5 pb-3"
                >
                  <span className="text-neutral-300">
                    {item.title}
                  </span>

                  <span className="text-[#d4b15a] font-semibold">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="
            text-center
            p-6
            rounded-3xl
            border border-[#d4b15a]/20
            bg-gradient-to-r from-[#d4b15a]/10 to-transparent
          "
        >
          <p className="text-[#f5e7b2] text-lg font-medium">
            *Harga belum termasuk transport
          </p>
        </motion.div>
      </div>
    </section>
  );
}