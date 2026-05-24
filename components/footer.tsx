import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  MessageCircle,
  Mail,
} from "lucide-react";

const menus = [
  {
    name: "Tentang Kami",
    href: "/about",
  },
  {
    name: "Paket Wedding",
    href: "/packages",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Kontak",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer
      className="
        relative
        bg-black
        overflow-hidden
        border-t border-[#d4b15a]/10
      "
    >

      {/* ================= GLOW ================= */}
      <div
        className="
          absolute left-1/2 top-0
          -translate-x-1/2
          w-[600px] h-[300px]
          bg-[#d4b15a]/10
          blur-[140px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* ================= TOP ================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* ================= BRAND ================= */}
          <div>

            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center mb-6"
            >
              <Image
                src="/logokaafbawah.png"
                alt="KAAF Wedding Organizer"
                width={220}
                height={120}
                className="object-contain"
              />
            </Link>

            <p
              className="
                text-neutral-400
                leading-8
              "
            >
              KAAF Wedding Organizer menghadirkan
              pernikahan yang elegan, hangat,
              dan tak terlupakan dengan sentuhan
              luxury modern wedding experience.
            </p>

          </div>

          {/* ================= MENU ================= */}
          <div>

            <h3
              className="
                text-[#f1df9b]
                text-lg
                font-semibold
                mb-6
              "
            >
              Navigasi
            </h3>

            <div className="flex flex-col gap-4">

              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="
                    text-neutral-400
                    hover:text-[#d4b15a]
                    transition duration-300
                  "
                >
                  {menu.name}
                </Link>
              ))}

            </div>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3
              className="
                text-[#f1df9b]
                text-lg
                font-semibold
                mb-6
              "
            >
              Kontak
            </h3>

            <div className="space-y-5">

              {/* Instagram */}
              <a
                href="https://instagram.com/kaaf.weddingorganizer"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  text-neutral-400
                  hover:text-[#d4b15a]
                  transition duration-300
                "
              >
               <Camera className="w-5 h-5" />

                <span>@kaaf.weddingorganizer</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/628821458144"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center gap-3
                  text-neutral-400
                  hover:text-[#d4b15a]
                  transition duration-300
                "
              >
                <MessageCircle className="w-5 h-5" />

                <span>088 2145 8144</span>
              </a>

              {/* Email */}
              <a
                href="mailto:kaafweddingorganizer@gmail.com"
                className="
                  flex items-center gap-3
                  text-neutral-400
                  hover:text-[#d4b15a]
                  transition duration-300
                "
              >
                <Mail className="w-5 h-5" />

                <span>
                  kaafweddingorganizer@gmail.com
                </span>
              </a>

            </div>

          </div>

          {/* ================= CTA ================= */}
          <div>

            <h3
              className="
                text-[#f1df9b]
                text-lg
                font-semibold
                mb-6
              "
            >
              Konsultasi Wedding
            </h3>

            <p
              className="
                text-neutral-400
                leading-8
                mb-6
              "
            >
              Siap mewujudkan pernikahan impian
              bersama tim profesional kami?
            </p>

            <a
              href="https://wa.me/628821458144"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                rounded-full
                border border-[#d4b15a]
                text-[#f1df9b]
                hover:bg-[#d4b15a]
                hover:text-black
                transition duration-300
              "
            >
              Konsultasi Sekarang
            </a>

          </div>

        </div>

        {/* ================= LINE ================= */}
        <div
          className="
            w-full h-[1px]
            bg-[#d4b15a]/10
            my-14
          "
        />

        {/* ================= BOTTOM ================= */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-6
          "
        >

          {/* Copyright */}
          <p className="text-neutral-500 text-sm">
            © 2025 KAAF Wedding Organizer.
            All rights reserved.
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">

            <a
              href="https://instagram.com/kaaf.weddingorganizer"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                text-neutral-500
                hover:text-[#d4b15a]
                transition duration-300
              "
            >
              <Camera className="w-4 h-4" />
              Instagram
            </a>

            <a
              href="https://wa.me/628821458144"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                text-neutral-500
                hover:text-[#d4b15a]
                transition duration-300
              "
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}