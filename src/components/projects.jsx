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
    <section id="projects" className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="w-[500px] h-[500px] bg-brand opacity-10 rounded-full blur-[100px] absolute -top-20 -left-20" />
        <div className="w-[500px] h-[500px] bg-neon opacity-10 rounded-full blur-[100px] absolute -bottom-20 -right-20" />
      </div>

      <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-16 tracking-tight">Proyectos Destacados</h3>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl w-full justify-center">
        {projects.map(({ title, description, image, codeLink, tech }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 hover:border-brand/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(192,132,252,0.15)] flex flex-col ${
              projects.length % 2 !== 0 && index === projects.length - 1
                ? 'md:col-span-2 md:mx-auto md:w-1/2'
                : ''
            }`}
          >
            <div className="w-full h-56 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center overflow-hidden relative">
              {/* Subtle inner glow for image container */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10 pointer-events-none" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={image}
                alt={title}
                className="max-w-[80%] max-h-[80%] object-contain drop-shadow-2xl z-0 relative"
              />
            </div>
            
            <div className="p-8 text-left flex-1 flex flex-col relative z-20">
              <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-neon transition-colors">{title}</h4>
              <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{description}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {tech.map((t) => (
                  <span key={t} className="bg-white/10 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Ver Código
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
