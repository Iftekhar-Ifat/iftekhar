import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
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
    ],
  },
};

export default withPlaiceholder(nextConfig);
