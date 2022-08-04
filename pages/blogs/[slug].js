import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity.js";

const Blog = ({ post }) => {
    return (
        <div>
            hello
            <img src={urlFor(post.mainImage).url()} />
        </div>
    );
};

export default Blog;

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{_id,slug{current}}`;

    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post) => ({
        params: {
            slug: post.slug.current,
        },
    }));

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{_id,_createdAt,title,description,mainImage,slug,body}`;

    const post = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!post) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            post,
        },
    };
};
