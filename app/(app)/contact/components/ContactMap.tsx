"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function ContactMap() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Visit Us
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Our Location
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Kunjungi kantor kami untuk konsultasi langsung dan diskusikan
            wedding impian Anda bersama tim profesional kami.
          </p>
        </motion.div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          className="mb-10 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-2xl bg-[#d4b15a]/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#d4b15a]" />
            </div>
          </div>

          <h3 className="text-2xl text-[#f5e7b2] mb-3">
            KAAF Wedding Organizer Office
          </h3>

          <p className="text-neutral-400 leading-8 mb-6">
            Bekasi, West Java, Indonesia <br />
            Available by appointment only
          </p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d4b15a] text-black font-semibold hover:scale-105 transition"
          >
            Open Google Maps
            <Navigation className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="group relative"
        >
          {/* Glow */}
          <div className="absolute -inset-2 bg-[#d4b15a]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
            <iframe
              src="https://www.google.com/maps/embed"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}