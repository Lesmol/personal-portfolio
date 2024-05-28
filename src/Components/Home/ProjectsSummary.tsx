import LinkItem from "./LinkItem";

function ProjectsSummary() {
  return (
    <div className="mt-8">
      <h3 className="text-xl mb-1">Projects</h3>
      <p className="text-primary mb-4">
        Public repo's of projects I am either working on or have worked on.
      </p>
      <LinkItem
        title="Cloud Resume Challenge"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
      <LinkItem
        title="Techspo Website"
        link="https://github.com/Lesmol/Techspo_Website"
      />
    </div>
  );
}

export default ProjectsSummary;
