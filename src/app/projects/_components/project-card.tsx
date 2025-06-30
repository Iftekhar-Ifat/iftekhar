import TechStackBadge from "@/components/shared/tech-stack-badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllBlogsMetadata } from "@/lib/mdx";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function ProjectCard() {
  const projects = await getAllBlogsMetadata();
  return (
    <div className="space-y-4">
      {projects.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blogs/${blog.slug}`}
          className="group block"
        >
          <Card className="flex h-full cursor-pointer py-4 flex-col justify-between border border-border transition-all duration-300 hover:scale-[1.01] hover:border-neutral-400">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="space-y-2">
                  <CardTitle className="line-clamp-2 text-xl leading-tight">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                    {blog.description}
                  </CardDescription>
                </div>
                <ArrowUpRight
                  size={22}
                  className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </div>
              <div className="flex gap-1 items-center">
                <span className="text-muted-foreground text-sm">
                  Techstack:
                </span>
                <TechStackBadge title="Next.js" icon="nextjs" />
                <TechStackBadge title="React.js" icon="react" />
                <TechStackBadge title="Express" icon="postgres" />
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
