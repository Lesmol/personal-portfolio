import React from "react";

import ProjectInfo from "./ProjectInfo";

function Project() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl text-primary">Projects</h1>
      <ProjectInfo
        title="Techspo Site"
        stack="Azure SQL Database | ASP.NET | C#"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla,
        ea harum iure eius blanditiis animi dicta beatae delectus? Deserunt
        suscipit itaque doloribus? Optio beatae id, neque nam perspiciatis
        omnis."
      />
      <ProjectInfo
        title="Cloud Resume Challenge"
        stack="React | AWS | GitHub Actions | Terraform"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nulla,
        ea harum iure eius blanditiis animi dicta beatae delectus? Deserunt
        suscipit itaque doloribus? Optio beatae id, neque nam perspiciatis
        omnis."
      />
    </div>
  );
}

export default Project;
