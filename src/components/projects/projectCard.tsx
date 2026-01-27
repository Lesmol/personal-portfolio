import React from "react";
import { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-primary flex flex-col justify-between rounded-xl border border-white/10 p-5 transition-all duration-200 hover:border-white/30 hover:shadow-lg group"
    >
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {project.name}
            </h3>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-darker-primary"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
        <p className="text-sm text-custom-light-grey mb-6 line-clamp-2">
          {project.description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-4 mt-auto">
        {project.languages.map((lang) => (
          <div key={lang.name} className="flex items-center space-x-1.5">
            <span 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: lang.color }}
            ></span>
            <span className="text-xs text-darker-primary font-medium">{lang.name}</span>
          </div>
        ))}
      </div>
    </a>
  );
}

export default ProjectCard;
