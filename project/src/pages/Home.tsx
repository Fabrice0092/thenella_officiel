import { Music2, Play, Heart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className="min-h-screen">
      <section id="hero" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-serif mb-6">
              Gospel Thenella
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={200}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Artiste Gospel passionnée, partageant la foi à travers la musique
            </p>
          </AnimatedCard>
          <AnimatedCard delay={400}>
            <div className="flex flex-wrap justify-center gap-4">
              <button type="button" onClick={() => scrollTo('plateformes')} aria-label="Découvrir" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2">
                <Play size={20} />
                Découvrir
              </button>
              <button type="button" onClick={() => scrollTo('bienvenue')} aria-label="En savoir plus" className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
                En savoir plus
              </button>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section id="bienvenue" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-slate-900">
              Bienvenue
            </h2>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Bienvenue sur mon espace musical dédié à la louange et à l'adoration.
                À travers mes chansons, je souhaite toucher les cœurs et élever les âmes
                vers la lumière divine.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Explorez mes différentes plateformes pour découvrir mes créations musicales,
                mes vidéos, et restez connectés pour les dernières actualités et sorties.
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      <section id="plateformes" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-slate-900">
              Plateformes
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Play size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">YouTube</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Découvrez mes vidéos musicales, clips et performances en direct.
                </p>
                <button type="button" onClick={() => onNavigate('youtube')} aria-label="Ouvrir YouTube" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Explorer →
                </button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Music2 size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Streaming</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Écoutez mes chansons sur toutes les plateformes de streaming.
                </p>
                <button type="button" onClick={() => onNavigate('streaming')} aria-label="Ouvrir Streaming" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                  Écouter →
                </button>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
                <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Heart size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Réseaux Sociaux</h3>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Suivez-moi sur Facebook, Instagram et TikTok pour rester connectés.
                </p>
                <button type="button" onClick={() => onNavigate('instagram')} aria-label="Ouvrir Instagram" className="text-amber-600 font-semibold hover:text-amber-700 transition-colors">
                  Suivre →
                </button>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <h2 className="text-4xl font-bold text-center mb-12 font-serif text-slate-900">
              Ma Mission
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedCard delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                  <span className="text-amber-500 text-3xl">♪</span>
                  Louange et Adoration
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Créer des moments de communion spirituelle à travers la musique gospel,
                  permettant à chacun de vivre une expérience profonde de la foi.
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                  <span className="text-amber-500 text-3xl">✝</span>
                  Message d'Espoir
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Partager un message d'amour, d'espérance et de réconfort à travers
                  des paroles inspirantes et des mélodies touchantes.
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>
    </div>
  );
}
