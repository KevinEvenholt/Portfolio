import React, { useRef } from "react";
import SkeletonCard from "./skeletonCard";
import useVisible from "../utils/useVisible";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProjectsProps {
  projects?: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible = useVisible(ref1);

  // Ensure exactly 3 cards, adding skeletons if necessary
  const totalCards = 3;
  const filledProjects = [...projects];
  while (filledProjects.length < totalCards) {
    filledProjects.push({} as Project); // Empty objects will render as skeletons
  }

  const projectCards = filledProjects.map((project, index) => (
    <SkeletonCard
      key={index}
      title={project.title}
      description={project.description}
      imageUrl={project.imageUrl}
      link={project.link}
    />
  ));

  return (
    <section
      id="projects"
      ref={ref1}
      className={`
container mx-auto p-4 space-y-10
  transition-opacity
  ease-in
  duration-700
  ${isVisible ? "opacity-100" : "opacity-0"}
   lg:py-20 lg:px-12 md:px-8
`}
    >
      <div className="flex">
        <h2 id="h2" className="text-4xl font-serif md:text-6xl">
          <span className="text-base mr-2 text-orange-300">03.</span>My projects
        </h2>
        <div className="flex-grow self-end h-0.5 bg-orange-300 ml-4 lg:ml-6 lg:w-60"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projectCards}
      </div>
    </section>
  );
};

export default Projects;
