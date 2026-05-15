"use client";

import { motion } from "framer-motion";

const pricing = [
  ["MC + 3 WO Crew", "Rp 6.000.000", "Rp 5.000.000"],
  ["MC + 4 WO Crew", "Rp 6.500.000", "Rp 5.500.000"],
  ["MC + 5 WO Crew", "Rp 7.000.000", "Rp 6.000.000"],
  ["MC + 7 WO Crew", "Rp 8.000.000", "Rp 7.000.000"],
];

export default function CrewPricingSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-5xl text-[#f5e7b2] mb-12">
          Pricing
        </h2>

        <div className="rounded-3xl overflow-hidden border border-white/10">
          {pricing.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                backgroundColor: "rgba(212,177,90,0.08)",
              }}
              className="grid grid-cols-3 p-6 border-b border-white/10"
            >
              <div className="text-white">{item[0]}</div>
              <div className="line-through text-neutral-500">
                {item[1]}
              </div>
              <div className="text-[#d4b15a] font-bold">
                {item[2]}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center text-[#d4b15a] text-2xl">
          Wedding Planner: Rp 3.500.000
        </div>
      </div>
    </section>
  );
}