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
    <div className="relative w-full min-h-screen text-white font-sans pb-10">
      {/* Sparks por encima de todo */}

      <ClickSpark
        sparkColor='#00FF1E'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
      

      {/* Navbar arriba */}
      {/* <Navbar /> */}

      {/* Sección con fondo Aurora */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Fondo Aurora fijo en esta sección */}
        <div className="absolute inset-0 -z-10 w-screen h-full">
          <Aurora
            colorStops={["#29FFD4", "#24F640", "#29FFD4"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
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
          title="Desarrollador Web Junior"
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg w-full max-w-md"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Mis Datos de Contacto
              </h2>

              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Email:</span>
                  <a href="mailto:juanstivenaa82@gmail.com" className="hover:underline">
                    juanstivenaa82@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">GitHub:</span>
                  <a
                    href="https://github.com/juanesj2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/juanesj2
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">LinkedIn:</span>
                  <a
                    href="https://www.linkedin.com/in/juan-stiven-alca%C3%B1iz-aullon-b46a1a274/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Juan Stiven Alcañiz Aullon
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-semibold">Teléfono:</span>
                  <span>+34 653 797 301</span>
                </div>
              </div>

              <button
                className="mt-6 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
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
