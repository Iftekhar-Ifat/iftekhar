import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import { getResearchContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { getMDXComponents } from "../../../mdx-components";
import PublicationType from "@/components/publication-type";

export default async function Research() {
  const { publications, ongoing } = await getResearchContent();

  if (!publications || !ongoing) {
    return notFound();
  }

  const mdxComponents = getMDXComponents({
    PublicationType: PublicationType,
  });

  return (
    <MaxWidthWrapper className="my-4 md:my-8">
      <div className="flex items-center justify-between pb-4">
        <span className="font-mono text-2xl font-bold tracking-wide">
          Research
        </span>
      </div>
      <Separator />
      <div className="my-4">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-medium tracking-wide">
              Publications
            </span>
          </div>
          <div className="prose-ui !bg-background ">
            <MDXRemote
              source={publications.content}
              components={mdxComponents}
            />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xl font-medium tracking-wide">
              Ongoing
            </span>
          </div>
          <div className="prose-ui !bg-background ">
            <MDXRemote source={ongoing.content} components={mdxComponents} />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
