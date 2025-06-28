"use client";

import { BlockMath, InlineMath } from "react-katex";

type MarkdownLatexProps = {
  children: string;
  block?: boolean;
};

export function MarkdownLatex({ children, block = false }: MarkdownLatexProps) {
  const formula = children.trim();

  if (!formula) return null;

  return block ? (
    <BlockMath>{formula}</BlockMath>
  ) : (
    <InlineMath>{formula}</InlineMath>
  );
}
