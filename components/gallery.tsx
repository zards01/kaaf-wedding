"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const gallery = [
"/gallery/0808-YON00655_3_11zon.jpg",
"/gallery/0814-HAN02622_4_11zon.jpg",
"/gallery/0826-YON00746_5_11zon.jpg",
"/gallery/0832-YON04102 (1)_6_11zon.jpg",
"/gallery/0833-YON06720_7_11zon.jpg",
"/gallery/0848-DSC09086_8_11zon.jpg",
"/gallery/0901-YON01034_9_11zon.jpg",
"/gallery/0903-YON00758_10_11zon.jpg",
"/gallery/0904-YON00768 (1)_4_11zon.jpg",
"/gallery/0906-YON04222_5_11zon.jpg",
"/gallery/0917-DSC01228_6_11zon.jpg",
"/gallery/0936-YON04291_7_11zon.jpg",
"/gallery/0943-YON06227_8_11zon.jpg",
"/gallery/1030-HAN04833_9_11zon.jpg",
"/gallery/1034-YON01013_10_11zon.jpg",
"/gallery/1035-YON04727_11_11zon.jpg",
"/gallery/1035-YON04730_12_11zon.jpg",
"/gallery/1041-YON04812_13_11zon.jpg",
"/gallery/1041-YON09159_14_11zon.jpg",
"/gallery/1042-YON04835_15_11zon.jpg",
"/gallery/1055-YON04886_16_11zon.jpg",
"/gallery/1104-YON09237_17_11zon.jpg",
"/gallery/1121-YON00317_18_11zon.jpg",
"/gallery/1206-YON05062_19_11zon.jpg",
"/gallery/1247-HAN05222_20_11zon.jpg",
"/gallery/1307-YON05216_21_11zon.jpg",
"/gallery/1320-YON00748_1_11zon.jpg",
"/gallery/1320-YON05251_2_11zon.jpg",
"/gallery/1328-YON05297(1)_8_11zon.jpg",
"/gallery/1328-YON05297_3_11zon.jpg",
"/gallery/1329-YON00803_9_11zon.jpg",
"/gallery/1344-YON05317_10_11zon.jpg",
"/gallery/1348-YON01992_11_11zon.jpg",
"/gallery/1353-YON09509_12_11zon.jpg",
"/gallery/1355-YON02904_13_11zon.jpg",
"/gallery/1356-HAN05374_14_11zon.jpg",
"/gallery/1357-YON02917_15_11zon.jpg",
"/gallery/1413-YON00940_1_16_11zon.jpg",
"/gallery/1426-YON02005_17_11zon.jpg",
"/gallery/1427-YON02017_18_11zon.jpg",
"/gallery/1527-YON03095 (1)_19_11zon.jpg",
"/gallery/1559-YON02330_20_11zon.jpg",
"/gallery/1601-YON03297_21_11zon.jpg",
"/gallery/1604-YON03322_22_11zon.jpg",
"/gallery/1607-DSC09599_23_11zon.jpg",
"/gallery/1607-YON02490_24_11zon.jpg",
"/gallery/1608-YON02530_25_11zon.jpg",
"/gallery/1616-DSC09607_26_11zon.jpg",
"/gallery/1616-YON02621_27_11zon.jpg",
"/gallery/1631-DSC09627_28_11zon.jpg",
"/gallery/1633-YON02826_29_11zon.jpg",
"/gallery/1637-YON02894_30_11zon.jpg",
"/gallery/1652-DSC09669_31_11zon.jpg",
"/gallery/1654-YON02913_32_11zon.jpg",
"/gallery/1700-YON02949_33_11zon.jpg",
"/gallery/1703-DSC09690_34_11zon.jpg",
"/gallery/1704-DSC09699_35_11zon.jpg",
"/gallery/1708-YON02996_36_11zon.jpg",
"/gallery/1708-YON03014_37_11zon.jpg",
"/gallery/1823-YON05309_38_11zon.jpg",
"/gallery/1845-YON03199_39_11zon.jpg",
"/gallery/ISL_1944_1_11zon.jpg",
"/gallery/ISL_1946_2_11zon.jpg",
"/gallery/ISL_2032_3_11zon.jpg",
"/gallery/ISL_2087_4_11zon.jpg",
"/gallery/ISL_4913_5_11zon.jpg",
"/gallery/ISL_8753_6_11zon.jpg",
"/gallery/ISL_9595_7_11zon.jpg",
"/gallery/0608-YON03140_11_11zon.jpg",
"/gallery/0628-YON09788_12_11zon.jpg",
"/gallery/0631-DSC00834_13_11zon.jpg",
"/gallery/0631-YON05299_14_11zon.jpg",
"/gallery/0649-YON00241_15_11zon.jpg",
"/gallery/0732-YON00447_1_11zon.jpg",
"/gallery/0737-YON00487_2_11zon.jpg",


];
export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // ================= AUTO SLIDE =================
  useEffect(() => {
    if (!gallery.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % gallery.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  // ================= CURRENT IMAGES =================
  const mainImage = gallery[index];

  const sideImages = Array.from({ length: 2 }, (_, i) => ({
    image: gallery[(index + i + 1) % gallery.length],
    actualIndex: (index + i + 1) % gallery.length,
  }));

  return (
    <>
      {/* ================= GALLERY ================= */}
      <section className="relative py-32 px-6 bg-black overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4b15a]/10 blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ================= HEADING ================= */}
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

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-6">

            {/* ================= MAIN IMAGE ================= */}
            <div className="md:col-span-2 relative h-[520px] rounded-[36px] overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.img
                  key={`main-${index}`}
                  src={mainImage}
                  alt="Wedding Gallery"
                  onClick={() => setLightboxOpen(true)}
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
                  className="
                    absolute inset-0
                    w-full h-full
                    object-cover
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

            {/* ================= SIDE IMAGES ================= */}
            <div className="flex flex-col gap-6">

              {sideImages.map((item, i) => (
                <motion.div
                  key={`side-${item.actualIndex}-${index}`}
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
                  onClick={() => {
                    setIndex(item.actualIndex);
                    setLightboxOpen(true);
                  }}
                  className="
                    relative
                    h-[248px]
                    rounded-[30px]
                    overflow-hidden
                    cursor-pointer
                    group
                  "
                >

                  <img
                    src={item.image}
                    alt="Wedding Thumbnail"
                    className="
                      w-full h-full
                      object-cover
                      group-hover:scale-110
                      transition duration-700
                    "
                  />

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

        </div>

      </section>

      {/* ================= LIGHTBOX ================= */}
      <AnimatePresence>

        {lightboxOpen && (
          <motion.div
            className="
              fixed inset-0
              z-[999]
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
              key={`lightbox-${index}`}
              src={mainImage}
              alt="Preview"
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