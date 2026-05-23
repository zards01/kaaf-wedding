"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
type Venue = {
  venue: string;
  pax300?: string;
  pax400?: string;
  pax500?: string;
  pax600?: string;
  pax700?: string;
  pax800?: string;
  pax1000?: string;
};
const venueData: Record<string, Venue[]> = {
"Jakarta Selatan": [
  {
    venue: "Menara Hijau",
    pax300: "94.5jt",
    pax400: "100.5jt",
    pax500: "106.5jt",
    pax600: "112.5jt",
    pax700: "118.5jt",
    pax800: "124.5jt",
    pax1000: "136.5jt",
  },
  {
    venue: "Nyi Ageng Serang (Batavia)",
    pax300: "104.9jt",
    pax400: "110.9jt",
    pax500: "116.9jt",
    pax600: "122.9jt",
    pax700: "128.9jt",
    pax800: "134.9jt",
    pax1000: "146.9jt",
  },
  {
    venue: "Nyi Ageng Serang (Jayakarta)",
    pax300: "106.5jt",
    pax400: "112.5jt",
    pax500: "118.5jt",
    pax600: "124.5jt",
    pax700: "130.5jt",
    pax800: "136.5jt",
    pax1000: "148.5jt",
  },
  {
    venue: "Gedung BPMP",
    pax300: "83jt",
    pax400: "89jt",
    pax500: "95jt",
    pax600: "101jt",
    pax700: "107jt",
    pax800: "113jt",
    pax1000: "125jt",
  },
  {
    venue: "Puslitbang PLN",
    pax300: "87.9jt",
    pax400: "93.9jt",
    pax500: "99.6jt",
    pax600: "105.9jt",
    pax700: "111.9jt",
    pax800: "117.9jt",
    pax1000: "129.9jt",
  },
  {
    venue: "Gedung Palma One",
    pax300: "110.9jt",
    pax400: "116.9jt",
    pax500: "112.9jt",
    pax600: "128.9jt",
    pax700: "134.9jt",
    pax800: "140.9jt",
    pax1000: "152.9jt",
  },
  {
    venue: "D Hall Deptan",
    pax300: "101.5jt",
    pax400: "107.5jt",
    pax500: "113.5jt",
    pax600: "119.5jt",
    pax700: "125.5jt",
    pax800: "131.5jt",
    pax1000: "143.5jt",
  },
  {
    venue: "Pejaten Terrace",
    pax300: "83.5jt",
    pax400: "89.5jt",
    pax500: "95.5jt",
  },
  {
    venue: "Universitas Budi Luhur",
    pax300: "91.9jt",
    pax400: "97.9jt",
    pax500: "103.9jt",
    pax600: "109.9jt",
    pax700: "115.9jt",
    pax800: "121.9jt",
    pax1000: "133.9jt",
  },
  {
    venue: "Auditorium ISTN",
    pax300: "110.5jt",
    pax400: "116.5jt",
    pax500: "122.5jt",
    pax600: "128.5jt",
    pax700: "134.5jt",
    pax800: "140.5jt",
    pax1000: "152.5jt",
  },
  {
    venue: "Kemiri Venue",
    pax300: "81.9jt",
    pax400: "87.9jt",
    pax500: "93.9jt",
    pax600: "99.9jt",
    pax700: "105.9jt",
  },
  {
    venue: "Sanggar De Batavia",
    pax300: "90.5jt",
    pax400: "96.5jt",
    pax500: "102.5jt",
    pax600: "108.5jt",
    pax700: "114.5jt",
    pax800: "120.5jt",
    pax1000: "132.5jt",
  },
  {
    venue: "GOR Pasar Minggu",
    pax300: "80.5jt",
    pax400: "86.5jt",
    pax500: "92.5jt",
    pax600: "98.5jt",
    pax700: "104.5jt",
    pax800: "110.5jt",
  },
  {
    venue: "Aula Yonzikon 13",
    pax300: "85jt",
    pax400: "91jt",
    pax500: "97jt",
    pax600: "103jt",
    pax700: "109jt",
  },
  {
    venue: "Aula BP2TL",
    pax300: "80.5jt",
    pax400: "86.5jt",
    pax500: "92.5jt",
    pax600: "98.5jt",
    pax700: "104.5jt",
  },
  {
    venue: "Masjid Al Jannah",
    pax300: "81.9jt",
    pax400: "86.9jt",
    pax500: "93.9jt",
    pax600: "99.9jt",
    pax700: "105.9jt",
  },
  {
    venue: "SMK 57 Ragunan",
    pax300: "82.9jt",
    pax400: "88.9jt",
    pax500: "94.9jt",
    pax600: "100.9jt",
    pax700: "106.9jt",
    pax800: "112.9jt",
    pax1000: "124.9jt",
  },
  {
    venue: "Aula Buya Hamka",
    pax300: "95.9jt",
    pax400: "101.9jt",
    pax500: "107.9jt",
    pax600: "113.9jt",
    pax700: "119.9jt",
    pax800: "125.9jt",
    pax1000: "137.9jt",
  },
  {
    venue: "Masjid Daarul Adzkaar",
    pax300: "90.9jt",
    pax400: "96.9jt",
    pax500: "102.9jt",
    pax600: "108.9jt",
    pax700: "114.9jt",
    pax800: "120.9jt",
    pax1000: "132.9jt",
  },
  {
    venue: "Masjid Al Wiqoyah",
    pax300: "81.9jt",
    pax400: "87.9jt",
    pax500: "93.9jt",
    pax600: "99.9jt",
    pax700: "105.9jt",
  },
  {
    venue: "Griya Patria",
    pax300: "89.5jt",
    pax400: "95.5jt",
    pax500: "101.5jt",
    pax600: "107.5jt",
    pax700: "113.5jt",
  },
  {
    venue: "Bumi Harum Manis Garden",
    pax300: "99.9jt",
    pax400: "106.9jt",
    pax500: "112.9jt",
    pax600: "119.9jt",
  },
  {
    venue: "Balai Prajurit",
    pax300: "99jt",
    pax400: "105jt",
    pax500: "111jt",
    pax600: "117jt",
    pax700: "123jt",
    pax800: "123jt",
    pax1000: "127.9jt",
  },
  {
    venue: "Gedung Lemigas",
    pax300: "95.5jt",
    pax400: "101.5jt",
    pax500: "107.5jt",
    pax600: "113.5jt",
    pax700: "119.5jt",
    pax800: "125.5jt",
    pax1000: "137jt",
  },
],

 "Jakarta Pusat": [
  {
    venue: "Sinergi Hall",
    pax300: "94.5jt",
    pax400: "100.5jt",
    pax500: "106.5jt",
    pax600: "112.5jt",
    pax700: "118.5jt",
    pax800: "124.5jt",
    pax1000: "136.5jt",
  },
  {
    venue: "Gedung Graha Marinir",
    pax300: "89.9jt",
    pax400: "95.9jt",
    pax500: "101.9jt",
    pax600: "107.9jt",
    pax700: "113.9jt",
    pax800: "119.9jt",
    pax1000: "131.9jt",
  },
  {
    venue: "Darul Aitam",
    pax300: "81.5jt",
    pax400: "87.5jt",
    pax500: "93.5jt",
    pax600: "99.5jt",
    pax700: "105.5jt",
    pax800: "111.5jt",
    pax1000: "123.5jt",
  },
  {
    venue: "Masjid Arif Rahman UI",
    pax300: "82.5jt",
    pax400: "88.5jt",
    pax500: "94.5jt",
    pax600: "100.5jt",
    pax700: "106.5jt",
    pax800: "112.5jt",
  },
  {
    venue: "Graha Angkasa Pura",
    pax300: "110.5jt",
    pax400: "116.5jt",
    pax500: "122.5jt",
    pax600: "128.5jt",
    pax700: "134.5jt",
    pax800: "140.5jt",
    pax1000: "152.5jt",
  },
  {
    venue: "Gedung Pertemuan Pertamina",
    pax300: "97.9jt",
    pax400: "103.9jt",
    pax500: "109.9jt",
    pax600: "115.9jt",
    pax700: "121.9jt",
    pax800: "128.9jt",
    pax1000: "152.9jt",
  },
],

  "Jakarta Timur": [
  {
    venue: "IS Plaza",
    pax300: "103.9jt",
    pax400: "109.9jt",
    pax500: "115.9jt",
    pax600: "121.9jt",
    pax700: "127.0jt",
    pax800: "133.9jt",
    pax1000: "145.9jt",
  },
  {
    venue: "Gedung Sasana Modern",
    pax300: "110.5jt",
    pax400: "116.5jt",
    pax500: "122.5jt",
    pax600: "128.5jt",
    pax700: "134.5jt",
    pax800: "140.5jt",
    pax1000: "152.5jt",
  },
  {
    venue: "GOR Matraman",
    pax300: "80.9jt",
    pax400: "86.9jt",
    pax500: "92.9jt",
    pax600: "98.9jt",
    pax700: "104.9jt",
    pax800: "110.9jt",
    pax1000: "122.9jt",
  },
  {
    venue: "Tribuana",
    pax300: "85.9jt",
    pax400: "91.5jt",
    pax500: "97.5jt",
    pax600: "103.9jt",
    pax700: "109.9jt",
    pax800: "115.9jt",
    pax1000: "121.9jt",
  },
  {
    venue: "Villa Srimaganti",
    pax300: "110.9jt",
    pax400: "116.9jt",
    pax500: "112.9jt",
    pax600: "128.9jt",
    pax700: "134.9jt",
    pax800: "140.9jt",
    pax1000: "152.9jt",
  },
  {
    venue: "Heritage Garden",
    pax300: "98.9jt",
    pax400: "104.9jt",
    pax500: "110.9jt",
    pax600: "116.9jt",
  },
  {
    venue: "Gedung Bea Cukai",
    pax300: "108jt",
    pax400: "114jt",
    pax500: "120jt",
    pax600: "126jt",
    pax700: "132jt",
    pax800: "138jt",
    pax1000: "150jt",
  },
],
"Jakarta Utara": [
  {
    venue: "Pelindo Tower",
    pax300: "90.5jt",
    pax400: "96.5jt",
    pax500: "102.5jt",
    pax600: "108.5jt",
    pax700: "114.5jt",
    pax800: "120.5jt",
    pax1000: "133.5jt",
  },
  {
    venue: "Gedung Canopus",
    pax300: "96.9jt",
    pax400: "102.9jt",
    pax500: "108.9jt",
    pax600: "114.9jt",
    pax700: "120.9jt",
    pax800: "126.9jt",
    pax1000: "138.9jt",
  },
  {
    venue: "Gedung BKI",
    pax300: "101.9jt",
    pax400: "117.9jt",
    pax500: "123.9jt",
    pax600: "129.9jt",
    pax700: "135.9jt",
    pax800: "141.9jt",
    pax1000: "153.9jt",
  },
  {
    venue: "GOR Sunter",
    pax300: "82.5jt",
    pax400: "88.5jt",
    pax500: "94.5jt",
    pax600: "100.5jt",
    pax700: "106.5jt",
    pax800: "112.5jt",
    pax1000: "124.5jt",
  },
],
"Jakarta Barat": [
  {
    venue: "Gedung Almaka",
    pax300: "89.9jt",
    pax400: "95.9jt",
    pax500: "101.9jt",
    pax600: "107.9jt",
    pax700: "113.9jt",
    pax800: "119.9jt",
  },
  {
    venue: "GOR Tanjung Duren",
    pax300: "79jt",
    pax400: "85jt",
    pax500: "91jt",
    pax600: "97jt",
    pax700: "103jt",
    pax800: "109jt",
    pax1000: "121jt",
  },
  {
    venue: "Al Muchlisin Grogol",
    pax300: "80.9jt",
    pax400: "86.9jt",
    pax500: "92.9jt",
    pax600: "98.9jt",
    pax700: "104.9jt",
    pax800: "110.9jt",
    pax1000: "122.9jt",
  },
],
  "Depok": [
  {
    venue: "Taman Kaldera",
    pax300: "82.9jt",
    pax400: "88.9jt",
    pax500: "94.9jt",
    pax600: "100.9jt",
    pax700: "106.9jt",
    pax800: "118.9jt",
    pax1000: "133.5jt",
  },
  {
    venue: "Teras Rajeg",
    pax300: "78.9jt",
    pax400: "84.9jt",
    pax500: "90.9jt",
    pax600: "96.9jt",
    pax700: "102.9jt",
  },
  {
    venue: "Batamerah",
    pax300: "77.9jt",
    pax400: "83.9jt",
  },
  {
    venue: "Rumah Keramik",
    pax300: "89.9jt",
    pax400: "95.9jt",
    pax500: "101.9jt",
    pax600: "107.9jt",
    pax700: "113.9jt",
  },
  {
    venue: "Caraka Yudha",
    pax300: "81jt",
    pax400: "87jt",
    pax500: "93jt",
    pax600: "99jt",
    pax700: "106jt",
    pax800: "112jt",
    pax1000: "124jt",
  },
  {
    venue: "Sasono Mulyo",
    pax300: "87.5jt",
    pax400: "93.5jt",
    pax500: "99.5jt",
    pax600: "105.5jt",
    pax700: "111.5jt",
  },
  {
    venue: "Graha Jala Bhakti",
    pax300: "88jt",
    pax400: "94jt",
    pax500: "100jt",
    pax600: "106jt",
    pax700: "112jt",
    pax800: "118jt",
  },
  {
    venue: "Gedung Aisyiyah",
    pax300: "78.5jt",
    pax400: "84.5jt",
    pax500: "90.5jt",
    pax600: "96.5jt",
    pax700: "102.5jt",
    pax800: "108.5jt",
    pax1000: "120.5jt",
  },
  {
    venue: "Masjid Puri Cinere",
    pax300: "80.5jt",
    pax400: "86.5jt",
    pax500: "92.5jt",
    pax600: "98.5jt",
    pax700: "104.5jt",
    pax800: "110.5jt",
    pax1000: "122.5jt",
  },
],
  "Tangerang Selatan": [
  {
    venue: "Gedung PEPI Serpong",
    pax300: "113.5jt",
    pax400: "119.5jt",
    pax500: "125.5jt",
    pax600: "131.5jt",
    pax700: "137.5jt",
    pax800: "143.5jt",
    pax1000: "155.5jt",
  },
  {
    venue: "Puspitek",
    pax300: "83jt",
    pax400: "89jt",
    pax500: "95jt",
    pax600: "101jt",
    pax700: "107jt",
  },
  {
    venue: "Praba Dakara",
    pax300: "83jt",
    pax400: "89jt",
    pax500: "95jt",
    pax600: "101jt",
    pax700: "107jt",
  },
  {
    venue: "Calatea Luthea",
    pax300: "114.5jt",
    pax400: "120.5jt",
    pax500: "126.5jt",
    pax600: "134.5jt",
    pax700: "140.5jt",
    pax800: "146.5jt",
    pax1000: "158.5jt",
  },
  {
    venue: "Bani Umar",
    pax300: "98jt",
    pax400: "104jt",
    pax500: "110jt",
    pax600: "116jt",
    pax700: "122jt",
    pax800: "128jt",
    pax1000: "140jt",
  },
  {
    venue: "Gedung Cendikia UMJ",
    pax300: "98.9jt",
    pax400: "104.9jt",
    pax500: "110.9jt",
    pax600: "116.9jt",
    pax700: "122.9jt",
    pax800: "128.9jt",
    pax1000: "140.9jt",
  },
  {
    venue: "Mektan Auditorium",
    pax300: "95.5jt",
    pax400: "101.5jt",
    pax500: "107.5jt",
    pax600: "113.5jt",
    pax700: "119.5jt",
    pax800: "125.5jt",
    pax1000: "131.5jt",
  },
],
};

