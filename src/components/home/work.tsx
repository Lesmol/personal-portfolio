import ProjectCard from "@/components/projects/projectCard";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/data/projects";

const HOME_PROJECT_COUNT = 4;

function Work() {
  return (
    <Section id="work" className="flex flex-col gap-6 md:gap-10">
      <SectionHeader title="Selected work">
        <a
          href="https://github.com/Lesmol"
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 font-mono text-sm"
        >
          <span className="md:hidden">GitHub →</span>
          <span className="hidden md:inline">github.com/Lesmol →</span>
        </a>
      </SectionHeader>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-5">
        {projects.slice(0, HOME_PROJECT_COUNT).map((project) => (
          <ProjectCard key={project.githubUrl} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Work;
