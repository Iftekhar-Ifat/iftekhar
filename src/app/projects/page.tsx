import { sanityFetch, urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { getAllProjects } from "@/lib/sanityQuery";
import generateBlurImg from "@/components/helper/generateBlurImg";

type ProjectType = {
  _id: string;
  title: string;
  description: string;
  slug: { current: string; _type: string };
  mainImage: SanityImageSource;
};

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectList() {
  const projects: ProjectType[] = await sanityFetch({
    query: getAllProjects,
    tags: ["projects"],
  });

  return (
    <div className="mt-8 md:px-[16%]">
      <div className="flex flex-col-reverse justify-between items-center text-3xl md:flex-row md:text-5xl">
        <div className="flex justify-center w-full">
          <div className="glow_text py-1 text-4xl md:text-5xl">Projects</div>
        </div>
      </div>
      {projects?.map(async (project: ProjectType) => (
        <div key={project._id}>
          <div className="project_container p-4 my-6 w-full rounded-md">
            <Image
              src={urlFor(project.mainImage).url()}
              alt="project photo"
              style={{
                borderRadius: "5px",
                objectFit: "contain",
                width: "100%",
                height: "auto",
              }}
              sizes="100vw"
              width={0}
              height={0}
              placeholder="blur"
              blurDataURL={await generateBlurImg(
                urlFor(project.mainImage).url()
              )}
            />
          </div>
          <div className="mb-8">
            <span className="w-full my-3 font-medium text-xl md:text-2xl">
              {project.title}
            </span>
            <p className="p-4 leading-8 text-xl text-muted-foreground">
              {project.description}
            </p>
            <div className="w-full flex justify-end">
              <Link
                href={`/projects/${project.slug.current}`}
                className="no-underline"
              >
                <p className="text-lg cursor-pointer hover:scale-105">
                  see more
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
