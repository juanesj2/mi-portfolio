import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      
      {/* Subtle Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand opacity-20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <span className="text-neon font-medium tracking-widest uppercase text-sm md:text-base mb-4 drop-shadow-md">
          Hola, mundo. Soy
        </span>
        
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 mb-6 tracking-tight drop-shadow-lg">
          Juan Stiven
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-bold text-gray-400 mb-8 max-w-2xl">
          Full Stack Developer <br className="md:hidden" />
          <span className="text-brand opacity-80">&</span> Creador Digital
        </h2>
        
        <p className="text-gray-400 max-w-xl text-lg mb-12 leading-relaxed">
          Especializado en construir experiencias web rápidas, accesibles y con un diseño impecable utilizando React, Laravel y Tailwind CSS.
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
