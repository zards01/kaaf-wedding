"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Aldo & Vanessa",
    role: "Pernikahan Luxury",
    review:
      "KAAF membuat hari pernikahan kami terasa begitu magis dan intim. Setiap detail dipersiapkan dengan sempurna.",
  },
  {
    name: "Richard & Felicia",
    role: "Private Wedding",
    review:
      "Dekorasi, koordinasi, dan suasana yang dihadirkan benar-benar di luar ekspektasi kami. Pengalaman yang sangat mewah dan berkesan.",
  },
  {
    name: "Kevin & Natasha",
    role: "Destination Wedding",
    review:
      "Profesional, elegan, dan tak terlupakan. KAAF berhasil mewujudkan wedding impian kami menjadi kenyataan.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const active = testimonials[index];

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="mb-16 md:mb-20"
        >

          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-[11px] md:text-sm mb-4">
            Testimoni
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b] leading-tight">
            Apa Kata
            <br />
            Pasangan Kami
          </h2>

        </motion.div>

        {/* Testimonial Card */}
        <div className="relative min-h-[340px] md:min-h-[320px]">

          <AnimatePresence mode="wait">

            <motion.div
              key={active.name}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="
                relative overflow-hidden
                rounded-[28px] md:rounded-[40px]
                border border-[#d4b15a]/20
                bg-white/5
                backdrop-blur-xl
                p-8 md:p-16
              "
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-[#d4b15a]/5" />

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                className="
                  text-[90px] md:text-[120px]
                  absolute top-0 left-4 md:left-8
                  text-[#d4b15a]/10
                  font-serif
                  leading-none
                "
              >
                ”
              </motion.div>

              {/* Review */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="
                  relative z-10
                  text-lg md:text-2xl
                  leading-relaxed md:leading-relaxed
                  text-neutral-200
                  max-w-3xl mx-auto
                "
              >
                {active.review}
              </motion.p>

              {/* Client */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 md:mt-12"
              >

                <h3 className="font-heading text-2xl md:text-3xl text-[#f1df9b]">
                  {active.name}
                </h3>

                <p className="uppercase tracking-[0.25em] md:tracking-[0.3em] text-[#d4b15a] text-[11px] md:text-sm mt-3">
                  {active.role}
                </p>

              </motion.div>

            </motion.div>

          </AnimatePresence>

        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 md:gap-4 mt-8 md:mt-10">

          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 rounded-full transition-all duration-500
                ${
                  i === index
                    ? "w-10 md:w-12 bg-[#d4b15a]"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }
              `}
            />
          ))}

        </div>

      </div>

    </section>
  );
}