import { domesticCourseCategories } from "@/app/lib/domesticCourses";

export default function DomesticCoursesSection() {
  return (
    <section id="domestic-courses" className="bg-[#f7f7f7] px-6 py-20 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-medium text-[#111111] md:text-5xl">Courses Available in Domestic</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600">
            Explore category-wise programs available across medical, engineering, pharmacy, nursing, science, arts, law, commerce, management, and MBA tracks in India.
          </p>
        </div>

        <div className="space-y-4">
          {domesticCourseCategories.map((category) => (
            <details
              key={category.title}
              className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-xl font-semibold text-[#1a1a1a] md:text-2xl">
                <div className="flex items-center justify-between gap-4">
                  <span>{category.title}</span>
                  <span className="text-sm text-gray-500">{category.courses.length} courses</span>
                </div>
              </summary>
              <ul className="mt-4 grid grid-cols-1 gap-2 border-t border-gray-100 pt-4 md:grid-cols-2">
                {category.courses.map((course) => (
                  <li key={course} className="text-sm leading-relaxed text-gray-700">
                    {course}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
