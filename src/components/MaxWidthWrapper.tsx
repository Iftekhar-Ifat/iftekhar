import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "px-4 mt-12 ml-[5%] mr-[5%] md:ml-[15%] md:mr-[15%] ",
        className
      )}
    >
      {children}
    </div>
  );
}
