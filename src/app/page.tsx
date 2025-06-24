import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper className="my-20">
      <Button className="font-mono">Hello</Button>
      <Icons.logo />
      <ThemeToggle />
    </MaxWidthWrapper>
  );
}
