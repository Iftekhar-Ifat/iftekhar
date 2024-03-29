import React from "react";

export default function Footer() {
  return (
    <footer className="md:px-[16%]">
      <div className="hr_line"></div>
      <div className="flex md:text-base justify-between text-muted-foreground mb-8 px-2 md:px-0">
        <p className="text-base py-0">
          Built with{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJs
          </a>
          {", "}
          <a
            href="https://www.sanity.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity
          </a>
          {", "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind
          </a>
        </p>
        <a
          href="https://github.com/Iftekhar-Ifat/iftekhar"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
