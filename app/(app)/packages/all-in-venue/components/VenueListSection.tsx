"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const venueData = {
  "Jakarta Selatan": [
    {
      venue: "Menara Hijau",
      pax300: "94.5jt",
      pax500: "106.5jt",
      pax1000: "136.5jt",
    },
    {
      venue: "Gedung BPMP",
      pax300: "83jt",
      pax500: "95jt",
      pax1000: "125jt",
    },
  ],

  "Jakarta Pusat": [
    {
      venue: "Sinergi Hall",
      pax300: "94.5jt",
      pax500: "106.5jt",
      pax1000: "136.5jt",
    },
  ],

  "Jakarta Timur": [
    {
      venue: "IS Plaza",
      pax300: "103.9jt",
      pax500: "115.9jt",
      pax1000: "145.9jt",
    },
  ],

  "Depok": [
    {
      venue: "Taman Kaldera",
      pax300: "82.9jt",
      pax500: "94.9jt",
      pax1000: "133.5jt",
    },
  ],

  "Tangerang Selatan": [
    {
      venue: "Puspitek",
      pax300: "83jt",
      pax500: "95jt",
      pax1000: "-",
    },
  ],
};

const tabs = Object.keys(venueData);

export default function VenueListSection() {
  const [activeTab, setActiveTab] = useState("Jakarta Selatan");

  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Pilihan Venue
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Pilih Lokasi Wedding Anda
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Harga sudah termasuk venue, catering, dan seluruh kebutuhan wedding package.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-3 rounded-full text-sm font-medium
                transition-all duration-300
                border border-white/10
                hover:scale-105
                hover:border-[#d4b15a]/50
                hover:shadow-[0_0_20px_rgba(212,177,90,0.2)]
                ${
                  activeTab === tab
                    ? "bg-[#d4b15a] text-black font-semibold shadow-[0_0_25px_rgba(212,177,90,0.3)]"
                    : "bg-white/5 text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-white/10 bg-[#d4b15a]/10">
                  <th className="p-5 text-[#f5e7b2]">Venue</th>
                  <th className="p-5 text-[#f5e7b2]">300 Pax</th>
                  <th className="p-5 text-[#f5e7b2]">500 Pax</th>
                  <th className="p-5 text-[#f5e7b2]">1000 Pax</th>
                </tr>
              </thead>

              <tbody>
                {venueData[activeTab as keyof typeof venueData].map(
                  (item, index) => (
                    <tr
                      key={index}
                      className="border-b border-white/5 hover:bg-white/5 transition"
                    >
                      <td className="p-5 text-white">{item.venue}</td>
                      <td className="p-5 text-neutral-300">{item.pax300}</td>
                      <td className="p-5 text-neutral-300">{item.pax500}</td>
                      <td className="p-5 text-neutral-300">{item.pax1000}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-neutral-500 text-sm">
            *Harga dapat berubah tergantung tanggal acara dan vendor tambahan
          </p>
        </div>
      </div>
    </section>
  );
}