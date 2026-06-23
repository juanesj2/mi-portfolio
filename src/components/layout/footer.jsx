import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/5 flex flex-col items-center justify-center text-center z-10 px-4">
      <p className="text-gray-400 text-sm mb-2">
        © {new Date().getFullYear()} Juan Stiven Alcañiz Aullon. Todos los derechos reservados.
      </p>
      <p className="text-gray-500 text-xs mt-2 flex items-center gap-1">
        Hecho con <span className="text-red-500/80">❤</span> y mucho <span className="text-orange-400/80">☕</span>
      </p>
      <p className="text-gray-600 text-[10px] mt-4 opacity-50 hover:opacity-100 transition-opacity">
        * Cualquier bug es en realidad una feature no documentada.
      </p>
    </footer>
  );
}

export default Footer;
