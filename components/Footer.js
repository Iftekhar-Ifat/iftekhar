import React from "react";

const Footer = () => {
    return (
        <footer className="flex md:text-base justify-between text-gray mb-8">
            <p className="text-base py-0">
                Built with{" "}
                <a
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    NextJs
                </a>
                <span>, </span>
                <a
                    href="https://www.sanity.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Sanity
                </a>
                <span>, </span>
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
        </footer>
    );
};

export default Footer;
