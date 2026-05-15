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
    value: "+62 812-3456-7890",
    icon: Phone,
    link: "https://wa.me/6281234567890",
    cta: "Chat Now",
    external: true,
  },
  {
    title: "Email",
    value: "hello@weddingplanner.com",
    icon: Mail,
    link: "mailto:hello@weddingplanner.com",
    cta: "Send Email",
    external: false,
  },
  {
    title: "Instagram",
    value: "@yourweddingplanner",
    icon: Camera,
    link: "https://instagram.com/yourweddingplanner",
    cta: "Visit Profile",
    external: true,
  },
  {
    title: "Office",
    value: "Bekasi, Indonesia",
    icon: MapPin,
    link: "https://maps.google.com",
    cta: "View Location",
    external: true,
  },
];

export default function ContactInfo() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Contact Us
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Let’s Plan Your Special Day
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Hubungi tim kami untuk konsultasi wedding package,
            venue, dekorasi, hingga custom event sesuai impian Anda.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.link}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="group relative block"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-1 rounded-3xl bg-[#d4b15a]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d4b15a]/40 hover:shadow-[0_0_30px_rgba(212,177,90,0.15)] transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-[#d4b15a]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4b15a]/20 transition">
                    <Icon className="w-6 h-6 text-[#d4b15a]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#f5e7b2] mb-3">
                    {item.title}
                  </h3>

                  {/* Value */}
                  <p className="text-neutral-400 text-sm leading-7 mb-6 min-h-[50px]">
                    {item.value}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#d4b15a] text-sm font-medium group-hover:translate-x-1 transition">
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