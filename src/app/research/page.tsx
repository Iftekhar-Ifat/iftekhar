import { portableTextComponents } from "@/components/PortableTextComponent";
import { sanityFetch } from "@/lib/sanityClient";
import { getOngoingResearch, getPublications } from "@/lib/sanityQuery";
import { PortableText } from "@portabletext/react";
import React from "react";

type PublicationType = {
  _id: string;
  title: string;
  description: string;
  liveLink: string;
  body: any;
};

export default async function Research() {
  const publications: PublicationType[] = await sanityFetch({
    query: getPublications,
    tags: ["publications"],
  });
  const ongoingResearch: PublicationType[] = await sanityFetch({
    query: getOngoingResearch,
    tags: ["ongoing research"],
  });
  return (
    <div className="mt-8 md:px-[16%]">
      <div>
        <span className="glow_text py-1 text-4xl md:text-5xl">
          Publications
        </span>
        {publications?.map((publication: PublicationType) => (
          <div className="flex flex-col pt-4 pl-6" key={publication._id}>
            <ul className="list-disc [&>li]:mt-2 marker:text-xl text-lg text-muted-foreground break-words">
              <li>
                <PortableText
                  value={publication.body}
                  components={portableTextComponents}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
      <div className="my-8">
        <div className="pb-3">
          <span className="glow_text py-1 text-4xl md:text-5xl">
            Ongoing Research
          </span>
        </div>

        {ongoingResearch?.map((research: PublicationType) => (
          <div className="px-4 my-3 w-full" key={research._id}>
            <div className="flex flex-col">
              <span className="w-full mb-[-1em] font-medium center text-xl md:text-2xl">
                {research.title}
              </span>
              <PortableText
                value={research.body}
                components={portableTextComponents}
              />
            </div>
            <div className="w-full flex justify-end"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
