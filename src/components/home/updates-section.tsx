import React from "react";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineTitle,
} from "../ui/timeline";

const timelineData = [
  {
    id: 1,
    title: "Vercel was founded in SF, USA",
    description:
      "Vercel Inc., formerly ZEIT, is an American cloud platform as a service company. The company maintains the Next.js web development framework.",
    time: "May, 2020",
  },
  {
    id: 2,
    title: "Shadcn First Commit",
    description:
      "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
    time: "January, 2023",
  },
  {
    id: 3,
    title: "Shadcn Timeline",
    description: "Shadcn timeline component. Open Source.",
    time: "November, 2024",
  },
];

export default function UpdatesSection() {
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
              <TimelineDescription>{item.description}</TimelineDescription>
            )}
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
