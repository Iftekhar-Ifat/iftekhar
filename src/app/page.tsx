import IntroSection from "@/components/home/intro-section";
import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-8 md:my-10">
      <IntroSection />
    </MaxWidthWrapper>
  );
}
