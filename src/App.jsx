import React, { useState } from 'react'
import Hero from './components/layout/hero'
import BentoAbout from './components/layout/BentoAbout'
import Projects from './components/projects'
import Footer from './components/layout/footer'
import ProfileCard from './components/ProfileCard/ProfileCard'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc'
import Dock from './components/Dock'
import { motion, AnimatePresence } from 'framer-motion';

const dockItems = [
  {
    icon: <VscHome size={24} />,
    label: 'Inicio',
    onClick: () => { window.location.hash = '#'; },
  },
  {
    icon: <VscAccount size={24} />,
    label: 'Sobre mí',
    onClick: () => { window.location.hash = '#about'; },
  },
  {
    icon: <VscArchive size={24} />,
    label: 'Proyectos',
    onClick: () => { window.location.hash = '#projects'; },
  }
];

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen text-gray-200 font-sans pb-24 selection:bg-white selection:text-black">
      
      {/* Background radial gradient overlay for depth */}
      <div className="fixed inset-0 pointer-events-none z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black"></div>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 flex flex-col gap-32">
        <Hero />
        <BentoAbout />
        <Projects />
        
        <section id="contact" className="py-24 flex flex-col items-center justify-center">
          <h3 className="text-3xl font-bold tracking-tight text-white mb-12">Contacto</h3>
          <ProfileCard
            name="Juan S. Alcañiz"
            title="Full Stack Developer"
            handle="juanes"
            status="Disponible"
            contactText="Hablemos"
            avatarUrl="https://raw.githubusercontent.com/juanesj2/mi-portfolio/refs/heads/main/public/avatar.png"
            showUserInfo={true}
            enableTilt={true}
            onContactClick={() => setShowModal(true)}
            className="shadow-2xl shadow-black/50"
          />
        </section>
      </main>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="glass-panel p-8 rounded-3xl w-full max-w-md relative overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-semibold mb-6 text-white tracking-tight">Contacto</h2>
              
              <div className="space-y-4">
                <a href="mailto:juanstivenaa82@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="text-gray-400 group-hover:text-white transition-colors">📧</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-sm font-medium text-gray-200">juanstivenaa82@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://github.com/juanesj2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="text-gray-400 group-hover:text-white transition-colors">🐙</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">GitHub</div>
                    <div className="text-sm font-medium text-gray-200">github.com/juanesj2</div>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/juan-stiven-alca%C3%B1iz-aullon-b46a1a274/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group">
                  <div className="text-gray-400 group-hover:text-white transition-colors">💼</div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-0.5">LinkedIn</div>
                    <div className="text-sm font-medium text-gray-200">Juan Stiven Alcañiz</div>
                  </div>
                </a>
              </div>

              <button
                className="mt-8 w-full py-3 bg-white text-black hover:bg-gray-200 font-medium rounded-xl transition-colors text-sm"
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />

      {/* Dock fijo abajo */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <Dock
          items={dockItems}
          panelHeight={60}
          baseItemSize={44}
          magnification={60}
        />
      </div>
    </div>
  );
}

export default App;
