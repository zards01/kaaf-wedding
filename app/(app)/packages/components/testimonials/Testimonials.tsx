"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Raka & Syifa",
    role: "Paket All In Venue",
    review:
      "KAAF benar-benar membantu kami dari awal sampai hari pernikahan berjalan sempurna. Semua vendor terkoordinasi dengan sangat rapi.",
  },
  {
    name: "Dimas & Aurel",
    role: "Intimate Wedding",
    review:
      "Acara intimate kami terasa sangat hangat dan elegan. Dekorasi dan detail kecilnya benar-benar sesuai impian kami.",
  },
  {
    name: "Fahri & Nabila",
    role: "Wedding Organizer",
    review:
      "Tim KAAF sangat profesional saat hari H. Kami bisa menikmati momen tanpa stres karena semuanya sudah di-handle dengan baik.",
  },
];

export default function PackageTestimonials() {
  const [index, setIndex] = useState(0);

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
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4b15a]/10 blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Testimoni
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight">
            Cerita Bahagia
            <br />
            Dari Klien Kami
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative min-h-[320px]">

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
                rounded-[35px]
                border border-[#d4b15a]/20
                bg-white/5
                backdrop-blur-xl
                p-8 md:p-14
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 bg-[#d4b15a]/5" />

              {/* Quote */}
              <div className="absolute top-0 left-6 text-[110px] text-[#d4b15a]/10 leading-none font-serif">
                ”
              </div>

              {/* Review */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="
                  relative z-10
                  text-lg md:text-2xl
                  leading-relaxed
                  text-neutral-200
                  max-w-3xl mx-auto
                "
              >
                {active.review}
              </motion.p>

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <h3 className="font-heading text-2xl md:text-3xl text-[#f5e7b2]">
                  {active.name}
                </h3>

                <p className="uppercase tracking-[0.3em] text-[#d4b15a] text-sm mt-3">
                  {active.role}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-4 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                h-2 rounded-full transition-all duration-500
                ${
                  i === index
                    ? "w-12 bg-[#d4b15a]"
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