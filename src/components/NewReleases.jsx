import CourseCard from "@/components/shared/CourseCard";
import { allCoursesData } from "@/lib/getDataFetching";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const NewReleases = async () => {
  const courses = await allCoursesData();

  const newCourses = courses.slice(1, 5);

  return (
    <section className="py-20 bg-linear-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">
              New Releases
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Check out the latest courses added to our platform!
            </p>
          </div>

          <Link
            href="/all-courses"
            className="flex items-center gap-2 text-sm text-white hover:text-[#5271FF] transition-all duration-300"
          >
            View All <FaArrowRightLong />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newCourses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl 
              hover:border-[#5271FF]/40 transition-all duration-300"
            >
              <div className="absolute top-3 left-3 text-xs px-2 py-1 rounded-md bg-[#5271FF] text-white">
                NEW
              </div>

              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;
