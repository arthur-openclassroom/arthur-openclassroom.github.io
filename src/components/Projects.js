import React from 'react';
import projectsData from '../assets/projects.json';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="min-h-[calc(100vh-1.5rem)] p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-12">Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => {
                    const projectImage = require(`../assets/project/${project.image}`);
                    return (
                        <ProjectCard key={index} project={project} projectImage={projectImage} />
                    );
                })}
            </div>
        </section>
    );
};



export default Projects;
