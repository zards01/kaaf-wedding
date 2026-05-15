"use client";

import { motion } from "framer-motion";

const packageDetails = [
  {
    title: "Dekorasi",
    items: [
      "Dekorasi pelaminan fresh flower",
      "Spot light",
      "Kursi pelaminan",
      "Taman depan pelaminan",
      "Dekorasi meja penerima tamu",
      "Welcome gate penerima tamu",
      "Standing flower",
      "Backdrop photobooth / selfie corner",
    ],
  },
  {
    title: "MUA & Attire",
    items: [
      "Makeup akad / pemberkatan",
      "Retouch resepsi",
      "Busana akad",
      "Busana resepsi",
      "Hijab do / hair do",
      "Aksesoris akad & resepsi",
      "Makeup ibu",
      "Busana bapak",
    ],
  },
  {
    title: "Dokumentasi",
    items: [
      "1 Photographer",
      "1 Videographer",
      "Teaser 1 menit",
      "Clip video 3-4 menit",
      "Album kolase",
      "Edit foto up to 200",
      "Flashdisk dokumentasi",
    ],
  },
  {
    title: "Catering",
    items: [
      "Nasi putih",
      "Nasi goreng",
      "Aneka masakan ayam",
      "Aneka masakan daging",
      "Aneka sayuran",
      "Dessert pudding & kue",
      "Soft drink",
      "Buah potong",
      "Air mineral",
    ],
  },
  {
    title: "MC & WO",
    items: [
      "WO on the day",
      "Konsep & rundown acara",
      "Koordinasi vendor",
      "Meeting online",
      "Meeting offline",
      "Teks acara",
      "Dresscode & HT",
      "7 jam kerja",
    ],
  },
  {
    title: "Wedding Planner",
    items: [
      "Merencanakan acara",
      "Mencari vendor",
      "Booking vendor",
      "Pendampingan full acara",
      "Konsultasi 24 jam",
    ],
  },
  {
    title: "Sound & Entertainment",
    items: [
      "Singer",
      "Keyboard",
      "Sound system",
      "Mic wireless",
      "Operator sound",
    ],
  },
  {
    title: "Bonus Gratis",
    items: [
      "Janur",
      "Undangan digital",
      "Henna & fake nails",
      "Transport tim",
    ],
  },
];

export default function CateringMenuSection() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Detail Paket
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Rincian Item Paket All In
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
            Semua kebutuhan pernikahan sudah kami siapkan secara lengkap
            agar acara berjalan lebih praktis, elegan, dan tanpa ribet.
          </p>
        </motion.div>

        {/* Grid Detail */}
        <div className="grid md:grid-cols-2 gap-8">
          {packageDetails.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.0,
                delay: index * 0.00,
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
                p-8
                rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#d4b15a]/40
                hover:shadow-[0_0_30px_rgba(212,177,90,0.15)]
              "
            >
              <h3 className="text-2xl font-semibold text-[#d4b15a] mb-5">
                {section.title}
              </h3>

              <div className="w-16 h-[2px] bg-[#d4b15a] mb-6 rounded-full" />

              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-neutral-300 text-sm md:text-base flex items-start gap-3"
                  >
                    <span className="text-[#d4b15a] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}