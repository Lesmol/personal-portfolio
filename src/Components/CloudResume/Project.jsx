import React from "react";

import ProjectInfo from "./ProjectInfo";

function Project() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl text-primary">Projects</h1>
      <ProjectInfo
        title="Techspo Site"
        stack="Azure SQL Database | ASP.NET | C#"
        description="With Techspo Site, I employed Azure as the infrastructure for the database server
         and web hosting. The website is crafted using chtml, CSS, and some JavaScript. Utilizing 
         Azure for the database server proved beneficial, allowing seamless access from different 
         machines within the subnet I set since the database is hosted remotely. This responsive 
         MVC application was developed using ASP.NET, the C# framework. Additionally, I designed 
         some of the application's assets with Figma to ensure they harmonize with the website's theme."
      />
      <ProjectInfo
        title="Cloud Resume Challenge"
        stack="React | Azure | GitHub Actions | Terraform"
        description="This website your looking at is the end product of the cloud resume challenge, 
        with a little twist. I used ReactJS for the frontend of the project and Terraform for the IaC."
      />
    </div>
  );
}

export default Project;
