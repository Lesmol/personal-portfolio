import React from "react";

type Props = {
  ImageUrl: string;
  ImageAlt: string;
  BlogPath: string;
  Date: string;
  Title: string;
  Summary: string;
};

function BlogItem(props: Props) {
  return (
    <a href={props.BlogPath} className="group">
      <div className="mb-12 w-fit justify-between sm:mx-auto md:flex md:flex-row-reverse">
        <div className="w-full max-w-lg overflow-clip rounded md:ml-2 md:max-w-40">
          <img
            src={props.ImageUrl}
            alt={props.ImageAlt}
            className="mb-2 h-full w-full object-cover transition duration-300 ease-in-out md:mb-0 md:group-hover:scale-105"
          />
        </div>
        <div className="md:w-[500px]">
          <h4 className="mb-1 text-sm text-custom-light-grey">{props.Date}</h4>
          <h2 className="text-xl">{props.Title}</h2>
          <h4 className="text-sm text-custom-light-grey">{props.Summary}</h4>
        </div>
      </div>
    </a>
  );
}

export default BlogItem;
