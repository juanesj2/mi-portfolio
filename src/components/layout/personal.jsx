import SpotlightCard from '../SpotlightCard/SpotlightCard.jsx';
import SlideInMotion from '../../TextAnimations/SlideIn/SlideInMotion.jsx';

function Personal() {
  return (
    <section
      id="personal"
      className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden z-10"
    >
      <div className="absolute inset-0 pointer-events-none mix-blend-screen">
        <div className="w-[400px] h-[400px] bg-brand opacity-10 rounded-full blur-[100px] absolute -top-32 -right-32" />
        <div className="w-[400px] h-[400px] bg-neon opacity-10 rounded-full blur-[100px] absolute -bottom-32 -left-32" />
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-16 tracking-tight">
        Un poco más sobre mí
      </h3>

      <div className="flex flex-col gap-6 w-full max-w-4xl relative z-20">
        <SlideInMotion direction="up">
          <SpotlightCard className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
            <p className="text-gray-300 text-lg md:text-xl font-medium flex flex-col md:flex-row items-center justify-center gap-4 leading-relaxed">
              <span className="text-4xl">📷</span>
              <span>
                Me encanta la <span className="text-white font-bold">fotografía</span> y las <span className="text-white font-bold">actividades al aire libre</span>. Cuando no estoy programando, probablemente esté <span className="text-brand font-semibold">haciendo fotos</span> o <span className="text-neon font-semibold">aprendiendo algo nuevo</span> en YouTube.
              </span>
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <div className="grid md:grid-cols-2 gap-6">
          <SlideInMotion direction="up">
            <SpotlightCard className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
              <p className="text-gray-300 text-lg font-medium leading-relaxed">
                ¿Quieres saber más sobre mí? <span className="text-neon font-bold">¡Contáctame!</span> Estoy <span className="text-white font-semibold">abierto a nuevas oportunidades</span> y <span className="text-brand font-semibold">colaboraciones</span>.
              </p>
            </SpotlightCard>
          </SlideInMotion>

          <SlideInMotion direction="up">
            <SpotlightCard className="h-full p-8 rounded-3xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md" spotlightColor="rgba(129, 140, 248, 0.15)">
              <p className="text-gray-300 text-lg flex flex-col items-center justify-center gap-2 leading-relaxed">
                <span className="text-3xl mb-2">📍</span>
                <span><span className="text-white font-bold">Albacete, España</span> <br/>(Disponible para <span className="text-brand font-semibold">trabajo remoto</span>)</span>
              </p>
            </SpotlightCard>
          </SlideInMotion>
        </div>
      </div>
    </section>
  );
}

export default Personal;
