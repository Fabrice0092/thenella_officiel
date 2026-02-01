import { Music2, ExternalLink, Headphones, Radio } from 'lucide-react';
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

export default function Streaming() {
  const platformLinks: Record<string, string> = {
    Spotify: 'https://open.spotify.com/search/thenella',
  };
  const platforms = [
    {
      name: 'Spotify',
      description: 'Écoutez tous mes albums et playlists gospel sur Spotify',
      color: 'from-green-500 to-green-600',
      icon: '🎵',
    },
    {
      name: 'Apple Music',
      description: 'Retrouvez ma musique sur Apple Music et iTunes',
      color: 'from-pink-500 to-red-500',
      icon: '🎧',
    },
    {
      name: 'Deezer',
      description: 'Streaming haute qualité de tous mes titres sur Deezer',
      color: 'from-orange-500 to-orange-600',
      icon: '🎶',
    },
    {
      name: 'Amazon Music',
      description: 'Disponible sur Amazon Music et Prime Music',
      color: 'from-blue-500 to-blue-600',
      icon: '📱',
    },
    {
      name: 'YouTube Music',
      description: 'Musique et clips vidéo sur YouTube Music',
      color: 'from-red-500 to-red-600',
      icon: '▶️',
    },
    {
      name: 'Tidal',
      description: 'Audio haute fidélité sur Tidal HiFi',
      color: 'from-slate-700 to-slate-900',
      icon: '🎼',
    },
  ];

  const albums = [
    {
      title: 'Louange Éternelle',
      year: '2024',
      tracks: '12 titres',
    },
    {
      title: 'Grâce Infinie',
      year: '2023',
      tracks: '10 titres',
    },
    {
      title: 'Présence Divine',
      year: '2022',
      tracks: '14 titres',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Headphones size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Plateformes de Streaming
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Écoutez ma musique sur toutes vos plateformes préférées
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16 text-center">
              <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900">
                Disponible partout
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                Toute ma discographie est disponible sur les principales plateformes
                de streaming musical. Écoutez où vous voulez, quand vous voulez, et
                laissez la musique gospel illuminer votre journée.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <AnimatedCard key={platform.name} delay={index * 100}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${platform.color} p-6 text-center`}>
                    <div className="text-6xl mb-3">{platform.icon}</div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-700 mb-4 leading-relaxed">
                      {platform.description}
                    </p>
                    <a
                      href={platformLinks[platform.name] || `https://${platform.name.toLowerCase().replace(' ', '')}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-center px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      Écouter
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <h2 className="text-3xl font-bold mb-8 text-center font-serif text-slate-900">
              Derniers Albums
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {albums.map((album, index) => (
              <AnimatedCard key={album.title} delay={200 + index * 100}>
                <div className="bg-slate-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                    <Music2 size={80} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{album.title}</h3>
                    <p className="text-slate-600 mb-1">{album.year}</p>
                    <p className="text-slate-500 text-sm">{album.tracks}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard>
            <Radio size={64} className="mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Créez votre playlist
            </h2>
            <p className="text-lg text-purple-100 max-w-2xl mx-auto mb-8">
              Ajoutez mes chansons à vos playlists personnelles et partagez
              la musique gospel avec vos proches. Ensemble, louons le Seigneur !
            </p>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">
                Pourquoi écouter en streaming ?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Music2 size={32} className="text-purple-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Accès illimité</h3>
                  <p className="text-sm text-slate-600">
                    Toute ma discographie à portée de main
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Headphones size={32} className="text-blue-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Qualité audio</h3>
                  <p className="text-sm text-slate-600">
                    Son haute définition pour une expérience optimale
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Radio size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Nouveautés</h3>
                  <p className="text-sm text-slate-600">
                    Soyez les premiers à découvrir mes nouvelles sorties
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
