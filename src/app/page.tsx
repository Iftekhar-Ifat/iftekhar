import FeaturedBlogSection from "@/components/Homepage/FeaturedBlogSection";
import IntroSection from "@/components/Homepage/IntroSection";
import FeaturedProjectSection from "@/components/Homepage/FeaturedProjectSection";
import SkillSection from "@/components/Homepage/SkillSection";
import FeaturedPublicationSection from "@/components/Homepage/FeaturedPublicationSection";

export default function Home() {
  return (
    <div className="md:px-[16%]">
      <IntroSection />
      <div className="hr_line"></div>
      <SkillSection />
      <div className="hr_line"></div>
      <FeaturedPublicationSection />
      <div className="hr_line"></div>
      <FeaturedProjectSection />
      <div className="hr_line"></div>
      <FeaturedBlogSection />
    </div>
  );
}
