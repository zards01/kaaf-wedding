"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Khalid Akbar",
    role: "Founder & Wedding Director",
    image: "/team/team1.jpg",
  },
  {
    name: "Nadia Putri",
    role: "Creative Designer",
    image: "/team/team2.jpg",
  },
  {
    name: "Rizky Pratama",
    role: "Event Coordinator",
    image: "/team/team3.jpg",
  },
  {
    name: "Alya Maharani",
    role: "Client Relation",
    image: "/team/team4.jpg",
  },
];

export default function AboutTeam() {
  return (
    <section className="relative py-28 bg-black overflow-hidden px-6">
      
      {/* Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#d4b15a]/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Tim Kami
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f1df9b] leading-tight">
            Orang-Orang
            <br />
            Dibalik Momen Besar
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Big Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="relative h-[600px] rounded-[40px] overflow-hidden group"
          >
            <Image
              src="/team/team.png"
              alt="Team KAAF"
              fill
              className="object-cover group-hover:scale-105 transition duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-10 left-10">
              <h3 className="font-heading text-3xl text-white">
                Tim Profesional
              </h3>
              <p className="text-neutral-300 mt-2">
                Berpengalaman menangani berbagai acara eksklusif
              </p>
            </div>
          </motion.div>

          {/* Right Members */}
          <div className="space-y-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{
                  x: 10,
                }}
                className="
                  group
                  flex items-center gap-5
                  p-5
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  hover:border-[#d4b15a]/30
                  transition
                "
              >
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-[#d4b15a] text-sm uppercase tracking-[0.2em] mt-2">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}