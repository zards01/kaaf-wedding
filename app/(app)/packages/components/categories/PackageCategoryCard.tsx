"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { packageCategories } from "../../data/packageCategories";

export default function PackageCategories() {
  const router = useRouter();

  const handleDetail = (id: string) => {
    router.push(`/packages/${id}`);
  };

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Paket Pernikahan
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-[#f5e7b2] mb-5">
            Pilih Paket Pernikahan Impian Anda
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Berbagai pilihan paket eksklusif mulai dari venue,
            intimate wedding, catering partnership,
            hingga layanan tambahan premium untuk hari spesial Anda.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* ================= FEATURED CARD (TIDAK DIUBAH) ================= */}
          {packageCategories
            .filter((item) => item.id === "all-in-venue")
            .map((item) => {
              const imageSrc =
                item.image?.trim()
                  ? item.image
                  : "/packages/default.jpg";

              return (
                <div key={item.id} className="relative group">
                  
                  <div className="absolute -inset-4 bg-[#d4b15a]/15 blur-3xl rounded-[40px] opacity-50 group-hover:opacity-80 transition duration-700" />

                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ y: -8, scale: 1.01 }}
                    className="relative h-[600px] md:h-[650px] rounded-3xl overflow-hidden border border-[#d4b15a]/30 shadow-2xl"
                  >
                    <Image
                      src={imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-1000"
                    />

                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-black/10" />

                    <div className="absolute -top-20 right-10 w-72 h-72 bg-[#d4b15a]/20 blur-[120px] rounded-full opacity-60 group-hover:opacity-90 transition duration-700" />

                    <div className="absolute top-6 left-6 z-20">
                      <span className="px-5 py-2 rounded-full bg-gradient-to-r from-yellow-300 via-[#d4b15a] to-yellow-500 text-black font-bold text-sm uppercase tracking-wider shadow-lg shadow-yellow-500/40 animate-pulse">
                        ⭐ Rekomendasi Full Package
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 p-10 z-10 max-w-xl">
                      <h3 className="text-4xl md:text-5xl font-bold text-[#f5e7b2] mb-4">
                        {item.title}
                      </h3>

                      <p className="text-neutral-200 leading-8 mb-6">
                        {item.description}
                      </p>

                      <button
                        onClick={() => handleDetail(item.id)}
                        className="px-7 py-3 rounded-full bg-[#d4b15a] text-black font-semibold hover:scale-105 transition cursor-pointer"
                      >
                        Lihat Detail Paket
                      </button>
                    </div>
                  </motion.div>
                </div>
              );
            })}

          {/* ================= NORMAL CARDS (UPDATED) ================= */}
          <div className="grid md:grid-cols-2 gap-8">
            {packageCategories
              .filter((item) => item.id !== "all-in-venue")
              .map((item, index) => {
                const imageSrc =
                  item.image?.trim()
                    ? item.image
                    : "/packages/default.jpg";

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -10 }}
                    className="group rounded-3xl overflow-hidden border border-white/10 bg-[#111111] shadow-xl hover:border-[#d4b15a]/30 transition"
                  >
                    
                    {/* IMAGE ONLY */}
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-1000"
                      />
                    </div>

                    {/* TEXT BELOW IMAGE */}
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold text-[#f5e7b2] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-neutral-400 text-sm leading-7 mb-6">
                        {item.description}
                      </p>

                      {/* BUTTON */}
                      <button
                        onClick={() => handleDetail(item.id)}
                        className="px-6 py-3 rounded-full bg-[#d4b15a] text-black font-semibold text-sm hover:scale-105 hover:bg-[#e7c86a] transition cursor-pointer"
                      >
                        Lihat Detail Paket
                      </button>
                    </div>
                  </motion.div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}