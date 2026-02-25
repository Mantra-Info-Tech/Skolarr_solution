"use client";

import Image from "next/image";
import LeadFormTrigger from "./LeadFormTrigger";

const formFields = [
  { name: "name", placeholder: "Name", type: "text" },
  { name: "email", placeholder: "Email address", type: "email" },
  { name: "phone", placeholder: "Phone number", type: "tel" },
  { name: "city", placeholder: "City", type: "text" },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex w-full items-center overflow-hidden bg-[#e8e8e8] py-12 lg:min-h-[800px]"
    >
  
      <div className="absolute inset-0 z-0 hidden md:block">
        <Image
          src="/heronew.png" 
          alt="Graduate background"
          fill
          priority
          className="object-cover object-left lg:object-center"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          <div className="order-1 mt-8 flex flex-col items-center text-center md:mt-[350px] md:items-start md:text-left lg:order-none lg:col-span-7 lg:mt-0 lg:pt-80">
            <div className="flex flex-col items-center gap-6 md:items-start lg:gap-6">
              <div className="flex max-w-xl flex-col items-center justify-start gap-4 pt-8 md:pt-44 lg:pt-44 lg:flex-row lg:items-center">
                <div className="hidden md:block shrink-0">
                <Image
                  src="/celebration.png"
                  alt="25+ Years Excellence"
                  width={100}
                  height={100}
                  className="w-24 lg:w-32"
                />
              </div>
                <h1 className="text-4xl font-medium tracking-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl">
                  Empower Your Path, Learn Without Boundaries
                </h1>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <div className="flex -space-x-2">
                <Image
                  src="/avatars-group.png"
                  alt="Students"
                  width={100}
                  height={40}
                  className="h-9 w-auto"
                />
              </div>
              <p className="text-sm font-medium text-gray-600 sm:text-base">
                Trusted by <span className="font-medium text-gray-900">5k+ Students</span>
              </p>
              <a
                href="#success"
                className="text-sm font-medium text-[#b38b40] underline decoration-2 underline-offset-4"
              >
                Read Reviews
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="order-2 flex items-center justify-center lg:order-none lg:col-span-5 lg:justify-end">
            <aside className="w-full max-w-md rounded-[2.5rem] bg-white p-6 shadow-2xl lg:p-8">
              <h2 className="mb-6 text-center text-xl font-medium text-[#1a1a1a] sm:text-2xl">
                Start Your PG Abroad <br /> Journey Today
              </h2>

              <form className="space-y-3">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={`hero-${field.name}`} className="sr-only">
                      {field.placeholder}
                    </label>
                    <input
                      id={`hero-${field.name}`}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-800 outline-none transition-all focus:ring-2 focus:ring-[#b38b40]"
                    />
                  </div>
                ))}

                <div className="relative">
                  <label htmlFor="hero-desired-course" className="sr-only">
                    Desired Course
                  </label>
                  <select
                    id="hero-desired-course"
                    className="w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none"
                  >
                    <option>Desired Course</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="hero-preferred-country" className="sr-only">
                    Preferred Country
                  </label>
                  <select
                    id="hero-preferred-country"
                    className="w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none"
                  >
                    <option>Preferred Country</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="hero-intake" className="sr-only">
                    Intake
                  </label>
                  <select
                    id="hero-intake"
                    className="w-full cursor-pointer appearance-none rounded-xl bg-[#f3f4f6] p-4 text-sm text-gray-500 outline-none"
                  >
                    <option>Intake</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                    <span className="text-xs">▼</span>
                  </div>
                </div>

                <LeadFormTrigger
                  label="Get Free Counselling"
                  source="Hero Form CTA"
                  className="mt-2 w-full rounded-full bg-[#2a2a2a] py-4 text-base font-medium text-white transition-all hover:bg-black active:scale-95"
                />
              </form>

              <div className="mt-6 flex justify-center gap-6 text-[10px] font-medium uppercase tracking-widest text-gray-500">
                <span className="flex items-center gap-1.5">
                   <span className="text-orange-500">✓</span> No Hidden Charges
                </span>
                <span className="flex items-center gap-1.5">
                   <span className="text-orange-500">✓</span> 100% Confidential
                </span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
