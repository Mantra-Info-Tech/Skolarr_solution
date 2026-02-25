"use client";

import React from 'react';
import Image from 'next/image';
import LeadFormTrigger from "./LeadFormTrigger";

const ReadyToStudy = () => {
  // Mock array for the background collage
 

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-gray-50 flex items-center justify-center py-10">
      
      {/* 1. BACKGROUND COLLAGE GRID */}
      <div className="absolute inset-0   gap-4 p-10 scale-105 pointer-events-none">
 
          <div  className="relative w-full h-full min-h-[150px] overflow-hidden rounded-3xl shadow-sm p-4">
            <Image
              src={'/ReadyToStudy.png'}
              alt="Students"
              fill
              className="object-cover"
            />
          </div>
      
      </div>

      {/* 2. OVERLAY CTA CARD */}
      <div className="relative z-10 w-[90%] max-w-4xl">
        <div 
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 shadow-2xl shadow-gray-200/50 text-center relative overflow-hidden"
          style={{
            // This replicates the subtle topographical/blob pattern in your image
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 350 150 250 250 200C350 150 400 50 400 0' stroke='%23f1f1f1' stroke-width='2' fill='none'/%3E%3Cpath d='M0 300C120 280 200 150 300 100C350 80 400 20 400 0' stroke='%23f5f5f5' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover'
          }}
        >
          {/* Main Content */}
          <h2 className="text-lg md:text-3xl lg:text-5xl font-medium text-[#1a1a1a] tracking-tight mb-8">
            Ready to Study Abroad?
          </h2>
          
          <LeadFormTrigger
            label="Get Free Counselling"
            source="Ready To Study CTA"
            className="bg-[#262626] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-black hover:scale-105 transition-all duration-300 shadow-xl"
          />
        </div>
      </div>

    </section>
  );
};

export default ReadyToStudy;
