"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const gallery = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // SIDE IMAGES
  const sideImages = [
    gallery[(index + 1) % gallery.length],
    gallery[(index + 2) % gallery.length],
  ];

  return (
    <>
      {/* ================= GALLERY ================= */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Heading */}
          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
              Our Gallery
            </p>

            <h2 className="font-heading text-5xl md:text-6xl text-[#f1df9b] leading-tight">
              Beautiful
              <br />
              Wedding Moments
            </h2>

          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* MAIN IMAGE */}
            <div className="md:col-span-2 relative h-[520px] rounded-[36px] overflow-hidden group">

              <AnimatePresence mode="wait">

                <motion.img
                  key={gallery[index]}
                  src={gallery[index]}
                  onClick={() => setLightboxOpen(true)}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="
                    absolute inset-0
                    w-full h-full object-cover
                    cursor-pointer
                  "
                />

              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-10 left-10 z-10">

                <p className="uppercase tracking-[0.3em] text-[#d4b15a] text-sm mb-3">
                  Luxury Wedding
                </p>

                <h3 className="font-heading text-4xl text-white">
                  Timeless Moments
                </h3>

              </div>

            </div>

            {/* SIDE IMAGES */}
            <div className="flex flex-col gap-6">

              {sideImages.map((img, i) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: i * 0.1,
                  }}
                  onClick={() => {
                    setIndex((index + i + 1) % gallery.length);
                    setLightboxOpen(true);
                  }}
                  className="
                    relative h-[248px]
                    rounded-[30px]
                    overflow-hidden
                    cursor-pointer
                    group
                  "
                >

                  <img
                    src={img}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-500" />

                </motion.div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>

        {lightboxOpen && (
          <motion.div
            className="
              fixed inset-0 z-[999]
              bg-black/95
              flex items-center justify-center
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >

            <motion.img
              src={gallery[index]}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-2xl
              "
            />

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}