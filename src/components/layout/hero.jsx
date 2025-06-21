function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <h2 className="text-4xl md:text-6xl font-bold text-neon animate-pulse">¡Hola! Soy Juan Stiven</h2>
      <p className="text-gray-300 mt-4 max-w-xl">
        Soy un desarrollador web apasionado, siempre aprendiendo y buscando nuevos retos.
      </p>
      <a href="#projects" className="mt-8 inline-block px-6 py-2 border border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 rounded-full">
        Ver proyectos
      </a>
    </section>
  )
}

export default Hero
