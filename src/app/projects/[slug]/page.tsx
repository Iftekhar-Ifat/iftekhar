import { sanityClient, urlFor } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import BlogImg from "@/components/BlogComponents/BlogImg";
import CodeBlock from "@/components/BlogComponents/CodeBlock";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyInlineCode,
  TypographyOList,
  TypographyP,
  TypographyUList,
} from "@/components/BlogComponents/Typography";
import ProjectHeader from "@/components/ProjectComponents/ProjectHeader";
import TechStack from "@/components/ProjectComponents/TechStack";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
});

type ProjectDataType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  mainImage: SanityImageSource;
  githubLink: string;
  liveLink: string;
  slug: { current: string; _type: string };
  body: any;
  techStack: any;
};

async function getProjectData(slug: string): Promise<ProjectDataType> {
  const query = `*[_type == "projects" && slug.current == '${slug}']{_id, title, description, mainImage, slug, liveLink, githubLink, body, techStack[]->}[0]`;
  const data = await sanityClient.fetch(query);
  return data;
}

const portableTextComponents: PortableTextComponents = {
  types: {
    image: (img: any) => <BlogImg imgProps={img} />,
    code: (props: any) => (
      <CodeBlock code={props.value.code} language={props.value.language} />
    ),
  },
  block: {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    normal: ({ children }) => <TypographyP>{children}</TypographyP>,
  },
  list: {
    bullet: ({ children }) => <TypographyUList>{children}</TypographyUList>,
    number: ({ children }) => <TypographyOList>{children}</TypographyOList>,
  },
  marks: {
    code: ({ children }) => (
      <TypographyInlineCode>{children}</TypographyInlineCode>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projectData = await getProjectData(params.slug);
  const currentUrl = "/projects/" + projectData.slug.current;
  const metaImg = urlFor(projectData.mainImage).url();

  if (!projectData) {
    return {
      title: "Page not found!",
      description: "The page you are looking for does not exists.",
    };
  }

  return {
    title: projectData.title,
    description: projectData.description,
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      images: metaImg,
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const projectData = await getProjectData(params.slug);

  if (!projectData) {
    return notFound();
  }

  return (
    <article className={cn("md:px-[16%]", fira_sans.className)}>
      <ProjectHeader
        mainImg={projectData.mainImage}
        title={projectData.title}
        githubLink={projectData.githubLink}
        liveLink={projectData.liveLink}
      />
      <PortableText
        value={projectData.body}
        components={portableTextComponents}
      />
      <TechStack techStack={projectData.techStack} />
    </article>
  );
}
