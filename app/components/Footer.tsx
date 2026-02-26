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
                <p>+91 9514513331</p>
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
              <Link href="#" className="p-2 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="p-2 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all">
                <Instagram size={20} />
              </Link>
                <Link 
                href="https://wa.me/yournumber" 
                target="_blank"
                className="group p-2 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:border-[#a67c52] transition-all flex items-center justify-center"
              >
                <Image 
                  src="/whatsapp.svg" 
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  className="transition-all group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                />
              </Link>
              <Link href="#" className="p-2 border border-gray-400 rounded-md hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all">
                <Youtube size={20} />
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
            Designed&Developed By 
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