import LinkItem from "./LinkItem";

function ProjectsSummary() {
  return (
    <div className="mt-8">
      <h3 className="text-xl mb-1">Projects</h3>
      <p className="text-primary text-sm mb-4">
        Public repo's of projects I'm either working on or completed.
      </p>
      <LinkItem
        title="Responsive React App deployed on Azure"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
      <LinkItem
        title="Next.js Frontend with .NET Core Minimal API Backend"
        link="https://github.com/Lesmol/zupi-site"
      />
      <LinkItem
        title="Full-stack .NET Core MVC application with Azure hosted MS SQL Server Database"
        link="https://github.com/Lesmol/Techspo_Website"
      />
    </div>
  );
}

export default ProjectsSummary;
