import { sanityFetch, urlFor } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import ProjectHeader from "@/components/ProjectComponents/ProjectHeader";
import TechStack from "@/components/ProjectComponents/TechStack";
import { getProject } from "@/lib/sanityQuery";
import { portableTextComponents } from "@/components/PortableTextComponent";

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
  const data: ProjectDataType = await sanityFetch({
    query: getProject,
    tags: [`${slug}`],
    qParams: { slug: slug },
  });
  return data;
}

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

export default async function ProjectPage({
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
