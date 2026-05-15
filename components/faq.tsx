"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "Berapa lama sebelum acara sebaiknya melakukan booking?",
    answer:
      "Kami merekomendasikan booking minimal 6–12 bulan sebelum hari pernikahan agar persiapan dan ketersediaan jadwal lebih optimal.",
  },
  {
    question: "Apakah menyediakan layanan dekorasi?",
    answer:
      "Ya. Kami menyediakan dekorasi pernikahan lengkap, styling, rangkaian bunga, lighting, hingga setup ambience mewah.",
  },
  {
    question: "Apakah bisa menangani wedding destination?",
    answer:
      "Tentu. Kami berpengalaman menangani destination wedding dan private luxury ceremony di berbagai lokasi.",
  },
  {
    question: "Apakah tersedia paket wedding custom?",
    answer:
      "Ya. Setiap pernikahan memiliki konsep yang unik, sehingga paket dapat disesuaikan dengan kebutuhan, budget, dan impian Anda.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false }}
            className="lg:sticky top-32"
          >

            <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-5">
              FAQ
            </p>

            <h2 className="font-heading text-5xl md:text-6xl text-[#f1df9b] leading-tight">
              Pertanyaan
              <br />
              Yang Sering Ditanyakan
            </h2>

            <p className="mt-4 text-neutral-400 leading-8 max-w-lg">
              Semua hal yang perlu Anda ketahui mengenai layanan wedding,
              paket eksklusif, destination wedding, hingga bagaimana kami
              menciptakan momen tak terlupakan untuk setiap pasangan.
            </p>

            {/* Decorative Line */}
            <div className="mt-5 w-32 h-[1px] bg-[#d4b15a]/40" />

          </motion.div>

          {/* RIGHT FAQ */}
          <div className="space-y-3">

            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: false }}
                  className="
                    overflow-hidden
                    rounded-[10px]
                    border border-[#d4b15a]/20
                    bg-white/5
                    backdrop-blur-xl
                    hover:border-[#d4b15a]/40
                    transition duration-500
                  "
                >

                  {/* BUTTON */}
                  <button
                    onClick={() =>
                      setOpen(isOpen ? null : index)
                    }
                    className="
                      w-full flex items-center justify-between
                      px-3 py-1 text-left
                    "
                  >

                    <span className=" text-white pr-2">
                      {faq.question}
                    </span>

                    <div
                      className={`
                     
                        flex items-center justify-center
        
                        text-[#d4b15a]
                    
                        transition duration-300
                        ${isOpen ? "rotate-45" : ""}
                      `}
                    >
                      +
                    </div>

                  </button>

                  {/* CONTENT */}
                  <AnimatePresence initial={false}>

                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 1, 0.5, 1],
                        }}
                      >

                        <div className="px-8 pb-8 text-neutral-400 leading-8">

                          {faq.answer}

                        </div>

                      </motion.div>
                    )}

                  </AnimatePresence>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}