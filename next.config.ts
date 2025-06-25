import createMDX from "@next/mdx";
import { remarkPlugins } from "@prose-ui/core";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [...remarkPlugins()],
  },
});

export default withMDX(nextConfig);
