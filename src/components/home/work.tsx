import ProjectCard from "@/components/projects/projectCard";
import { Section, SectionHeader } from "@/components/section";
import { projects } from "@/data/projects";

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
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.githubUrl} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default Work;
