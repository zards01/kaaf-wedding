"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description:
      "Kami mendengarkan konsep dan impian Anda untuk menciptakan wedding yang sempurna.",
  },
  {
    number: "02",
    title: "Perencanaan",
    description:
      "Menyusun timeline, konsep dekorasi, vendor, dan seluruh detail acara secara profesional.",
  },
  {
    number: "03",
    title: "Persiapan",
    description:
      "Seluruh kebutuhan dipersiapkan dengan detail dan koordinasi penuh oleh tim kami.",
  },
  {
    number: "04",
    title: "Hari Pernikahan",
    description:
      "Nikmati momen spesial Anda tanpa stress, kami handle seluruh jalannya acara.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 1, 0.5, 1],
          }}
          viewport={{ once: false }}
          className="text-center mb-16 md:mb-28"
        >

          <p className="uppercase tracking-[0.35em] md:tracking-[0.4em] text-[#d4b15a] text-[11px] md:text-sm mb-4">
            Proses Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b] leading-tight">
            Dari Konsep
            <br />
            Menjadi Kenyataan
          </h2>

        </motion.div>

        {/* ================= MOBILE TIMELINE ================= */}
        <div className="relative md:hidden">

          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 w-[1px] h-full bg-[#d4b15a]/20" />

          <div className="space-y-14">

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.25, 1, 0.5, 1],
                }}
                viewport={{ once: false }}
                className="flex gap-5 relative"
              >

                {/* Circle */}
                <div className="relative z-10">

                  <div
                    className="
                      w-12 h-12 rounded-full
                      border border-[#d4b15a]/30
                      bg-[#d4b15a]/10
                      backdrop-blur-xl
                      flex items-center justify-center
                      text-[#f1df9b]
                      text-sm
                      font-medium
                      shadow-[0_0_25px_rgba(212,177,90,0.12)]
                    "
                  >
                    {step.number}
                  </div>

                </div>

                {/* Content */}
                <div className="pb-2">

                  <div className="inline-block px-3 py-1 rounded-full border border-[#d4b15a]/20 text-[#d4b15a] text-[11px] mb-4">
                    Step {step.number}
                  </div>

                  <h3 className="text-2xl text-[#f1df9b] mb-4">
                    {step.title}
                  </h3>

                  <p className="text-neutral-400 leading-7 text-sm">
                    {step.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* ================= DESKTOP TIMELINE ================= */}
<div className="hidden md:block relative">

  {/* CENTER LINE */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-[#d4b15a]/20" />

  <div className="space-y-40">

    {steps.map((step, index) => {
      const isLeft = index % 2 === 0;

      return (
        <motion.div
          key={step.number}
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: index * 0.1,
          }}
          viewport={{ once: false }}
          className="relative flex items-center justify-center"
        >

          {/* ================= CONTENT ================= */}
          <div
            className={`
              w-[42%]
              ${isLeft ? "mr-auto pr-24 text-right" : "ml-auto pl-24 text-left"}
            `}
          >

            <div className="inline-block px-4 py-2 rounded-full border border-[#d4b15a]/30 text-[#d4b15a] text-sm mb-6">
              Step {step.number}
            </div>

            <h3 className="text-5xl text-[#f1df9b] leading-tight mb-6">
              {step.title}
            </h3>

            <p className="text-neutral-400 leading-9 text-lg">
              {step.description}
            </p>

          </div>

          {/* ================= CIRCLE ================= */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

            {/* line connector */}
            <div
              className={`
                absolute h-[1px] bg-[#d4b15a]/20 w-24
                ${isLeft ? "right-full" : "left-full"}
              `}
            />

            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              className="
                relative z-10
                w-32 h-32 rounded-full
                border border-[#d4b15a]/30
                bg-[#d4b15a]/10
                backdrop-blur-xl
                flex items-center justify-center
                text-[#f1df9b]
                text-4xl
                font-light
                shadow-[0_0_40px_rgba(212,177,90,0.15)]
              "
            >
              {step.number}
            </motion.div>

          </div>

        </motion.div>
      );
    })}

  </div>

</div>

      </div>

    </section>
  );
}