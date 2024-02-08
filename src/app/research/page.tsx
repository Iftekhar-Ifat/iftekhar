import { sanityFetch, urlFor } from "@/lib/sanityClient";
import { getAllProjects, getPublications } from "@/lib/sanityQuery";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type PublicationType = {
  _id: string;
  title: string;
  description: string;
  liveLink: string;
};

export default async function Research() {
  const publications: PublicationType[] = await sanityFetch({
    query: getPublications,
    tags: ["publications"],
  });
  return (
    <div className="mt-8 md:px-[16%]">
      <div className="my-10">
        <span className="glow_text py-1 text-4xl md:text-5xl">
          Publications
        </span>
        {publications?.map((publication: PublicationType) => (
          <div className="p-4 my-6 w-full" key={publication._id}>
            <div className="flex flex-col">
              <span className="w-full font-medium center text-xl md:text-2xl">
                {publication.title}
              </span>
              <span className="pt-4 pb-2 text-muted-foreground md:text-lg ">
                {publication.description}
              </span>
            </div>
            <div className="w-full flex justify-end">
              <Link
                href={publication.liveLink}
                className="no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-lg cursor-pointer hover:scale-105">
                  see more
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
