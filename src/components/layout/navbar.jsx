import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark border-b border-neon px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-neon text-2xl font-bold">JuanS.dev</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm">
            <li><a href="#about" className="hover:text-neon transition">Sobre mí</a></li>
            <li><a href="#projects" className="hover:text-neon transition">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-neon transition">Contacto</a></li>
          </ul>

          {/* Redes */}
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-neon/10 hover:bg-neon/20 p-2 rounded-full">
              <FaGithub className="text-neon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-neon/10 hover:bg-neon/20 p-2 rounded-full">
              <FaLinkedin className="text-neon" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-neon text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <a href="#about" onClick={toggleMenu} className="block hover:text-neon">Sobre mí</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-neon">Proyectos</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-neon">Contacto</a>

          <div className="flex justify-center gap-4 mt-2">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-neon/10 hover:bg-neon/20 p-2 rounded-full">
              <FaGithub className="text-neon" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-neon/10 hover:bg-neon/20 p-2 rounded-full">
              <FaLinkedin className="text-neon" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
