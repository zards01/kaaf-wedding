import GalleryHero from "./components/GalleryHero";
import FeaturedGallery from "./components/FeaturedGallery";
import GalleryCategories from "./components/GalleryCategories";
import GallerySection from "./components/GallerySection";
import WeddingGalleryGrid from "./components/WeddingGalleryGrid";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import GalleryCTA from "./components/GalleryCTA";
export default function GalleryPage() {
  return (
    <main className="relative bg-black overflow-hidden">
<Navbar />
      {/* ================= HERO ================= */}
      
      <GalleryHero />

      {/* ================= FEATURED SLIDER ================= */}
      <FeaturedGallery />

      {/* ================= CATEGORY FILTER + MASONRY ================= */}
      <GallerySection />

      {/* ================= EXTRA GRID ================= */}
      <WeddingGalleryGrid />
      <GalleryCTA />
      <Footer />

    </main>
  );
}