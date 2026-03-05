import Image from "next/image";

const features = [
  {
    title: "1. Career Counselling",
    description:
      "We guide you in choosing the right course and university based on your academic background, career interests, and future goals.",
    points: [
      "One-to-one profile evaluation",
      "Career-focused course selection",
      "Personalized academic guidance"
    ],
    icon: "counselling.png"
  },
  {
    title: "2. Application & Entrance Exam Support",
    description:
      "Our experts assist you throughout the admission process, helping you prepare applications and navigate entrance exam requirements with confidence.",
    points: [
      "Step-by-step application guidance",
      "Entrance exam preparation support",
      "Documentation and submission assistance"
    ],
    icon: "country.png"
  },
  {
    title: "3. Scholarship Assistance",
    description:
      "We help students identify and apply for available scholarships to reduce financial burden and make quality education more accessible.",
    points: [
      "Scholarship eligibility guidance",
      "Assistance with scholarship applications",
      "Financial planning support"
    ],
    icon: "application.png"
  },
  {
    title: "4. Admission Assistance",
    description:
      "We support every stage of your domestic admission journey, including counselling rounds and final selection.",
    points: [
      "End-to-end support",
      "Counselling round guidance",
      "Offer decision support"
    ],
    icon: "support.svg"
  }
];

export default function DomesticWhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#ececec] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-14 text-center text-4xl font-medium text-[#111111] md:text-5xl">
          Why Choose Us for Domestic PG Admissions?
        </h2>

        <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="rounded-[1.75rem] bg-gradient-to-b from-[#1b2a68] to-[#111f5a] px-8 py-9 text-center text-white">
              <p className="text-6xl font-medium leading-none">1000+</p>
              <p className="mt-3 text-2xl font-semibold">Universities & Colleges in India </p>
              <p className="mt-1 text-lg text-white/85">across domestic programs</p>
            </div>
            <div className="rounded-[1.75rem] bg-[#ecd5af] px-8 py-9 text-center text-[#6a4a1f]">
              <p className="text-6xl font-medium leading-none">20,500+</p>
              <p className="mt-3 text-2xl font-semibold">Students guided</p>
              <p className="mt-1 text-lg text-[#6a4a1f]/85">towards the right admissions</p>
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] md:min-h-[420px] lg:col-span-8">
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-[#f5f5f5] p-6 shadow-sm"
            >
              <Image
                src={`/${feature.icon}`}
                alt={feature.title}
                width={36}
                height={36}
                className="h-9 w-9"
              />
              <h3 className="mt-4 text-3xl font-medium text-[#141414]">{feature.title}</h3>
              <p className="mt-4 text-lg leading-relaxed text-[#4a4a4a]">{feature.description}</p>
              <ul className="mt-6 space-y-2 border-t border-gray-200 pt-4">
                {feature.points.map((point) => (
                  <li key={point} className="text-base text-[#222222]">
                    <Image
                      src="/starpoint.png"
                      alt="point"
                      width={16}
                      height={16}
                      className="mr-2 inline h-4 w-4"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
