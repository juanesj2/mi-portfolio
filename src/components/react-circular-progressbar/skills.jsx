// src/components/react-circular-progressbar/Skills.jsx

import React from 'react';
import Skill from './Skill'; // Asegúrate que está en la misma carpeta

const Skills = () => {
  const skills = [
    
    { name: 'Laravel', percentage: 80 },
    { name: 'PHP', percentage: 80 },
    { name: 'CSS', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'Elementor', percentage: 75 },
    { name: 'Wordpress', percentage: 70 },
    { name: 'React', percentage: 60 },
  ];

  return (
    <div className="mt-16 text-center">
      <h4 className="text-3xl font-bold text-white mb-10">Habilidades</h4>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <Skill
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            delay={index * 0.2}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
