"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const backdrops = [
  {
    name: "B1",
    size: "3,4 x 2,65 m",
    image: "/backdrops/B1.jpg",
  },
  {
    name: "B2",
    size: "2,5 x 2,3 m",
    image: "/backdrops/B2.jpg",
  },
  {
    name: "B3",
    size: "3,8 x 2,5 m",
    image: "/backdrops/B3.jpg",
  },
  {
    name: "B4",
    size: "3,6 x 2,5 m",
    image: "/backdrops/B4.jpg",
  },
  {
    name: "B5",
    size: "4,7 x 2,4 m",
    image: "/backdrops/B5.jpg",
  },
  {
    name: "B6",
    size: "3,6 x 2,5 m",
    image: "/backdrops/B6.jpg",
  },
  {
    name: "B7",
    size: "5 x 2,5 m",
    image: "/backdrops/B7.jpg",
  },
  {
    name: "B8",
    size: "5 x 2,5 m",
    image: "/backdrops/B8.jpg",
  },
];

const upgrades = [
  {
    name: "AB1",
    price: "+1,5 Jt",
    size: "6 x 2,65 m",
    image: "/backdrops/AB1.jpg",
  },
  {
    name: "AB2",
    price: "+1,2 Jt",
    size: "4,7 x 2,4 m",
    image: "/backdrops/AB2.jpg",
  },
];

export default function BackdropTypes() {
  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Decoration Options
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Type Backdrop
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Pilih backdrop terbaik sesuai konsep intimate wedding impianmu.
          </p>
        </motion.div>

        {/* Regular Backdrops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {backdrops.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -10,
              }}
              className="group"
            >
              <div className="relative h-[280px] rounded-3xl overflow-hidden border border-white/10">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              <div className="mt-4 text-center">
                <h3 className="font-heading text-2xl text-[#f5e7b2]">
                  {item.name}
                </h3>
                <p className="text-neutral-400 text-sm mt-1">
                  ukuran {item.size}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Upgrade Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl text-[#d4b15a] mb-4">
            Upgrade Backdrop
          </h2>
          <p className="text-neutral-400">
            Pilihan backdrop premium dengan ukuran lebih besar
          </p>
        </motion.div>

        {/* Upgrade Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upgrades.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
            >
              <div className="relative h-[300px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="font-heading text-3xl text-[#f5e7b2] mb-2">
                  {item.name}
                </h3>

                <p className="text-[#d4b15a] font-semibold text-lg mb-2">
                  {item.price}
                </p>

                <p className="text-neutral-400">
                  ukuran {item.size}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}