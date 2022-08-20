import React from "react";
import { sanityClient } from "../../lib/sanity.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import CodeBlock from "../../components/BlogComponents/CodeBlock.js";
import BlogHeader from "../../components/BlogComponents/BlogHeader.js";
import BlogImg from "../../components/BlogComponents/BlogImg.js";
import HrLine from "../../components/HrLine.js";

const serializers = {
    types: {
        code: (props) => (
            <CodeBlock code={props.node.code} language={props.node.language} />
        ),
        image: (props) => <BlogImg imgProps={props} />,
    },
};

const Blog = ({ post }) => {
    return (
        <article>
            <BlogHeader
                mainImg={post.mainImage}
                title={post.title}
                date={post._createdAt}
                description={post.description}
            />
            <SanityBlockContent
                blocks={post.body}
                projectId="o06c5s89"
                dataset="production"
                serializers={serializers}
            />
            <HrLine />
        </article>
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
