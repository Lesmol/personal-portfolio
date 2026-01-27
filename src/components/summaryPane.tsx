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

function summaryPane(props: SummaryPaneProps) {
  return (
    <a href={props.institutionUrl} target="_blank" className="block">
      <div className="mx-auto mt-3 flex w-full max-w-[570px] items-center justify-between">
        <div className="flex w-96 items-center space-x-3">
          <Image
            width={0}
            height={0}
            src={props.imageUrl}
            alt={props.imageAlt}
            className="w-12 rounded-full"
          />
          <div className="">
            <h1 className="font-medium">{props.title}</h1>
            <p className="font-light text-primary">{props.description}</p>
          </div>
        </div>
        <p className="block font-mono font-medium text-primary">
          {props.duration}
        </p>
      </div>
    </a>
  );
}

export default summaryPane;
