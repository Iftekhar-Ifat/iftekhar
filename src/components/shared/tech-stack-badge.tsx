import React from "react";
import { Badge } from "../ui/badge";
import { IconSlug, TechIcons } from "./tech-icons";

export default function TechStackBadge({
  title,
  icon,
}: {
  title: string;
  icon: IconSlug;
}) {
  return (
    <Badge variant="outline" className="px-1 text-sm">
      <TechIcons item={icon} size={16} />
      {title}
    </Badge>
  );
}
