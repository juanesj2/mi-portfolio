import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  "Full Stack Developer",
  "Transformando café en código ☕",
  "Apagador de fuegos profesional 🔥",
  "Experto en centrar divs 🎯"
];

function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 4000); // Cambia cada 4 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex flex-col items-center justify-center text-center pt-20 pb-10 z-10 min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="max-w-4xl px-4 flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-sm font-medium text-gray-300">Disponible para trabajar</span>
        </div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-white mb-6 cursor-pointer select-none"
          whileHover={{ scale: 1.02 }}
          whileTap={{ rotate: 360, scale: 0.9, transition: { duration: 0.5, type: "spring" } }}
          title="¡No me marees!"
        >
          Juan Stiven
        </motion.h1>
        
        <div className="h-12 md:h-16 mb-8 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={titleIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`text-2xl md:text-4xl font-semibold tracking-tight ${titleIndex === 0 ? 'text-gray-400' : 'text-gray-500'}`}
            >
              {titles[titleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Diseñando y desarrollando aplicaciones web rápidas, escalables y con una atención meticulosa al detalle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto"
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 transition-colors w-full sm:w-auto"
          >
            Contactar
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
