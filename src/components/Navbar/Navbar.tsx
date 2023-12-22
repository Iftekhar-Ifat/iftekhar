"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "usehooks-ts";
import NavItems from "./NavItems";
import { usePathname } from "next/navigation";
import Logo from "../../../public/asset/logo.svg";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Navbar() {
  const menuRef = useRef(null);
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = () => {
    setIsMenuOpen(false);
  };
  useOnClickOutside(menuRef, handleClickOutside);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  return (
    <nav
      ref={menuRef}
      className="bg-[#121212] bg-opacity-95 border rounded-md sticky z-50 top-6 ml-[5%] mr-[5%] px-4 md:scroll-px-2 md:ml-[15%] md:mr-[15%]"
    >
      <div className="inset-x-0 ">
        <header className="relative">
          <div className="flex items-center">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto">
              <Link href="/">
                <Image
                  alt="logo"
                  src={Logo}
                  className="h-16 w-16 md:h-20 md:w-20"
                />
              </Link>
              <div className="flex items-center md:order-2 rtl:space-x-reverse md:hidden">
                <button
                  className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
                  aria-expanded={isMenuOpen}
                  onClick={toggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={clsx(
                  "items-center relative justify-between w-full md:flex md:w-auto md:order-1 z-10 backdrop-filter backdrop-blur-md",
                  { flex: isMenuOpen, hidden: !isMenuOpen }
                )}
              >
                <NavItems />
              </div>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
}
