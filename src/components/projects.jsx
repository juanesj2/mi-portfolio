function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Arriba a la derecha */}
        <div 
        className="w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl absolute -top-50 -left-32 animate-pulse" 
        style={{ backgroundColor: '#24F640' }}
        />
      </div>

      <h3 className="text-3xl font-bold text-neon mb-4">Proyectos</h3>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-4 border border-neon rounded-lg hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Proyecto 1</h4>
          <p className="text-gray-400">Descripción breve de lo que hace tu proyecto. Puedes incluir links más adelante.</p>
        </div>
        <div className="p-4 border border-neon rounded-lg hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-2">Proyecto 2</h4>
          <p className="text-gray-400">Otro proyecto más con su toque personal. Moderno y visual.</p>
        </div>
      </div>
    </section>
  )
}

export default Projects
