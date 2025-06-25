import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMetadata = {
  title: string;
  description: string;
  publishedAt: string; // ISO date string
  slug: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export async function getAllBlogsMetadata(): Promise<BlogMetadata[]> {
  const files = await fs.promises.readdir(BLOG_DIR);

  const blogs = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.promises.readFile(path.join(BLOG_DIR, file), "utf8");
      const { data } = matter(raw);

      return {
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        tags: data.tags ?? [],
        slug: data.slug || file.replace(/\.mdx$/, ""),
      };
    })
  );

  // Sort by date (newest first)
  return blogs.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = await fs.promises.readFile(filePath, "utf8");
  const { content, data } = matter(raw);

  return {
    content,
    metadata: {
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      tags: data.tags ?? [],
      slug,
    },
  };
}

export function getAllSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR).map((file) => file.replace(/\.mdx$/, ""));
}
