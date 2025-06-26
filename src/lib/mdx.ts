import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogMetadata = {
  title: string;
  description: string;
  publishedAt: string;
  slug: string;
  thumbnail: string;
};

const BLOG_ROOT = path.join(process.cwd(), "public/content/blogs");

// Utility to find all blog folders containing index.mdx
function getBlogFolders(root: string): string[] {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((d) => path.join(root, d.name));
}

export async function getAllBlogsMetadata(): Promise<BlogMetadata[]> {
  const folders = getBlogFolders(BLOG_ROOT);

  const blogs = await Promise.all(
    folders.map(async (folderPath) => {
      const indexMd = path.join(folderPath, "index.mdx");
      if (!fs.existsSync(indexMd)) return null;

      const raw = await fs.promises.readFile(indexMd, "utf8");
      const { data } = matter(raw);

      const slug = path.basename(folderPath);
      return {
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        thumbnail: data.thumbnail,
        slug,
      };
    })
  );

  // Filter out nulls and sort latest first
  return blogs
    .filter((b): b is BlogMetadata => !!b)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getBlogBySlug(
  slug: string
): Promise<{ content: string; metadata: BlogMetadata } | null> {
  const folderPath = path.join(BLOG_ROOT, slug);
  const indexMd = path.join(folderPath, "index.mdx");
  if (!fs.existsSync(indexMd)) return null;

  const raw = await fs.promises.readFile(indexMd, "utf8");
  const { content, data } = matter(raw);
  return {
    content,
    metadata: {
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      thumbnail: data.thumbnail,
      slug,
    },
  };
}

export function getAllSlugs(): string[] {
  return getBlogFolders(BLOG_ROOT).map((folderPath) =>
    path.basename(folderPath)
  );
}
