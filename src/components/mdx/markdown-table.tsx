import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { getMDXComponents } from "../../../mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

type MarkdownTableProps = {
  children: string;
  caption: string;
};

export function MarkdownTable({ children }: MarkdownTableProps) {
  const lines = children.trim().split("\n");

  if (lines.length < 2) return null; // Not a valid table

  const headers = lines[0]
    .split("|")
    .map((h) => h.trim())
    .filter(Boolean);
  const rows = lines.slice(2).map((line) =>
    line
      .split("|")
      .map((cell) => cell.trim())
      .filter(Boolean)
  );

  const mdxComponents = getMDXComponents({});

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            {headers.map((header, i) => (
              <TableHead key={i}>
                <MDXRemote source={header} components={mdxComponents} />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  <MDXRemote source={cell} components={mdxComponents} />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
