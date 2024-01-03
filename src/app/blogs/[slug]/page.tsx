import { sanityClient, urlFor } from "@/lib/sanityClient";
import { notFound } from "next/navigation";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import BlogHeader from "@/components/BlogComponents/BlogHeader";
import { cn } from "@/lib/utils";
import AuthorSection from "@/components/BlogComponents/AuthorSection";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import BlogImg from "@/components/BlogComponents/BlogImg";
import CodeBlock from "@/components/BlogComponents/CodeBlock";
import { TypographyH1 } from "@/components/BlogComponents/Typography";

const fira_sans = Fira_Sans({
  subsets: ["latin"],
  weight: "400",
});

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

const portableTextComponents: PortableTextComponents = {
  types: {
    image: (img: any) => <BlogImg imgProps={img} />,
    code: (props: any) => (
      <CodeBlock code={props.value.code} language={props.value.language} />
    ),
  },
  block: {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
  },
};

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

  return (
    <article className={cn("md:px-[16%]", fira_sans.className)}>
      <BlogHeader mainImg={blogData.mainImage} title={blogData.title} />
      <AuthorSection
        authorName={blogData.authorName}
        authorImage={blogData.authorImage}
        createdAt={blogData._createdAt}
        authorSocial={blogData.authorSocial}
      />
      <PortableText value={blogData.body} components={portableTextComponents} />
    </article>
  );
}
