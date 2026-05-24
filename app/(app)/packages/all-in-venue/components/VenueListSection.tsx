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
    pax300: "95.5jt",
    pax400: "101.5jt",
    pax500: "107.5jt",
    pax600: "113.5jt",
    pax700: "119.5jt",
    pax800: "125.5jt",
    pax1000: "137.5jt",
  },
  {
    venue: "Nyi Ageng Serang (Batavia)",
    pax300: "105.9jt",
    pax400: "111.9jt",
    pax500: "117.9jt",
    pax600: "123.9jt",
    pax700: "129.9jt",
    pax800: "135.9jt",
    pax1000: "147.9jt",
  },
  {
    venue: "Nyi Ageng Serang (Jayakarta)",
    pax300: "107.5jt",
    pax400: "113.5jt",
    pax500: "119.5jt",
    pax600: "125.5jt",
    pax700: "131.5jt",
    pax800: "137.5jt",
    pax1000: "149.5jt",
  },
  {
    venue: "Gedung BPMP",
    pax300: "84jt",
    pax400: "90jt",
    pax500: "96jt",
    pax600: "102jt",
    pax700: "108jt",
    pax800: "114jt",
    pax1000: "126jt",
  },
  {
    venue: "Puslitbang PLN",
    pax300: "88.9jt",
    pax400: "94.9jt",
    pax500: "100.6jt",
    pax600: "106.9jt",
    pax700: "112.9jt",
    pax800: "118.9jt",
    pax1000: "130.9jt",
  },
  {
    venue: "Gedung Palma One",
    pax300: "111.9jt",
    pax400: "117.9jt",
    pax500: "113.9jt",
    pax600: "129.9jt",
    pax700: "135.9jt",
    pax800: "141.9jt",
    pax1000: "153.9jt",
  },
  {
    venue: "D Hall Deptan",
    pax300: "102.5jt",
    pax400: "108.5jt",
    pax500: "114.5jt",
    pax600: "120.5jt",
    pax700: "126.5jt",
    pax800: "132.5jt",
    pax1000: "144.5jt",
  },
  {
    venue: "Pejaten Terrace",
    pax300: "84.5jt",
    pax400: "90.5jt",
    pax500: "96.5jt",
  },
  {
    venue: "Universitas Budi Luhur",
    pax300: "92.9jt",
    pax400: "98.9jt",
    pax500: "104.9jt",
    pax600: "110.9jt",
    pax700: "116.9jt",
    pax800: "122.9jt",
    pax1000: "134.9jt",
  },
  {
    venue: "Auditorium ISTN",
    pax300: "111.5jt",
    pax400: "117.5jt",
    pax500: "123.5jt",
    pax600: "129.5jt",
    pax700: "135.5jt",
    pax800: "141.5jt",
    pax1000: "153.5jt",
  },
  {
    venue: "Kemiri Venue",
    pax300: "82.9jt",
    pax400: "88.9jt",
    pax500: "94.9jt",
    pax600: "100.9jt",
    pax700: "106.9jt",
  },
  {
    venue: "Sanggar De Batavia",
    pax300: "91.5jt",
    pax400: "97.5jt",
    pax500: "103.5jt",
    pax600: "109.5jt",
    pax700: "115.5jt",
    pax800: "121.5jt",
    pax1000: "133.5jt",
  },
  {
    venue: "GOR Pasar Minggu",
    pax300: "81.5jt",
    pax400: "87.5jt",
    pax500: "93.5jt",
    pax600: "99.5jt",
    pax700: "105.5jt",
    pax800: "111.5jt",
  },
  {
    venue: "Aula Yonzikon 13",
    pax300: "86jt",
    pax400: "92jt",
    pax500: "98jt",
    pax600: "104jt",
    pax700: "110jt",
  },
  {
    venue: "Aula BP2TL",
    pax300: "81.5jt",
    pax400: "87.5jt",
    pax500: "93.5jt",
    pax600: "99.5jt",
    pax700: "105.5jt",
  },
  {
    venue: "Masjid Al Jannah",
    pax300: "82.9jt",
    pax400: "87.9jt",
    pax500: "94.9jt",
    pax600: "100.9jt",
    pax700: "106.9jt",
  },
  {
    venue: "SMK 57 Ragunan",
    pax300: "83.9jt",
    pax400: "89.9jt",
    pax500: "95.9jt",
    pax600: "101.9jt",
    pax700: "107.9jt",
    pax800: "113.9jt",
    pax1000: "125.9jt",
  },
  {
    venue: "Aula Buya Hamka",
    pax300: "96.9jt",
    pax400: "102.9jt",
    pax500: "108.9jt",
    pax600: "114.9jt",
    pax700: "120.9jt",
    pax800: "126.9jt",
    pax1000: "138.9jt",
  },
  {
    venue: "Masjid Daarul Adzkaar",
    pax300: "91.9jt",
    pax400: "97.9jt",
    pax500: "103.9jt",
    pax600: "109.9jt",
    pax700: "115.9jt",
    pax800: "121.9jt",
    pax1000: "133.9jt",
  },
  {
    venue: "Masjid Al Wiqoyah",
    pax300: "82.9jt",
    pax400: "88.9jt",
    pax500: "94.9jt",
    pax600: "100.9jt",
    pax700: "106.9jt",
  },
  {
    venue: "Griya Patria",
    pax300: "90.5jt",
    pax400: "96.5jt",
    pax500: "102.5jt",
    pax600: "108.5jt",
    pax700: "114.5jt",
  },
  {
    venue: "Bumi Harum Manis Garden",
    pax300: "100.9jt",
    pax400: "107.9jt",
    pax500: "113.9jt",
    pax600: "120.9jt",
  },
  {
    venue: "Balai Prajurit",
    pax300: "100jt",
    pax400: "106jt",
    pax500: "112jt",
    pax600: "118jt",
    pax700: "124jt",
    pax800: "124jt",
    pax1000: "128.9jt",
  },
  {
    venue: "Gedung Lemigas",
    pax300: "96.5jt",
    pax400: "102.5jt",
    pax500: "108.5jt",
    pax600: "114.5jt",
    pax700: "120.5jt",
    pax800: "126.5jt",
    pax1000: "138jt",
  },
],

