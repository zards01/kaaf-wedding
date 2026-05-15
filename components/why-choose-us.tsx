"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Tim Profesional",
    description:
      "Tim berpengalaman yang siap menangani setiap detail acara dengan sempurna.",
  },
  {
    title: "Konsep Eksklusif",
    description:
      "Setiap wedding dirancang secara personal dan elegan sesuai impian Anda.",
  },
  {
    title: "Vendor Premium",
    description:
      "Bekerja sama dengan vendor terbaik untuk hasil mewah dan berkualitas.",
  },
  {
    title: "Pelayanan Full Service",
    description:
      "Dari perencanaan hingga hari acara, semua kami handle secara profesional.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/5 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: false }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Kenapa Memilih Kami
          </p>

          <h2 className="font-heading text-5xl md:text-6xl text-[#f1df9b] leading-tight">
            Pernikahan Mewah
            <br />
            Dengan Sentuhan Elegan
          </h2>

        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              viewport={{ once: false }}
              whileHover={{
                y: -10,
              }}
              className="
                group relative overflow-hidden
                rounded-[20px]
                border border-[#d4b15a]/20
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all duration-500
                hover:border-[#d4b15a]/60
                hover:shadow-[0_0_50px_rgba(212,177,90,0.15)]
              "
            >

              {/* Glow Hover */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#d4b15a]/10 rounded-full blur-3xl group-hover:scale-150 transition duration-700" />

              {/* Number */}
              <div className="text-5xl font-light text-[#d4b15a]/20 mb-8">
                0{index + 1}
              </div>

              {/* Title */}
              <h3 className="text-2xl text-[#f1df9b] mb-4">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-neutral-400 leading-8">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}