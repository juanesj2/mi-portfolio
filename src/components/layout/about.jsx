import React from 'react';
import SpotlightCard from '../SpotlightCard/SpotlightCard.jsx';
import SlideInMotion from '../../TextAnimations/SlideIn/SlideInMotion.jsx';
import Skills from '../react-circular-progressbar/skills.jsx';

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-96 h-96 opacity-10 rounded-full blur-3xl absolute -top-50 -left-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
        <div className="w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl absolute -bottom-50 -right-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold text-neon mb-10 drop-shadow-lg tracking-tight">
        Sobre mí
      </h3>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <SlideInMotion direction="left">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-200 text-lg md:text-xl font-medium">
              Hola, soy <span className="text-neon font-semibold">Juan Stiven</span>, desarrollador web <span className="text-neon font-semibold">junior full stack</span>. Especialista en <span className="text-cyan-400 font-semibold">PHP</span>, <span className="text-cyan-400 font-semibold">Laravel</span> y <span className="text-cyan-400 font-semibold">JavaScript</span>, con experiencia en <span className="text-cyan-400 font-semibold">React</span>, <span className="text-cyan-400 font-semibold">Angular</span> y <span className="text-cyan-400 font-semibold">WordPress</span>.
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <SlideInMotion direction="right">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-200 text-lg md:text-xl font-medium">
              Me apasiona crear interfaces <span className="text-neon font-semibold">limpias</span>, <span className="text-neon font-semibold">rápidas</span> y <span className="text-neon font-semibold">accesibles</span>. Disfruto del <span className="text-cyan-400 font-semibold">trabajo en equipo</span>, compartiendo ideas y <span className="text-cyan-400 font-semibold">aprendiendo constantemente</span>.
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <SlideInMotion direction="left">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-200 text-lg md:text-xl font-medium">
              Actualmente busco <span className="text-neon font-semibold">colaborar en proyectos</span> que me reten, donde pueda <span className="text-cyan-400 font-semibold">aportar valor</span> y seguir <span className="text-neon font-semibold">desarrollando mis habilidades</span>.
            </p>
          </SpotlightCard>
        </SlideInMotion>
      </div>
      <div className="mt-16 w-full">
        {/* Mis habilidades */}
        <Skills />
      </div>
    </section>
  );
}

export default About;
