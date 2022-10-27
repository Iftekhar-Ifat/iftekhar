import React from "react";
import Image from "next/image";
import styles from "../../styles/projects/projects.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import HrLine from "../../components/HrLine";
import { sanityClient } from "../../lib/sanity";
import SanityBlockContent from "@sanity/block-content-to-react";
import BlogImg from "../../components/BlogComponents/BlogImg";
import CodeBlock from "../../components/BlogComponents/CodeBlock";
import { urlFor } from "../../lib/sanity";
import { NextSeo } from "next-seo";

const serializers = {
    types: {
        code: (props) => (
            <CodeBlock code={props.node.code} language={props.node.language} />
        ),
        image: (props) => <BlogImg imgProps={props} />,
    },
};

const project = ({ project }) => {
    const coverImg = urlFor(project.mainImage).url();

    const SEO = {
        title: project.title,
        description: project.description,
        openGraph: {
            images: [
                {
                    url: coverImg,
                    width: 1200,
                    height: 630,
                    alt: "Og Image Alt",
                    type: "image/jpg",
                },
            ],
        },
    };

    return (
        <>
            <NextSeo {...SEO} />
            <div
                className={`flex text-center justify-center my-6 font-medium text-3xl md:text-5xl ${styles.glow_text}`}
            >
                {project.title}
            </div>
            <div className={`p-4 mb-6 w-full ${styles.project_container}`}>
                <Image
                    src={coverImg}
                    alt="project photo"
                    priority="true"
                    layout="responsive"
                    objectFit="contain"
                    style={{
                        paddingTop: "2%",
                        borderRadius: "5px",
                    }}
                    width={16}
                    height={8}
                />
            </div>
            <div className="mb-8">
                <div className="flex items-center mb-4 w-full justify-between text-center">
                    <a
                        href={project.github}
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="m-2" size={25} color={"#959595"} />
                    </a>
                    <a
                        href={project.live_link}
                        className="hover:scale-110"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLink className="m-2" size={25} color={"#959595"} />
                    </a>
                </div>
                <div className="mb-3 w-full font-medium center text-l md:text-xl">
                    <span className="font-medium center text-xl md:text-3xl">
                        Description:
                    </span>
                    <SanityBlockContent
                        className="pt-2 md:px-16 leading-8"
                        blocks={project.body}
                        projectId="o06c5s89"
                        dataset="production"
                        serializers={serializers}
                    />
                </div>
                <div className="w-full font-medium center text-l md:text-xl">
                    <span className="font-medium center text-xl md:text-3xl">
                        Tech Stack:
                    </span>
                    <div className={`pt-3 md:px-16 ${styles.icon_container}`}>
                        {project.techStack.map((tech) =>
                            tech.title === "NextJs" ||
                            tech.title === "ExpressJs" ? (
                                <Image
                                    key={tech._id}
                                    src={tech.icon}
                                    alt={tech.title}
                                    width="50"
                                    height="50"
                                    className="invert"
                                />
                            ) : (
                                <Image
                                    key={tech._id}
                                    src={tech.icon}
                                    alt={tech.title}
                                    width="50"
                                    height="50"
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            <HrLine />
        </>
    );
};

export default project;

// export const getStaticPaths = async () => {
//     const query = `*[_type == "projects"]{_id,slug{current}}`;

//     const projects = await sanityClient.fetch(query);

//     const paths = projects.map((project) => ({
//         params: {
//             slug: project.slug.current,
//         },
//     }));

//     return {
//         paths,
//         fallback: "blocking",
//     };
// };

export const getServerSideProps = async ({ params }) => {
    const query = `*[_type == "projects" && slug.current == $slug][0]{title,description,liveLink,githubLink,slug,mainImage,techStack[]->,body}`;

    const project = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!project) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            project,
        },
    };
};
