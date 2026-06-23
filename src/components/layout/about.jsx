import React from 'react';
import SpotlightCard from '../SpotlightCard/SpotlightCard.jsx';
import SlideInMotion from '../../TextAnimations/SlideIn/SlideInMotion.jsx';
import Skills from '../react-circular-progressbar/Skills.jsx';

function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="w-[400px] h-[400px] bg-neon opacity-10 rounded-full blur-[100px] absolute -top-32 -left-32" />
        <div className="w-[400px] h-[400px] bg-brand opacity-10 rounded-full blur-[100px] absolute -bottom-32 -right-32" />
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-16 tracking-tight">
        Sobre mí
      </h3>

      <div className="flex flex-col gap-6 w-full max-w-4xl relative z-20">
        <SlideInMotion direction="up">
          <SpotlightCard className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
            <p className="text-gray-300 text-lg md:text-xl font-medium leading-relaxed">
              Hola, soy <span className="text-white font-bold">Juan Stiven</span>, desarrollador web <span className="text-white font-bold">Full Stack Junior</span>. Especialista en <span className="text-neon font-semibold">PHP</span>, <span className="text-neon font-semibold">Laravel</span> y <span className="text-neon font-semibold">JavaScript</span>, con experiencia en <span className="text-brand font-semibold">React</span>, <span className="text-brand font-semibold">Angular</span> y <span className="text-brand font-semibold">WordPress</span>.
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <div className="grid md:grid-cols-2 gap-6">
          <SlideInMotion direction="up">
            <SpotlightCard className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
              <p className="text-gray-300 text-lg font-medium leading-relaxed">
                Me apasiona crear interfaces <span className="text-white font-bold">limpias</span>, <span className="text-white font-bold">rápidas</span> y <span className="text-white font-bold">accesibles</span>. Disfruto del <span className="text-neon font-semibold">trabajo en equipo</span>, compartiendo ideas y <span className="text-brand font-semibold">aprendiendo constantemente</span>.
              </p>
            </SpotlightCard>
          </SlideInMotion>

          <SlideInMotion direction="up">
            <SpotlightCard className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
              <p className="text-gray-300 text-lg font-medium leading-relaxed">
                Actualmente busco <span className="text-white font-bold">colaborar en proyectos</span> que me reten, donde pueda <span className="text-neon font-semibold">aportar valor</span> y seguir <span className="text-brand font-semibold">desarrollando mis habilidades</span>.
              </p>
            </SpotlightCard>
          </SlideInMotion>
        </div>
      </div>
      <div className="mt-8 w-full relative z-20">
        {/* Mis habilidades */}
        <Skills />
      </div>
    </section>
  );
}

export default About;
