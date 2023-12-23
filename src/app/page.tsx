import IntroSection from "@/components/Homepage/IntroSection";
import Navbar from "@/components/Navbar/Navbar";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-10 md:px-[16%]">
      <IntroSection />
    </div>
  );
}
