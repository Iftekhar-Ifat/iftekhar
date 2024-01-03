import { ReactNode } from "react";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 my-4 text-3xl font-semibold md:text-4xl md:font-bold">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: string }) {
  return (
    <h2
      className="scroll-m-20 my-3 text-2xl font-medium first:mt-0
    md:text-3xl md:font-semibold"
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: string }) {
  return (
    <h3 className="scroll-m-20 my-2 text-xl font-normal md:text-2xl md:font-medium">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: string }) {
  return (
    <h4 className="scroll-m-20 my-1 text-lg font-medium md:text-xl md:font-normal">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: string }) {
  return <p className="leading-9 [&:not(:first-child)]:mt-6">{children}</p>;
}

export function TypographyBlockquote({ children }: { children: string }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyList({ children }: { children: string }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>{children}</li>
    </ul>
  );
}

export function TypographyInlineCode({ children }: { children: string }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}
