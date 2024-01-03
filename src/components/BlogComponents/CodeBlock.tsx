import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
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
  );
}
