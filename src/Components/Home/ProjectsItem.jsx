import React from "react";

import githubWhite from "../../assets/SVG/github-mark-white.svg";

function ProjectsItem(props) {
  return (
    <div className="flex items-center mt-2 ml-4">
      <img
        className="w-[35px]"
        src={props.image ? props.image : githubWhite}
        alt={"Github Logo"}
      />
      <a href={props.link} target="_blank" className="ml-2 hover:text-darker-primary transition 150 ease-in-out">
        {props.title}
      </a>
    </div>
  );
}

export default ProjectsItem;
