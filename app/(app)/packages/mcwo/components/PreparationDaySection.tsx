"use client";

import { motion } from "framer-motion";

const preparation = [
  "Whatsapp Group",
  "Koordinasi Vendor",
  "Pembuatan Rundown",
  "Guidebook",
  "Online Meeting",
  "Offline Meeting",
];

const theDay = [
  "7 Jam Kerja",
  "Leader & Crew",
  "Control Vendor",
  "Report Event",
  "Akad / Resepsi",
];

export default function PreparationDaySection() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {[preparation, theDay].map((section, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h2 className="text-3xl text-[#f5e7b2] mb-6">
              {idx === 0 ? "Preparation" : "The Day"}
            </h2>

            {section.map((item) => (
              <div key={item} className="mb-3 text-neutral-300">
                ✓ {item}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}