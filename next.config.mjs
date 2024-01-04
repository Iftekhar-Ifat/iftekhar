import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      "/your/api/route": ["./node_modules/@img/**"],
    },
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "skillicons.dev",
      },
      {
        hostname: "cdn.jsdelivr.net",
      },
      {
        hostname: "raw.githubusercontent.com",
      },
      {
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
