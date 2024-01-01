import { sanityClient, urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectSection() {
  const featuredProject = await sanityClient.fetch(
    `*[_type == "projects" && "Featured Projects" in categories[]-> title] {_id, mainImage, title, description, slug}`
  );

  return (
    <>
      <div className="glow_text text-3xl md:text-5xl">Featured Projects</div>
      {featuredProject?.map((project: any) => (
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
            />
          </div>
          <div className="mb-8">
            <span className="w-full my-3 font-medium text-xl md:text-2xl">
              {project.title}
            </span>
            <p className="pt-4 leading-8 text-xl text-muted-foreground md:px-16">
              {project.description}
            </p>
            <div className="w-full flex justify-end">
              <Link href={`/projects/${project.slug.current}`}>
                <p className="cursor-pointer hover:scale-105">see more</p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
