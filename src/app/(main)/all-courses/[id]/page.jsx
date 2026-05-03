import { allCoursesData } from "@/lib/getDataFetching";
import { Button } from "@heroui/react";
import Image from "next/image";
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { IoIosTimer } from "react-icons/io";

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;
  const courses = await allCoursesData();
  const singleCourse = courses.find((course) => course.id === Number(id));

  return (
    <section className="min-h-screen bg-linear-to-b from-slate-900 via-slate-950 to-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-64 md:h-80 relative rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={singleCourse.image}
              alt={singleCourse.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl md:text-4xl font-extrabold text-white">
              {singleCourse.title}
            </h1>

            <p className="text-gray-400">
              Instructor: {singleCourse.instructor}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex justify-between gap-2">
                <FaStar className="text-yellow-500" /> {singleCourse.rating}
              </span>
              <span>{singleCourse.duration}</span>
              <span className="px-2 py-1 bg-[#5271FF]/20 text-[#5271FF] rounded-md text-xs">
                {singleCourse.level}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed">
              {singleCourse.description}
            </p>

            <Button className="mt-4 bg-[#5271FF] text-white hover:bg-[#3f5ce0] rounded-xl px-6 py-2 shadow-lg shadow-[#5271FF]/30">
              Enroll Now
            </Button>
          </div>
        </div>

        {/* Course Info Section */}
        <div className="mt-14 grid grid-cols-1  gap-10">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-lg font-semibold text-white mb-3">
              Course Info
            </h2>
            <ul className="text-sm text-gray-300 space-y-2">
              <li className="flex items-center gap-2">
                <BiCategory /> Category: {singleCourse.category}
              </li>
              <li className="flex items-center gap-2">
                <GoGoal /> Level: {singleCourse.level}
              </li>
              <li className="flex items-center gap-2">
                <IoIosTimer /> Duration: {singleCourse.duration}
              </li>
              <li className="flex items-center gap-2">
                <FaStar className="text-yellow-500" /> Rating:{" "}
                {singleCourse.rating}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsPage;
