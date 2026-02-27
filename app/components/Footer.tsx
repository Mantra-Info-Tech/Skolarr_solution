import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, PhoneIcon as Whatsapp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f3f4f6] pt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-3 space-y-6">
            <div className="relative w-48 h-20">
              <Image
                src="/logo.png" // Replace with your actual logo path
                alt="Skolarrs Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              We are the leading overseas educational Consultancy providing services to hundreds of students every year since 2001.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[#a67c52] font-medium text-lg">Quick Links</h4>
            <ul className="space-y-4 text-gray-800 font-medium">
              <li><Link href="/" className="hover:text-[#a67c52] transition-colors">Home</Link></li>
              <li><Link href="/why-us" className="hover:text-[#a67c52] transition-colors">Why Us?</Link></li>
              <li><Link href="/success-stories" className="hover:text-[#a67c52] transition-colors">Success Stories</Link></li>
              <li><Link href="/faqs" className="hover:text-[#a67c52] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[#a67c52] font-medium text-lg">Useful Links</h4>
            <ul className="space-y-4 text-gray-800 font-medium">
              <li><Link href="/privacy-policy" className="hover:text-[#a67c52] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#a67c52] transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Address */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h4 className="text-[#a67c52] font-medium text-lg">Contact Us</h4>
              <div className="text-gray-800 font-medium space-y-2">
                <p>0422-4370044</p>
                <p>+91 9790 444 443</p>
                <p className="break-all">info@skolarrssolutions.com</p>
                <Link href="skolarrssolutions.com" className="text-[#a67c52] hover:underline">
                 skolarrssolutions.com
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[#a67c52] font-medium text-lg">Address</h4>
              <p className="text-gray-800 font-medium text-sm leading-relaxed">
                1515, 3rd Floor, The Grand Hub<br />
                Opp Varatharaja Mill, Avinashi Road<br />
                Peelamedu, Coimbatore - 641004
              </p>
            </div>
          </div>

          {/* Column 5: Socials */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[#a67c52] font-medium text-lg">Get in Touch</h4>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.facebook.com/share/17oYj7qz3X/?mibextid=wwXIfr"
                className="h-10 w-10 p-1 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all flex items-center justify-center"
              >
                <Facebook size={21} strokeWidth={2} />
              </Link>
              <Link
                href="https://www.instagram.com/skolarrs_solutions?igsh=c3o4Y24wMXlqYzJ3"
                className="h-10 w-10 p-1 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all flex items-center justify-center"
              >
                <Instagram size={21} strokeWidth={2} />
              </Link>
              <Link
                href="https://wa.me/yournumber"
                target="_blank"
                aria-label="WhatsApp"
                className="group h-10 w-10 p-1 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:border-[#a67c52] transition-all flex items-center justify-center"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block"
                  aria-hidden="true"
                >
                  <path
                    d="M32.3778 10.1699C31.5458 8.33154 30.3516 6.68104 28.8353 5.25866C27.319 3.84971 25.5611 2.73596 23.602 1.95768C21.5758 1.15256 19.4288 0.75 17.2147 0.75C15.0006 0.75 12.8536 1.15256 10.8274 1.95768C8.86829 2.73596 7.11045 3.83629 5.59414 5.25866C4.07784 6.68104 2.88359 8.33154 2.05163 10.1699C1.19284 12.0753 0.75 14.115 0.75 16.2083C0.75 19.8716 2.11869 23.3873 4.62798 26.1783L3.28611 33.4915L10.4249 30.3113C12.5584 31.2237 14.8262 31.68 17.2013 31.68C19.4153 31.68 21.5623 31.2774 23.5886 30.4723C25.5477 29.694 27.3055 28.5937 28.8218 27.1713C30.3381 25.7489 31.5324 24.0984 32.3643 22.2601C33.2231 20.3546 33.666 18.315 33.666 16.2217C33.6794 14.115 33.2366 12.0888 32.3778 10.1699Z"
                    stroke="#141414"
                    strokeWidth="1.8"
                    className="group-hover:stroke-white"
                  />
                  <path
                    d="M23.8971 19.2933C23.1994 18.9444 22.6895 18.7297 22.3272 18.5955C22.0991 18.515 21.5623 18.2734 21.3745 18.4211C20.784 18.9041 20.1534 20.2728 19.4824 20.5278C17.8185 20.2057 16.2754 19.0651 15.0677 17.8977C14.531 17.3878 13.538 15.9386 13.3233 15.5495C13.283 15.1469 14.0076 14.6102 14.1686 14.3015C15.0006 13.3622 14.3699 12.7718 14.2626 12.3827C14.0747 11.9801 13.7527 11.2555 13.4709 10.6651C13.2294 10.2759 13.1756 9.69893 12.7462 9.48424C10.9213 8.54493 9.87469 10.4235 9.4453 11.4031C6.8555 17.6428 22.4211 29.5183 25.5879 21.3329C25.7489 20.6217 25.6818 20.3533 25.4403 20.0313C24.9572 19.6958 24.3936 19.5482 23.8971 19.2933Z"
                    stroke="#141414"
                    strokeWidth="1.8"
                    className="group-hover:stroke-white"
                  />
                </svg>
              </Link>
              <Link
                href="https://youtube.com/@infoskolarrssolutions?si=Gtpg8RZ1p_kw_DfH"
                className="h-10 w-10 p-1 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all flex items-center justify-center"
              >
                <Youtube size={21} strokeWidth={2} />
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#0b112b] py-6 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
          <p className="flex items-center gap-1">
            <span className="text-[#a67c52] font-medium">© {currentYear}</span> Skolarrs Solutions . All Rights Reserved
          </p>
          <p className="opacity-80">
            Designed&Developed By &nbsp;&nbsp;
            <a
              href="https://web.mantrainfotechs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:underline"
            >
              mits
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
