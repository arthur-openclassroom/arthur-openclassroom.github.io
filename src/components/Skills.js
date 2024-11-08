import React from 'react';
import SkillCard from './SkillCard';
import skillsData from '../assets/skills.json';
const Skills = () => {
    return (
        <section className="min-h-[calc(100vh-1.5rem)] p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-center mb-12">Compétences</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} skill={skill} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
