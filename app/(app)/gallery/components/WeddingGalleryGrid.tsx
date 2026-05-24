"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
"/gallery/0608-YON03140.jpg",
"/gallery/0628-YON09788.jpg",
"/gallery/0631-DSC00834.jpg",
"/gallery/0631-YON05299.jpg",
"/gallery/0649-YON00241.jpg",
"/gallery/0732-YON00447.jpg",
"/gallery/0737-YON00487.jpg",
"/gallery/0808-YON00655.jpg",
"/gallery/0814-HAN02622.jpg",
"/gallery/0826-YON00746.jpg",
"/gallery/0832-YON04102 (1).jpg",
"/gallery/0833-YON06720.jpg",
"/gallery/0848-DSC09086.jpg",
"/gallery/0901-YON01034.jpg",
"/gallery/0903-YON00758.jpg",
"/gallery/0904-YON00768 (1).jpg",
"/gallery/0906-YON04222.jpg",
"/gallery/0917-DSC01228.jpg",
"/gallery/0936-YON04291.jpg",
"/gallery/0943-YON06227.jpg",
"/gallery/1030-HAN04833.jpg",
"/gallery/1034-YON01013.jpg",
"/gallery/1035-YON04727.jpg",
"/gallery/1035-YON04730.jpg",
"/gallery/1041-YON04812.jpg",
"/gallery/1041-YON09159.jpg",
"/gallery/1042-YON04835.jpg",
"/gallery/1055-YON04886.jpg",
"/gallery/1104-YON09237.jpg",
"/gallery/1121-YON00317.jpg",
"/gallery/1206-YON05062.jpg",
"/gallery/1247-HAN05222.jpg",
"/gallery/1307-YON05216.jpg",
"/gallery/1320-YON00748.jpg",
"/gallery/1320-YON05251(1)(1).jpg",
"/gallery/1320-YON05251(1).jpg",
"/gallery/1320-YON05251(2).jpg",
"/gallery/1320-YON05251.jpg",
"/gallery/1328-YON05297(1).jpg",
"/gallery/1328-YON05297.jpg",
"/gallery/1329-YON00803.jpg",
"/gallery/1344-YON05317.jpg",
"/gallery/1348-YON01992.jpg",
"/gallery/1353-YON09509.jpg",
"/gallery/1355-YON02904.jpg",
"/gallery/1356-HAN05374.jpg",
"/gallery/1357-YON02917.jpg",
"/gallery/1413-YON00940_1.jpg",
"/gallery/1426-YON02005.jpg",
"/gallery/1427-YON02017.jpg",
"/gallery/1527-YON03095 (1).jpg",
"/gallery/1559-YON02330.jpg",
"/gallery/1601-YON03297.jpg",
"/gallery/1604-YON03322.jpg",
"/gallery/1607-DSC09599.jpg",
"/gallery/1607-YON02490.jpg",
"/gallery/1608-YON02530.jpg",
"/gallery/1616-DSC09607.jpg",
"/gallery/1616-YON02621.jpg",
"/gallery/1631-DSC09627.jpg",
"/gallery/1633-YON02826.jpg",
"/gallery/1637-YON02894.jpg",
"/gallery/1652-DSC09669.jpg",
"/gallery/1654-YON02913.jpg",
"/gallery/1700-YON02949.jpg",
"/gallery/1703-DSC09690.jpg",
"/gallery/1704-DSC09699.jpg",
"/gallery/1708-YON02996.jpg",
"/gallery/1708-YON03014.jpg",
"/gallery/1823-YON05309.jpg",
"/gallery/1845-YON03199.jpg",
"/gallery/1929-YON03968-2.jpg",
"/gallery/1954-YON03402.jpg",
"/gallery/1955-YON03417.jpg",
"/gallery/1955-YON03429.jpg",
"/gallery/2003-DSC02528.jpg",
"/gallery/2035-YON04110.jpg",
"/gallery/2035-YON04122.jpg",
"/gallery/2115-DSC08497 (1).jpg",
"/gallery/2122-YON03489.jpg",
"/gallery/2129-YON03515 (1).jpg",
"/gallery/2134-YON03597.jpg",
"/gallery/2135-YON04180 (1).jpg",
"/gallery/2137-YON04198.jpg",
"/gallery/2139-YON04203.jpg",
"/gallery/ASP_3988.jpg",
"/gallery/ASP_9635.jpg",
"/gallery/ASP08518.jpg",
"/gallery/ASP08658.jpg",
"/gallery/ASP08660.jpg",
"/gallery/Desain tanpa judul (17).png",
"/gallery/IMG_7468.jpg",
"/gallery/ISL_0483.jpg",
"/gallery/ISL_0770.jpg",
"/gallery/ISL_0916.jpg",
"/gallery/ISL_0960.jpg",
"/gallery/ISL_1036.jpg",
"/gallery/ISL_1114(1).jpg",
"/gallery/ISL_1114.jpg",
"/gallery/ISL_1675.jpg",
"/gallery/ISL_1932.jpg",
"/gallery/ISL_1936.jpg",
"/gallery/ISL_1944.jpg",
"/gallery/ISL_1946.jpg",
"/gallery/ISL_2032.jpg",
"/gallery/ISL_2087.jpg",
"/gallery/ISL_4913.jpg",
"/gallery/ISL_8753.jpg",
"/gallery/ISL_9595.jpg",

];

export default function WeddingGalleryGrid() {
  const [index, setIndex] = useState(0);

  // ================= AUTO SLIDE =================
  useEffect(() => {
    if (!galleryImages.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // ================= VISIBLE IMAGES =================
  const visibleImages = Array.from({ length: 4 }, (_, i) => ({
    image: galleryImages[(index + i) % galleryImages.length],
    actualIndex: (index + i) % galleryImages.length,
  }));

  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Wedding Gallery
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] leading-tight">
            Beautiful Moments
            <br />
            Captured Perfectly
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 auto-rows-[250px]">

          {visibleImages.map((item, i) => (
            <motion.div
              key={`wrapper-${item.actualIndex}-${index}`}
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.02,
              }}
              className={`
                relative overflow-hidden rounded-[32px] group cursor-pointer
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
                  key={`image-${item.actualIndex}-${index}`}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0"
                >

                  <Image
                    src={item.image}
                    alt={`Wedding Gallery ${i + 1}`}
                    fill
                    className="
                      object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

                </motion.div>

              </AnimatePresence>

              {/* Overlay */}
              <div
                className="
                  absolute inset-0
                  bg-black/20
                  group-hover:bg-black/40
                  transition duration-500
                "
              />

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}