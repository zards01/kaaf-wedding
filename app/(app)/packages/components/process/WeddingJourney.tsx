"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  ClipboardList,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Konsultasi Awal",
    description:
      "Diskusikan konsep pernikahan impian, budget, dan kebutuhan acara bersama tim kami.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Perencanaan Detail",
    description:
      "Kami bantu memilih venue, dekorasi, catering, hingga vendor terbaik sesuai kebutuhan.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Persiapan Final",
    description:
      "Technical meeting, finalisasi rundown, koordinasi keluarga, dan seluruh vendor.",
  },
  {
    icon: PartyPopper,
    number: "04",
    title: "Hari Bahagia",
    description:
      "Nikmati hari spesial Anda tanpa stres karena semua akan ditangani tim profesional kami.",
  },
];

export default function WeddingJourney() {
  return (
    <section className="relative py-28 px-6 bg-[#050505] overflow-hidden">
      
      {/* background glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Alur Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-[#f5e7b2] mb-6">
            Perjalanan Menuju Hari Bahagia
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Proses yang terstruktur untuk memastikan pernikahan Anda berjalan
            elegan, tenang, dan berkesan.
          </p>
        </motion.div>

        {/* desktop timeline */}
        <div className="hidden lg:grid grid-cols-4 gap-8 relative">
          
          {/* line */}
          <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4b15a]/40 to-transparent" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                className="relative text-center"
              >
                {/* circle */}
                <div className="mx-auto w-24 h-24 rounded-full border border-[#d4b15a]/40 bg-black flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(212,177,90,0.2)]">
                  <Icon className="w-10 h-10 text-[#d4b15a]" />
                </div>

                <p className="text-[#d4b15a] text-sm tracking-widest mb-3">
                  {step.number}
                </p>

                <h3 className="text-xl font-semibold text-[#f5e7b2] mb-4">
                  {step.title}
                </h3>

                <p className="text-neutral-400 text-sm leading-7">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* mobile timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="flex gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-[#d4b15a]/20 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#d4b15a]" />
                </div>

                <div>
                  <p className="text-[#d4b15a] text-sm mb-2">
                    {step.number}
                  </p>

                  <h3 className="text-lg font-semibold text-[#f5e7b2] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-neutral-400 text-sm leading-7">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}