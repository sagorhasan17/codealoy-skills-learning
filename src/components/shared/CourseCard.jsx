import { Button, Separator } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const CourseCard = ({ course }) => {
  return (
    <div className="group p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md not-[hover]:hover:border-[#5271FF]/50 hover:bg-white/10 transition-all duration-300 text-center">
      <div className="w-full h-50 mx-auto mb-4">
        <Image
          src={course.image}
          alt={course.title}
          width={200}
          height={200}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <h3 className="text-md font-semibold text-white group-hover:text-[#5271FF] transition">
        {course.title}
      </h3>

      <p className="text-sm text-gray-400">{course.instructor}</p>

      <div className="mt-3 text-xs text-gray-400 flex justify-center gap-3 mb-6">
        <span className="flex justify-between gap-1">
          <FaStar className="text-yellow-500" /> {course.rating}
        </span>
        <Separator orientation="vertical" className="bg-gray-500 h-4" />
        <span>{course.level}</span>
      </div>
      <Link href={`/all-courses/${course.id}`}>
        <Button
          variant="bordered"
          className="border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white rounded-md px-5 transition delay-100"
        >
          View Details
        </Button>
      </Link>
    </div>
  );
};

export default CourseCard;