const tabs = Object.keys(venueData);

export default function VenueListSection() {
  const [activeTab, setActiveTab] = useState("Jakarta Selatan");

  return (
    <section className="relative py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#d4b15a]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-[#d4b15a] text-sm mb-4">
            Pilihan Venue
          </p>

          <h2 className="font-heading text-4xl md:text-6xl text-[#f5e7b2] mb-6">
            Pilih Lokasi Wedding Anda
          </h2>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            Harga sudah termasuk venue, catering, dan seluruh kebutuhan wedding package.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-3 rounded-full text-sm font-medium
                transition-all duration-300
                border border-white/10
                hover:scale-105
                hover:border-[#d4b15a]/50
                hover:shadow-[0_0_20px_rgba(212,177,90,0.2)]
                ${
                  activeTab === tab
                    ? "bg-[#d4b15a] text-black font-semibold shadow-[0_0_25px_rgba(212,177,90,0.3)]"
                    : "bg-white/5 text-white"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Table */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <table className="w-full min-w-[700px] text-left">
           <thead>
  <tr className="border-b border-white/10 bg-[#d4b15a]/10">
    <th className="p-5 text-[#f5e7b2]">Venue</th>
    <th className="p-5 text-[#f5e7b2]">300 Pax</th>
    <th className="p-5 text-[#f5e7b2]">400 Pax</th>
    <th className="p-5 text-[#f5e7b2]">500 Pax</th>
    <th className="p-5 text-[#f5e7b2]">600 Pax</th>
    <th className="p-5 text-[#f5e7b2]">700 Pax</th>
    <th className="p-5 text-[#f5e7b2]">800 Pax</th>
    <th className="p-5 text-[#f5e7b2]">1000 Pax</th>
  </tr>
</thead>
              <tbody>
  {venueData[activeTab as keyof typeof venueData].map(
    (item, index) => (
      <tr
        key={index}
        className="border-b border-white/5 hover:bg-white/5 transition"
      >
        <td className="p-5 text-white">{item.venue}</td>

        <td className="p-5 text-neutral-300">{item.pax300 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax400 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax500 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax600 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax700 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax800 || "-"}</td>
        <td className="p-5 text-neutral-300">{item.pax1000 || "-"}</td>
      </tr>
    )
  )}
</tbody>
            </table>
          </motion.div>
        </AnimatePresence>

        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-neutral-500 text-sm">
            *Harga dapat berubah tergantung tanggal acara dan vendor tambahan
          </p>
        </div>
      </div>
    </section>
  );
}