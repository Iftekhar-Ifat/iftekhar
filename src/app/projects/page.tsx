import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "./_components/project-card";

export default function Projects() {
  return (
    <MaxWidthWrapper className="my-4 md:my-8">
      <div className="flex items-center justify-between pb-4">
        <span className="font-mono text-2xl font-bold tracking-wide">
          Projects
        </span>
      </div>
      <Separator />
      <div className="my-4">
        <ProjectCard />
      </div>
      <div className="italic text-muted-foreground">
        will be adding other previous projects soon...
      </div>
    </MaxWidthWrapper>
  );
}
