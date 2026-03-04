"use client";

import Image from "next/image";
import LeadFormTrigger from "./LeadFormTrigger";

export default function DomesticReadyToStudy() {
  return (
    <section className="relative flex h-[500px] w-full items-center justify-center overflow-hidden bg-gray-50 py-10 md:h-[600px]">
      <div className="absolute inset-0 scale-105 gap-4 p-10 pointer-events-none">
        <div className="relative h-full w-full min-h-[150px] overflow-hidden rounded-3xl p-4 shadow-sm">
          <Image src="/ReadyToStudy.png" alt="Students" fill className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 w-[90%] max-w-4xl">
        <div
          className="relative overflow-hidden rounded-[2rem] bg-white p-10 text-center shadow-2xl shadow-gray-200/50 md:rounded-[3rem] md:p-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 350 150 250 250 200C350 150 400 50 400 0' stroke='%23f1f1f1' stroke-width='2' fill='none'/%3E%3Cpath d='M0 300C120 280 200 150 300 100C350 80 400 20 400 0' stroke='%23f5f5f5' stroke-width='2' fill='none'/%3E%3C/svg%3E\")",
            backgroundSize: "cover"
          }}
        >
          <h2 className="mb-8 text-lg font-medium tracking-tight text-[#1a1a1a] md:text-3xl lg:text-5xl">
            Ready to Start Your Domestic PG Journey?
          </h2>

          <LeadFormTrigger
            label="Get Free Counselling"
            source="Domestic Ready To Study CTA"
            className="rounded-full bg-[#262626] px-10 py-4 text-lg font-medium text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-black"
          />
        </div>
      </div>
    </section>
  );
}
