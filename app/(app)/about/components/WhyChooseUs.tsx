"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Clock3,
  Users,
  Handshake,
} from "lucide-react";

const reasons = [
  {
    icon: Gem,
    title: "Eksekusi Premium",
    description:
      "Setiap detail acara dipersiapkan dengan standar tinggi untuk menciptakan pengalaman wedding yang elegan.",
  },
  {
    icon: Clock3,
    title: "Perencanaan Efisien",
    description:
      "Timeline yang rapi dan koordinasi yang terstruktur membuat persiapan pernikahan jauh lebih tenang.",
  },
  {
    icon: Users,
    title: "Vendor Terpercaya",
    description:
      "Kami bekerja sama dengan vendor terbaik untuk dekorasi, venue, catering, dokumentasi, dan hiburan.",
  },
  {
    icon: Handshake,
    title: "Pendampingan Penuh",
    description:
      "Mulai dari konsultasi awal hingga hari H, tim kami akan selalu hadir mendampingi setiap proses.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        
        {/* Left Content */}
        <div className="lg:sticky lg:top-24 h-fit">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4"
          >
            Kenapa KAAF
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight mb-6"
          >
            Alasan Banyak
            <br />
            Pasangan Memilih Kami
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 leading-8 max-w-lg"
          >
            Kami percaya pernikahan bukan hanya soal acara,
            tetapi tentang menciptakan pengalaman terbaik yang
            bisa dikenang seumur hidup.
          </motion.p>
        </div>

        {/* Right Cards */}
        <div className="space-y-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 10,
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  overflow-hidden
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#d4b15a]/10 blur-2xl transition duration-700" />

                <div className="relative z-10 flex gap-5">
                  
                  <div className="w-14 h-14 rounded-2xl bg-[#d4b15a]/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#d4b15a]" />
                  </div>

                  <div>
                    <h3 className="text-2xl text-[#f5e7b2] font-semibold mb-3">
                      {item.title}
                    </h3>

                    <p className="text-neutral-400 leading-7">
                      {item.description}
                    </p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}