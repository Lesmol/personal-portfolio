import Image from "next/image";
import React from "react";

interface SummaryPaneProps {
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  institutionUrl: string;
}

function SummaryPane(props: SummaryPaneProps) {
  return (
    <a
      href={props.institutionUrl}
      target="_blank"
      className="group block transition-all duration-300 ease-in-out"
    >
      <div className="flex w-full items-center justify-between rounded-2xl bg-secondary/50 px-2 backdrop-blur-sm transition-all duration-300 hover:bg-secondary hover:shadow-lg md:p-2">
        <div className="flex items-center space-x-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-darker-primary/50">
            <Image
              src={props.imageUrl}
              alt={props.imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-white transition-colors group-hover:text-white md:text-lg">
              {props.title}
            </h1>
            <p className="text-sm font-medium text-custom-light-grey">
              {props.description}
            </p>
          </div>
        </div>
        <div className="hidden sm:block">
          <p className="font-mono text-sm font-medium text-primary">
            {props.duration}
          </p>
        </div>
      </div>
      {/* Mobile duration */}
      <div className="mb-2 mt-2 pl-20 sm:hidden">
        <p className="font-mono text-xs font-medium text-primary">
          {props.duration}
        </p>
      </div>
    </a>
  );
}

export default SummaryPane;