"Jakarta Pusat": [
  {
    venue: "Sinergi Hall",
    pax300: "95.5jt",
    pax400: "101.5jt",
    pax500: "107.5jt",
    pax600: "113.5jt",
    pax700: "119.5jt",
    pax800: "125.5jt",
    pax1000: "137.5jt",
  },
  {
    venue: "Gedung Graha Marinir",
    pax300: "90.9jt",
    pax400: "96.9jt",
    pax500: "102.9jt",
    pax600: "108.9jt",
    pax700: "114.9jt",
    pax800: "120.9jt",
    pax1000: "132.9jt",
  },
  {
    venue: "Darul Aitam",
    pax300: "82.5jt",
    pax400: "88.5jt",
    pax500: "94.5jt",
    pax600: "100.5jt",
    pax700: "106.5jt",
    pax800: "112.5jt",
    pax1000: "124.5jt",
  },
  {
    venue: "Masjid Arif Rahman UI",
    pax300: "83.5jt",
    pax400: "89.5jt",
    pax500: "95.5jt",
    pax600: "101.5jt",
    pax700: "107.5jt",
    pax800: "113.5jt",
  },
  {
    venue: "Graha Angkasa Pura",
    pax300: "111.5jt",
    pax400: "117.5jt",
    pax500: "123.5jt",
    pax600: "129.5jt",
    pax700: "135.5jt",
    pax800: "141.5jt",
    pax1000: "153.5jt",
  },
  {
    venue: "Gedung Pertemuan Pertamina",
    pax300: "98.9jt",
    pax400: "104.9jt",
    pax500: "110.9jt",
    pax600: "116.9jt",
    pax700: "122.9jt",
    pax800: "129.9jt",
    pax1000: "153.9jt",
  },
],

