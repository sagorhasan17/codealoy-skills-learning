import BannerImage from "@/assets/banner.png";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Image
        src={BannerImage}
        alt="Banner"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-linear-to-br from-[#5271FF]/30 via-black/40 to-black" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-sm text-gray-200 mb-6 backdrop-blur">
          🚀 Learn Smarter with CodeAloy
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-3xl mx-auto">
          Build Your Future with{" "}
          <span className="bg-linear-to-r from-[#5271FF] to-indigo-400 bg-clip-text text-transparent">
            Modern Skills
          </span>
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-base max-w-xl mx-auto">
          Learn web development, design, and tech skills with real-world
          projects and expert mentors.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/courses"
            className="px-6 py-3 rounded-xl bg-[#5271FF] text-white text-sm font-medium 
            shadow-lg shadow-[#5271FF]/30 hover:bg-[#3f5ce0] transition"
          >
            Explore Courses
          </Link>

          <Link
            href="/pricing"
            className="px-6 py-3 rounded-xl border border-white/30 text-white text-sm font-medium 
            hover:bg-white hover:text-black transition"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
