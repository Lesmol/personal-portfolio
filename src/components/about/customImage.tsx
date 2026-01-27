import Image from "next/image";
import React from "react";

interface CustomImageProps {
  src: string;
  alt: string;
  hidden?: boolean;
}

function customImage(props: CustomImageProps) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={200}
      height={250}
      className={`h-[25%] w-[45%] rounded-2xl object-cover md:h-62.5 md:w-50 ${
        !props.hidden ? "" : "hidden md:block"
      }`}
    />
  );
}

export default customImage;
