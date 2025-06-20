import React, { ReactNode } from "react";
import "katex/dist/katex.min.css";
import Latex from "react-latex-next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/ui/table";

export function TypographyH1({ children }: { children: ReactNode }) {
  return (
    <h1 className="scroll-m-20 my-6 text-3xl font-semibold md:text-4xl md:font-bold">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="scroll-m-20 my-5 text-2xl font-medium first:mt-0
    md:text-3xl md:font-semibold"
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: ReactNode }) {
  return (
    <h3 className="scroll-m-20 my-4 text-xl font-normal md:text-2xl md:font-medium">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: ReactNode }) {
  return (
    <h4 className="scroll-m-20 my-3 text-lg font-medium md:text-xl md:font-normal">
      {children}
    </h4>
  );
}

export function TypographyP({ children }: { children: ReactNode }) {
  return (
    <p className="leading-9 [&:not(:first-child)]:mt-6 text-xl text-muted-foreground">
      {children}
    </p>
  );
}

export function TypographyPublication({ children }: { children: ReactNode }) {
  return (
    <p className="[&:not(:first-child)]:mt-6 text-lg text-muted-foreground text-wrap">
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic text-muted-foreground">
      {children}
    </blockquote>
  );
}

export function TypographyUList({ children }: { children: ReactNode }) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 marker:text-xl text-lg text-muted-foreground">
      {children}
    </ul>
  );
}

export function TypographyOList({ children }: { children: ReactNode }) {
  return (
    <ol className="my-6 ml-6 list-decimal [&>li]:mt-2 marker:font-bold text-lg text-muted-foreground">
      {children}
    </ol>
  );
}

export function TypographyInlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] text-sm font-semibold font-mono">
      {children}
    </code>
  );
}

export function TypographyHighlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-slate-200 text-slate-800 font-mono">{children}</span>
  );
}

export function TypographyLatex({ children }: { children: ReactNode }) {
  const latexString = React.Children.toArray(children)
    .map((child) => (typeof child === "string" ? child : ""))
    .join("");
  return <Latex>{latexString}</Latex>;
}

function getCellText(cell: any): string {
  if (!cell) return "-";

  if (Array.isArray(cell.children)) {
    return cell.children.map((child: any) => child.text || "").join("");
  }

  if (typeof cell === "string") return cell;

  if (cell.content) return cell.content;

  return "-";
}

export function TypographyTable({ value }: { value: any }) {
  if (!value?.rows?.length) return null;

  const rows = value.rows;

  return (
    <Table className="rounded-md border mb-2">
      <TableHeader>
        <TableRow>
          {rows[0].cells.map((cell: any, i: number) => (
            <TableHead key={i}>{getCellText(cell)}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.slice(1).map((row: any) => (
          <TableRow key={row._key}>
            {row.cells.map((cell: any, i: number) => (
              <TableCell key={i}>{getCellText(cell)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
