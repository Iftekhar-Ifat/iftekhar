import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

export default function TechStack({ techStack }: any) {
  return (
    <div className="w-full">
      <div className="my-3">
        <span className="font-medium center text-xl md:text-3xl">
          Tech Stack:
        </span>
      </div>
      <div className="justify-items-center grid grid-cols-4 md:grid-cols-6">
        {techStack.map((tech: any) =>
          tech.icon ? (
            <TooltipProvider key={tech._id}>
              <Tooltip>
                <TooltipTrigger>
                  <Image
                    className="rounded-xl m-2 bg-[#242938] p-1"
                    src={tech.icon}
                    alt={tech.title}
                    width="50"
                    height="50"
                  />
                  <TooltipContent>{tech.title}</TooltipContent>
                </TooltipTrigger>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div
              key={tech._id}
              className="rounded-xl m-2 bg-[#242938] p-1 min-h-[50px] min-w-[50px] content-center"
            >
              <div className="flex justify-center">{tech.title}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
