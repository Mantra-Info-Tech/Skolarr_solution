"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import LeadFormTrigger from "./LeadFormTrigger";

const faqs = [
  {
    question: "Who should apply for domestic PG counselling?",
    answer:
      "Students who are planning postgraduate admissions in India such as MBA, MSc, MS, M.Tech, or other allied PG programs can apply for counselling. Our services support both fresh graduates and working professionals looking to advance their academic and career goals."
  },
  {
    question: "How does Skolarr Solutions help in choosing the right PG college in India?",
    answer:
      "Our expert counsellors evaluate your academic background, entrance exam scores, specialization interests, location preference, and budget. Based on this detailed profile assessment, we recommend top PG colleges and universities in India that match your career goals."
  },
  {
    question: "Do you support complete admission documentation?",
    answer:
      "Yes. We offer end-to-end admission support including application form assistance, document verification, SOP/profile guidance, and submission timelines. Our team ensures your PG applications are accurate, complete, and submitted on time."
  },
  {
    question: "Can you guide me on scholarships and education loans?",
    answer:
      "Yes. We guide students on available scholarships for postgraduate courses and assist in identifying education loan options based on the chosen university, program, and financial requirements"
  },
  {
    question: "How long does the PG admission process in India usually take?",
    answer:
      "The PG admission timeline in India depends on the university and program. Typically, the process may take a few weeks to a few months, including entrance exams, application submission, and admission confirmation. Our team helps you plan early to ensure a smooth and timely admission process."
  }
];

export default function DomesticFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="relative overflow-hidden bg-[#f1f1f1] px-6 py-24">
      <div className="pointer-events-none absolute bottom-1/4 left-4 h-24 w-24 opacity-80 md:left-20 md:h-32 md:w-32">
        <Image src="/document.svg" alt="decoration" width={120} height={120} className="object-contain" />
      </div>
      <div className="pointer-events-none absolute right-4 top-1/4 h-24 w-24 opacity-80 md:right-20 md:h-32 md:w-32">
        <Image src="/faqBulb.svg" alt="decoration" width={150} height={150} className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-[#eab308] md:text-5xl">We&apos;ve Got Answers</h2>
          <h3 className="mt-2 text-3xl font-medium text-gray-900 md:text-4xl">Domestic PG FAQs</h3>
          <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
            Clear answers for your domestic PG planning, admissions, and counselling process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between rounded-2xl border border-transparent bg-white p-5 text-left shadow-sm transition-all duration-300 md:p-6 ${
                    isOpen ? "mb-4" : ""
                  }`}
                >
                  <span
                    className={`text-left text-base font-medium md:text-lg ${
                      isOpen ? "text-gray-900" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span className="ml-4 inline-flex flex-shrink-0">
                    {isOpen ? <X className="h-5 w-5 text-gray-500" /> : <Plus className="h-5 w-5 text-gray-500" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 text-sm leading-relaxed text-gray-600 md:text-base">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-6 md:flex-row">
          <p className="text-xl font-medium text-gray-900">Still got questions?</p>
          <LeadFormTrigger
            label="Get a Call back"
            source="Domestic FAQ CTA"
            className="rounded-full bg-[#2d2d2d] px-8 py-3.5 font-medium text-white transition-colors hover:bg-black"
          />
        </div>
      </div>
    </section>
  );
}
