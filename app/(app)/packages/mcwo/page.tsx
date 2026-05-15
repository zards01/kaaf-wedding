import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Faq from "@/components/faq";

// Hero
import MCWOHero from "./components/MCWOHero";

// Engagement
import EngagementPackages from "./components/EngagementPackages";

// Education section
import PlannerOrganizerSection from "./components/PlannerOrganizerSection";

// // Workflow
// import PreparationDaySection from "./components/PreparationDaySection";

// // Pricing
// import CrewPricingSection from "./components/CrewPricingSection";

// Gallery reuse
import WeddingGallery from "../components/gallery/WeddingGallery";

// CTA
import PackageCTA from "./components/PackageCTA";

export default function MCWOEngagementPage() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <MCWOHero />

      {/* Engagement Packages */}
      <EngagementPackages />

      {/* Wedding Planner vs WO */}
      <PlannerOrganizerSection />

      {/* Preparation & The Day */}
      {/* <PreparationDaySection /> */}

      {/* MC + WO Pricing */}
      {/* <CrewPricingSection /> */}

      {/* Existing Gallery */}
      <WeddingGallery />
      <Faq />

      {/* CTA */}
      <PackageCTA />

      <Footer />
    </main>
  );
}