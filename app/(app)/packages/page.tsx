import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
// import Testimonials from "@/components/testimonials";
// import PackageTabs from "./components/category/PackageTabs"
import PackageCategoryCard from "./components/categories/PackageCategoryCard"
import HeroPackages from "./components/hero/HeroPackages"
import WhyChooseUs from "./components/why-us/WhyChooseUs"
import WeddingJourney from "./components/process/WeddingJourney";
import WeddingGallery from "./components/gallery/WeddingGallery";
import Testimonials from "./components/testimonials/Testimonials";
import PackageCTA from "./components/cta/PackageCTA";

export default function PackagesPage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <HeroPackages />
      {/* <PackageTabs /> */}
      <PackageCategoryCard />
      <WhyChooseUs />
      <WeddingJourney />
      <WeddingGallery />
      <Testimonials />
      <PackageCTA />
      <Footer />

    </main>
  )
}