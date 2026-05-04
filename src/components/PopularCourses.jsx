import { allCoursesData } from "@/lib/getDataFetching";
import CourseCard from "./shared/CourseCard";

const PopularCourses = async () => {
  const courses = await allCoursesData();

  const popularCourses = courses.filter((course) => course.rating >= 4.8);
  const topThreeCourses = popularCourses.slice(0, 3);

  return (
    <section className="py-20 bg-linear-to-b from-black via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Popular Courses
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Explore our most popular courses and start learning today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-14">
          {topThreeCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl 
              hover:border-[#5271FF]/40 transition-all duration-300"
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
