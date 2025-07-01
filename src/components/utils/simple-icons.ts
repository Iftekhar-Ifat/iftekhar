import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiDocker,
} from "@icons-pack/react-simple-icons";

export const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  nodejs: SiNodedotjs,
  tailwindcss: SiTailwindcss,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  python: SiPython,
  docker: SiDocker,
} as const;

export type IconName = keyof typeof iconMap;
