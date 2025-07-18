import { getFeaturedPublications } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";
import { getMDXComponents } from "../../../mdx-components";
import PublicationType from "../publication-type";
import { Timeline, TimelineHeader, TimelineItem } from "../ui/timeline";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default async function FeaturedPublications() {
  const { publications } = await getFeaturedPublications();

  if (!publications) {
    return notFound();
  }

  function extractPublications(content: string): string[] {
    return content
      .split(/\r?\n\r?\n/) // Split by double newlines
      .map((item) => item.trim()) // Remove surrounding whitespace
      .filter((item) => item.length > 0); // Remove any empty entries
  }

  const featuredPublicationItems = extractPublications(publications?.content);

  const mdxComponents = getMDXComponents({
    PublicationType: PublicationType,
  });

  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Featured Publications:</div>
      </div>
      <Timeline className="ml-4">
        {featuredPublicationItems.map((publication, index) => (
          <TimelineItem key={index} className="pb-4">
            <TimelineHeader>
              <div className="prose-ui [&_p]:!mt-0 [&_p]:!mb-0 !bg-background !text-muted-foreground !font-mono !text-sm">
                <MDXRemote source={publication} components={mdxComponents} />
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
      <div className="mt-4 w-fit justify-self-end transition-all duration-300 flex justify-end text-muted-foreground hover:underline group">
        <Link className="flex" href="/research">
          <span>see more</span>
          <ArrowUpRight
            size={20}
            className="ml-1 transition-colors duration-300 group-hover:text-primary"
          />
        </Link>
      </div>
    </div>
  );
}
