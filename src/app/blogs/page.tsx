import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import BlogCard from "./_components/blog-card";

export default function Blogs() {
  return (
    <MaxWidthWrapper className="my-4 md:my-8">
      <div className="flex items-center justify-between pb-4">
        <span className="font-mono text-2xl font-bold tracking-wide">
          Blogs
        </span>
      </div>
      <Separator />
      <div className="my-4">
        <BlogCard />
      </div>
    </MaxWidthWrapper>
  );
}
