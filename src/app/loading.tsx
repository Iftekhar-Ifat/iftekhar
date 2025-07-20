import MaxWidthWrapper from "@/components/max-width-wrapper";

export default function Loading() {
  return (
    <MaxWidthWrapper>
      <div className="flex text-muted-foreground items-center">
        <span className="font-mono text-sm mr-1">Loading</span>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 -5 24 24"
          >
            <title>Loading...</title>
            <circle cx="4" cy="12" r="2" fill="currentColor">
              <animate
                id="ellipsis1"
                begin="0;ellipsis3.end+0.25s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="12" cy="12" r="2" fill="currentColor">
              <animate
                begin="ellipsis1.begin+0.1s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
            <circle cx="20" cy="12" r="2" fill="currentColor">
              <animate
                id="ellipsis3"
                begin="ellipsis1.begin+0.2s"
                attributeName="cy"
                calcMode="spline"
                dur="0.6s"
                values="12;6;12"
                keySplines=".33,.66,.66,1;.33,0,.66,.33"
              />
            </circle>
          </svg>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
