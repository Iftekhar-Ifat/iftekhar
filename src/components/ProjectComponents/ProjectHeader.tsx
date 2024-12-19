import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import React from "react";
import { Github, Link } from "lucide-react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import generateBlurImg from "../helper/generateBlurImg";

type ProjectHeaderType = {
  title: string;
  mainImg: SanityImageSource;
  githubLink: string;
  liveLink: string;
};

export default async function ProjectHeader({
  title,
  mainImg,
  githubLink,
  liveLink,
}: ProjectHeaderType) {
  const imageSrc = urlFor(mainImg).url();
  const blurImg = await generateBlurImg(imageSrc);

  return (
    <>
      <div>
        <div className="glow_text flex text-center justify-center my-6 font-medium text-3xl md:text-5xl">
          {title}
        </div>
        <div className="project_container p-4 my-6 w-full rounded-lg">
          <Image
            src={imageSrc}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="project photo"
            priority
            sizes="100vw"
            width={0}
            height={0}
            placeholder="blur"
            blurDataURL={blurImg}
          />
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center mb-4 w-full justify-between text-center">
          <a
            className="transition-all hover:scale-105"
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={25} className="text-cyan-600" />
          </a>
          <a
            className="transition-all hover:scale-105"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link size={25} className="text-cyan-600" />
          </a>
        </div>
      </div>
    </>
  );
}
