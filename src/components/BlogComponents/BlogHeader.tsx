import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import React from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type BlogHeaderType = {
  mainImg: SanityImageSource;
  title: string;
};

export default function BlogHeader({ mainImg, title }: BlogHeaderType) {
  const imageSrc = urlFor(mainImg).url();
  return (
    <>
      <div>
        <div
          className={`flex text-center justify-center my-6 font-medium text-3xl md:text-5xl`}
        >
          {title}
        </div>
        <div className="project_container p-4 my-6 w-full rounded-lg">
          <Image
            src={imageSrc}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="project photo"
            priority
            sizes="100vw"
            width={0}
            height={0}
          />
        </div>
      </div>
    </>
  );
}
