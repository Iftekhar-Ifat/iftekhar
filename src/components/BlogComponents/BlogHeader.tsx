import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import React from "react";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import blurImg from "@/../public/asset/blur-img/blurImgData.json";

type BlogHeaderType = {
  mainImg: SanityImageSource;
  title: string;
};

export default async function BlogHeader({ mainImg, title }: BlogHeaderType) {
  const imageSrc = urlFor(mainImg).url();
  return (
    <>
      <div>
        <div className="flex text-center justify-center my-6 font-medium text-3xl md:text-5xl">
          {title}
        </div>
        <div className="project_container p-4 my-6 w-full rounded-lg">
          <Image
            src={imageSrc}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            alt="project photo"
            priority
            sizes="100vw"
            width={1200}
            height={630}
            placeholder="blur"
            blurDataURL={blurImg.blurImgBase64}
          />
        </div>
      </div>
    </>
  );
}
