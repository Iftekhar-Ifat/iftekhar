import React, { useEffect, useState } from "react";
import styles from "../../styles/projects/projects.module.css";
const Blogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);

    useEffect(() => {
        fetch("./asset/blog-data/blogs.json")
            .then((res) => res.json())
            .then((data) => {
                setAllBlogs(data);
            });
    }, []);
    return (
        <>
            <div
                className={`flex justify-center pt-4 pb-8 font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                Blogs
            </div>
            {allBlogs.length
                ? allBlogs.map((blog) => (
                      <div
                          key={blog.id}
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
                  ))
                : null}
        </>
    );
};

export default Blogs;
