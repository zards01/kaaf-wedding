"use client";

import { motion } from "framer-motion";

const plannerOrganizerData = [
  {
    title: "Wedding Planner",
    subtitle: "Perencana Pernikahan",
    items: [
      "Menyusun konsep & tema pernikahan",
      "Menyusun anggaran (budgeting)",
      "Membantu memilih vendor (dekor, MUA, venue, catering, dll)",
      "Timeline persiapan dari awal sampai hari-H",
      "Konsultasi gaya, warna & personalisasi",
      "Koordinasi vendor dari jauh hari",
    ],
  },
  {
    title: "Wedding Organizer",
    subtitle: "On The Day",
    items: [
      "Menyusun rundown hari-H",
      "Mengatur jalannya acara",
      "Koordinasi vendor saat hari-H",
      "Mengatur flow tamu & keluarga",
      "Handle technical issue",
      "Memastikan acara berjalan lancar",
    ],
  },
];

const preparationItems = [
  "Whatsapp Group",
  "Koordinasi Vendor",
  "Pembuatan Rundown",
  "Pembuatan Guidebook",
  "1x Online Meeting",
  "1x Offline Meeting",
  "Teks-teks Acara",
];

const eventDayItems = [
  "1 MC Profesional",
  "1 Leader & Crew",
  "Controlling Vendor",
  "Report Event",
  "Akad / Holy Matrimony / Resepsi",
  "Property Event",
];

const pricingData = [
  {
    title: "MC & 3 WO Profesional Crew",
    oldPrice: "Rp 6.000.000",
    newPrice: "Rp 5.000.000",
  },
  {
    title: "MC & 4 WO Profesional Crew",
    oldPrice: "Rp 7.000.000",
    newPrice: "Rp 5.500.000",
  },
  {
    title: "MC & 5 WO Profesional Crew",
    oldPrice: "Rp 7.500.000",
    newPrice: "Rp 6.000.000",
  },
  {
    title: "MC & 7 WO Profesional Crew",
    oldPrice: "Rp 8.000.000",
    newPrice: "Rp 6.500.000",
  },
  {
    title: "3 Profesional WO Crew",
    oldPrice: "Rp 4.000.000",
    newPrice: "Rp 3.500.000",
  },
  {
    title: "5 Profesional WO Crew",
    oldPrice: "Rp 5.000.000",
    newPrice: "Rp 4.500.000",
  },
  {
    title: "7 Profesional WO Crew",
    oldPrice: "Rp 6.000.000",
    newPrice: "Rp 5.000.000",
  },
  {
    title: "Wedding Planner",
    oldPrice: null,
    newPrice: "Rp 3.500.000",
  },
];

export default function PlannerOrganizerSection() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Professional MC & WO Crew
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            On The Day Services
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
            Solusi lengkap untuk perencanaan hingga eksekusi hari pernikahan
            agar acara berjalan elegan, terstruktur, dan berkesan.
          </p>
        </motion.div>

        {/* Planner & Organizer */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {plannerOrganizerData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d4b15a]/40 transition"
            >
              <h3 className="font-heading text-3xl text-[#f5e7b2] mb-2">
                {item.title}
              </h3>

              <p className="text-[#d4b15a] mb-6">
                {item.subtitle}
              </p>

              <div className="space-y-3">
                {item.items.map((task, i) => (
                  <div
                    key={i}
                    className="text-neutral-300 flex gap-2"
                  >
                    <span className="text-[#d4b15a]">✓</span>
                    {task}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Preparation + Event Day */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          
          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="font-heading text-2xl text-[#d4b15a] mb-6">
              Preparation
            </h3>

            <div className="space-y-3">
              {preparationItems.map((item, i) => (
                <div key={i} className="text-neutral-300">
                  • {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <h3 className="font-heading text-2xl text-[#d4b15a] mb-6">
              The Day
            </h3>

            <div className="space-y-3">
              {eventDayItems.map((item, i) => (
                <div key={i} className="text-neutral-300">
                  • {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pricing */}
<div className="mb-20">
  <h2 className="font-heading text-4xl text-center text-[#f5e7b2] mb-10">
    Pricing Packages
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {pricingData.map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.02 }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="
          p-6
          rounded-3xl
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          hover:border-[#d4b15a]/40
          transition-all duration-300
          flex flex-col justify-between
          min-h-[250px]
        "
      >
        {/* Package Title */}
        <div>
          <h3 className="text-[#f5e7b2] text-xl font-semibold mb-4">
            {item.title}
          </h3>

          <div className="w-14 h-[2px] bg-[#d4b15a] rounded-full mb-5" />

          {/* Price */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {item.oldPrice && (
              <span className="text-neutral-500 line-through text-lg">
                {item.oldPrice}
              </span>
            )}

            <span className="text-[#d4b15a] text-3xl font-bold">
              {item.newPrice}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/6281234567890"
          target="_blank"
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="
            inline-flex
            justify-center
            items-center
            w-full
            py-3
            rounded-full
            bg-[#d4b15a]
            text-black
            font-semibold
            hover:bg-[#f5e7b2]
            transition-all duration-300
            shadow-lg shadow-[#d4b15a]/20
          "
        >
          Book This Package
        </motion.a>
      </motion.div>
    ))}
  </div>
</div>

        {/* Note */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="
            p-8
            rounded-3xl
            border border-[#d4b15a]/20
            bg-gradient-to-r from-[#d4b15a]/10 to-transparent
          "
        >
          <h3 className="font-heading text-2xl text-[#f5e7b2] mb-4">
            Important Note
          </h3>

          <p className="text-neutral-300 leading-8">
            Paket <span className="text-[#d4b15a] font-semibold">3 WO Crew</span> hanya
            direkomendasikan untuk acara intimate wedding atau lamaran.
            Untuk acara yang lebih besar, minimal menggunakan{" "}
            <span className="text-[#d4b15a] font-semibold">4 WO Crew</span>{" "}
            agar acara berjalan lebih maksimal.
          </p>
        </motion.div>
      </div>
    </section>
  );
}