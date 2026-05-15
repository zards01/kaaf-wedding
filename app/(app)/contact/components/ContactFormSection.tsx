"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section
      id="contact-form"
      className="relative py-24 px-6 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Get In Touch
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Send Your Inquiry
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Ceritakan detail acara impian Anda dan tim kami akan membantu
            memberikan rekomendasi terbaik sesuai kebutuhan.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5 }}
          className="
            relative
            p-8 md:p-12
            rounded-[32px]
            bg-white/5
            border border-white/10
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(212,177,90,0.08)]
          "
        >
          <form className="grid md:grid-cols-2 gap-6">
            
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* WhatsApp */}
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* Date */}
            <input
              type="date"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* Event Type */}
            <input
              type="text"
              placeholder="Event Type (Wedding / Engagement / etc)"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* Budget */}
            <input
              type="text"
              placeholder="Estimated Budget"
              className="
                p-4 rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                transition
              "
            />

            {/* Message */}
            <textarea
              placeholder="Tell us about your dream event..."
              className="
                md:col-span-2
                h-40
                p-4
                rounded-2xl
                bg-black/50
                border border-white/10
                text-white
                placeholder:text-neutral-500
                focus:outline-none
                focus:border-[#d4b15a]
                resize-none
                transition
              "
            />

            {/* CTA Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                md:col-span-2
                flex items-center justify-center gap-3
                py-4
                rounded-full
                bg-gradient-to-r from-[#d4b15a] to-[#f5e7b2]
                text-black
                font-semibold
                text-lg
                shadow-lg
                hover:shadow-[0_0_30px_rgba(212,177,90,0.35)]
                transition-all duration-300
              "
            >
              Send Inquiry
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}