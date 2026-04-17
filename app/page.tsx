import Script from "next/script";
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
    <>
      <Script id="gtm-script" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PPGCCBJ');`}
      </Script>
      <Script
        id="salesmax-loader"
        src="https://salesmax.ai/formdata/js/v1/index.js"
        strategy="afterInteractive"
      />
      <Script id="salesmax-config" strategy="afterInteractive">
        {`window.salesmaxDataLayer = window.salesmaxDataLayer || {};
window.salesmaxDataLayer.version = 'v1';
window.salesmaxDataLayer.account = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJqdGkiOiI3ZHFtX3hfcndOam5jZXhVZGRRNWhRIiwic3ViIjoiNjgwMjFhMjQtMmUyZS00NmE5LWIzMmYtZTcxNWFiYjI3YmI5IiwiaWF0IjoxNzc2MzE5MzIzfQ.rM8pLwJVwMWe_qFsNI_TVyl3PyC64pl8vstVS-x42NZtXFqw8ewexxZVED9AjUm5';`}
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
        <HeroSection />
        <UniversitySection />
        <WhyChooseUs />
        <TestimonialSlider />
        <FAQ />
        <ReadyToStudy />
        <Footer />
      </main>
    </>
  );
}
