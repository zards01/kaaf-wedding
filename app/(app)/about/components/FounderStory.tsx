"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FounderStory() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[600px] rounded-[40px] overflow-hidden shadow-2xl shadow-black/40">
            <Image
              src="/about/founder.png"
              alt="Founder KAAF Wedding Organizer"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Quote Card */}
          <div className="absolute -bottom-8 right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-xs">
            <p className="text-[#d4b15a] text-sm uppercase tracking-[0.3em] mb-3">
              Filosofi Kami
            </p>

            <p className="text-white text-sm leading-7">
              "Setiap pernikahan memiliki cerita unik, dan tugas kami adalah
              menjadikannya pengalaman terbaik."
            </p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Cerita Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight mb-8">
            Berawal Dari Passion,
            <br />
            Tumbuh Menjadi Kepercayaan
          </h2>

          <div className="space-y-6 text-neutral-300 leading-8">
            <p>
              KAAF Wedding Organizer lahir dari keinginan untuk membantu
              pasangan merayakan hari spesial mereka tanpa rasa stres.
            </p>

            <p>
              Kami percaya bahwa pernikahan bukan hanya tentang acara besar,
              tetapi tentang menciptakan pengalaman yang bermakna,
              penuh emosi, dan dikenang sepanjang hidup.
            </p>

            <p>
              Dengan pengalaman menangani berbagai konsep wedding mulai dari
              intimate wedding, all-in venue package, hingga acara skala besar,
              kami terus berkembang menjadi partner terpercaya bagi banyak pasangan.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <h3 className="font-heading text-2xl text-[#f5e7b2]">
              KAAF Wedding Organizer
            </h3>

            <p className="text-[#d4b15a] uppercase tracking-[0.3em] text-sm mt-2">
              Since 2019
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}