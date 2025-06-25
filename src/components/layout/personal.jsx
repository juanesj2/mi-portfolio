import SpotlightCard from '../SpotlightCard/SpotlightCard.jsx';
import SlideInMotion from '../../TextAnimations/SlideIn/SlideInMotion.jsx';

function Personal() {
  return (
    <section
      id="personal"
      className="relative py-24 px-6 flex flex-col items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-80 h-80 opacity-10 rounded-full blur-3xl absolute -top-50 -right-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
        <div className="w-80 h-80 opacity-10 rounded-full blur-3xl absolute -bottom-50 -left-32 animate-pulse" style={{ backgroundColor: '#24F640' }} />
      </div>

      <h3 className="text-4xl md:text-5xl font-extrabold text-neon mb-10 drop-shadow-lg tracking-tight">
        Un poco más sobre mí
      </h3>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <SlideInMotion direction="right">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-200 text-lg md:text-xl font-medium flex items-center justify-center gap-2">
              <span className="text-2xl">📷</span>
              <span>
                Me encanta la <span className="text-neon font-semibold">fotografía</span> y las <span className="text-neon font-semibold">actividades al aire libre</span>. Cuando no estoy programando, probablemente esté <span className="text-cyan-400 font-semibold">haciendo fotos</span> o <span className="text-cyan-400 font-semibold">aprendiendo algo nuevo</span> en YouTube.
              </span>
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <SlideInMotion direction="left">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-400 text-lg md:text-xl flex items-center justify-center gap-2">
              <span className="text-xl">📍</span>
              <span><span className="text-neon font-semibold">Albacete y cercanias - España</span> (disponible para <span className="text-cyan-400 font-semibold">trabajo remoto</span>)</span>
            </p>
          </SpotlightCard>
        </SlideInMotion>

        <SlideInMotion direction="right">
          <SpotlightCard className="custom-spotlight-card shadow-xl" spotlightColor="rgba(0, 255, 34, 0.18)">
            <p className="text-gray-200 text-lg md:text-xl font-semibold mt-2">
              ¿Quieres saber más sobre mí? <span className="text-neon">¡Contáctame!</span> Estoy <span className="text-cyan-400 font-semibold">abierto a nuevas oportunidades</span> y <span className="text-cyan-400 font-semibold">colaboraciones</span>.
            </p>
          </SpotlightCard>
        </SlideInMotion>
      </div>
    </section>
  );
}

export default Personal;
