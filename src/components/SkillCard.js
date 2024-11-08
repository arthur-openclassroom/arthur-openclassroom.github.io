import React from 'react';

const SkillCard = ({ skill }) => {
    return (
        <a
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full transform transition-all duration-300 hover:scale-105 cursor-pointer group"
        >
            <div className="bg-white h-48 w-full p-6 rounded-xl shadow-lg hover:shadow-xl flex flex-col items-center justify-center space-y-4">
                <div className="w-20 h-20 relative flex items-center justify-center">
                    <img
                        className="max-w-full max-h-full object-contain transform transition-transform duration-300 group-hover:scale-110"
                        src={skill.image}
                        alt={skill.name}
                    />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                <div className="relative h-1 w-20">
                    <div className="absolute inset-0 flex justify-center">
                        <div className="h-full w-0 group-hover:w-20 bg-blue-500 rounded-full transition-all duration-300 origin-center"></div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default SkillCard;
