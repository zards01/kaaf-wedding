"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Berapa lama sebelum acara sebaiknya melakukan booking?",
    answer:
      "Kami merekomendasikan booking minimal 3–12 bulan sebelum acara agar timeline persiapan lebih matang dan vendor availability tetap aman.",
  },
  {
    question: "Apakah bisa custom package sesuai budget?",
    answer:
      "Tentu. Semua paket dapat disesuaikan dengan kebutuhan acara, konsep, jumlah tamu, hingga budget yang Anda miliki.",
  },
  {
    question: "Apakah melayani acara luar kota?",
    answer:
      "Ya, kami melayani wedding dan event di luar kota maupun destination event dengan tambahan biaya transportasi dan akomodasi.",
  },
  {
    question: "Bagaimana sistem pembayaran?",
    answer:
      "Booking diawali dengan pembayaran DP mulai dari 30% dan pelunasan dilakukan sesuai timeline yang telah disepakati.",
  },
  {
    question: "Apakah bisa konsultasi sebelum booking?",
    answer:
      "Tentu. Kami menyediakan konsultasi online maupun offline untuk membantu Anda menentukan paket terbaik sebelum melakukan booking.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/5 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
            className="lg:sticky top-32"
          >
            <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-5">
              FAQ
            </p>

            <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight">
              Frequently
              <br />
              Asked Questions
            </h2>

            <p className="mt-6 text-neutral-400 leading-8 max-w-lg">
              Temukan jawaban dari pertanyaan yang paling sering diajukan
              seputar wedding package, booking process, custom event,
              hingga layanan kami.
            </p>

            <div className="mt-8 w-32 h-[1px] bg-[#d4b15a]/30" />
          </motion.div>

          {/* RIGHT SIDE FAQ */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = open === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -3 }}
                  className="group relative"
                >
                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-[#d4b15a]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-3xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      hover:border-[#d4b15a]/30
                      transition-all duration-300
                    "
                  >
                    {/* Question */}
                    <button
                      onClick={() =>
                        setOpen(isOpen ? null : index)
                      }
                      className="
                        w-full
                        flex
                        items-center
                        justify-between
                        text-left
                        px-6
                        md:px-8
                        py-6
                      "
                    >
                      <span className="text-white text-lg pr-6 leading-relaxed">
                        {faq.question}
                      </span>

                      <div
                        className={`
                          flex items-center justify-center
                          w-10 h-10
                          rounded-full
                          bg-[#d4b15a]/10
                          text-[#d4b15a]
                          transition duration-300
                          ${isOpen ? "rotate-45" : ""}
                        `}
                      >
                        <Plus size={18} />
                      </div>
                    </button>

                    {/* Answer */}
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
                          <div className="px-6 md:px-8 pb-8 text-neutral-400 leading-8 border-t border-white/5">
                            <div className="pt-6">
                              {faq.answer}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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