"use client";

import * as React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ExpandableSectionProps {
  children: React.ReactNode;
  maxHeight?: number;
  className?: string;
  contentClassName?: string;
  showExpandButton?: boolean;
  expandButtonText?: string;
  collapseButtonText?: string;
  defaultExpanded?: boolean;
}

export function ExpandableSection({
  children,
  maxHeight = 300,
  className,
  contentClassName,
  showExpandButton = true,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  defaultExpanded = false,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [shouldShowButton, setShouldShowButton] = React.useState(false);
  const [actualHeight, setActualHeight] = React.useState<number | null>(null);

  // Check content height on mount and when children change
  React.useEffect(() => {
    const checkContentHeight = () => {
      if (contentRef.current) {
        const height = contentRef.current.scrollHeight;
        setActualHeight(height);
        setShouldShowButton(height > maxHeight);
      }
    };

    // Initial check
    checkContentHeight();

    // Set up resize observer to check when content dimensions change
    const resizeObserver = new ResizeObserver(checkContentHeight);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [children, maxHeight]);

  const toggleExpand = React.useCallback(() => {
    setIsExpanded((prev) => !prev);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden transition-all duration-500 ease-in-out",
          contentClassName
        )}
        style={{
          height: isExpanded
            ? actualHeight
              ? `${actualHeight}px`
              : "auto"
            : `${maxHeight}px`,
        }}
      >
        <div ref={contentRef} className="w-full">
          {children}
        </div>

        {/* Fade effect - only visible when collapsed and content overflows */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none transition-opacity duration-300",
            !isExpanded && shouldShowButton ? "opacity-100" : "opacity-0"
          )}
        />
      </div>

      {shouldShowButton && showExpandButton && (
        <div className="flex justify-center mt-2">
          <Button variant="outline" onClick={toggleExpand}>
            <span className="flex items-center">
              {isExpanded ? collapseButtonText : expandButtonText}
              {isExpanded ? (
                <ChevronUp className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300" />
              ) : (
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300" />
              )}
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}
