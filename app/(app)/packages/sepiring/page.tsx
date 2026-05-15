import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AllVenueHero from "./components/AllVenueHero";
import PackageIncludes from "./components/PackageIncludes";
import VenueListSection from "./components/VenueListSection";
import CateringMenuSection from "./components/CateringMenuSection";
import BackdropTypes from "./components/BackdropTypes";
import AdditionalServices from "./components/AdditionalServices";
import BuffetMenuSection from "./components/BuffetMenuSection";
import PackageCTA from "./components/PackageCTA";

// import gallery existing
import WeddingGallery from "../components/gallery/WeddingGallery";

export default function AllInVenuePage() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />
      <AllVenueHero />
      <PackageIncludes />
      <VenueListSection />
      <CateringMenuSection />
      <BackdropTypes />
      <AdditionalServices />
      <BuffetMenuSection />

      {/* reuse existing gallery */}
      <WeddingGallery />

      <PackageCTA />
      <Footer />
    </main>
  );
}