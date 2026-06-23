import React from 'react';
import { motion } from 'framer-motion';

import enfocaLogo from '../assets/logo_ENFOKA-sin-fondo.png';
import gasolineraLogo from '../assets/gasolinera.png';
import agenciaViajesLogo from '../assets/agenciaViajesLogo.png';
import springBootLogo from '../assets/springBoot.png';

function Projects() {
  const projects = [
    {
      title: 'Enfoca',
      description: 'Una red social moderna y visual, enfocada en la fotografía.',
      image: enfocaLogo,
      codeLink: 'https://github.com/juanesj2/Enfoca_ProyectoFinal',
      tech: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'JavaScript'],
    },
    {
      title: 'Gestion Básica Gasolinera',
      description: 'Un sistema de gestión para estaciones de servicio, permitiendo el control de ventas.',
      image: gasolineraLogo,
      codeLink: 'https://github.com/juanesj2/Gestion_basica_gasolinera.git',
      tech: ['PHP', 'Html', 'CSS', 'MySQL'],
    },
    {
      title: 'Agencia de Viajes',
      description: 'Un sitio web para una agencia de viajes, con funcionalidades de búsqueda y reservas.',
      image: agenciaViajesLogo,
      codeLink: 'https://github.com/juanesj2/agenciaViajes/tree/master',
      tech: ['PHP', 'Html', 'CSS', 'MySQL'],
    },
    {
      title: 'Gestion Básica Gasolinera en Spring Boot',
      description: 'Un sistema de gestión para estaciones de servicio, desarrollado con Spring Boot.',
      image: springBootLogo,
      codeLink: 'https://github.com/juanesj2/Gasolinera-en-SpringBoot/tree/master',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
    },
  ];

  return (
    <section id="projects" className="w-full flex flex-col items-center py-20 z-10">
      <h3 className="text-3xl font-bold tracking-tight text-white mb-12">Proyectos</h3>

      <div className="grid gap-6 md:grid-cols-2 w-full">
        {projects.map(({ title, description, image, codeLink, tech }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 300, damping: 30, delay: index * 0.1 }}
            className={`bg-white/5 border border-white/10 p-1 rounded-3xl flex flex-col overflow-hidden group ${
              projects.length % 2 !== 0 && index === projects.length - 1
                ? 'md:col-span-2 md:mx-auto md:w-1/2'
                : ''
            }`}
          >
            <div className="w-full h-56 bg-[#0a0a0a] rounded-t-[1.3rem] flex items-center justify-center overflow-hidden border-b border-white/5">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={image}
                alt={title}
                className="max-w-[70%] max-h-[70%] object-contain"
              />
            </div>
            
            <div className="p-8 flex-1 flex flex-col bg-[#050505] rounded-b-[1.3rem]">
              <h4 className="text-xl font-semibold text-white mb-3">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs font-medium rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 flex justify-center items-center gap-2 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 transition-colors text-sm"
              >
                Ver Código
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
