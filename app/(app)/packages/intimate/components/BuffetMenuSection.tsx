"use client";

import { motion } from "framer-motion";

const buffetMenu = [
  {
    title: "Nasi",
    items: ["Nasi Putih", "Nasi Goreng"],
  },
  {
    title: "Sup",
    items: [
      "Sup Kimlo",
      "Sayur Asem Jakarta",
      "Soto Ayam Lamongan",
      "Sup Ayam Sayuran",
      "Sup Ayam Makaroni",
      "Sup Tahu Bakso",
    ],
  },
  {
    title: "Sayuran",
    items: [
      "Gado-Gado Siram",
      "Karedok",
      "Cah Brokoli",
      "Capcay Jawa",
      "Salad Sayur",
      "Asinan Betawi",
    ],
  },
  {
    title: "Pendamping",
    items: [
      "Sambal Goreng Kentang",
      "Mie Goreng Jakarta",
      "Bihun Goreng Sayur",
      "Kering Tempe",
      "Tahu Balado",
    ],
  },
  {
    title: "Ayam",
    items: [
      "Ayam Goreng Jakarta",
      "Ayam Goreng Mentega",
      "Ayam Fillet Asam Manis",
      "Ayam Bakar Padang",
      "Ayam Bakar Kecap",
    ],
  },
  {
    title: "Daging",
    items: [
      "Daging Empal Serundeng",
      "Dendeng Balado",
      "Daging Teriyaki",
      "Rendang Daging",
      "Gulai Daging",
    ],
  },
  {
    title: "Pelengkap",
    items: ["Kerupuk Udang", "Air Mineral", "Buah Potong", "Pudding", "Minuman Segar"],
  },
];

const inclusivePackage = [
  "Gubukan & menu after akad 50%",
  "Dessert (buah potong / pudding / kue)",
  "2 Waiters buffet utama",
  "Set meja catering & cover",
  "Alat catering lengkap",
  "Trash bag",
  "Test food 1-2 kali",
];

export default function BuffetMenuSection() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#d4b15a]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#d4b15a]/10 blur-[140px] rounded-full" />

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
            Buffet & Stall
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Pilihan Menu Catering
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
            Beragam pilihan menu buffet premium untuk melengkapi pengalaman pernikahan terbaik Anda.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-4 lg:grid-cols-3 gap-6 mb-16">
          {buffetMenu.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.0,
                delay: index * 0.00,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                p-6
                rounded-3xl
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-[#d4b15a]/40
                hover:shadow-[0_0_25px_rgba(212,177,90,0.15)]
              "
            >
              <h3 className="text-xl text-[#d4b15a] font-semibold mb-4">
                {category.title}
              </h3>

              <div className="w-12 h-[2px] bg-[#d4b15a] mb-4 rounded-full" />

              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="
                      text-neutral-300 text-sm flex items-start gap-2
                      transition-all duration-200
                      hover:text-[#f5e7b2]
                      hover:translate-x-1
                    "
                  >
                    <span className="text-[#d4b15a] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Inclusive Package */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.0 }}
          whileHover={{ scale: 1.01 }}
          className="
            p-8 md:p-10
            rounded-3xl
            border border-[#d4b15a]/20
            bg-gradient-to-r from-[#d4b15a]/10 to-transparent
            transition-all duration-300
            hover:shadow-[0_0_35px_rgba(212,177,90,0.12)]
          "
        >
          <h3 className="font-heading text-3xl text-[#f5e7b2] mb-6">
            Inclusive Package
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {inclusivePackage.map((item, i) => (
              <div
                key={i}
                className="
                  flex items-start gap-3 text-neutral-300
                  transition-all duration-200
                  hover:text-[#f5e7b2]
                  hover:translate-x-1
                "
              >
                <span className="text-[#d4b15a]">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}