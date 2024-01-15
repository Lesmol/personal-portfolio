import ProjectsItem from "./ProjectsItem";

function ProjectsSummary() {
  return (
    <div className="mt-8">
      <h3 className="text-primary text-xl">Projects</h3>
      <ProjectsItem
        title="Cloud Resume Challenge"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
      <ProjectsItem
        title="Techspo Website"
        link="https://github.com/Lesmol/Techspo_Website"
      />
    </div>
  );
}

export default ProjectsSummary;
