import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Highlights from "@/components/Highlights";
import Solutions from "@/components/Solutions";
import Advantages from "@/components/Advantages";
import ContactForm from "@/components/ContactForm";
import BrazilMap from "@/components/BrazilMap";
import LawyerProfile from "@/components/LawyerProfile";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <PracticeAreas />
        <Highlights />
        <Solutions />
        <Advantages />
        <ContactForm />
        <BrazilMap />
        <LawyerProfile />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
