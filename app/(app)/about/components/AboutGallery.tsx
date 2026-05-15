"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const gallery = [
  "/about/gallery1.jpg",
  "/about/gallery2.jpg",
  "/about/gallery3.jpg",
  "/about/gallery4.jpg",
];

export default function AboutGallery() {
  return (
    <section className="relative py-28 px-6 bg-black overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[120px]" />

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
            Galeri Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b]">
            Momen Terbaik
            <br />
            Yang Pernah Kami Ciptakan
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="relative h-[350px] rounded-3xl overflow-hidden group"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}