"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Camera,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const contactData = [
  {
    title: "WhatsApp",
    value: "088 2145 8144",
    icon: Phone,
    link: "https://wa.me/628821458144",
    cta: "Chat Sekarang",
    external: true,
  },
  {
    title: "Email",
    value: "kaafweddingorganizer@gmail.com",
    icon: Mail,
    link: "mailto:kaafweddingorganizer@gmail.com",
    cta: "Kirim Email",
    external: false,
  },
  {
    title: "Instagram",
    value: "@kaaf.weddingorganizer",
    icon: Camera,
    link: "https://instagram.com/kaaf.weddingorganizer",
    cta: "Kunjungi Instagram",
    external: true,
  },
  {
    title: "Lokasi",
    value: "Bekasi, Jawa Barat",
    icon: MapPin,
    link: "https://maps.google.com",
    cta: "Lihat Lokasi",
    external: true,
  },
];

export default function ContactInfo() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">

      {/* ================= GLOW ================= */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
          }}
          className="text-center mb-20"
        >

          <p
            className="
              uppercase
              tracking-[0.4em]
              text-[#d4b15a]
              text-sm
              mb-4
            "
          >
            Hubungi Kami
          </p>

          <h2
            className="
              font-heading
              text-4xl
              md:text-6xl
              text-[#f5e7b2]
              leading-tight
              mb-6
            "
          >
            Mari Wujudkan
            <br />
            Pernikahan Impian Anda
          </h2>

          <p
            className="
              text-neutral-400
              max-w-2xl
              mx-auto
              leading-8
            "
          >
            Konsultasikan kebutuhan wedding package,
            dekorasi, intimate wedding, hingga custom event
            bersama tim profesional KAAF Wedding Organizer.
          </p>

        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={
                  item.external
                    ? "noopener noreferrer"
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative block"
              >

                {/* ================= HOVER GLOW ================= */}
                <div
                  className="
                    absolute -inset-1
                    rounded-[32px]
                    bg-[#d4b15a]/10
                    blur-2xl
                    opacity-0
                    group-hover:opacity-100
                    transition duration-500
                  "
                />

                {/* ================= CARD ================= */}
                <div
                  className="
                    relative
                    h-full
                    p-8
                    rounded-[32px]
                    bg-white/5
                    border border-white/10
                    backdrop-blur-xl
                    hover:border-[#d4b15a]/40
                    hover:shadow-[0_0_30px_rgba(212,177,90,0.15)]
                    transition-all duration-300
                  "
                >

                  {/* ================= ICON ================= */}
                  <div
                    className="
                      w-16 h-16
                      rounded-2xl
                      bg-[#d4b15a]/10
                      flex items-center justify-center
                      mb-6
                      group-hover:bg-[#d4b15a]/20
                      transition
                    "
                  >
                    <Icon className="w-7 h-7 text-[#d4b15a]" />
                  </div>

                  {/* ================= TITLE ================= */}
                  <h3
                    className="
                      text-2xl
                      font-semibold
                      text-[#f5e7b2]
                      mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  {/* ================= VALUE ================= */}
                  <p
                    className="
                      text-neutral-400
                      text-sm
                      leading-7
                      mb-8
                      min-h-[56px]
                    "
                  >
                    {item.value}
                  </p>

                  {/* ================= CTA ================= */}
                  <div
                    className="
                      flex items-center gap-2
                      text-[#d4b15a]
                      text-sm
                      font-medium
                      group-hover:translate-x-1
                      transition duration-300
                    "
                  >
                    {item.cta}

                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                </div>

              </motion.a>
            );
          })}

        </div>

      </div>

    </section>
  );
}