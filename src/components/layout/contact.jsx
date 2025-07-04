const Contact = ({ children }) => {
  return (
    <section id="contact" className="relative py-16 px-4 flex flex-col items-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* arriba derecha */}
        <div className="w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl absolute -top-50 -right-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
        {/* abajo izquierda */}
        <div className="w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl absolute -bottom-50 -left-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
      </div>
      {/* Título de la sección */}
      <h3 className="text-4xl md:text-5xl font-extrabold text-neon mb-10 drop-shadow-lg tracking-tight">
        Contacto
      </h3>
      {/* Aquí renderizamos cualquier cosa que venga como children */}
      {children}
    </section>
  );
};

export default Contact;
