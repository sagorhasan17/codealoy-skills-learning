"use client";

import { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { GrFormSubtract } from "react-icons/gr";

const curriculumData = [
  {
    title: "Introduction",
    lessons: ["Course Overview", "Setup Environment", "Basic Concepts"],
  },
  {
    title: "Frontend Development",
    lessons: ["HTML & CSS", "JavaScript Basics", "React Fundamentals"],
  },
  {
    title: "Backend Development",
    lessons: ["Node.js Intro", "API Development", "Database Integration"],
  },
  {
    title: "Deployment",
    lessons: ["Build & Optimize", "Deploy to Vercel", "Best Practices"],
  },
];

const CourseCurriculum = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Course Curriculum</h2>

      <div className="space-y-4">
        {curriculumData.map((section, index) => (
          <div
            key={index}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="text-white font-medium">{section.title}</span>

              <span className="text-[#5271FF] text-xl cursor-pointer">
                {openIndex === index ? <GrFormSubtract /> : <FiPlus />}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 space-y-2">
                {section.lessons.map((lesson, i) => (
                  <p
                    key={i}
                    className="text-sm text-gray-400 flex items-center gap-2"
                  >
                    <FaCaretRight /> {lesson}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCurriculum;
