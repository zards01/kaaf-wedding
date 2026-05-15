import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";
import ContactFormSection from "./components/ContactFormSection";
import ContactMap from "./components/ContactMap";
import ContactFAQ from "./components/ContactFAQ";
import ContactCTA from "./components/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />

      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
      <ContactFAQ />
      <ContactCTA />

      <Footer />
    </main>
  );
}