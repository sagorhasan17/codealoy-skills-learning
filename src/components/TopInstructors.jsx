"use client";

import { Separator } from "@heroui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const instructors = [
  {
    name: "John Doe",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 4.9,
    students: "12K+ Students",
  },
  {
    name: "Sarah Smith",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 4.8,
    students: "9K+ Students",
  },
  {
    name: "Michael Lee",
    role: "React Expert",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    rating: 4.9,
    students: "15K+ Students",
  },
  {
    name: "Emily Johnson",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    rating: 4.7,
    students: "8K+ Students",
  },
];

const TopInstructors = () => {
  return (
    <section className="py-20 bg-linear-to-b from-black via-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Top Instructors
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Learn from industry experts with real-world experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {instructors.map((ins, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md 
              hover:border-[#5271FF]/50 hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <Image
                  src={ins.image}
                  alt={ins.name}
                  width={96}
                  height={96}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>

              <h3 className="text-lg font-semibold text-white group-hover:text-[#5271FF] transition">
                {ins.name}
              </h3>

              <p className="text-sm text-gray-400">{ins.role}</p>

              <div className="mt-3 text-xs text-gray-400 flex justify-center gap-3">
                <span className="flex justify-between gap-1">
                  <FaStar className="text-yellow-500" /> {ins.rating}
                </span>
                <Separator orientation="vertical" className="bg-gray-500 h-4" />
                <span>{ins.students}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
