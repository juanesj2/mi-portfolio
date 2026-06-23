import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'CSS', level: 'Avanzado', color: 'from-blue-400 to-blue-600' },
    { name: 'Laravel', level: 'Avanzado', color: 'from-red-500 to-rose-700' },
    { name: 'PHP', level: 'Avanzado', color: 'from-indigo-400 to-indigo-600' },
    { name: 'JavaScript', level: 'Intermedio', color: 'from-yellow-400 to-yellow-600' },
    { name: 'React', level: 'Intermedio', color: 'from-cyan-400 to-cyan-600' },
    { name: 'WordPress', level: 'Avanzado', color: 'from-blue-300 to-blue-500' },
    { name: 'Elementor', level: 'Avanzado', color: 'from-pink-400 to-pink-600' },
    { name: 'Tailwind CSS', level: 'Avanzado', color: 'from-teal-400 to-teal-600' },
  ];

  return (
    <div className="mt-20 text-center relative z-10 w-full max-w-5xl mx-auto">
      <h4 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-12 tracking-tight">Habilidades</h4>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-6 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            {/* Hover Gradient Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            
            <h5 className="text-xl font-bold text-white mb-2 relative z-10">{skill.name}</h5>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider relative z-10 bg-white/10 px-3 py-1 rounded-full">
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
