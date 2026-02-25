"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LeadFormTrigger from "./LeadFormTrigger";

const faqs = [
  {
    question: "What are the basic requirements to study abroad?",
    answer: "Requirements vary significantly depending on whether you are applying to UK universities or looking at universities in Australia for international students. Generally, you will need academic transcripts, English proficiency test scores (IELTS/PTE/TOEFL), a Statement of Purpose (SOP), and Letters of Recommendation (LOR). As leading study abroad consultants, we provide a personalized checklist to ensure your application meets every specific criterion."
  },
  {
    question: "Which countries do you assist with?",
    answer: "The cost depends on the destination and course. However, our education consultancy focuses on finding the best value for your investment. For example, we facilitate MBBS programs in countries like Uzbekistan and Azerbaijan with no donation or capitation fees. We also provide dedicated finance assistance to help you manage tuition and living expenses."
  },
  {
    question: "How much does it cost to study abroad?",
    answer: "The cost depends on the destination and course. However, our education consultancy focuses on finding the best value for your investment. For example, we facilitate MBBS programs in countries like Uzbekistan and Azerbaijan with no donation or capitation fees. We also provide dedicated finance assistance to help you manage tuition and living expenses."
  },
  {
    question: "Are scholarships available at the best universities in the UK and other regions?",
    answer: "Yes, many of the best universities in the UK, Australia, and Canada offer scholarships based on academic merit or extracurricular excellence. Our study overseas consultants work closely with you to identify these opportunities and guide you through the scholarship application process to reduce your financial burden."
  },
  {
    question: "How long does the admission and visa process take?",
    answer: "The timeline depends on the intake sessions of the specific country. Our visa consultancy team ensures that your documentation is visa-ready to avoid unnecessary delays. From your initial expert counselling session to receiving your visa and pre-departure briefings, our abroad study consultancy streamlines the entire journey to be as fast as possible."
  },
   {
    question: "Why should I choose Skolarrs as my study abroad consultants?",
    answer: `With 25 years of excellence, Skolarrs Solutions offers unmatched expertise and 24/7 student support. We don't just help with admissions; we provide a complete ecosystem including career guidance, travel assistance, and global connections to ensure you "Learn Beyond Boundaries."`
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative bg-[#f1f1f1] py-24 px-6 overflow-hidden">
      
      {/* BACKGROUND DECORATIVE IMAGES */}
      <div className="absolute left-4 md:left-20 bottom-1/4 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none">
        <Image 
          src="/document.svg" // Path to your scroll/diploma image
          alt="decoration"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>
      <div className="absolute right-4 md:right-20 top-1/4 w-24 h-24 md:w-32 md:h-32 opacity-80 pointer-events-none">
        <Image 
          src="/faqBulb.svg" 
          alt="decoration"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-[#eab308]">
            We've Got Answers
          </h2>
          <h3 className="text-3xl md:text-4xl font-medium text-gray-900 mt-2">
            Got Questions?
          </h3>
          <p className="text-gray-500 mt-6 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            We're here to clear all your doubts and guide you through every step with clarity and confidence.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 md:p-6 transition-all duration-300 rounded-2xl bg-white shadow-sm border border-transparent ${
                    isOpen ? "mb-4" : ""
                  }`}
                >
                  <span className={`text-left font-medium text-base md:text-lg ${isOpen ? 'text-gray-900' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0">
                    {isOpen ? (
                      <X className="w-5 h-5 text-gray-500" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 text-gray-600 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <p className="text-xl font-medium text-gray-900">Still got questions?</p>
          <LeadFormTrigger
            label="Get a Call back"
            source="FAQ CTA"
            className="bg-[#2d2d2d] text-white px-8 py-3.5 rounded-full font-medium hover:bg-black transition-colors"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
