import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity.js";

const Blog = ({ post }) => {
    return (
        <div>
            hello
            <img src={urlFor(post.mainImage).url()} />
            <h1>Garlic bread with cheese: </h1>
            <h2>Hello</h2>
            <h3>Hello h3</h3>
            <p>
                For years parents have espoused the health benefits of eating
                garlic bread with cheese to their children, with the food
                earning such an iconic status in our culture that kids will
                often dress up as warm, cheesy loaf for Halloween.
            </p>
            <p>
                But a recent study shows that the celebrated appetizer may be
                linked to a series of rabies cases springing up around the
                country.
            </p>
            <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
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