"Jakarta Timur": [
  {
    venue: "IS Plaza",
    pax300: "104.9jt",
    pax400: "110.9jt",
    pax500: "116.9jt",
    pax600: "122.9jt",
    pax700: "128.0jt",
    pax800: "134.9jt",
    pax1000: "146.9jt",
  },
  {
    venue: "Gedung Sasana Modern",
    pax300: "111.5jt",
    pax400: "117.5jt",
    pax500: "123.5jt",
    pax600: "129.5jt",
    pax700: "135.5jt",
    pax800: "141.5jt",
    pax1000: "153.5jt",
  },
  {
    venue: "GOR Matraman",
    pax300: "81.9jt",
    pax400: "87.9jt",
    pax500: "93.9jt",
    pax600: "99.9jt",
    pax700: "105.9jt",
    pax800: "111.9jt",
    pax1000: "123.9jt",
  },
  {
    venue: "Tribuana",
    pax300: "86.9jt",
    pax400: "92.5jt",
    pax500: "98.5jt",
    pax600: "104.9jt",
    pax700: "110.9jt",
    pax800: "116.9jt",
    pax1000: "122.9jt",
  },
  {
    venue: "Villa Srimaganti",
    pax300: "111.9jt",
    pax400: "117.9jt",
    pax500: "113.9jt",
    pax600: "129.9jt",
    pax700: "135.9jt",
    pax800: "141.9jt",
    pax1000: "153.9jt",
  },
  {
    venue: "Heritage Garden",
    pax300: "99.9jt",
    pax400: "105.9jt",
    pax500: "111.9jt",
    pax600: "117.9jt",
  },
  {
    venue: "Gedung Bea Cukai",
    pax300: "109jt",
    pax400: "115jt",
    pax500: "121jt",
    pax600: "127jt",
    pax700: "133jt",
    pax800: "139jt",
    pax1000: "151jt",
  },
],
"Jakarta Utara": [
  {
    venue: "Pelindo Tower",
    pax300: "91.5jt",
    pax400: "97.5jt",
    pax500: "103.5jt",
    pax600: "109.5jt",
    pax700: "115.5jt",
    pax800: "121.5jt",
    pax1000: "134.5jt",
  },
  {
    venue: "Gedung Canopus",
    pax300: "97.9jt",
    pax400: "103.9jt",
    pax500: "109.9jt",
    pax600: "115.9jt",
    pax700: "121.9jt",
    pax800: "127.9jt",
    pax1000: "139.9jt",
  },
  {
    venue: "Gedung BKI",
    pax300: "102.9jt",
    pax400: "118.9jt",
    pax500: "124.9jt",
    pax600: "130.9jt",
    pax700: "136.9jt",
    pax800: "142.9jt",
    pax1000: "154.9jt",
  },
  {
    venue: "GOR Sunter",
    pax300: "83.5jt",
    pax400: "89.5jt",
    pax500: "95.5jt",
    pax600: "101.5jt",
    pax700: "107.5jt",
    pax800: "113.5jt",
    pax1000: "125.5jt",
  },
],
"Jakarta Barat": [
  {
    venue: "Gedung Almaka",
    pax300: "90.9jt",
    pax400: "96.9jt",
    pax500: "102.9jt",
    pax600: "108.9jt",
    pax700: "114.9jt",
    pax800: "120.9jt",
  },
  {
    venue: "GOR Tanjung Duren",
    pax300: "80jt",
    pax400: "86jt",
    pax500: "92jt",
    pax600: "98jt",
    pax700: "104jt",
    pax800: "110jt",
    pax1000: "122jt",
  },
  {
    venue: "Al Muchlisin Grogol",
    pax300: "81.9jt",
    pax400: "87.9jt",
    pax500: "93.9jt",
    pax600: "99.9jt",
    pax700: "105.9jt",
    pax800: "111.9jt",
    pax1000: "123.9jt",
  },
],
  "Depok": [
  {
    venue: "Taman Kaldera",
    pax300: "83.9jt",
    pax400: "89.9jt",
    pax500: "95.9jt",
    pax600: "101.9jt",
    pax700: "107.9jt",
    pax800: "119.9jt",
    pax1000: "134.5jt",
  },
  {
    venue: "Teras Rajeg",
    pax300: "79.9jt",
    pax400: "85.9jt",
    pax500: "91.9jt",
    pax600: "97.9jt",
    pax700: "103.9jt",
  },
  {
    venue: "Batamerah",
    pax300: "78.9jt",
    pax400: "84.9jt",
  },
  {
    venue: "Rumah Keramik",
    pax300: "90.9jt",
    pax400: "96.9jt",
    pax500: "102.9jt",
    pax600: "108.9jt",
    pax700: "114.9jt",
  },
  {
    venue: "Caraka Yudha",
    pax300: "82jt",
    pax400: "88jt",
    pax500: "94jt",
    pax600: "100jt",
    pax700: "107jt",
    pax800: "113jt",
    pax1000: "125jt",
  },
  {
    venue: "Sasono Mulyo",
    pax300: "88.5jt",
    pax400: "94.5jt",
    pax500: "100.5jt",
    pax600: "106.5jt",
    pax700: "112.5jt",
  },
  {
    venue: "Graha Jala Bhakti",
    pax300: "89jt",
    pax400: "95jt",
    pax500: "101jt",
    pax600: "107jt",
    pax700: "113jt",
    pax800: "119jt",
  },
  {
    venue: "Gedung Aisyiyah",
    pax300: "79.5jt",
    pax400: "85.5jt",
    pax500: "91.5jt",
    pax600: "97.5jt",
    pax700: "103.5jt",
    pax800: "109.5jt",
    pax1000: "121.5jt",
  },
  {
    venue: "Masjid Puri Cinere",
    pax300: "81.5jt",
    pax400: "87.5jt",
    pax500: "93.5jt",
    pax600: "99.5jt",
    pax700: "105.5jt",
    pax800: "111.5jt",
    pax1000: "123.5jt",
  },
],
  "Tangerang Selatan": [
  {
    venue: "Gedung PEPI Serpong",
    pax300: "114.5jt",
    pax400: "120.5jt",
    pax500: "126.5jt",
    pax600: "132.5jt",
    pax700: "138.5jt",
    pax800: "144.5jt",
    pax1000: "156.5jt",
  },
  {
    venue: "Puspitek",
    pax300: "84jt",
    pax400: "90jt",
    pax500: "96jt",
    pax600: "102jt",
    pax700: "108jt",
  },
  {
    venue: "Praba Dakara",
    pax300: "84jt",
    pax400: "90jt",
    pax500: "96jt",
    pax600: "102jt",
    pax700: "108jt",
  },
  {
    venue: "Calatea Luthea",
    pax300: "115.5jt",
    pax400: "121.5jt",
    pax500: "127.5jt",
    pax600: "135.5jt",
    pax700: "141.5jt",
    pax800: "147.5jt",
    pax1000: "159.5jt",
  },
  {
    venue: "Bani Umar",
    pax300: "99jt",
    pax400: "105jt",
    pax500: "111jt",
    pax600: "117jt",
    pax700: "123jt",
    pax800: "129jt",
    pax1000: "141jt",
  },
  {
    venue: "Gedung Cendikia UMJ",
    pax300: "99.9jt",
    pax400: "105.9jt",
    pax500: "111.9jt",
    pax600: "117.9jt",
    pax700: "123.9jt",
    pax800: "129.9jt",
    pax1000: "141.9jt",
  },
  {
    venue: "Mektan Auditorium",
    pax300: "96.5jt",
    pax400: "102.5jt",
    pax500: "108.5jt",
    pax600: "114.5jt",
    pax700: "120.5jt",
    pax800: "126.5jt",
    pax1000: "132.5jt",
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