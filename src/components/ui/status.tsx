import type { ComponentProps, HTMLAttributes } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export type StatusProps = ComponentProps<typeof Badge> & {
  status: "ongoing" | "blocked" | "hold";
};

export const Status = ({ className, status, ...props }: StatusProps) => (
  <Badge
    className={cn("flex items-center gap-2", "group", status, className)}
    variant="secondary"
    {...props}
  />
);

export type StatusIndicatorProps = HTMLAttributes<HTMLSpanElement>;

export const StatusIndicator = ({ ...props }: StatusIndicatorProps) => (
  <span className="relative flex h-2 w-2" {...props}>
    <span
      className={cn(
        "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
        "group-[.ongoing]:bg-emerald-500",
        "group-[.blocked]:bg-red-500",
        "group-[.hold]:bg-amber-500"
      )}
    />
    <span
      className={cn(
        "relative inline-flex h-2 w-2 rounded-full",
        "group-[.ongoing]:bg-emerald-500",
        "group-[.blocked]:bg-red-500",
        "group-[.hold]:bg-amber-500"
      )}
    />
  </span>
);

export type StatusLabelProps = HTMLAttributes<HTMLSpanElement> & {
  text?: string;
};

export const StatusLabel = ({
  text,
  className,
  children,
  ...props
}: StatusLabelProps) => (
  <span className={cn("text-muted-foreground", className)} {...props}>
    {children ?? (
      <>
        <span className="hidden group-[.ongoing]:block">
          {text || "Ongoing"}
        </span>
        <span className="hidden group-[.blocked]:block">
          {text || "Blocked"}
        </span>
        <span className="hidden group-[.hold]:block">{text || "Hold"}</span>
      </>
    )}
  </span>
);
