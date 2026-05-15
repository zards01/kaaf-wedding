"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "300+",
    title: "Wedding Event",
    description:
      "Telah membantu ratusan pasangan mewujudkan hari spesial mereka.",
  },
  {
    number: "5+",
    title: "Tahun Pengalaman",
    description:
      "Berpengalaman menangani berbagai konsep pernikahan.",
  },
  {
    number: "50+",
    title: "Partner Venue",
    description:
      "Bekerja sama dengan venue terbaik di Jakarta, Depok, dan sekitarnya.",
  },
  {
    number: "98%",
    title: "Klien Puas",
    description:
      "Mayoritas klien merekomendasikan KAAF kepada keluarga dan teman.",
  },
];

export default function AboutStats() {
  return (
    <section className="relative py-28 px-6 bg-[#050505] overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4b15a]/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Perjalanan Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight">
            Angka Yang
            <br />
            Mewakili Kepercayaan
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                relative overflow-hidden
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                group
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#d4b15a]/10 blur-2xl transition duration-700" />

              <div className="relative z-10">
                <h3 className="text-5xl font-bold text-[#d4b15a] mb-4">
                  {item.number}
                </h3>

                <h4 className="text-xl font-semibold text-[#f5e7b2] mb-3">
                  {item.title}
                </h4>

                <p className="text-neutral-400 leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}