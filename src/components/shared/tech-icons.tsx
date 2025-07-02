import {
  siTypescript,
  siReact,
  siNextdotjs,
  siExpress,
  siNodedotjs,
  siTailwindcss,
  siNumpy,
  siPandas,
  siTensorflow,
  siPytorch,
  siNestjs,
  siPython,
  siMeta,
  siPostgresql,
  siMysql,
  siMongodb,
  siGithub,
  siPrisma,
  siZod,
  siReactquery,
  siOpencv,
} from "simple-icons";

const curatedIcons = {
  python: siPython,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  express: siExpress,
  nodejs: siNodedotjs,
  tailwind: siTailwindcss,
  numpy: siNumpy,
  pandas: siPandas,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  nestjs: siNestjs,
  meta: siMeta,
  postgres: siPostgresql,
  mysql: siMysql,
  mongodb: siMongodb,
  github: siGithub,
  prisma: siPrisma,
  zod: siZod,
  react_query: siReactquery,
  open_cv: siOpencv,
} as const;

export type IconSlug = keyof typeof curatedIcons;

type IconsProps = {
  item: IconSlug;
  size?: number;
};

export function TechIcons({ item, size = 16 }: IconsProps) {
  const icon = curatedIcons[item];

  const invertedIcons: IconSlug[] = [
    "nextjs",
    "express",
    "numpy",
    "pandas",
    "github",
    "prisma",
  ];

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={invertedIcons.includes(item) ? `currentColor` : `#${icon.hex}`}
      style={{ width: size, height: size }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
