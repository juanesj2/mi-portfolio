import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center pt-20 pb-10 z-10 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-4xl px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Disponible para trabajar</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6">
          Juan Stiven
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-gray-400 mb-8">
          Full Stack Developer
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñando y desarrollando aplicaciones web rápidas, escalables y con una atención meticulosa al detalle.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-neon text-white font-bold rounded-full hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(129,140,248,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Ver Proyectos
          </a>
          <a
            href="https://github.com/juanesj2"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
          >
            Mi GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
