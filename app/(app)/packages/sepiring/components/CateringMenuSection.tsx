"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const packageData = {
  silver: [
    {
      title: "Set Dekorasi",
      items: [
        "Backdrop ukuran lebar maks 5 meter",
        "Set akad (6 kursi tifani / crossback & meja akad)",
        "Karpet permadani (khusus indoor) & Lighting",
        "Hand Bouquet",
        "Ring box",
        "Kotak amplop tamu",
        "Welcome signboard",
      ],
    },
    {
      title: "Dokumentasi",
      items: [
        "1 Fotografer",
        "1 Videografer",
        "1 Album kolase 10 sheet",
        "Teaser 1 menit + Clip 3-4 menit",
        "100-200 foto edit for sosmed",
        "Bonus cetak 1 foto + bingkai 17R",
        "All softcopy file (flashdisk)",
      ],
    },
    {
      title: "Professional MC",
      items: [
        "Rundown acara akad & resepsi",
        "Technical meeting",
        "Teks izin menikah",
        "Teks sambutan (kondisional)",
      ],
    },
  ],

  gold: [
    {
      title: "Set Dekorasi",
      items: [
        "Backdrop ukuran lebar maks 5 meter",
        "Set akad (6 kursi tifani / crossback & meja akad)",
        "Karpet permadani (khusus indoor) & Lighting",
        "Hand Bouquet",
        "Ring box",
        "Kotak amplop tamu",
        "Welcome signboard",
      ],
    },
    {
      title: "Dokumentasi",
      items: [
        "1 Fotografer",
        "1 Videografer",
        "1 Album kolase 10 sheet",
        "Teaser 1 menit + Clip 3-4 menit",
        "100-200 foto edit for sosmed",
        "Bonus cetak 1 foto + bingkai 17R",
        "All softcopy file (flashdisk)",
      ],
    },
    {
      title: "Professional MC",
      items: [
        "Rundown acara akad & resepsi",
        "Technical meeting",
        "Teks izin menikah",
        "Teks sambutan (kondisional)",
      ],
    },
    {
      title: "Professional WO Crew On The Day",
      items: [
        "Konsep & rundown acara",
        "Konsultasi pernikahan unlimited",
        "Technical meeting maksimal 2x",
        "Dresscode & HT",
        "Handbook event",
        "Handbouquet artificial",
      ],
    },
  ],

  platinum: [
    {
      title: "Set Dekorasi",
      items: [
        "Backdrop ukuran lebar maks 5 meter",
        "Set akad (6 kursi tifani / crossback & meja akad)",
        "Karpet permadani (khusus indoor) & Lighting",
        "Hand Bouquet",
        "Ring box",
        "Kotak amplop tamu",
        "Welcome signboard",
      ],
    },
    {
      title: "Dokumentasi",
      items: [
        "1 Fotografer",
        "1 Videografer",
        "1 Album kolase 10 sheet",
        "Teaser 1 menit + Clip 3-4 menit",
        "100-200 foto edit for sosmed",
        "Bonus cetak 1 foto + bingkai 17R",
        "All softcopy file (flashdisk)",
      ],
    },
    {
      title: "Professional MC",
      items: [
        "Rundown acara akad & resepsi",
        "Technical meeting",
        "Teks izin menikah",
        "Teks sambutan (kondisional)",
      ],
    },
    {
      title: "Professional WO Crew On The Day",
      items: [
        "Konsep & rundown acara",
        "Konsultasi pernikahan unlimited",
        "Technical meeting maksimal 2x",
        "Dresscode & HT",
        "Handbook event",
        "Handbouquet artificial",
      ],
    },
  ],
};

export default function IntimateDetailSection() {
  const [activePackage, setActivePackage] = useState<
    "silver" | "gold" | "platinum"
  >("silver");

  const packageTabs = [
    {
      key: "silver",
      label: "Silver Package",
    },
    {
      key: "gold",
      label: "Gold Package",
    },
    {
      key: "platinum",
      label: "Platinum Package",
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Detail Paket
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Pilih Detail Paket
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Lihat rincian lengkap dari setiap paket sepiring nusantara wedding
            sesuai kebutuhan acara spesial Anda.
          </p>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          {packageTabs.map((pkg) => (
            <button
              key={pkg.key}
              onClick={() =>
                setActivePackage(
                  pkg.key as "silver" | "gold" | "platinum"
                )
              }
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activePackage === pkg.key
                  ? "bg-[#d4b15a] text-black shadow-lg"
                  : "bg-white/5 text-white border border-white/10 hover:border-[#d4b15a]/40"
              }`}
            >
              {pkg.label}
            </button>
          ))}
        </div>

        {/* Detail Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePackage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {packageData[activePackage].map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  p-8
                  rounded-3xl
                  bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                  hover:border-[#d4b15a]/40
                  transition
                "
              >
                {/* Title */}
                <h3 className="font-heading text-2xl md:text-3xl text-[#d4b15a] mb-5">
                  {section.title}
                </h3>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-[#d4b15a] mb-6 rounded-full" />

                {/* Items */}
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-neutral-300 text-sm md:text-base flex gap-3 leading-7"
                    >
                      <span className="text-[#d4b15a]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}