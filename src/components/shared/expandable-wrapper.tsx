"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

type ExpandableSectionProps = {
  children: ReactNode;
  maxHeight?: number;
  className?: string;
  contentClassName?: string;
  showExpandButton?: boolean;
  expandButtonText?: string;
  collapseButtonText?: string;
  defaultExpanded?: boolean;
};

export function ExpandableWrapper({
  children,
  maxHeight = 300,
  className,
  contentClassName,
  showExpandButton = true,
  expandButtonText = "Expand",
  collapseButtonText = "Collapse",
  defaultExpanded = false,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldShowButton, setShouldShowButton] = useState(false);
  const [actualHeight, setActualHeight] = useState<number | null>(null);

  // Check content height on mount and when children change
  useEffect(() => {
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

  const toggleExpand = useCallback(() => {
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
          maxHeight: isExpanded ? `${actualHeight}px` : `${maxHeight}px`,
          transition: "max-height 0.7s ease-in-out",
        }}
      >
        <div ref={contentRef} className="w-full">
          {children}
        </div>

        {/* Fade effect with button inside - only visible when collapsed and content overflows */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 flex h-32 transform flex-col items-center justify-end pb-2 transition-all duration-700 ease-in-out",
            !isExpanded && shouldShowButton
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-90 opacity-0"
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background to-transparent" />

          {shouldShowButton && showExpandButton && !isExpanded && (
            <Button
              variant="outline"
              onClick={toggleExpand}
              className="relative z-10 mb-2 shadow-lg"
            >
              <span className="flex items-center">
                {expandButtonText}
                <ChevronDown className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300" />
              </span>
            </Button>
          )}
        </div>
      </div>

      {/* Only show this button when expanded */}
      {shouldShowButton && showExpandButton && isExpanded && (
        <div
          className={cn(
            "mt-2 flex transform justify-center transition-all duration-700 ease-in-out",
            isExpanded
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-4 scale-90 opacity-0 delay-200"
          )}
        >
          <Button variant="outline" onClick={toggleExpand}>
            <span className="flex items-center">
              {collapseButtonText}
              <ChevronUp className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}
