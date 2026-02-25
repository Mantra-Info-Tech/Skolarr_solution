import Image from "next/image";
import {
  FileCheck2,
  FilePenLine,
  Globe2,
  HandCoins,
  Landmark,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "1. Counselling",
    description:
      "Our counselling sessions help students choose the right course, intake, and university based on long-term goals.",
    points: [
      "Career-focused counselling",
      "Future-ready course planning",
      "Interactive sessions with experts",
    ],
    icon: 'counselling.png', 
  },
  {
    title: "2. Test Preparation",
    description:
      "Structured support to improve IELTS, PTE, TOEFL, GRE, and GMAT readiness with practical strategy and mock practice.",
    points: [
      "Simple and effective prep plans",
      "Guided mock test approach",
      "Score improvement roadmap",
    ],
    icon: 'Group.png',
  },
  {
    title: "3. Country & University Selection",
    description:
      "We shortlist best-fit universities by balancing profile strength, budget, ranking goals, and career outcomes.",
    points: [
      "Profile-based university matching",
      "Course and fee comparison",
      "1000+ global options",
    ],
    icon: 'country.png',
  },
  {
    title: "4. Application & Admission",
    description:
      "From SOP and LOR strategy to submission checks, we reduce errors and improve admission chances significantly.",
    points: [
      "Application quality checks",
      "SOP/LOR guidance",
      "Status tracking support",
    ],
    icon: 'application.png',
  },
  {
    title: "5. Scholarships",
    description:
      "We identify relevant scholarships and help optimize applications so students can reduce tuition burden.",
    points: [
      "Targeted scholarship shortlisting",
      "Essay and profile support",
      "Early alert on high-value options",
    ],
    icon: 'scholarship.png',
  },
  {
    title: "6. Education Loan",
    description:
      "End-to-end loan guidance with partner banks and NBFCs to simplify financial documentation and approvals.",
    points: [
      "Loan partner assistance",
      "Financial planning support",
      "Documentation workflow help",
    ],
    icon: 'loan.png',
  },
  {
    title: "7. Visa Processing",
    description:
      "Complete visa assistance with checklist planning, documentation review, and interview prep for better outcomes.",
    points: [
      "Visa document verification",
      "Mock interview support",
      "Country-specific guidance",
    ],
    icon: 'visa.png',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-[#ececec] py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-medium text-[#111111] mb-14">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-[1.75rem] bg-gradient-to-b from-[#1b2a68] to-[#111f5a] px-8 py-9 text-center text-white">
              <p className="text-6xl font-medium leading-none">1000+</p>
              <p className="mt-3 text-2xl font-semibold">University tie-ups</p>
              <p className="mt-1 text-lg text-white/85">supporting you all the way</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#ecd5af] px-8 py-9 text-center text-[#6a4a1f]">
              <p className="text-6xl font-medium leading-none">7500+</p>
              <p className="mt-3 text-2xl font-semibold">Students enrolled</p>
              <p className="mt-1 text-lg text-[#6a4a1f]/85">into their dream universities</p>
            </div>
          </div>

          <div className="lg:col-span-8 relative min-h-[260px] md:min-h-[420px] rounded-[1.75rem] overflow-hidden">
            <Image
              src="/whychooseus.png"
              alt="Students learning together"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {features.slice(0, 4).map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-[#f5f5f5] p-6 shadow-sm"
              >
                <Image
                  src={`/${Icon}`}
                  alt={feature.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 text-[#1c1c1c]"
                />
                <h3 className="mt-4 text-3xl font-medium text-[#141414]">{feature.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#4a4a4a]">{feature.description}</p>
                <ul className="mt-6 border-t border-gray-200 pt-4 space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="text-base text-[#222222]">
                      <Image
                        src="/starpoint.png"
                        alt="point"
                        width={16}
                        height={16}
                        className="inline h-4 w-4 mr-2"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:max-w-[75%] xl:mx-auto">
          {features.slice(4).map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-gray-200 bg-[#f5f5f5] p-6 shadow-sm"
              >
                <Image
                  src={`/${Icon}`}
                  alt={feature.title}
                  width={36}
                  height={36}
                  className="h-9 w-9 text-[#1c1c1c]"
                />
                <h3 className="mt-4 text-3xl font-medium text-[#141414]">{feature.title}</h3>
                <p className="mt-4 text-lg leading-relaxed text-[#4a4a4a]">{feature.description}</p>
                <ul className="mt-6 border-t border-gray-200 pt-4 space-y-2">
                  {feature.points.map((point) => (
                    <li key={point} className="text-base text-[#222222]">
                      <Image
                        src="/starpoint.png"
                        alt="point"
                        width={16}
                        height={16}
                        className="inline h-4 w-4 mr-2"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
