import React from "react";

const Footer = () => {
    return (
        <footer className="flex text-base justify-between text-gray mb-8">
            <p>
                Built with{" "}
                <a
                    className="cursor-pointer hover:text-white hover:underline"
                    href="https://nextjs.org/"
                >
                    Next.js
                </a>
                <span>, </span>
                <a
                    className="cursor-pointer hover:text-white hover:underline"
                    href="https://mdxjs.com/"
                >
                    MDX
                </a>
                <span>, </span>
                <a
                    className="cursor-pointer hover:text-white hover:underline"
                    href="https://tailwindcss.com/"
                >
                    Tailwind
                </a>
            </p>
            <a
                className="cursor-pointer hover:text-white hover:underline"
                href="https://github.com/Iftekhar-Ifat/iftekhar"
            >
                GitHub
            </a>
        </footer>
    );
};

export default Footer;
