import CourseCard from "@/components/shared/CourseCard";
import { allCoursesData } from "@/lib/getDataFetching";

const AllCoursesPage = async () => {
  const courses = await allCoursesData();

  return (
    <section className="min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            All Courses
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Explore all available courses and start learning today!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCoursesPage;
