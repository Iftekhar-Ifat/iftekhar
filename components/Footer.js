import React from "react";

const Footer = () => {
    return (
        <footer className="flex md:text-base justify-between text-sm text-gray mb-8">
            <p className="text-sm py-0">
                Built with{" "}
                <a
                    className="cursor-pointer hover:text-white hover:underline"
                    href="https://nextjs.org/"
                >
                    NextJs
                </a>
                <span>, </span>
                <a
                    className="cursor-pointer hover:text-white hover:underline"
                    href="https://www.sanity.io/"
                >
                    Sanity
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
