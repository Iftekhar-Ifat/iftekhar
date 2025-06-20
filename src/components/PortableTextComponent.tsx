import BlogImg from "@/components/BlogComponents/BlogImg";
import CodeBlock from "@/components/BlogComponents/CodeBlock";
import {
  TypographyBlockquote,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyHighlight,
  TypographyInlineCode,
  TypographyLatex,
  TypographyOList,
  TypographyP,
  TypographyPublication,
  TypographyTable,
  TypographyUList,
} from "@/components/BlogComponents/Typography";
import { PortableTextComponents } from "@portabletext/react";

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: (img: any) => <BlogImg imgProps={img} />,
    code: (props: any) => (
      <CodeBlock code={props.value.code} language={props.value.language} />
    ),
    Table: (props: any) => <TypographyTable value={props.value} />,
  },
  block: {
    h1: ({ children }) => <TypographyH1>{children}</TypographyH1>,
    h2: ({ children }) => <TypographyH2>{children}</TypographyH2>,
    h3: ({ children }) => <TypographyH3>{children}</TypographyH3>,
    blockquote: ({ children }) => (
      <TypographyBlockquote>{children}</TypographyBlockquote>
    ),
    normal: ({ children }) => <TypographyP>{children}</TypographyP>,
    publication: ({ children }) => (
      <TypographyPublication>{children}</TypographyPublication>
    ),
  },
  list: {
    bullet: ({ children }) => <TypographyUList>{children}</TypographyUList>,
    number: ({ children }) => <TypographyOList>{children}</TypographyOList>,
  },
  marks: {
    code: ({ children }) => (
      <TypographyInlineCode>{children}</TypographyInlineCode>
    ),
    latex: ({ children }) => <TypographyLatex>{children}</TypographyLatex>,
    highlight: ({ children }) => (
      <TypographyHighlight>{children}</TypographyHighlight>
    ),
  },
};
