import { motion } from 'framer-motion';
import enfocaLogo from '../assets/logo_ENFOKA-sin-fondo.png';

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
      title: 'Proyecto 2',
      description: 'Otro proyecto moderno y visual.',
      image: 'https://via.placeholder.com/400x200',
      codeLink: 'https://github.com/usuario/proyecto2',
      tech: ['Laravel', 'PHP', 'MySQL'],
    },
  ];

  return (
    <section id="projects" className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl absolute -top-50 -left-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
      </div>

      <h3 className="text-3xl font-bold text-neon mb-10">Proyectos</h3>

      <div className="grid gap-10 md:grid-cols-2 max-w-5xl w-full">
        {projects.map(({ title, description, image, codeLink, tech }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,255,100,0.3)' }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover-cover" />
            <div className="p-6 text-left">
              <h4 className="text-xl font-semibold mb-2 text-neon">{title}</h4>
              <p className="text-gray-400 mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t) => (
                  <span key={t} className="bg-cyan-500 text-black text-xs font-semibold px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-neon rounded hover:bg-neon hover:text-black transition"
                >
                  Código
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
