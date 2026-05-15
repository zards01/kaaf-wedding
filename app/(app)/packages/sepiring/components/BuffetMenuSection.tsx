"use client";

import { motion } from "framer-motion";

const buffetPackages = [
  {
    title: "Paket Prasmanan A",
    price: "Rp 85.000 / pax",
    menus: [
      "Pilihan Nasi: Nasi Putih",
      "Pilihan Sayur lengkap",
      "Pilihan Sup lengkap",
      "Pilihan Lauk Ayam",
      "Menu Pendamping",
      "Pilihan Sambal",
      "Kerupuk, Buah Potong, Mineral",
    ],
  },
  {
    title: "Paket Prasmanan B",
    price: "Rp 100.000 / pax",
    menus: [
      "Pilihan Nasi: Nasi Putih / Nasi Liwet",
      "Pilihan Sayur lengkap",
      "Pilihan Sup lengkap",
      "Pilihan Lauk Ayam",
      "Pilihan Lauk Daging",
      "Pilihan Sambal",
      "Kerupuk, Buah Potong, Mineral",
    ],
  },
  {
    title: "Paket Prasmanan C",
    price: "Rp 115.000 / pax",
    menus: [
      "Pilihan Nasi: Nasi Putih / Nasi Liwet / Nasi Goreng",
      "Pilihan Sayur lengkap",
      "Pilihan Sup lengkap",
      "Pilihan Lauk Ayam",
      "Pilihan Lauk Daging",
      "Pilihan Lauk Ikan",
      "Kerupuk, Buah Potong, Mineral",
    ],
  },
];

const stalls = [
  { name: "Bakso", price: "Rp 1.250.000" },
  { name: "Siomay", price: "Rp 1.250.000" },
  { name: "Pempek", price: "Rp 1.250.000" },
  { name: "Tekwan", price: "Rp 1.250.000" },
  { name: "Ketoprak", price: "Rp 1.250.000" },
  { name: "Ketupat Sayur", price: "Rp 1.250.000" },
  { name: "Doclang", price: "Rp 1.250.000" },
  { name: "Sate Ayam", price: "Rp 1.250.000" },
  { name: "Sate Kambing", price: "Rp 1.750.000" },
  { name: "Soto Mie", price: "Rp 1.250.000" },
  { name: "Soto Makasar", price: "Rp 1.250.000" },
  { name: "Soto Banjar", price: "Rp 1.250.000" },
  { name: "Soto Kudus", price: "Rp 1.250.000" },
  { name: "Soto Bandung", price: "Rp 1.250.000" },
  { name: "Empal Gentong", price: "Rp 1.250.000" },
  { name: "Bubur Ayam Cianjur", price: "Rp 1.250.000" },
  { name: "Bubur Kacang Ijo", price: "Rp 1.250.000" },
  { name: "Kambing Guling", price: "Rp 5.000.000" },
  { name: "Nasi Kebuli Kambing", price: "Rp 1.500.000" },
  { name: "Rujak Buah", price: "Rp 750.000" },
  { name: "Buah Potong", price: "Rp 300.000" },
  { name: "Kue Tampah", price: "Rp 300.000" },
  { name: "Coffee & Tea Break", price: "Rp 750.000" },
  { name: "Puding Susu", price: "Rp 750.000" },
  { name: "Klappertart", price: "Rp 750.000" },
  { name: "Macaroni Schotle", price: "Rp 750.000" },
  { name: "Minuman Segar", price: "Rp 300.000" },
  { name: "Es Kelapa Muda", price: "Rp 750.000" },
  { name: "Es Cendol", price: "Rp 750.000" },
  { name: "Es Campur", price: "Rp 750.000" },
  { name: "Es Sekoteng", price: "Rp 750.000" },
  { name: "S’Kim Gelato", price: "Rp 625.000" },
];

const additionalNotes = [
  "Penambahan pax prasmanan mulai harga 85rb - 100rb - 115rb / pax",
  "Penambahan menu gubukan mulai harga 300rb / 50 pax",
  "Kelebihan pemakaian tempat dikenakan charge Rp 1.000.000 / jam",
  "Penambahan organ tunggal / akustik / full band dikenakan charge listrik Rp 500.000",
  "Rekomendasi waktu event: 09:00 - 12:00 | 15:00 - 18:00 | 19:00 - 22:00",
];

export default function BuffetMenuSection() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-[#d4b15a]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#d4b15a]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Catering Menu
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Paket Prasmanan
          </h2>

          <p className="text-neutral-400 max-w-3xl mx-auto leading-8">
            Pilihan menu catering premium untuk melengkapi hari spesial Anda.
          </p>
        </motion.div>

        {/* Buffet Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          {buffetPackages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-[#d4b15a]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:border-[#d4b15a]/40 transition">
                
                <h3 className="font-heading text-3xl text-[#f5e7b2] mb-3">
                  {pkg.title}
                </h3>

                <p className="text-[#d4b15a] font-bold text-2xl mb-6">
                  {pkg.price}
                </p>

                <div className="w-16 h-[2px] bg-[#d4b15a] mb-6 rounded-full" />

                <div className="space-y-3">
                  {pkg.menus.map((menu, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="text-neutral-300 text-sm flex gap-2"
                    >
                      <span className="text-[#d4b15a]">•</span>
                      {menu}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gubukan Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="font-heading text-4xl text-center text-[#f5e7b2] mb-10">
            Paket Gubukan (50 Pax)
          </h2>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
            <div className="grid md:grid-cols-2">
              {stalls.map((stall, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    backgroundColor: "rgba(212,177,90,0.08)",
                  }}
                  className="
                    flex justify-between items-center
                    px-6 py-4
                    border-b border-white/10
                    border-r md:odd:border-r border-white/10
                  "
                >
                  <span className="text-neutral-200">
                    {stall.name}
                  </span>

                  <span className="text-[#d4b15a] font-semibold">
                    {stall.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Notes */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            Note Additional
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {additionalNotes.map((note, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 5 }}
                className="
                  flex items-start gap-3
                  text-neutral-300
                  hover:text-[#f5e7b2]
                  transition-all duration-200
                "
              >
                <span className="text-[#d4b15a]">✓</span>
                <span>{note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}