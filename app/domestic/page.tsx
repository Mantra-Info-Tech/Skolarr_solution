import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DomesticHeroSection from "../components/DomesticHeroSection";
import DomesticCoursesSection from "../components/DomesticCoursesSection";
import DomesticWhyChooseUs from "../components/DomesticWhyChooseUs";
import DomesticSuccessStories from "../components/DomesticSuccessStories";
import DomesticFaq from "../components/DomesticFaq";
import DomesticReadyToStudy from "../components/DomesticReadyToStudy";

export default function DomesticPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <DomesticHeroSection />
      {/* <DomesticCoursesSection /> */}
      <DomesticWhyChooseUs />
      <DomesticSuccessStories />
      <DomesticFaq />
      <DomesticReadyToStudy />
      <Footer />
    </main>
  );
}
