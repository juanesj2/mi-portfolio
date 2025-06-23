import SplitText from "../../TextAnimations/SplitText/SplitText.jsx";
import FadeContent from '../../Animations/FadeContent/FadeContent.jsx';

function Hero() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
      <SplitText
        text="¡Hola! Soy Juan Stiven"
        className="text-4xl md:text-6xl font-bold text-neon animate-pulse"
        delay={10}
        duration={2}
        ease="elastic.out(1, 0.3)"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

    <FadeContent blur={true} duration={500} easing="ease-out" initialOpacity={0.5}>
      <p className="text-gray-300 mt-4 max-w-xl">
        Soy un desarrollador web apasionado, siempre aprendiendo y buscando nuevos retos.
      </p>
    </FadeContent>

      <a
        href="#projects"
        className="mt-8 inline-block px-6 py-2 border border-neon text-neon hover:bg-neon hover:text-dark transition-all duration-300 rounded-full"
      >
        Ver proyectos
      </a>
    </section>
  );
}

export default Hero;
