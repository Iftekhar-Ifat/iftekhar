import React from "react";
import styles from "../../styles/Blog/BlogHeader.module.css";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const AuthorSection = ({
    authorName,
    authorImage,
    createdDate,
    authorSocial,
}) => {
    const authorImg = urlFor(authorImage).url();

    const dateString = new Date(createdDate);
    const localDate = dateString.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="flex mb-6 items-center">
            <div className={styles.img_card_small}>
                <Image
                    src={authorImg}
                    alt="author photo"
                    priority="true"
                    layout="responsive"
                    objectFit="contain"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className="mx-4 flex flex-col">
                <a className="no-underline text-white" href={authorSocial}>
                    <span>{authorName}</span>
                </a>
                <span className="text-sm text-gray">{localDate}</span>
            </div>
        </div>
    );
};

export default AuthorSection;
