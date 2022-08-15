/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["cdn.jsdelivr.net", "raw.githubusercontent.com"],
    },
};

module.exports = nextConfig;
