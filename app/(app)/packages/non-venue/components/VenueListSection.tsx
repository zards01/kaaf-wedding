"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Paket Dahlia",
    price: "Rp 49.500.000",
    features: [
      "Dekorasi",
      "MC & WO",
      "Wedding Planner",
      "MUA & Attire",
      "Dokumentasi",
      "Sound Entertainment",
      "Free Bonus",
    ],
  },
  {
    name: "Paket Tulip",
    price: "Rp 65.900.000",
    features: [
      "Dekorasi",
      "Catering 300 Pax",
      "MC & WO",
      "Wedding Planner",
      "MUA & Attire",
      "Dokumentasi",
      "Sound Entertainment",
      "Free Bonus",
    ],
  },
];

export default function NonVenuePackages() {
  const handleConsultation = (packageName: string) => {
    const message = `Halo, saya tertarik dengan ${packageName}. Bisa konsultasi lebih lanjut?`;

    const whatsappUrl = `https://wa.me/628821458144?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Wedding Package
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-5 leading-tight">
            Pilihan Paket Non Venue
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Pilih paket terbaik sesuai kebutuhan acara pernikahan Anda
            dengan layanan premium dan pengalaman terbaik.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="relative group"
            >
              {/* Glow Hover */}
              <div className="absolute -inset-2 bg-[#d4b15a]/10 blur-2xl rounded-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-[#d4b15a]/40 transition duration-500">
                
                {/* Package Name */}
                <h3 className="font-heading text-3xl md:text-4xl text-[#f5e7b2] mb-4">
                  {pkg.name}
                </h3>

                {/* Price */}
                <p className="text-3xl md:text-4xl font-bold text-[#d4b15a] mb-8">
                  {pkg.price}
                </p>

                {/* Divider */}
                <div className="w-20 h-[2px] bg-[#d4b15a] rounded-full mb-8" />

                {/* Features */}
                <div className="space-y-4 mb-10">
                  {pkg.features.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="text-neutral-300 border-b border-white/5 pb-3"
                    >
                      ✓ {item}
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  onClick={() => handleConsultation(pkg.name)}
                  className="
                    w-full 
                    py-4 
                    rounded-full 
                    bg-[#d4b15a] 
                    text-black 
                    font-semibold
                    transition-all 
                    duration-300
                    hover:shadow-[0_0_25px_rgba(212,177,90,0.35)]
                  "
                >
                  Konsultasi Paket
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}