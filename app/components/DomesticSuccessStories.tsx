import Image from "next/image";

const stories = [
  {
    name: "Aarav Sharma",
    course: "MBA",
    city: "Bengaluru",
    quote:
      "Skolarrs helped me shortlist the right colleges and complete my domestic MBA applications on time."
  },
  {
    name: "Nisha Reddy",
    course: "MSc Data Science",
    city: "Hyderabad",
    quote:
      "The counselling was clear and practical. I got guidance for documents, deadlines, and final admission steps."
  },
  {
    name: "Rohan Mehta",
    course: "MS",
    city: "Pune",
    quote:
      "I was confused between programs. Their team mapped options based on my goals and budget."
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
              <p className="text-base leading-relaxed text-gray-700">“{story.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
