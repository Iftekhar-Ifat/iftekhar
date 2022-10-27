import React from "react";
import styles from "../../styles/Blog/BlogHeader.module.css";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";
import Head from "next/head";

const BlogHeader = ({ mainImg, title, date, description, slug }) => {
    const imageSrc = urlFor(mainImg).url();
    const currentUrl = "https://iftekhar.vercel.app/blogs/" + slug;
    return (
        <>
            <Head>
                <meta property="og:url" content={currentUrl} />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={imageSrc} />
                <meta property="og:image:secure_url" content={imageSrc} />
                <meta itemprop="image" content={imageSrc}></meta>
            </Head>
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
