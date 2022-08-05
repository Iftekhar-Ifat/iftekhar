import { createClient } from "next-sanity";

import createImageUrlBuilder from "@sanity/image-url";

export const sanityConfig = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: "2021-10-21", // Learn more: https://www.sanity.io/docs/api-versioning
    useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(sanityConfig);

// helper function for generating Image URLs
export const urlFor = (source) =>
    createImageUrlBuilder(sanityConfig).image(source);
