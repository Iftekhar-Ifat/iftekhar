import React from "react";
import styles from "../../styles/Blog/BlogHeader.module.css";
import Head from "next/head";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const BlogHeader = ({ mainImg, title, date }) => {
    const imageSrc = urlFor(mainImg).url();
    return (
        <div className="pt-6">
            <Head>
                <title>{title}</title>
                <meta
                    key="ogImage"
                    property="og:image"
                    content={urlFor(mainImg)
                        .width(1200)
                        .height(627)
                        .fit("crop")
                        .url()}
                />
            </Head>
            <h1 className="md:px-12 px-4 flex justify-center text-center tracking-wider">
                {title}
            </h1>
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
    );
};

export default BlogHeader;
