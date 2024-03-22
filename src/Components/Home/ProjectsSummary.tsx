import LinkItem from "./LinkItem";

function ProjectsSummary() {
  return (
    <div className="mt-8">
      <h3 className="text-primary text-xl">Projects</h3>
      <LinkItem
        title="Cloud Resume Challenge"
        link="https://github.com/Lesmol/CloudResumeChallenge_AWS"
      />
      <LinkItem
        title="Varsity Registration"
        link="https://github.com/Lesmol/varsity_registration"
      />
      <LinkItem
        title="Techspo Website"
        link="https://github.com/Lesmol/Techspo_Website"
      />
    </div>
  );
}

export default ProjectsSummary;
