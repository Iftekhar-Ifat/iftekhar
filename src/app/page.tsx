import BlogSection from "@/components/Homepage/BlogSection";
import IntroSection from "@/components/Homepage/IntroSection";
import ProjectSection from "@/components/Homepage/ProjectSection";
import SkillSection from "@/components/Homepage/SkillSection";

export default function Home() {
  return (
    <div className="mt-8 md:px-[16%]">
      <IntroSection />
      <div className="hr_line"></div>
      <SkillSection />
      <div className="hr_line"></div>
      <ProjectSection />
      <div className="hr_line"></div>
      <BlogSection />
    </div>
  );
}
