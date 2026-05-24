"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface GalleryLightboxProps {
  images: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  open: boolean;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  index,
  setIndex,
  open,
  onClose,
}: GalleryLightboxProps) {

  // ================= NEXT =================
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // ================= PREV =================
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // ================= KEYBOARD =================
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          nextSlide();
          break;

        case "ArrowLeft":
          prevSlide();
          break;
      }
    };

    window.addEventListener("keydown", handleKey);

    // disable scroll
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <AnimatePresence mode="wait">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed inset-0 z-[9999]
          bg-black/95
          backdrop-blur-xl
          flex items-center justify-center
          overflow-hidden
        "
      >

        {/* ================= BACKDROP ================= */}
        <div
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* ================= CLOSE ================= */}
        <button
          onClick={onClose}
          className="
            absolute top-6 right-6 z-50
            w-14 h-14 rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            flex items-center justify-center
            text-white
            hover:bg-[#d4b15a]
            hover:text-black
            transition duration-300
          "
        >
          <X className="w-6 h-6" />
        </button>

        {/* ================= PREV ================= */}
        <button
          onClick={prevSlide}
          className="
            absolute left-4 md:left-6 z-50
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            flex items-center justify-center
            text-white
            hover:bg-[#d4b15a]
            hover:text-black
            transition duration-300
          "
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* ================= NEXT ================= */}
        <button
          onClick={nextSlide}
          className="
            absolute right-4 md:right-6 z-50
            w-12 h-12 md:w-14 md:h-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            flex items-center justify-center
            text-white
            hover:bg-[#d4b15a]
            hover:text-black
            transition duration-300
          "
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* ================= IMAGE ================= */}
        <AnimatePresence mode="wait">

          <motion.div
            key={`${images[index]}-${index}`}
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
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="
              relative
              w-[92vw]
              h-[88vh]
              z-10
            "
          >

            <Image
              src={images[index]}
              alt={`Gallery Preview ${index + 1}`}
              fill
              priority
              className="object-contain"
            />

          </motion.div>

        </AnimatePresence>

        {/* ================= COUNTER ================= */}
        <div
          className="
            absolute bottom-6 left-1/2
            -translate-x-1/2
            px-5 py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border border-white/10
            text-white text-sm
            tracking-[0.25em]
            z-50
          "
        >
          {index + 1} / {images.length}
        </div>

      </motion.div>

    </AnimatePresence>
  );
}