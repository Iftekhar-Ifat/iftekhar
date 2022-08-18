import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ code, language }) => {
    return (
        <code>
            <SyntaxHighlighter
                language={language}
                style={oneDark}
                wrapLines={true}
                showLineNumbers={true}
                codeTagProps={{
                    style: {
                        fontFamily: "Fira Code",
                        fontSize: "17px",
                        fontWeight: "500",
                    },
                }}
            >
                {code}
            </SyntaxHighlighter>
        </code>
    );
};

export default CodeBlock;
