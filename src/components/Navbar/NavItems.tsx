"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_CONFIG } from "./NavbarConfig";

export default function NavItems() {
  const currentPath = usePathname();
  return (
    <ul className="cb_gradient_hamburger_menu flex flex-col absolute bg-zinc-900 bg-opacity-90 rounded-lg top-full w-full p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:relative md:border-hidden md:bg-transparent">
      {NAVBAR_CONFIG.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href}
            className={clsx(
              "my-2 inline-flex w-full items-center justify-start px-4 py-2 rounded-md font-medium text-white hover:bg-zinc-800 no-underline hover:no-underline",
              {
                "bg-zinc-800 text-white": currentPath === item.href,
              }
            )}
          >
            <item.icon size="24" className="mx-1 text-cyan-600" />
            <span className="mx-1">{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
