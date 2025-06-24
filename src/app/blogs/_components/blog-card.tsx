import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogCard() {
  const publishedAt = "2025-06-24"; // example
  const formattedDate = format(new Date(publishedAt), "MMMM d, yyyy");
  return (
    <Link key={1} href="/test" className="group">
      <Card className="flex h-full cursor-pointer py-4 flex-col justify-between border border-border transition-all duration-300 hover:scale-[1.01] hover:border-neutral-400">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-mono">
                {formattedDate}
              </p>
              <CardTitle className="line-clamp-2 text-xl leading-tight">
                Title
              </CardTitle>
              <CardDescription className="line-clamp-2 text-sm text-muted-foreground">
                Description goes here for this blog post
              </CardDescription>
            </div>
            <ArrowUpRight
              size={22}
              className="mt-1 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
            />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
