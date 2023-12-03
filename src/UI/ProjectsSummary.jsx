import React from "react";

import ProjectsItem from "../Components/ProjectsItem";

function ProjectsSummary() {
  return (
    <div className="mt-8">
      <h3 className="text-primary text-xl">Projects</h3>
      <ProjectsItem
        title="Techspo Website"
        link="https://github.com/Lesmol/Techspo_Website"
      />
      <ProjectsItem
        title="CloudResume Challenge"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
    </div>
  );
}

export default ProjectsSummary;
