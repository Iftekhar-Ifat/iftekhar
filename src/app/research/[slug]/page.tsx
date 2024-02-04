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

type ResearchDataType = {
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

async function getResearchData(slug: string): Promise<ResearchDataType> {
  const data: ResearchDataType = await sanityFetch({
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
  const researchData = await getResearchData(params.slug);
  const currentUrl = "/research/" + researchData.slug.current;
  const metaImg = urlFor(researchData.mainImage).url();

  if (!researchData) {
    return {
      title: "Page not found!",
      description: "The page you are looking for does not exists.",
    };
  }

  return {
    title: researchData.title,
    description: researchData.description,
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      images: metaImg,
    },
  };
}

export default async function ResearchPage({
  params,
}: {
  params: { slug: string };
}) {
  const researchData = await getResearchData(params.slug);

  if (!researchData) {
    return notFound();
  }

  return (
    <article className={cn("md:px-[16%]", fira_sans.className)}>
      <ProjectHeader
        mainImg={researchData.mainImage}
        title={researchData.title}
        githubLink={researchData.githubLink}
        liveLink={researchData.liveLink}
      />
      <PortableText
        value={researchData.body}
        components={portableTextComponents}
      />
      <TechStack techStack={researchData.techStack} />
    </article>
  );
}
