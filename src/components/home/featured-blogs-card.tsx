import { getFeaturedBlogsMetadata } from "@/lib/mdx";
import Link from "next/link";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";

export default async function FeaturedBlogsCard() {
  const blogs = await getFeaturedBlogsMetadata();

  if (!blogs) return null;

  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blogs/${blog.slug}`}
          className="group block transition-all duration-300"
        >
          <Card className="flex h-full cursor-pointer py-4 flex-col justify-between border border-border transition-all duration-300 hover:border-neutral-400">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground font-mono">
                    {format(new Date(blog.publishedAt), "MMMM d, yyyy")}
                  </p>
                  <CardTitle className="line-clamp-1 font-sans leading-tight">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                    {blog.description}
                  </CardDescription>
                </div>
                <ArrowUpRight
                  size={22}
                  className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                />
              </div>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
