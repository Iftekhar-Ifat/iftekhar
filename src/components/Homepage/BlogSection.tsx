import { sanityClient } from "@/lib/sanityClient";
import Link from "next/link";

export default async function BlogSection() {
  const featuredBlogs = await sanityClient.fetch(
    `*[_type == "post" && "Featured Blogs" in categories[]-> title] {_id, title, description, slug}`
  );
  return (
    <>
      <div className="glow_text py-1 text-3xl md:text-5xl">Featured Blogs</div>
      {featuredBlogs?.map((blog: any) => (
        <div key={blog._id}>
          <Link href={`/blogs/${blog.slug.current}`} key={blog._id}>
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
      <div className="w-full flex justify-end">
        <Link href="/blogs">
          <p className="text-lg cursor-pointer hover:scale-105">see more</p>
        </Link>
      </div>
    </>
  );
}
