import IntroSection from "@/components/home/intro-section";
import SkillSection from "@/components/home/skill-section";
import SocialSection from "@/components/home/socials-section";
import Updates from "@/components/home/updates";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-8 md:my-10">
      <div className="space-y-4">
        <IntroSection />
        <SocialSection />
        <Separator />
        <Updates />
        <Separator />
        <SkillSection />
      </div>
    </MaxWidthWrapper>
  );
}
