"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LeadFormTrigger from "./LeadFormTrigger";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Why Us?", href: "#why-us" },
  { name: "Success Stories", href: "#success" },
  { name: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      target.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", href);
      setIsOpen(false);
    };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between sm:h-24">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Skolarrs Solutions Logo"
              width={100}
              height={80}
              className="h-auto w-24 sm:w-28 md:w-32"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="text-[15px] font-medium text-gray-700 transition-colors hover:text-[#b38b40]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <LeadFormTrigger
              label="Get a Call back"
              source="Navbar CTA"
              className="rounded-full bg-[#2d2d2d] px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-black lg:px-8 lg:py-3"
            />
          </div>

          <button
            className="rounded-md p-2 text-gray-700 md:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div className="space-y-3 border-t border-gray-100 bg-white pb-5 pt-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block rounded-md py-2 text-base font-medium text-gray-700 transition-colors hover:text-[#b38b40]"
                onClick={handleNavClick(link.href)}
              >
                {link.name}
              </Link>
            ))}
            <LeadFormTrigger
              label="Get a Call back"
              source="Navbar Mobile CTA"
              className="mt-1 w-full rounded-xl bg-[#2d2d2d] py-3.5 font-bold text-white"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
