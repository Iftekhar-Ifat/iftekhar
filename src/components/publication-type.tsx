"use client";

import { Badge } from "./ui/badge";

type PublicationTypeBadgeProps = {
  type: "Q1" | "Q2" | "Q3" | "Q4";
};

export default function PublicationType({ type }: PublicationTypeBadgeProps) {
  const getBgColor = () => {
    switch (type) {
      case "Q1":
        return "bg-green-100 dark:bg-green-500/20";
      case "Q2":
        return "bg-blue-100 dark:bg-blue-500/20";
      case "Q3":
        return "bg-yellow-100 dark:bg-yellow-500/20";
      case "Q4":
        return "bg-red-100 dark:bg-red-500/20";
      default:
        return "bg-neutral-100 dark:bg-neutral-500/20";
    }
  };

  const getTextColor = () => {
    switch (type) {
      case "Q1":
        return "text-emerald-500";
      case "Q2":
        return "text-blue-500";
      case "Q3":
        return "text-yellow-600";
      case "Q4":
        return "text-red-500";
      default:
        return "text-neutral-500";
    }
  };

  return (
    <Badge
      className={`pointer-events-none ${getBgColor()} ${getTextColor()} px-2 py-0.5 text-sm font-bold`}
    >
      {type}
    </Badge>
  );
}
