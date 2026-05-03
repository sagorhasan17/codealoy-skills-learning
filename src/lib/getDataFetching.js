export const allCoursesData = async () => {
  const resCourses = await fetch(
    "https://codealoy-skills-learning.vercel.app/course.json",
  );
  const courses = await resCourses.json();
  return courses;
};
