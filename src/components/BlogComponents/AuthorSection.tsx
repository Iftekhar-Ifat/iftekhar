import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import generateBlurImg from "../helper/generateBlurImg";

type AuthorSectionType = {
  authorName: string;
  authorImage: SanityImageSource;
  authorSocial: string;
  createdAt: string;
};

export default async function AuthorSection({
  authorName,
  authorImage,
  authorSocial,
  createdAt,
}: AuthorSectionType) {
  const authorImg = urlFor(authorImage).url();
  const blurImg = await generateBlurImg(authorImg);

  const dateString = new Date(createdAt);
  const localDate = dateString.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex mb-6 items-center">
      <div className="box_shadow rounded-full">
        <a href={authorSocial} target="_blank" rel="noopener noreferrer">
          <Image
            className="rounded-full"
            style={{ objectFit: "contain" }}
            src={authorImg}
            alt="author photo"
            priority
            width={50}
            height={50}
            placeholder="blur"
            blurDataURL={blurImg}
          />
        </a>
      </div>
      <div className="mx-4 flex flex-col">
        <a
          className="no-underline text-primary"
          href={authorSocial}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{authorName}</span>
        </a>
        <span className="text-sm text-muted-foreground">{localDate}</span>
      </div>
    </div>
  );
}
