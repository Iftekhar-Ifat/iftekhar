import React from "react";

const Post = ({ title, body, image }) => {
    return (
        <div>
            <span>{title}</span>
        </div>
    );
};

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug;

    if (!pageSlug) {
        return {
            notFound: true,
        };
    }

    const query = encodeURIComponent(
        `*[ _type == "post" && slug.current == "${pageSlug}" ]`
    );
    const url = `https://o06c5s89.api.sanity.io/v1/data/query/production?query=${query}`;

    const postResult = await fetch(url).then((res) => res.json());
    const post = postResult.result[0];

    if (!post) {
        return {
            notFound: true,
        };
    } else {
        return {
            props: {
                body: post.body,
                title: post.title,
                image: post.mainImage,
            },
        };
    }
};

export default Post;
