import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import CodeBlock from "../../components/BlogComponents/CodeBlock.js";

const serializers = {
    types: {
        code: (props) => (
            <CodeBlock code={props.node.code} language={props.node.language} />
        ),
    },
};

const Blog = ({ post }) => {
    return (
        <div>
            <SanityBlockContent
                blocks={post.body}
                projectId="o06c5s89"
                dataset="production"
                serializers={serializers}
            />
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
