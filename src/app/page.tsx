import IntroSection from "@/components/Homepage/IntroSection";
import SkillSection from "@/components/Homepage/SkillSection";

export default function Home() {
  return (
    <div className="mt-10 md:px-[16%]">
      <IntroSection />
      <div className="hr_line"></div>
      <SkillSection />
      <svg
        width="13"
        height="11"
        role="img"
        aria-label="Vercel logo"
        className="inline-flex mr-1"
      >
        <use href="/sprite.svg#vercel" />
      </svg>
    </div>
  );
}
