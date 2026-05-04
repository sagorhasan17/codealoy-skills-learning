"use client";

import CourseCard from "@/components/shared/CourseCard";
import { allCoursesData } from "@/lib/getDataFetching";
import { useEffect, useState } from "react";

const AllCoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await allCoursesData();
      setCourses(data);
      setFilteredCourses(data);
    };
    loadCourses();
  }, []);

  const handleSearch = () => {
    const result = courses.filter((course) =>
      course.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredCourses(result);
  };

  return (
    <section className="min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            All Courses
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base">
            Explore all available courses and start learning today!
          </p>
        </div>

        {/* Search Box */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#5271FF]"
          />

          <button
            onClick={handleSearch}
            className="px-5 py-2 rounded-xl bg-[#5271FF] text-white hover:bg-[#5271FF80] transition cursor-pointer"
          >
            Search
          </button>
        </div>

        {/* Courses Lay */}
        {filteredCourses.length === 0 ? (
          <p className="text-center text-gray-400">No courses found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl 
              hover:border-[#5271FF]/40 transition-all duration-300"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCoursesPage;
