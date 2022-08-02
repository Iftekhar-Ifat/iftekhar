import React, { useEffect, useState } from "react";
import styles from "../../styles/HomePage/HomePage.module.css";

const BlogSection = () => {
    const [featuredBlog, setFeaturedBlog] = useState([]);

    useEffect(() => {
        fetch("./asset/blog-data/featured_blog.json")
            .then((res) => res.json())
            .then((data) => {
                setFeaturedBlog(data);
            });
    }, []);
    return (
        <>
            <div
                className={`font-medium text-3xl pb-4 md:text-5xl ${styles.glow_text}`}
            >
                Featured Blogs
            </div>
            {featuredBlog.length
                ? featuredBlog.map((blog) => (
                      <div
                          className={`p-4 my-6 w-full cursor-pointer hover:scale-[1.01] ${styles.project_container}`}
                      >
                          <div className="flex flex-col">
                              <span className="w-full font-medium center text-xl md:text-2xl">
                                  {blog.title}
                              </span>
                              <span className="pt-4 text-lg text-gray ">
                                  {blog.description}
                              </span>
                          </div>
                      </div>
                  ))
                : null}
            <div className="w-full flex justify-end">
                <button>see more</button>
            </div>
        </>
    );
};

export default BlogSection;
