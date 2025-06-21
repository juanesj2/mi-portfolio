function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-dark">
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
