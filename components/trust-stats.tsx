"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "250+",
    label: "Pasangan Bahagia",
  },
  {
    number: "500+",
    label: "Acara Pernikahan",
  },
  {
    number: "8+",
    label: "Tahun Pengalaman",
  },
  {
    number: "100%",
    label: "Kepuasan Klien",
  },
];

export default function TrustStats() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">

          <p className="uppercase tracking-[0.35em] md:tracking-[0.4em] text-[#d4b15a] text-[11px] md:text-sm mb-4">
            Pencapaian Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b] leading-tight">
            Dipercaya Oleh
            <br />
            Ratusan Pasangan
          </h2>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                y: -6,
              }}
              className="
                relative overflow-hidden
                rounded-[24px] md:rounded-[28px]
                border border-[#d4b15a]/20
                bg-white/5
                backdrop-blur-sm
                p-6 md:p-8
                text-center
                hover:border-[#d4b15a]/50
                transition duration-500
                group
              "
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#d4b15a]/5" />

              {/* Number */}
              <h3 className="relative z-10 text-3xl md:text-5xl font-bold text-[#d4b15a] mb-3 md:mb-4">

                <motion.span
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: false }}
                >
                  {item.number}
                </motion.span>

              </h3>

              {/* Label */}
              <p className="relative z-10 text-neutral-400 uppercase tracking-[0.15em] md:tracking-[0.2em] text-[11px] md:text-sm leading-5">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}