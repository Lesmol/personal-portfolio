import ProjectInfo from "./ProjectInfo";

function Project() {
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl text-primary">Projects</h1>
      <ProjectInfo
        title="Responsive React App"
        link="https://github.com/Lesmol/CloudResumeChallenge_Azure"
        stack="React | Azure App Service | GitHub Actions"
        description={[
          "Directed the migration project that transitioned the application to Vite, resulting in a decreased bundle size, optimised performance and reducing server build time.",
          "Designed and implemented a robust CI/CD pipeline that streamlined testing and automated builds upon code commits, reducing deployment time and enhancing code quality.",
          "Deployed a high-availability application on Azure using Azure App Service, ensuring 99.9% uptime and improving the scalability and reliability of the project.",
        ]}
      />
      <ProjectInfo
        title="Next.js Frontend with .NET Core Minimal API Backend"
        link="https://github.com/Lesmol/zupi-site"
        stack="Azure SQL Database | ASP.NET Core | C#"
        description={[
          "Designed and deployed scalable Azure infrastructure using Terraform for IaC and implemented Azure Pipelines for CI/CD, enhancing infrastructure deployment efficiency and reliability.",
          "Developed a streamlined backend API using Minimal API architecture, significantly reducing boilerplate code and accelerating development time while maintaining high performance.",
          "Engineered a responsive frontend with Next.js, leveraging SSR and server functions to enhance security and performance while delivering a seamless user experience.",
        ]}
      />
      <ProjectInfo
        title="Full-stack .NET Core MVC application with Azure hosted MS SQL Server Database"
        link="https://github.com/Lesmol/Techspo_Website"
        stack="Azure SQL Database | ASP.NET Core | C#"
        description={[
          "Developed a comprehensive full-stack .NET Core MVC application using Blazor Pages, enhancing user experience and delivering a responsive, feature-rich interface.",
          "Implemented a secure, cloud-hosted database solution using Azure SQL Database, enabling seamless access for group members, which improved collaboration and data integrity.",
        ]}
      />
    </div>
  );
}

export default Project;
