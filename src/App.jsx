import Navbar from './components/layout/navbar'
import Hero from './components/layout/hero'
import About from './components/layout/about'
import Projects from './components/projects'
import Contact from './components/layout/contact'
import Footer from './components/layout/footer'
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc'
import Dock from './components/Dock'
import Aurora from './components/Aurora';
import ClickSpark from './components/ClickSpark';
import ProfileCard from './components/ProfileCard/ProfileCard'


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
  return (
    <div className="relative w-full min-h-screen text-white font-sans pb-10">
      {/* Sparks por encima de todo */}
      <ClickSpark
        sparkColor='#00FF1E'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
        style={{ position: 'fixed', inset: 0, zIndex: 999, pointerEvents: 'none' }}
      />

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
      <Projects />
      <Contact>
        <ProfileCard
          name="Juan S. Alcañiz Aullon"
          title="Desarrollador Web Junior"
          handle="Juanes"
          status="Online"
          contactText="Contact Me"
          avatarUrl="./assets/avatar.jpg"
          iconUrl=""
          showUserInfo={true}
          enableTilt={true}
          onContactClick={() => console.log('Contact clicked')}
        />
      </Contact>
      
      <Footer />

      {/* Dock fijo abajo */}
      <Dock
        items={dockItems}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
}

export default App
