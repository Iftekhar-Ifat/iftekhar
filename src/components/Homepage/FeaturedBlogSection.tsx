import { sanityFetch } from "@/lib/sanityClient";
import { getFeaturedBlogs } from "@/lib/sanityQuery";
import Link from "next/link";

type FeaturedBlogType = {
  _id: string;
  title: string;
  description: string;
  slug: { current: string; _type: string };
};

export default async function FeaturedBlogSection() {
  const featuredBlogs: FeaturedBlogType[] = await sanityFetch({
    query: getFeaturedBlogs,
    tags: ["featured-blogs"],
  });
  return (
    <div>
      <span className="glow_text py-1 text-4xl md:text-5xl">
        Featured Blogs
      </span>
      {featuredBlogs?.map((blog: any) => (
        <Link
          href={`/blogs/${blog.slug.current}`}
          key={blog._id}
          className="no-underline"
        >
          <div className="p-4 transition-all duration-300 my-6 w-full cursor-pointer hover:scale-[1.02] project_container rounded-lg">
            <div className="flex flex-col">
              <span className="w-full font-medium center text-xl md:text-2xl">
                {blog.title}
              </span>
              <span className="pt-4 text-muted-foreground md:text-lg ">
                {blog.description}
              </span>
            </div>
          </div>
        </Link>
      ))}
      <div className="w-full flex justify-end">
        <Link href="/blogs" className="no-underline">
          <p className="text-lg cursor-pointer hover:scale-105">see more</p>
        </Link>
      </div>
    </div>
  );
}
