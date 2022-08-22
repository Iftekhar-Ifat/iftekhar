import React from "react";

const Footer = () => {
    return (
        <footer className="flex md:text-base justify-between text-gray mb-8">
            <p className="text-base py-0">
                Built with <a href="https://nextjs.org/">NextJs</a>
                <span>, </span>
                <a href="https://www.sanity.io/">Sanity</a>
                <span>, </span>
                <a href="https://tailwindcss.com/">Tailwind</a>
            </p>
            <a href="https://github.com/Iftekhar-Ifat/iftekhar">GitHub</a>
        </footer>
    );
};

export default Footer;
