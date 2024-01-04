import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/ui/tooltip";

export default function TechStack({ techStack }: any) {
  return (
    <div className="w-full">
      <div className="my-3">
        <span className="font-medium center text-xl md:text-3xl">
          Tech Stack:
        </span>
      </div>
      <div className="justify-items-center grid grid-cols-4 md:grid-cols-6">
        {techStack.map((tech: any) => (
          <TooltipProvider key={tech._id}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  className="rounded-xl bg-[#242938] p-1"
                  src={tech.icon}
                  alt={tech.title}
                  width="50"
                  height="50"
                />
                <TooltipContent>{tech.title}</TooltipContent>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  );
}
