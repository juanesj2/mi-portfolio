import React from 'react';
import { motion } from 'framer-motion';
import { VscCode, VscLocation } from 'react-icons/vsc';
import { FiCamera, FiSettings, FiBox } from 'react-icons/fi';

const BentoAbout = () => {
  return (
    <section id="about" className="w-full flex flex-col items-center py-20 z-10">
      <h3 className="text-3xl font-bold tracking-tight text-white mb-12">Sobre mí</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {/* Main Bio - 2 columns wide */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="glass-panel p-8 rounded-3xl md:col-span-2 flex flex-col justify-center"
        >
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
            <VscCode size={20} />
          </div>
          <h4 className="text-xl font-semibold text-white mb-4">Desarrollo Web</h4>
          <p className="text-gray-400 leading-relaxed">
            Soy desarrollador Full Stack especializado en crear productos digitales sólidos y escalables. 
            Me muevo fluidamente entre el backend con <span className="text-gray-200 font-medium">PHP y Laravel</span>, 
            y el frontend con <span className="text-gray-200 font-medium">JavaScript, React y Tailwind CSS</span>. 
            Priorizo el código limpio y la arquitectura mantenible.
          </p>
        </motion.div>

        {/* Location - 1 column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
          className="glass-panel p-8 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white">
              <VscLocation size={20} />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Ubicación</h4>
            <p className="text-gray-400">Albacete, España</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium w-max">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Disponible en Remoto
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium w-max group" title="El motor principal de mi código">
              <span className="group-hover:animate-bounce">☕</span>
              Nivel de Café: 100%
            </div>
          </div>
        </motion.div>

        {/* Hobbies - 3 columns wide but separated internally */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.2 }}
          className="glass-panel p-8 rounded-3xl md:col-span-3"
        >
          <h4 className="text-xl font-semibold text-white mb-6">Mis Pasatiempos</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <FiCamera size={28} className="text-gray-300 mb-4" />
              <h5 className="text-white font-medium mb-2">Fotografía</h5>
              <p className="text-sm text-gray-400">Capturando momentos, paisajes y buscando la luz perfecta.</p>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <FiSettings size={28} className="text-gray-300 mb-4" />
              <h5 className="text-white font-medium mb-2">Impresión 3D</h5>
              <p className="text-sm text-gray-400">Traduciendo modelos digitales a objetos físicos reales capa por capa.</p>
            </div>
            <div className="flex flex-col p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <FiBox size={28} className="text-gray-300 mb-4" />
              <h5 className="text-white font-medium mb-2">Diseño 3D</h5>
              <p className="text-sm text-gray-400">Modelado de piezas funcionales y creativas para diversos proyectos.</p>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack - 3 columns wide */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.3 }}
          className="glass-panel p-8 rounded-3xl md:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <h4 className="text-lg font-medium text-white whitespace-nowrap">Stack Principal</h4>
          <div className="flex flex-wrap gap-2 justify-end">
            {['PHP', 'Laravel', 'JavaScript', 'React', 'Tailwind', 'WordPress'].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm hover:text-white hover:bg-white/10 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BentoAbout;
