import Link from "next/link";
import Image from "next/image";
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

export default function Footer() {
  return (
    <footer className="relative bg-black overflow-hidden border-t border-[#d4b15a]/10">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-10">

        {/* TOP */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* BRAND */}
          <div>

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

            <p className="text-neutral-400 leading-8">
              Luxury wedding organizer creating timeless,
              elegant, and unforgettable celebrations.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h3 className="text-[#f1df9b] text-lg mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">

              {menus.map((menu) => (
                <Link
                  key={menu.name}
                  href={menu.href}
                  className="
                    text-neutral-400
                    hover:text-[#d4b15a]
                    transition
                  "
                >
                  {menu.name}
                </Link>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-[#f1df9b] text-lg mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-neutral-400">

              <p>Jakarta, Indonesia</p>

              <p>hello@kaafwo.com</p>

              <p>+62 812 3456 7890</p>

            </div>

          </div>

          {/* CTA */}
          <div>

            <h3 className="text-[#f1df9b] text-lg mb-6">
              Let’s Talk
            </h3>

            <p className="text-neutral-400 leading-8 mb-6">
              Ready to create your dream wedding with us?
            </p>

            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              className="
                inline-flex items-center justify-center
                px-6 py-3 rounded-full
                border border-[#d4b15a]
                text-[#f1df9b]
                hover:bg-[#d4b15a]
                hover:text-black
                transition duration-300
              "
            >
              Consultation
            </a>

          </div>

        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-[#d4b15a]/10 my-14" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-neutral-500 text-sm">
            © 2025 KAAF Wedding Organizer. All rights reserved.
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-6">

            <a
              href="#"
              className="
                text-neutral-500
                hover:text-[#d4b15a]
                transition
              "
            >
              Instagram
            </a>

            <a
              href="#"
              className="
                text-neutral-500
                hover:text-[#d4b15a]
                transition
              "
            >
              TikTok
            </a>

            <a
              href="#"
              className="
                text-neutral-500
                hover:text-[#d4b15a]
                transition
              "
            >
              Pinterest
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}