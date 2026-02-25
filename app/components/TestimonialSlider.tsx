"use client";
import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";
import LeadFormTrigger from "./LeadFormTrigger";

const testimonials = [
  {
    rating: "5.0",
    quote: "Got my admission in Canada with full guidance support. Highly recommend!",
    name: "Sanjay M",
    location: "Canada",
    initials: "SM",
  },
  {
    rating: "5.0",
    quote: "The entire process was smooth and stress-free. From university shortlisting to visa approval, the team guided me step by step. I received my offer letter within weeks!",
    name: "Kiran",
    location: "United Kingdom",
    initials: "K",
  },
  {
    rating: "4.0",
    quote: "Their personalized counselling made a huge difference. They helped me refine my SOP and choose the right university based on my career goals.",
    name: "Megha",
    location: "Germany",
    initials: "M",
  },
  {
    rating: "4.9",
    quote: "Expert guidance, transparent process, and excellent visa support. They made my study abroad dream possible!",
    name: "Amir Ali",
    location: "United Kingdom",
    initials: "AA",
  },
];

const TestimonialSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="success" className="bg-[#0b112b] py-20 px-6 lg:px-16 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Real Stories, <span className="text-[#f1a139]">Real Success</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Our expert guidance has helped students confidently secure seats at top colleges, navigate 
              complex admissions, and achieve their dream careers — stress-free and on time.
            </p>
          </div>
          <LeadFormTrigger
            label="Get a Call Back"
            source="Testimonial CTA"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-[#0b112b] transition-all font-medium whitespace-nowrap"
          />
        </div>

        {/* Divider Line */}
        <div className="w-full h-[1px] bg-white/10 mb-12"></div>

        {/* Slider Container */}
        <div className="embla" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-h-[320px]"
              >
                <div className="bg-[#141b3d] border border-white/10 rounded-2xl p-8 h-full flex flex-col justify-between">
                  <div>
                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-6 text-sm font-semibold">
                      <Star className="w-4 h-4 fill-[#28a745] text-[#28a745]" />
                      <span>{item.rating}</span>
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-200 leading-relaxed italic text-[15px]">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Profile Section */}
                  <div className="flex items-center gap-4 mt-8">
                    <div className="w-12 h-12 rounded-full bg-[#0b112b] border border-white/10 flex items-center justify-center font-medium text-sm">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="font-medium text-base">{item.name}</h4>
                      <p className="text-gray-400 text-xs">{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to testimonial ${index + 1}`}
              className="h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300"
              onClick={() => emblaApi?.scrollTo(index)}
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
