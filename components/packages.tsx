"use client";

import { motion } from "framer-motion";

const packages = [
  {
    title: "Paket Silver",
    price: "15 Jt",
    description:
      "Paket pernikahan intimate elegan dengan layanan utama yang lengkap.",
    recommended: false,
  },
  {
    title: "Paket Gold",
    price: "35 Jt",
    description:
      "Pengalaman pernikahan mewah dengan dekorasi premium dan koordinasi profesional.",
    recommended: true,
  },
  {
    title: "Paket Platinum",
    price: "75 Jt",
    description:
      "Pernikahan eksklusif all-inclusive dengan full management dan pelayanan terbaik.",
    recommended: false,
  },
];

export default function Packages() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[120px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/5 blur-[120px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.8em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="uppercase text-[#d4b15a] text-sm mb-4"
          >
            Paket Pernikahan
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.25, 1, 0.5, 1],
            }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-[#f1df9b] leading-tight"
          >
            Dirancang Untuk
            <br />
            Hari Spesial Anda
          </motion.h2>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {packages.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.92,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.0,
                delay: index * 0.0,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[15px] p-10 backdrop-blur-sm border transition-all duration-700 hover:shadow-[0_0_60px_rgba(212,177,90,0.15)] ${
                item.recommended
                  ? "border-[#d4b15a] bg-[#d4b15a]/10 md:scale-105"
                  : "border-[#d4b15a]/20 bg-white/5 hover:border-[#d4b15a]/60"
              }`}
            >

              {/* Animated Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 0,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-[#d4b15a]/10 rounded-full blur-3xl"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 rounded-[10px] bg-[#d4b15a]/0 group-hover:bg-[#d4b15a]/5 transition duration-700" />

              <div className="relative z-10">

                {/* Recommended Badge */}
                {item.recommended && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.0,
                      delay: 0.0,
                    }}
                    viewport={{ once: true }}
                    className="inline-block mb-6 px-4 py-2 rounded-full bg-[#d4b15a] text-black text-xs uppercase tracking-[0.3em] font-semibold"
                  >
                    Rekomendasi
                  </motion.div>
                )}

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.0,
                    delay: 0.0 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="font-heading text-3xl text-[#f1df9b] mb-6"
                >
                  {item.title}
                </motion.h3>

                {/* Price */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.0,
                    delay: 0.0 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="flex items-end gap-2 mb-8"
                >

                  <span className="text-5xl font-light text-white">
                    {item.price}
                  </span>

                  <span className="text-[#d4b15a] mb-2">
                    Mulai Dari
                  </span>

                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.0,
                    delay: 0.0 + index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="text-neutral-300 leading-8 mb-10"
                >
                  {item.description}
                </motion.p>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.0,
                    delay: 0.0 + index * 0.0,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="w-full py-4 rounded-full border border-[#d4b15a] text-[#f1df9b] hover:bg-[#d4b15a] hover:text-black transition duration-300"
                >
                  Pilih Paket
                </motion.button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}