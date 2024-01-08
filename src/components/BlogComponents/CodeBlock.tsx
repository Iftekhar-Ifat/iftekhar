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
          className="bg-[#1B1C1D] hover:bg-opacity-70 text-muted-foreground"
          variant="outline"
          size="icon"
        >
          {isCopied ? (
            <Check size="20" color="green" />
          ) : (
            <CopyIcon size="20" onClick={handleCopy} />
          )}
        </Button>
      </div>
      <code>
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          wrapLines={true}
          showLineNumbers={true}
          customStyle={{
            backgroundColor: "#1B1C1D",
          }}
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
      </code>
    </div>
  );
}
