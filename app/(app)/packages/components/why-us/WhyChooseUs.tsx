"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Users,
  Wallet,
  PhoneCall,
  Camera,
  CalendarHeart,
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Venue Terlengkap",
    description:
      "Pilihan venue lengkap di Jakarta, Depok, Tangerang Selatan, dan sekitarnya.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description:
      "Wedding planner, WO, MC, dekorasi hingga dokumentasi ditangani tim berpengalaman.",
  },
  {
    icon: Wallet,
    title: "Harga Transparan",
    description:
      "Semua paket memiliki detail harga yang jelas tanpa biaya tersembunyi.",
  },
  {
    icon: PhoneCall,
    title: "Konsultasi Fleksibel",
    description:
      "Gratis konsultasi online maupun offline sesuai kebutuhan calon pengantin.",
  },
  {
    icon: Camera,
    title: "Vendor Premium",
    description:
      "Dokumentasi, MUA, catering, dan entertainment berkualitas untuk hari spesial Anda.",
  },
  {
    icon: CalendarHeart,
    title: "Support Hari-H",
    description:
      "Tim kami memastikan acara berjalan lancar dari akad hingga resepsi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Gold Glow */}
      <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Kenapa Memilih Kami
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-[#f5e7b2] mb-5">
            Pernikahan Impian Tanpa Ribet
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Kami membantu Anda mewujudkan pernikahan yang elegan,
            terorganisir, dan penuh kenangan indah tanpa stres berlebihan.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="relative group">
                
                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-[#d4b15a]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#d4b15a]/20 flex items-center justify-center mb-6">
                    <Icon className="text-[#d4b15a]" size={28} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#f5e7b2] mb-4">
                    {item.title}
                  </h3>

                  <p className="text-neutral-400 leading-7 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}