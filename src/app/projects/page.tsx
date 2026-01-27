import Navbar from "@/components/navbar";
import { Metadata } from "next";
import React from "react";
import ProjectCard from "@/components/projects/projectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Lesedi Molemi | Projects",
  description:
    "Welcome to my projects page, where you'll get to see the things I've worked on.",
};

function page() {
  return (
    <div className="container mx-auto max-w-3xl items-center p-4 md:p-0 md:pb-10">
      <Navbar />
      <div className="mt-12">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-custom-light-grey mb-10">
          A collection of my recent work, experiments, and open-source contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
