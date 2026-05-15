import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Packages from "@/components/packages";
import Gallery from "@/components/gallery";
import Testimonials from "@/components/testimonials";
import TrustStats from "@/components/trust-stats";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import WhyChooseUs from "@/components/why-choose-us";
import ProcessSection from "@/components/process-section";
import FinalCTA from "@/components/finalcta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <WhyChooseUs />
      <ProcessSection />
      <Gallery />
      <Testimonials />
      <TrustStats />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}