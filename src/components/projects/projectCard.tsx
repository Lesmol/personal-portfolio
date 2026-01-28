import React from "react";
import { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary group flex flex-col justify-between rounded-xl border border-white/10 p-5 transition-all duration-200 hover:border-white/30 hover:shadow-lg"
    >
      <div>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-folder2 text-primary"
              viewBox="0 0 16 16"
            >
              <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5z" />
            </svg>
            <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-blue-400">
              {project.name}
            </h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box-arrow-up-right text-darker-primary"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
            />
            <path
              fillRule="evenodd"
              d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
            />
          </svg>
        </div>
        <p className="text-custom-light-grey mb-6 line-clamp-2 text-sm">
          {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-4">
        {project.languages.map((lang) => (
          <div key={lang.name} className="flex items-center space-x-1.5">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: lang.color }}
            ></span>
            <span className="text-darker-primary text-xs font-medium">
              {lang.name}
            </span>
          </div>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
