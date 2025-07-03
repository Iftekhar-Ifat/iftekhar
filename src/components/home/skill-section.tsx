import React from "react";
import { Circle } from "lucide-react";
import TechStackBadge from "../shared/tech-stack-badge";
import { IconSlug } from "../shared/tech-icons";

type SkillItem = {
  title: string;
  icon: IconSlug;
};

type Skills = {
  [category: string]: SkillItem[];
};

export const skills: Skills = {
  ai_ml: [
    { title: "Python", icon: "python" },
    { title: "OpenCV", icon: "open_cv" },
    { title: "PyTorch", icon: "pytorch" },
    { title: "NumPy", icon: "numpy" },
    { title: "Pandas", icon: "pandas" },
    { title: "TensorFlow", icon: "tensorflow" },
  ],
  web_dev: [
    { title: "React", icon: "react" },
    { title: "TypeScript", icon: "typescript" },
    { title: "Next", icon: "nextjs" },
    { title: "Tailwind", icon: "tailwind" },
    { title: "Node", icon: "nodejs" },
    { title: "Express", icon: "express" },
    { title: "Nest", icon: "nestjs" },
    { title: "Zod", icon: "zod" },
    { title: "ReactQuery", icon: "react_query" },
  ],
  misc: [
    { title: "PostgreSQL", icon: "postgres" },
    { title: "MySQL", icon: "mysql" },
    { title: "MongoDB", icon: "mongodb" },
    { title: "Prisma", icon: "prisma" },
  ],
};

export default function SkillSection() {
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <span className="font-semibold">Worked with:</span>
      </div>

      <div className="ml-4 text-muted-foreground space-y-4">
        {/* AI/ML */}
        <div className="flex items-start gap-2">
          <Circle
            className="mt-2 text-muted-foreground self-start shrink-0"
            size={6}
            fill="oklch(0.708 0 0)"
          />
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <span className="font-semibold text-sm">AI/ML:</span>
            <div className="flex flex-wrap gap-2">
              {skills.ai_ml.map((skill) => (
                <TechStackBadge
                  className="bg-card text-muted-foreground"
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Webdev */}
        <div className="flex items-start gap-2">
          <Circle
            className="mt-2 text-muted-foreground self-start shrink-0"
            size={6}
            fill="oklch(0.708 0 0)"
          />
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <span className="font-semibold text-sm">WebDev:</span>
            <div className="flex flex-wrap gap-2">
              {skills.web_dev.map((skill) => (
                <TechStackBadge
                  className="bg-card text-muted-foreground"
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Misc */}
        <div className="flex items-start gap-2">
          <Circle
            className="mt-2 text-muted-foreground self-start shrink-0"
            size={6}
            fill="oklch(0.708 0 0)"
          />
          <div className="flex flex-col sm:flex-row sm:items-start sm:gap-2">
            <span className="font-semibold text-sm">Misc.:</span>
            <div className="flex flex-wrap gap-2">
              {skills.misc.map((skill) => (
                <TechStackBadge
                  className="bg-card text-muted-foreground"
                  key={skill.title}
                  title={skill.title}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
