"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const gallery = [
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