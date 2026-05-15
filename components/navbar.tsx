"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const menus = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Packages",
    href: "/packages",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // lock scroll saat mobile menu buka
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-[#d4b15a]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/kaaflogo.png"
              alt="KAAF Logo"
              width={45}
              height={45}
              className="object-contain"
            />

            <span className="font-heading text-2xl tracking-[0.2em] text-[#f1df9b]">
              KAAF
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className={`relative text-sm uppercase tracking-[0.2em] transition ${
                  isActive(menu.href)
                    ? "text-white"
                    : "text-[#d4b15a] hover:text-white"
                }`}
              >
                {menu.name}

                {/* Active Underline */}
                {isActive(menu.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#d4b15a]"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="
              hidden md:block
              border border-[#d4b15a]
              text-[#f1df9b]
              px-5 py-2
              rounded-full
              text-sm
              hover:bg-[#d4b15a]
              hover:text-black
              transition duration-300
            "
          >
            Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#f1df9b]"
          >
            <Menu size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                fixed
                top-0
                left-0
                h-screen
                w-[280px]
                bg-black
                border-r border-[#d4b15a]/10
                z-50
              "
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-[#d4b15a]/10">
                <div className="flex items-center gap-3">
                  <Image
                    src="/kaaflogo.png"
                    alt="KAAF Logo"
                    width={40}
                    height={40}
                  />

                  <span className="font-heading text-xl tracking-[0.2em] text-[#f1df9b]">
                    KAAF
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-[#f1df9b]"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Sidebar Menu */}
              <div className="flex flex-col px-8 py-10 gap-8">
                {menus.map((menu) => (
                  <Link
                    key={menu.name}
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className={`uppercase tracking-[0.3em] text-sm transition ${
                      isActive(menu.href)
                        ? "text-white"
                        : "text-[#d4b15a] hover:text-white"
                    }`}
                  >
                    {menu.name}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="
                    mt-6
                    text-center
                    border border-[#d4b15a]
                    text-[#f1df9b]
                    px-6 py-3
                    rounded-full
                    hover:bg-[#d4b15a]
                    hover:text-black
                    transition duration-300
                  "
                >
                  Consultation
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}