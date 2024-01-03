import { sanityClient, urlFor } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";

type BlogDataType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  mainImage: SanityImageSource;
  slug: { current: string; _type: string };
  body: any;
  authorName: string;
  authorImage: SanityImageSource;
  authorSocial: string;
};

async function getBlogData(slug: string): Promise<BlogDataType> {
  const query = `*[_type == "post" && slug.current == '${slug}']{_id, _createdAt, title, description, mainImage, slug, body, "authorName": author->name, "authorImage": author->image, "authorSocial": author->social}[0]`;
  const data = await sanityClient.fetch(query);
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogData = await getBlogData(params.slug);
  const currentUrl = "/blogs/" + blogData.slug.current;
  const metaImg = urlFor(blogData.mainImage).url();

  if (!blogData) {
    return {
      title: "Page not found!",
      description: "The page you are looking for does not exists.",
    };
  }

  return {
    title: blogData.title,
    description: blogData.description,
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      images: metaImg,
    },
  };
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const blogData = await getBlogData(params.slug);

  if (!blogData) {
    return notFound();
  }

  return <div>{params.slug}</div>;
}
