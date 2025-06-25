import { mdxComponents } from "@prose-ui/next";
import type { MDXComponents } from "mdx/types";

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}
