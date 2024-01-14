"use client";
import { Check, CopyIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useCopyToClipboard } from "usehooks-ts";
import { Button } from "../ui/button";
import { useState } from "react";

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [_, copy] = useCopyToClipboard();

  const handleCopy = () => {
    copy(code);
    setIsCopied(true);

    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <div className="relative">
      <div className="flex absolute top-2 right-2 transition-opacity duration-300">
        <Button
          className="hover:bg-opacity-70 text-muted-foreground"
          variant="ghost"
          size="icon"
        >
          {isCopied ? (
            <Check size="20" color="green" />
          ) : (
            <CopyIcon size="20" onClick={handleCopy} />
          )}
        </Button>
      </div>
      <div>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLines={true}
          showLineNumbers={true}
          codeTagProps={{
            style: {
              fontFamily: "Fira Code",
              fontSize: "17px",
              fontWeight: "600",
              scrollbarWidth: "thin",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
