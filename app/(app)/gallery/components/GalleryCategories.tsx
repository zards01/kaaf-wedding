"use client";

import { motion } from "framer-motion";

interface Props {
  active: string;
  setActive: (value: string) => void;
}

const categories = [
  "All",
  "Luxury Wedding",
  "Intimate Wedding",
  "Outdoor Wedding",
  "Engagement",
  "Decoration",
];

export default function GalleryCategories({
  active,
  setActive,
}: Props) {
  return (
    <section className="relative py-10 px-6 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="flex flex-wrap items-center justify-center gap-4">

          {categories.map((category, index) => {
            const isActive = active === category;

            return (
              <motion.button
                key={category}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                onClick={() => setActive(category)}
                className={`
                  px-6 py-3 rounded-full
                  border backdrop-blur-xl
                  transition duration-300
                  ${
                    isActive
                      ? "bg-[#d4b15a] text-black border-[#d4b15a]"
                      : "bg-white/5 border-white/10 text-neutral-300 hover:bg-[#d4b15a] hover:text-black hover:border-[#d4b15a]"
                  }
                `}
              >
                {category}
              </motion.button>
            );
          })}

        </div>

      </div>

    </section>
  );
}