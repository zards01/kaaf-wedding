"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Simple Package",
    price: "Rp 17.500.000",
    features: [
      "Dekorasi",
      "Dokumentasi",
      "Rundown Acara",
      "Technical Meeting",
      "Teks Acara",
      "Handbook Event",
      "Dresscode & HT",
    ],
    recommended: false,
  },
  {
    name: "Leviticus 11",
    price: "Rp 40.500.000",
    features: [
      "Venue 4 Jam",
      "Dekorasi",
      "Dokumentasi",
      "Professional MC",
      "3 WO On The Day",
      "Buffet 100 Pax",
      "Tax & Service Included",
    ],
    recommended: true,
  },
  {
    name: "Serenity Package",
    price: "Rp 38.500.000",
    features: [
      "Dekorasi",
      "MUA & Attire",
      "Dokumentasi",
      "Wedding Organizer",
      "Catering 200 Pax",
      "Entertainment",
      "MC Akad & Resepsi",
    ],
    recommended: false,
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

      <div className="relative z-10 max-w-7xl mx-auto">
        
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
            Pilihan Paket Intimate
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Pilih paket terbaik sesuai kebutuhan acara pernikahan Anda
            dengan konsep yang fleksibel dan layanan premium.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                scale: 1.03,
              }}
              className={`relative group ${
                pkg.recommended ? "lg:-mt-6" : ""
              }`}
            >
              {/* Recommended Badge */}
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="px-5 py-2 rounded-full bg-[#d4b15a] text-black text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Glow */}
              <div
                className={`absolute -inset-2 blur-2xl rounded-3xl transition duration-700 ${
                  pkg.recommended
                    ? "bg-[#d4b15a]/20 opacity-100"
                    : "bg-[#d4b15a]/10 opacity-0 group-hover:opacity-100"
                }`}
              />

              <div
                className={`relative h-full rounded-3xl p-8 backdrop-blur-xl transition duration-500 ${
                  pkg.recommended
                    ? "bg-[#d4b15a]/10 border-2 border-[#d4b15a] scale-105"
                    : "bg-white/5 border border-white/10 hover:border-[#d4b15a]/40"
                }`}
              >
                
                {/* Package Name */}
                <h3 className="font-heading text-3xl text-[#f5e7b2] mb-4">
                  {pkg.name}
                </h3>

                {/* Price */}
                <p className="text-2xl md:text-3xl font-bold text-[#d4b15a] mb-6">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleConsultation(pkg.name)}
                  className={`
                    w-full 
                    py-4 
                    rounded-full 
                    font-semibold
                    transition-all 
                    duration-300
                    ${
                      pkg.recommended
                        ? "bg-[#d4b15a] text-black hover:shadow-[0_0_30px_rgba(212,177,90,0.45)]"
                        : "bg-white text-black hover:bg-[#d4b15a]"
                    }
                  `}
                >
                  Konsultasi Paket
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-neutral-400 text-sm"
        >
          <p>*Price includes tax and service charges</p>
          <p className="mt-2">
            Additional: 1 Pax Rp 220.000 | MUA & Busana Rp 7.500.000
          </p>
        </motion.div>
      </div>
    </section>
  );
}