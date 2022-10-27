import React from "react";
import styles from "../../styles/HomePage/HomePage.module.css";
import featuredBlog from "../../public/asset/blog-data/featured_blog.json";
import Link from "next/link";

const BlogSection = () => {
    return (
        <>
            <div
                className={`font-medium text-3xl pb-4 md:text-5xl ${styles.glow_text}`}
            >
                Featured Blogs
            </div>
            {featuredBlog.length
                ? featuredBlog.map((blog) => (
                      <Link href={`/blogs/${blog.slug}`} key={blog.id}>
                          <div
                              className={`p-4 my-6 w-full cursor-pointer hover:scale-[1.01] ${styles.project_container}`}
                          >
                              <div className="flex flex-col">
                                  <span className="w-full font-medium center text-xl md:text-2xl">
                                      {blog.title}
                                  </span>
                                  <span className="pt-4 text-base md:text-lg text-gray ">
                                      {blog.description}
                                  </span>
                              </div>
                          </div>
                      </Link>
                  ))
                : null}
            <div className="w-full flex justify-end">
                <Link href="/blogs">
                    <p className="text-white cursor-pointer hover:scale-105">
                        see more
                    </p>
                </Link>
            </div>
        </>
    );
};

export default BlogSection;
