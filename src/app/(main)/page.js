import Banner from "@/components/Banner";
import LearningTips from "@/components/LearningTips";
import NewReleases from "@/components/NewReleases";
import PopularCourses from "@/components/PopularCourses";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularCourses />
      <NewReleases />
      <TopInstructors />
      <LearningTips />
    </div>
  );
}
