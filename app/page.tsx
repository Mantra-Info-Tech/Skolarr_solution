import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import UniversitySection from "./components/Universities";
import WhyChooseUs from "./components/WhyChooseUs";
import TestimonialSlider from "./components/TestimonialSlider";
import FAQ from "./components/Faq";
import ReadyToStudy from "./components/ReadyToStudy";
import Footer from "./components/Footer";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Why Us?", href: "#why-us" },
  { label: "Success Stories", href: "#success" },
  { label: "FAQs", href: "#faqs" }
];

const formFields = [
  { name: "name", placeholder: "Name", type: "text" },
  { name: "email", placeholder: "Email address", type: "email" },
  { name: "phone", placeholder: "Phone number", type: "tel" },
  { name: "city", placeholder: "City", type: "text" }
];

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar/>
     <HeroSection/>
     <UniversitySection/>
     <WhyChooseUs/>
     <TestimonialSlider/>
     <FAQ/>
     <ReadyToStudy/>
     <Footer/>
    </main>
  );
}
