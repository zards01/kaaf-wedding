"use client";

import { motion } from "framer-motion";

const additionalServices = [
  {
    name: "Janur Kuning",
    price: "Rp 350.000",
  },
  {
    name: "Kipas Blower",
    price: "Rp 700.000 / 2 item",
  },
  {
    name: "Tenda Non Full",
    price: "Rp 45.000 / m",
  },
  {
    name: "Tenda Full",
    price: "Rp 55.000 / m",
  },
  {
    name: "Tenda Bening",
    price: "Rp 65.000 / m",
  },
  {
    name: "Add Backdrop",
    price: "Rp 1.000.000",
  },
  {
    name: "Set Sofa Pelaminan",
    price: "Rp 800.000",
  },
  {
    name: "Karpet Rosepatle / Melamin",
    price: "Rp 50.000 / meter",
  },
  {
    name: "Panggung Palet",
    price: "Rp 50.000 / meter",
  },
  {
    name: "Mini Garden",
    price: "Rp 150.000 / meter",
  },
  {
    name: "Wood Step",
    price: "Rp 50.000 / 2 item",
  },
  {
    name: "Standing Flower",
    price: "Rp 250.000 / 2 item",
  },
  {
    name: "Bunga Aisle",
    price: "Rp 100.000 / 2 item",
  },
  {
    name: "Pagar VIP",
    price: "Rp 50.000 / meter",
  },
  {
    name: "Flower Arc",
    price: "Rp 250.000",
  },
  {
    name: "Stand Seserahan",
    price: "Rp 100.000 / 2 item",
  },
  {
    name: "Foto Gallery",
    price: "Rp 400.000",
  },
  {
    name: "Standing Foto",
    price: "Rp 50.000",
  },
  {
    name: "Welcome Sign Mirror",
    price: "Rp 450.000",
  },
  {
    name: "Kursi Crossback",
    price: "Rp 50.000 / item",
  },
  {
    name: "Kursi Tiffany",
    price: "Rp 50.000 / item",
  },
  {
    name: "Welcome Gate A",
    price: "Rp 2.000.000",
  },
  {
    name: "Welcome Gate B",
    price: "Rp 1.250.000",
  },
];

const additionalNotes = [
  "Penambahan pax prasmanan mulai harga Rp 85.000 - Rp 100.000 - Rp 115.000 / pax",
  "Penambahan menu gubukan mulai harga Rp 300.000 / 50 pax",
  "Kelebihan pemakaian tempat dikenakan charge Rp 1.000.000 / jam",
  "Penambahan orgen tunggal, akustik, full band dikenakan charge listrik Rp 500.000",
  "Rekomendasi waktu penggunaan event: 09:00 - 12:00, 15:00 - 18:00, 19:00 - 22:00",
];

export default function AdditionalServices() {
  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

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
            Additional Services
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Customize Your Wedding
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Tambahkan kebutuhan ekstra sesuai konsep acara
            pernikahan impian Anda.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {additionalServices.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.5,
                delay: index * 0.03,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
                hover:border-[#d4b15a]/40
                hover:shadow-[0_0_25px_rgba(212,177,90,0.15)]
                transition-all duration-300
              "
            >
              <h3 className="font-heading text-2xl text-[#f5e7b2] mb-3">
                {item.name}
              </h3>

              <div className="w-12 h-[2px] bg-[#d4b15a] rounded-full mb-4" />

              <p className="text-[#d4b15a] font-semibold text-lg">
                {item.price}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Note Additional */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.01 }}
          className="
            p-8 md:p-10
            rounded-3xl
            border border-[#d4b15a]/20
            bg-gradient-to-r from-[#d4b15a]/10 to-transparent
            hover:shadow-[0_0_35px_rgba(212,177,90,0.12)]
            transition-all duration-300
          "
        >
          <h3 className="font-heading text-3xl text-[#f5e7b2] mb-6">
            Additional Notes
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
        </motion.div>
      </div>
    </section>
  );
}