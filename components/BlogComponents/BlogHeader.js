import React from "react";
import styles from "../../styles/Blog/BlogHeader.module.css";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const BlogHeader = ({ mainImg, title, date, description, slug }) => {
    const imageSrc = urlFor(mainImg).url();

    return (
        <>
            <div>
                <div
                    className={`flex text-center justify-center my-6 font-medium text-3xl md:text-5xl`}
                >
                    {title}
                </div>
                <div className={`p-4 my-6 w-full ${styles.project_container}`}>
                    <Image
                        src={imageSrc}
                        alt="project photo"
                        priority="true"
                        layout="responsive"
                        objectFit="contain"
                        width={16}
                        height={8}
                    />
                </div>
            </div>
        </>
    );
};

export default BlogHeader;
