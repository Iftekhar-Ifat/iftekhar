/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: false,
    images: {
        domains: [
            "cdn.jsdelivr.net",
            "raw.githubusercontent.com",
            "cdn.sanity.io",
        ],
    },
};

module.exports = nextConfig;
