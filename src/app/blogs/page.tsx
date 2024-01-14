import { sanityFetch } from "@/lib/sanityClient";
import { getAllBlogs } from "@/lib/sanityQuery";
import { Metadata } from "next";
import Link from "next/link";

type BlogType = {
  _id: string;
  title: string;
  description: string;
  slug: { current: string; _type: string };
};

export const metadata: Metadata = {
  title: "Blogs",
};

export default async function BlogList() {
  const blogs: BlogType[] = await sanityFetch({
    query: getAllBlogs,
    tags: ["blogs"],
  });
  return (
    <div className="mt-8 md:px-[16%]">
      <div className="flex flex-col-reverse justify-between items-center text-3xl md:flex-row md:text-5xl">
        <div className="flex justify-center w-full">
          <div className="glow_text py-1 text-4xl md:text-5xl">Blogs</div>
        </div>
      </div>
      {blogs?.map((blog: BlogType) => (
        <div key={blog._id}>
          <Link
            href={`/blogs/${blog.slug.current}`}
            key={blog._id}
            className="no-underline"
          >
            <div className="p-4 my-6 w-full cursor-pointer hover:scale-[1.01] project_container rounded-lg">
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
        </div>
      ))}
    </div>
  );
}
