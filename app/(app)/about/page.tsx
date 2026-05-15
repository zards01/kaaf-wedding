import Navbar from "@/components/navbar";
import AboutHero from "./components/AboutHero";
import FounderStory from "./components/FounderStory";
import AboutStats from "./components/AboutStats";
import WhyChooseUs from "./components/WhyChooseUs";
import TeamSection from "./components/AboutTeam"
// import AboutGallery from "./components/AboutGallery";
import Gallery from "@/components/gallery";
import AboutCTA from "./components/AboutCTA";
import Footer from "@/components/footer";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <FounderStory />
      <AboutStats />
      <WhyChooseUs />
      <TeamSection />
      <Gallery />
      <AboutCTA />
      <Footer />
    </>
  );
}