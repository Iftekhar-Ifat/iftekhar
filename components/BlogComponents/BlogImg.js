import React from "react";
import Image from "next/image";
import { urlFor } from "../../lib/sanity";

const BlogImg = ({ imgProps }) => {
    const imageSrc = urlFor(imgProps.node).url();
    return (
        <div>
            <Image
                src={imageSrc}
                alt="project photo"
                priority="true"
                layout="responsive"
                objectFit="contain"
                width={16}
                height={10}
            />
        </div>
    );
};

export default BlogImg;
