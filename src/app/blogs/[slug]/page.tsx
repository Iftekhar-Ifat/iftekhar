import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { getMDXComponents } from "../../../../mdx-components";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import { MarkdownTable } from "@/components/mdx/markdown-table";
import Image from "next/image";
import authorImage from "@/assets/profile.png";
import { Metadata } from "next";
import { MarkdownLatex } from "@/components/mdx/markdown-latex";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Page not found!",
      description: "The page you are looking for does not exists.",
    };
  }

  const { metadata } = blog;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: `/blogs/${metadata.slug}`,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      url: `${BASE_URL}/blogs/${metadata.slug}`,
      images: [`${BASE_URL}${metadata.thumbnail}`],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`${BASE_URL}${metadata.thumbnail}`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return notFound();
  }

  const { content, metadata } = blog;
  const thumbnailImage = metadata.thumbnail;
  const mdxComponents = getMDXComponents({
    MarkdownTable: MarkdownTable,
    MarkdownLatex: MarkdownLatex,
  });

  return (
    <MaxWidthWrapper>
      <div className="my-6 md:my-10">
        <h1 className="scroll-m-20 mb-6 text-center text-4xl font-extrabold tracking-tight text-balance">
          {metadata.title}
        </h1>
        <div className="relative w-full h-auto border rounded-xl">
          <Image
            src={thumbnailImage}
            alt="Blog thumbnail"
            width={1200}
            height={630}
            className="w-full h-auto rounded-xl object-contain"
          />
        </div>

        <div className="flex items-center my-4">
          <a
            href="https://www.linkedin.com/in/iftekhar-ifat/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full overflow-hidden"
          >
            <Image
              src={authorImage}
              alt="Iftekhar Ahmed profile photo"
              width={50}
              height={50}
              className="rounded-full object-cover"
              placeholder="blur"
            />
          </a>
          <div className="ml-4 flex flex-col">
            <a
              href="https://www.linkedin.com/in/iftekhar-ifat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Iftekhar Ahmed
            </a>
            <p className="text-sm text-muted-foreground">
              {format(new Date(metadata.publishedAt), "MMMM d, yyyy")}
            </p>
          </div>
        </div>

        <article className="prose-ui !bg-background ">
          <MDXRemote source={content} components={mdxComponents} />
        </article>
      </div>
    </MaxWidthWrapper>
  );
}
