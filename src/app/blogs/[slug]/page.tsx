import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { getMDXComponents } from "../../../../mdx-components";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { notFound } from "next/navigation";
import path from "path";
import { MarkdownTable } from "@/components/mdx/markdown-table";

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
  const mdxComponents = getMDXComponents({
    MarkdownTable: MarkdownTable,
  });

  return (
    <MaxWidthWrapper>
      <article className="prose-ui !bg-background">
        <h1 className="mb-1">{metadata.title}</h1>
        <p className="text-sm text-muted-foreground mb-6">
          {format(new Date(metadata.publishedAt), "MMMM d, yyyy")}
        </p>

        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              baseUrl: path.join(process.cwd(), "src"),
            },
          }}
        />
      </article>
    </MaxWidthWrapper>
  );
}
