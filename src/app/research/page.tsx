import { sanityFetch } from "@/lib/sanityClient";
import { getPublications } from "@/lib/sanityQuery";
import { ExternalLink } from "lucide-react";
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
              <Link
                href={publication.liveLink}
                className="no-underline flex hover:scale-[1.01]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex">
                  <span className="w-full font-medium center text-xl md:text-2xl">
                    {publication.title}
                  </span>
                  <ExternalLink className="ml-2 items-end" />
                </div>
              </Link>
              <span className="pt-4 pb-2 text-muted-foreground md:text-lg ">
                {publication.description}
              </span>
            </div>
            <div className="w-full flex justify-end"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
