"use client";

import { BiWorld } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBolt, FaCalendarAlt, FaLaptop } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

const tips = [
  {
    title: "Stay Consistent",
    desc: "Learning a little every day is more effective than long, irregular sessions.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Build Projects",
    desc: "Apply what you learn by building real-world projects to strengthen your skills.",
    icon: <FaLaptop />,
  },
  {
    title: "Take Notes",
    desc: "Writing notes helps you remember concepts and review them later easily.",
    icon: <LuNotebookPen />,
  },
  {
    title: "Practice Daily",
    desc: "Practice coding or skills daily to improve speed and understanding.",
    icon: <FaBolt />,
  },
  {
    title: "Join Community",
    desc: "Engage with other learners to share knowledge and stay motivated.",
    icon: <BiWorld />,
  },
  {
    title: "Track Progress",
    desc: "Set goals and track your progress to stay focused and motivated.",
    icon: <BsGraphUpArrow />,
  },
];

const LearningTips = () => {
  return (
    <section className="py-20 bg-linear-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white">
            Smart Learning Tips
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm md:text-base">
            Improve your learning efficiency with these simple but powerful
            tips.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 
              hover:border-[#5271FF]/50 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-3xl mb-4 text-white group-hover:text-[#5271FF] transition">
                {tip.icon}
              </div>

              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#5271FF] transition">
                {tip.title}
              </h3>

              <p className="text-sm text-gray-400 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningTips;
