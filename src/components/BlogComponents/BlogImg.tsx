import { urlFor } from "@/lib/sanityClient";
import Image from "next/image";

export default function BlogImg({ imgProps }: { imgProps: any }) {
  const imgSrc = urlFor(imgProps.value.asset).url();
  return (
    <div>
      <Image
        className="py-2"
        src={imgSrc}
        style={{
          objectFit: "contain",
          width: "100%",
          height: "auto",
          maxHeight: "500px",
        }}
        alt="project photo"
        sizes="100vw"
        width={0}
        height={0}
      />
    </div>
  );
}
