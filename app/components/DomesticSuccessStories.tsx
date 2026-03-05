import Image from "next/image";

const stories = [
  {
    name: "Arjun Nair",
    course: "MBA",
    city: "Kochi",
    quote:
      `“I was confused about which MBA colleges to apply to in India. The Skolarrs team helped me shortlist the right institutions based on my profile and career goals. Their guidance throughout the application process made everything much easier.”
`
  },
  {
    name: "Karthik Subramanian",
    course: "MBA Finance",
    city: " Madurai",
    quote:
      `“I wanted to pursue an MBA but didn’t know which colleges would be the right fit. The counselors explained different options and helped me evaluate them based on my career plans. Their guidance gave me clarity and confidence in my decision.”
`
  },
  {
    name: "Divya Lakshmi",
    course: " MSc Biotechnology ",
    city: "Coimbatore",
    quote:
      `“The entire admission process felt overwhelming at first. Skolarrs provided step-by-step guidance from course selection to final application submission. Their support made the journey much smoother for me.”`
  }
];

export default function DomesticSuccessStories() {
  return (
    <section id="success" className="bg-white px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-[#111111] md:text-5xl">Success Stories</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Real student outcomes from our domestic PG admission guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-3xl border border-gray-200 bg-[#f8f8f8] p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <Image src="/avatars.svg" alt="Student avatar" width={44} height={44} className="h-11 w-11" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1a1a1a]">{story.name}</h3>
                  <p className="text-sm text-gray-500">{story.course} • {story.city}</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-700">{story.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
