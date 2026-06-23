import React, { useState } from 'react'
import Hero from './components/layout/hero'
import About from './components/layout/about'
import Personal from './components/layout/personal'
import Projects from './components/projects'
import Contact from './components/layout/contact'
import Footer from './components/layout/footer'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc'
import Dock from './components/Dock'
import Aurora from './components/Aurora';
import ClickSpark from './Animations/ClickSpark/ClickSpark.jsx';
import ProfileCard from './components/ProfileCard/ProfileCard'
import { motion, AnimatePresence } from 'framer-motion';

import './App.css'

const dockItems = [
  {
    icon: <VscHome size={24} />,
    label: 'Sobre mí',
    onClick: () => {
      window.location.hash = '#about';
    },
  },
  {
    icon: <VscArchive size={24} />,
    label: 'Proyectos',
    onClick: () => {
      window.location.hash = '#projects';
    },
  },
  {
    icon: <VscAccount size={24} />,
    label: 'Contacto',
    onClick: () => {
      window.location.hash = '#contact';
    },
  },
  {
    icon: <VscSettingsGear size={24} />,
    label: 'Top',
    onClick: () => {
      window.location.hash = '#';
    },
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full min-h-screen text-white font-sans pb-10 overflow-x-hidden selection:bg-brand selection:text-white">
      {/* Sparks por encima de todo */}
      <ClickSpark
        sparkColor='#818cf8'
        sparkSize={6}
        sparkRadius={12}
        sparkCount={6}
        duration={500}
      >
      
      {/* Navbar arriba */}
      {/* <Navbar /> */}

      {/* Sección con fondo Aurora */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Fondo Aurora fijo en esta sección */}
        <div className="absolute inset-0 -z-10 w-screen h-full">
          <Aurora
            colorStops={["#312e81", "#4f46e5", "#7e22ce"]}
            blend={0.5}
            amplitude={0.8}
            speed={0.5}
          />
        </div>

        {/* Contenido principal (Hero en este caso) */}
        <Hero />
      </section>

      {/* Resto de secciones, cada una puede tener su fondo */}
      <About />
      <Personal />

      <Projects />
      <Contact>
        <ProfileCard
          name="Juan S. Alcañiz Aullon"
          title="Full Stack Developer"
          handle="Juanes"
          status="Disponible"
          contactText="Contactame"
          avatarUrl="https://raw.githubusercontent.com/juanesj2/mi-portfolio/refs/heads/main/public/avatar.png"
          iconUrl="https://raw.githubusercontent.com/DavidHDev/react-bits/refs/heads/main/public/assets/iconpattern.png"
          grainUrl='https://raw.githubusercontent.com/DavidHDev/react-bits/refs/heads/main/public/assets/grain.webp'
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => setShowModal(true)}
        />
      </Contact>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-gray-900/90 border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-xl relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon to-brand rounded-t-3xl" />
              
              <h2 className="text-3xl font-black mb-6 text-white tracking-tight">
                Hablemos
              </h2>

              <div className="space-y-5 text-gray-300">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-neon/10 flex items-center justify-center text-neon">
                    📧
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</span>
                    <a href="mailto:juanstivenaa82@gmail.com" className="font-medium hover:text-white transition-colors">
                      juanstivenaa82@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand">
                    🐙
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">GitHub</span>
                    <a href="https://github.com/juanesj2" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">
                      github.com/juanesj2
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                    💼
                  </div>
                  <div>
                    <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">LinkedIn</span>
                    <a href="https://www.linkedin.com/in/juan-stiven-alca%C3%B1iz-aullon-b46a1a274/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-white transition-colors">
                      Juan Stiven Alcañiz
                    </a>
                  </div>
                </div>
              </div>

              <button
                className="mt-8 w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold rounded-xl transition-colors"
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
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
        
      />
      </ClickSpark>
    </div>
  );
}

export default App
