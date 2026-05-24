"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import GalleryLightbox from "./GalleryLightbox";

interface GalleryItem {
  image: string;
  category: string;
}

interface Props {
  images: GalleryItem[];
}

export default function MasonryGallery({
  images,
}: Props) {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <section className="relative py-32 px-6 bg-black overflow-hidden">

        {/* ================= GLOW ================= */}
        <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[160px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[160px]" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ================= HEADING ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
              Portfolio Gallery
            </p>

            <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight">
              Every Frame
              <br />
              Tells A Story
            </h2>
          </motion.div>

          {/* ================= MASONRY ================= */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">

            {images.map((item, index) => (
              <motion.div
                key={`${item.image}-${index}`}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                }}
                onClick={() => {
                  setSelectedIndex(index);
                  setLightboxOpen(true);
                }}
                className="
                  relative
                  overflow-hidden
                  rounded-[32px]
                  group
                  break-inside-avoid
                  cursor-pointer
                "
              >

                <div
                  className={`
                    relative w-full overflow-hidden
                    ${
                      index % 3 === 0
                        ? "h-[620px]"
                        : index % 2 === 0
                        ? "h-[420px]"
                        : "h-[520px]"
                    }
                  `}
                >

                  {/* ================= IMAGE ================= */}
                  <Image
                    src={item.image}
                    alt={`Wedding ${index + 1}`}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition duration-[2000ms]
                    "
                  />

                  {/* ================= OVERLAY ================= */}
                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/60
                      via-black/10
                      to-transparent
                      opacity-70
                      group-hover:opacity-100
                      transition duration-700
                    "
                  />

                  {/* ================= HOVER GLOW ================= */}
                  <div
                    className="
                      absolute inset-0
                      opacity-0
                      group-hover:opacity-100
                      bg-[#d4b15a]/10
                      blur-2xl
                      transition duration-700
                    "
                  />

                  {/* ================= TEXT ================= */}
                  <div
                    className="
                      absolute bottom-8 left-8
                      translate-y-10
                      opacity-0
                      group-hover:translate-y-0
                      group-hover:opacity-100
                      transition duration-500
                    "
                  >
                    <p className="uppercase tracking-[0.3em] text-[#d4b15a] text-xs mb-3">
                      {item.category}
                    </p>

                    <h3 className="text-2xl text-white font-heading">
                      Timeless Moment
                    </h3>
                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}
      <GalleryLightbox
        images={images.map((item) => item.image)}
        index={selectedIndex}
        setIndex={setSelectedIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}