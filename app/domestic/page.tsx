import Script from "next/script";
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
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPGCCBJ');`}
      </Script>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PPGCCBJ"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
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
    </>
  );
}
