import createMDX from "@next/mdx";
import { remarkPlugins } from "@prose-ui/core";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // remarkPlugins: [...remarkPlugins(), remarkGfm],
  },
});

export default withMDX(nextConfig);
