import IntroSection from "@/components/home/intro-section";
import SocialSection from "@/components/home/socials-section";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-8 md:my-10">
      <div className="space-y-4">
        <IntroSection />
        <SocialSection />
      </div>
    </MaxWidthWrapper>
  );
}
