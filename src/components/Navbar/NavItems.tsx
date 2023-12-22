"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_CONFIG } from "./NavbarConfig";

export default function NavItems() {
  const currentPath = usePathname();
  return (
    <ul className="flex flex-col absolute bg-[#121212] bg-opacity-90 border rounded-lg top-full w-full p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:relative md:border-hidden md:bg-transparent">
      {NAVBAR_CONFIG.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={clsx(
              "m-2 inline-flex items-center justify-center px-4 py-2 rounded-md font-medium text-white hover:bg-zinc-800",
              {
                "bg-zinc-800 text-white": currentPath === item.href,
              }
            )}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
