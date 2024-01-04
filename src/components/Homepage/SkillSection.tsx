import Image from "next/image";
import skillData from "../../../public/asset/skill-data/skills.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/ui/tooltip";

export default function SkillSection() {
  return (
    <>
      <div className="glow_text text-3xl md:text-5xl ">Skills</div>

      <div>
        {skillData
          ? skillData.map((domain) => (
              <div className="mt-4" key={domain.id}>
                <div className="w-full my-3 font-medium text-xl md:text-2xl">
                  {domain.type}
                </div>
                <div className="justify-items-center grid grid-cols-4 md:grid-cols-6">
                  {domain.skills.map((skill) => (
                    <TooltipProvider key={skill.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="rounded-xl bg-[#242938] p-1"
                            src={skill.icon_url}
                            alt={skill.title}
                            width="50"
                            height="50"
                          />
                          <TooltipContent>{skill.title}</TooltipContent>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
}
