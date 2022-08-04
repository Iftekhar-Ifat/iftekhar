import React from "react";
import styles from "../../styles/projects/projects.module.css";
import Link from "next/link";
import { sanityClient } from "../../lib/sanity";

const Blogs = ({ posts }) => {
    return (
        <>
            <div
                className={`flex justify-center pt-4 pb-8 font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                Blogs
            </div>
            {posts.length
                ? posts.map((blog) => (
                      <Link href="/">
                          <div
                              key={blog._id}
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
        </>
    );
};

export const getServerSideProps = async () => {
    const query = `*[ _type == "post"]{_id,title,description}`;

    const posts = await sanityClient.fetch(query);

    return {
        props: {
            posts,
        },
    };
};

export default Blogs;
