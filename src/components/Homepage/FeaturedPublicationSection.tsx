import { sanityFetch } from "@/lib/sanityClient";
import { getPublications } from "@/lib/sanityQuery";
import { PortableText } from "@portabletext/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";
import { portableTextComponents } from "../PortableTextComponent";

type PublicationType = {
  _id: string;
  title: string;
  description: string;
  liveLink: string;
  body: any;
};

export default async function FeaturedPublicationSection() {
  const publications: PublicationType[] = await sanityFetch({
    query: getPublications,
    tags: ["publications"],
  });
  return (
    <div>
      <span className="glow_text py-1 text-4xl md:text-5xl">Publications</span>
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
  );
}
