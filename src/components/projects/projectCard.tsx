import { Project } from "@/data/projects";
import { GitHubIcon } from "@/components/icons";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3.5 rounded-[14px] border border-line bg-card p-5.5 transition-colors hover:border-line-strong hover:text-text md:p-7"
    >
      <span className="font-mono text-xs text-accent">{project.tag}</span>
      <span className="font-display text-2xl leading-[1.2] font-medium tracking-[-0.02em] transition-colors group-hover:text-accent">
        {project.name}
      </span>
      <span className="text-base leading-[1.55] text-soft">{project.description}</span>
      <span className="flex flex-wrap gap-1.5">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line px-2.5 py-1 font-mono text-xs leading-normal text-muted"
          >
            {item}
          </span>
        ))}
      </span>
      <span className="mt-auto inline-flex items-center gap-2 pt-1 font-mono text-[13px] text-muted transition-colors group-hover:text-text">
        <GitHubIcon />
        <span>View on GitHub →</span>
      </span>
    </a>
  );
}

export default ProjectCard;
