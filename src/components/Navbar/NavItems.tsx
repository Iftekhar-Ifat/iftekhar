"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVBAR_CONFIG } from "./NavbarConfig";
import ThemeToggle from "@/app/ThemeToggle";

export default function NavItems() {
  const currentPath = usePathname();
  return (
    <div className="cb_gradient_hamburger_menu backdrop-blur-xl flex flex-col absolute rounded-lg top-full w-full p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:relative md:border-hidden md:backdrop-blur-none">
      {NAVBAR_CONFIG.map((item) => (
        <div key={item.id}>
          <Link
            href={item.href}
            className={clsx(
              "my-2 inline-flex w-full items-center justify-start px-4 py-2 rounded-md font-medium no-underline hover:no-underline",
              {
                "bg-secondary": currentPath.startsWith(item.href),
              }
            )}
          >
            <item.icon size="24" className="mx-1 text-cyan-600" />
            <span
              className={clsx("mx-1 text-primary", {
                "text-secondary-foreground": currentPath.startsWith(item.href),
              })}
            >
              {item.name}
            </span>
          </Link>
        </div>
      ))}
      <div className="mx-2 hidden items-center md:flex">
        <ThemeToggle />
      </div>
    </div>
  );
}
