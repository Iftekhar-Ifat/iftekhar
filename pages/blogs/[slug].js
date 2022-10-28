import React from "react";
import { sanityClient } from "../../lib/sanity.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import CodeBlock from "../../components/BlogComponents/CodeBlock.js";
import BlogHeader from "../../components/BlogComponents/BlogHeader.js";
import BlogImg from "../../components/BlogComponents/BlogImg.js";
import HrLine from "../../components/HrLine.js";
import { NextSeo } from "next-seo";
import { urlFor } from "../../lib/sanity.js";

const serializers = {
    types: {
        code: (props) => (
            <CodeBlock code={props.node.code} language={props.node.language} />
        ),
        image: (props) => <BlogImg imgProps={props} />,
    },
};

const Blog = ({ post }) => {
    const metaImg = urlFor(post.mainImage).url();
    const currentUrl = "https://iftekhar.vercel.app/blogs/" + post.slug.current;
    const SEO = {
        title: post.title,
        description: post.description,
        openGraph: {
            images: [
                {
                    url: metaImg,
                    width: 1200,
                    height: 630,
                    type: "image/jpeg",
                },
            ],
            url: currentUrl,
            type: "website",
        },
    };
    return (
        <article style={{ fontFamily: "Fira Sans" }}>
            <NextSeo {...SEO} />
            <BlogHeader
                mainImg={post.mainImage}
                title={post.title}
                date={post._createdAt}
                slug={post.slug.current}
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

// export const getStaticPaths = async () => {
//     const query = `*[_type == "post"]{_id,slug{current}}`;

//     const posts = await sanityClient.fetch(query);

//     const paths = posts.map((post) => ({
//         params: {
//             slug: post.slug.current,
//         },
//     }));

//     return {
//         paths,
//         fallback: "blocking",
//     };
// };

export const getServerSideProps = async ({ params }) => {
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
