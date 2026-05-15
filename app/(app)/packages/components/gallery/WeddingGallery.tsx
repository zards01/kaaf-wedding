"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function WeddingGallery() {
  const [index, setIndex] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // hanya tampilkan 4 image
  const visibleImages = [
    galleryImages[index],
    galleryImages[(index + 1) % galleryImages.length],
    galleryImages[(index + 2) % galleryImages.length],
    galleryImages[(index + 3) % galleryImages.length],
  ];

  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      {/* Gold glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

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
            Galeri Pernikahan
          </p>

          <h2 className="text-4xl md:text-5xl font-heading text-[#f5e7b2] mb-6">
            Momen Indah Yang Kami Wujudkan
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Setiap detail kami persiapkan dengan penuh perhatian agar
            menghasilkan momen pernikahan yang tak terlupakan.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[250px]">
          {visibleImages.map((image, i) => (
            <motion.div
              key={`${image}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer
                ${
                  i === 0
                    ? "md:col-span-2 md:row-span-2"
                    : i === 3
                    ? "md:col-span-2"
                    : ""
                }
              `}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={image}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={image}
                    alt={`Wedding Gallery ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-1000"
                  />
                </motion.div>
              </AnimatePresence>

              {/* overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-500" />

              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#d4b15a]/10 blur-xl transition duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <button className="px-8 py-4 rounded-full border border-[#d4b15a] text-[#f5e7b2] hover:bg-[#d4b15a] hover:text-black transition duration-300">
            Lihat Portfolio Lengkap
          </button>
        </motion.div>
      </div>
    </section>
  );
}