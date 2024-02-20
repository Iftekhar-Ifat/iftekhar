import "server-only";
import { type QueryParams, createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03";

const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true,
});

export async function sanityFetch<QueryResponse>({
  query,
  qParams = {},
  tags,
}: {
  query: string;
  qParams?: QueryParams;
  tags: string[];
}): Promise<QueryResponse> {
  return sanityClient.fetch<QueryResponse>(query, qParams, {
    cache: "force-cache",
    next: { tags },
  });
}

// helper function for generating Image URLs
export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(sanityClient).image(source);
