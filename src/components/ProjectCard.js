import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, projectImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        if (project.repo) {
            window.open(project.repo, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden group perspective cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <motion.div
                className={`absolute inset-0 bg-white shadow-lg flex flex-col items-center justify-center text-center ${isHovered ? 'rotate-y-180' : ''}`}
                initial={{ rotateY: 0 }}
                animate={{ rotateY: isHovered ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <div className="w-full h-3/4 overflow-hidden">
                    <img
                        src={projectImage}
                        alt={project.name}
                        className="w-full h-full object-contain scale-75"
                    />
                </div>
                <h3 className="mt-2 text-lg font-semibold">{project.name}</h3>
            </motion.div>

            <motion.div
                className={`absolute inset-0 bg-blue-600 text-white flex flex-col items-center justify-center text-center ${isHovered ? '' : 'rotate-y-180'}`}
                initial={{ rotateY: 180 }}
                animate={{ rotateY: isHovered ? 0 : 180 }}
                transition={{ duration: 0.6 }}
                style={{ backfaceVisibility: 'hidden' }}
            >
                <p className="p-4">{project.description}</p>
                {project.repo && (
                    <span
                        className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-['Fira_Code'] hover:bg-blue-100 transition-colors"
                    >
                        Voir le code source
                    </span>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;