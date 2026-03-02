"use client";
import { useState } from "react";
import Image from "next/image";
import LeadFormTrigger from "./LeadFormTrigger";

// Sample Data Structure (You can add all universities from the PDF here)
const universityData = {
  UK: [
    { name: "University of Hertfordshire", domain: "herts.ac.uk", logo: "University_of_Hertfordshire.webp" },
    { name: "University of Birmingham", domain: "birmingham.ac.uk", logo: "University_of_Birmingham.webp" },
    { name: "University of Bristol", domain: "bristol.ac.uk", logo: "University_of_Bristol.webp" },
    { name: "University of Surrey", domain: "surrey.ac.uk", logo: "University_of_Surrey.webp" },
    { name: "University of Leicester", domain: "appollouniversity.edu.in", logo: "Leicester.webp" },
  ],
  Canada: [
    { name: "University of Victoria", domain: "uvic.ca", logo: "University_of_Victoria.webp" },
    { name: "University of Windsor", domain: "uwindsor.ca", logo: "University_of_Windsor.webp" },
    { name: "University of Manitoba", domain: "umanitoba.ca", logo: "University_of_Manitoba.webp" },
    { name: "Wilfrid Laurier University", domain: "wlu.ca", logo: "Wilfrid_Laurier_University.jpg" },
    { name: "Thompson Rivers University", domain: "tru.ca", logo: "Thompson_Rivers_University.webp" },
  ],
  Ireland: [
    { name: "Trinity College Dublin", domain: "tcd.ie", logo: "Trinity_College.webp" },
    { name: "University College Dublin", domain: "ucd.ie", logo: "University_Dublin.webp" },
    { name: "University of Galway", domain: "galway.ie", logo: "Galway.webp" },
    { name: "University of Limerick", domain: "ul.ie", logo: "Univercity_Limerick.webp" },
    { name: "University College Cork", domain: "ucc.ie", logo: "University_college_Cork.webp" },
    { name: "Dublin City University", domain: "dublincityuniversity.ie", logo: "Dublin_City_University.png" },
  ],
  Australia: [
    { name: "University of New South Wales, Sydney", domain: "unsw.edu.au", logo: "University_of_New_South_Wales_Sydney.webp" },
    { name: "University of Western Australia", domain: "uwa.edu.au", logo: "University_of_Western_Australia.webp" },
    { name: "University of Technology Sydney", domain: "uts.edu.au", logo: "University_of_Technology_Sydney.webp" },
    { name: "Queensland University of Technology", domain: "qut.edu.au", logo: "QUT.png" },
    { name: "Deakin University", domain: "deakin.edu.au", logo: "Deakin_University.webp" },
    { name: "Griffith University", domain: "griffith.edu.au", logo: "Griffith_University.webp" },
  ],
  "United States of America": [
    { name: "(INTO) Oregon State University", domain: "oregonstate.edu", logo: "Oregon_state_university.svg" },
    { name: "State University of New York at Buffalo (SUNY Buffalo)", domain: "buffalo.edu", logo: "State_University_of_New_York_at_Buffalo.png" },
    { name: "University of Central Florida", domain: "ucf.edu", logo: "University_of_Central_Florida.webp" },
    { name: "Virginia Commonwealth University", domain: "vcu.edu", logo: "Virginia_Commonwealth_University.jpg" },
    { name: "University of Maryland Baltimore County", domain: "umbc.edu", logo: "UMBC.png" },
  ],
  France: [
    { name: "KEDGE Business School", domain: "kedge.edu", logo: "KEDGE_Business_School.webp" },
    { name: "NEOMA Business School", domain: "neoma-bs.com", logo: "NEOMA.png" },
    { name: "Skema Business School", domain: "skema.edu", logo: "Skema_Business_School_Paris.jpg" },
    { name: "Burgundy School of Business", domain: "bsb-education.com", logo: "Burgundy_School_of_Business.jpg" },
    { name: "MBA ESG, Paris", domain: "mba-esg.com", logo: "MBA_ESG.png" },
  ],
 
  Germany: [
    { name: "GISMA University of Applied Sciences", domain: "gisma.com", logo: "GISMA_University.webp" },
    { name: "University of Europe for Applied Sciences", domain: "ue-germany.com", logo: "University_of_Europe_for_Applied_Sciences.jpg" },
    { name: "Fresenius University of Applied Sciences", domain: "hs-fresenius.com", logo: "Fresenius_University_of_Applied_Sciences.jpg" },
  ],
};

export default function UniversitySection() {
  const [selectedCountry, setSelectedCountry] =
    useState<keyof typeof universityData>("UK");

  const countries = Object.keys(universityData) as Array<
    keyof typeof universityData
  >;

  return (
    <section id="universities" className="bg-[#f3f4f6] py-20 px-6 lg:px-16">
      <div className="container mx-auto">

        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
            The Best Universities to Study Abroad
          </h2>

          <div className="flex flex-col items-center gap-2">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Select Country
            </label>
            <select
              value={selectedCountry}
              onChange={(e) =>
                setSelectedCountry(e.target.value as keyof typeof universityData)
              }
              className="w-full max-w-[300px] p-3 bg-white border border-gray-200 rounded-lg shadow-sm outline-none text-gray-700 font-medium appearance-none text-center cursor-pointer"
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {universityData[selectedCountry].map((uni, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between min-h-[380px] group"
            >
              {/* University Logo Area */}
              <div className="relative flex-1 w-full p-4 min-h-[140px]">
                <Image
                  src={`/${uni.logo}`}
                  alt={uni.name}
                  fill
                  sizes="(max-width: 640px) 75vw, (max-width: 1024px) 40vw, 22vw"
                  className="object-contain"
                />
              </div>

              {/* University Info & Action */}
              <div className="w-full text-center space-y-6 pt-4 border-t border-gray-50">
                <a
                  href={`https://www.${uni.domain}`}
                  target="_blank"
                  className="text-[#b38b40] text-sm font-semibold hover:underline block break-all"
                >
                  www.{uni.domain}
                </a>

                <LeadFormTrigger
                  label="Enquire Now"
                  source={`University CTA - ${uni.name}`}
                  className="w-full bg-[#2d2d2d] text-white py-4 rounded-full font-medium text-sm hover:bg-black transform transition-transform hover:scale-[1.02] shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
