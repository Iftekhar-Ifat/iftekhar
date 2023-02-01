import React from "react";
import { sanityClient } from "../../lib/sanity.js";
import SanityBlockContent from "@sanity/block-content-to-react";
import CodeBlock from "../../components/BlogComponents/CodeBlock.js";
import BlogHeader from "../../components/BlogComponents/BlogHeader.js";
import BlogImg from "../../components/BlogComponents/BlogImg.js";
import HrLine from "../../components/HrLine.js";
import { NextSeo } from "next-seo";
import { urlFor } from "../../lib/sanity.js";
import AuthorSection from "../../components/BlogComponents/AuthorSection.js";

const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

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
            <AuthorSection
                authorName={post.authorName}
                authorImage={post.authorImage}
                createdDate={post._createdAt}
                authorSocial={post.authorSocial}
            />
            <SanityBlockContent
                blocks={post.body}
                projectId={SANITY_PROJECT_ID}
                dataset={SANITY_DATASET}
                serializers={serializers}
            />
            <HrLine />
        </article>
    );
};

export default Blog;

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{_id,_createdAt,title,description,mainImage,slug,body, "authorName": author->name,"authorImage": author->image, "authorSocial": author->social}`;

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
