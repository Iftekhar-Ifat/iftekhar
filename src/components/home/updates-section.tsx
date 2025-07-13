import React from "react";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "../ui/timeline";
import { getMDXComponents } from "../../../mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";

const timelineData = [
  {
    id: 1,
    title:
      "National Cybersecurity Authority (NCA) Cybersecurity Research & Innovation Pioneers Grant",
    description: `Awarded the prestigious **NCA Cybersecurity Research & Innovation Pioneers Grant** by the National Cybersecurity Authority of the Kingdom of Saudi Arabia for the research proposal "Privacy-Preserving Federated Learning Platform for the Healthcare Domain".`,
  },
  {
    id: 2,
    title: "InteX funded project",
    description: `Currently engaged in a [InteX](https://www.intexlab.net/) funded research project focusing on **adversarial attack/defense** on image segmentation.`,
  },
  {
    id: 3,
    title: "Dental panoramic X-ray image segmentation",
    description: `Working with [CCDS MIRA Wing](https://ccds.ai/) under Md. Rashedur Rahman's supervision on dental panoramic x-ray segmentation techniques; exploring various state-of-the-art segmentation model architectures`,
  },
];

export default function UpdatesSection() {
  const mdxComponents = getMDXComponents({});
  return (
    <div className="font-mono max-w-full">
      <div className="flex items-center mb-4">
        <div className="font-semibold">Updates:</div>
      </div>
      <Timeline className="ml-4">
        {timelineData.map((item) => (
          <TimelineItem key={item.id}>
            <TimelineHeader>
              <TimelineTitle>{item.title}</TimelineTitle>
            </TimelineHeader>
            {item.description && (
              <TimelineDescription>
                <div className="prose-ui [&_p]:!mt-0 [&_p]:!mb-0 !bg-background !text-muted-foreground !font-mono !text-sm">
                  <MDXRemote
                    source={item.description}
                    components={mdxComponents}
                  />
                </div>
              </TimelineDescription>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
