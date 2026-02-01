import { Music, ExternalLink, TrendingUp, Sparkles, X } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

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

export default function TikTokPage() {
  // URLs TikTok réelles fournies
  const tiktokUrls = [
    'https://www.tiktok.com/@thenellaofficiel/video/7256321070439894278?is_from_webapp=1&sender_device=pc&web_id=7601774442470098448',
    'https://www.tiktok.com/@thenellaofficiel/video/7585836154352602379?is_from_webapp=1&sender_device=pc&web_id=7601774442470098448',
    'https://www.tiktok.com/@thenellaofficiel/video/7565275765026131211?is_from_webapp=1&sender_device=pc&web_id=7601774442470098448',
    'https://www.tiktok.com/@thenellaofficiel/video/7565275765026131211?is_from_webapp=1&sender_device=pc&web_id=7601774442470098448',
  ];

  const videos = [
    {
      title: 'Louange du matin',
      views: '125K',
      likes: '12.5K',
      url: tiktokUrls[0],
    },
    {
      title: 'Moment de prière',
      views: '89K',
      likes: '8.9K',
      url: tiktokUrls[1],
    },
    {
      title: 'Répétition en studio',
      views: '156K',
      likes: '15.2K',
      url: tiktokUrls[2],
    },
    {
      title: 'Verset du jour',
      views: '203K',
      likes: '19.8K',
      url: tiktokUrls[3],
    },
  ];

  // Utilitaire pour extraire l'ID vidéo depuis l'URL TikTok
  const extractVideoId = (url: string) => {
    try {
      const u = new URL(url);
      const parts = u.pathname.split('/').filter(Boolean);
      const idx = parts.indexOf('video');
      if (idx !== -1 && parts[idx + 1]) return parts[idx + 1];
      return '';
    } catch {
      return '';
    }
  };

  // Aperçu modal pour une vidéo
  const [previewVideo, setPreviewVideo] = useState<{
    title: string;
    views: string;
    likes: string;
    url: string;
  } | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewVideo(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Charger le script officiel TikTok quand le modal s'ouvre
  useEffect(() => {
    if (!previewVideo) return;
    const scriptId = 'tiktok-embed-js';
    const triggerParse = () => {
      const w = window as unknown as {
        tiktokEmbed?: {
          load?: () => void;
        } | (() => void);
        tiktokEmbedLoad?: () => void;
      };
      if (typeof w.tiktokEmbed === 'object' && w.tiktokEmbed?.load) {
        if (typeof w.tiktokEmbed === 'object' && w.tiktokEmbed?.load) {
          w.tiktokEmbed.load();
        }
      } else if (typeof w.tiktokEmbed === 'function') {
        w.tiktokEmbed();
      } else if (typeof w.tiktokEmbedLoad === 'function') {
        w.tiktokEmbedLoad();
      }
    };
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      script.onload = triggerParse;
      document.body.appendChild(script);
    } else {
      triggerParse();
    }
  }, [previewVideo]);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Music size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            TikTok
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Contenus courts, inspirants et authentiques pour partager la foi
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedCard>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900">
                Contenu viral et inspirant
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sur TikTok, je crée des contenus courts mais puissants : extraits de
                chansons, moments de louange spontanée, versets bibliques animés,
                et bien plus. Rejoignez la communauté pour des moments d'inspiration
                quotidiens !
              </p>
              <a
                href="https://www.tiktok.com/@thenellaofficiel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir le profil TikTok dans un nouvel onglet"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Suivre sur TikTok
                <ExternalLink size={20} />
              </a>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <h2 className="text-3xl font-bold mb-8 font-serif text-slate-900">
              Vidéos populaires
            </h2>
          </AnimatedCard>

          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <AnimatedCard key={index} delay={300 + index * 100}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-2">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Music size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-slate-900">
                        {video.title}
                      </h3>
                      <div className="flex items-center gap-4 text-slate-600">
                        <div className="flex items-center gap-1">
                          <TrendingUp size={16} />
                          <span className="text-sm font-semibold">{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Sparkles size={16} />
                          <span className="text-sm font-semibold">{video.likes}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => setPreviewVideo(video)}
                          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-2 rounded-lg font-semibold transition-colors"
                          aria-label={`Voir un extrait de ${video.title}`}
                        >
                          Voir un extrait
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard>
            <Sparkles size={64} className="mx-auto mb-6 text-amber-400" />
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Rejoignez le mouvement
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              Des milliers de personnes sont déjà inspirées quotidiennement par nos
              contenus TikTok. Ne manquez rien, suivez-nous dès maintenant !
            </p>
            <a
              href="https://www.tiktok.com/@thenellaofficiel"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ouvrir le profil TikTok dans un nouvel onglet"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Suivre maintenant
              <ExternalLink size={20} />
            </a>
          </AnimatedCard>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-slate-900">
                Types de contenus
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow">
                    <Music size={32} className="text-slate-900" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Extraits musicaux</h3>
                  <p className="text-sm text-slate-600">
                    Aperçus de mes chansons et performances
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow">
                    <Sparkles size={32} className="text-amber-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Versets animés</h3>
                  <p className="text-sm text-slate-600">
                    Paroles bibliques inspirantes
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow">
                    <TrendingUp size={32} className="text-green-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Coulisses</h3>
                  <p className="text-sm text-slate-600">
                    Mon quotidien d'artiste gospel
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {previewVideo && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={() => setPreviewVideo(null)}
        >
          <div className="bg-white rounded-xl shadow-xl w-[90vw] max-w-md p-4 relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full p-2 shadow"
              aria-label="Fermer l’aperçu"
              onClick={() => setPreviewVideo(null)}
            >
              <X size={20} className="text-slate-700" />
            </button>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{previewVideo.title}</h3>
            <div className="rounded-lg overflow-hidden mb-4">
              {(() => {
                const id = extractVideoId(previewVideo.url);
                return id ? (
                  <blockquote
                    className="tiktok-embed"
                    cite={previewVideo.url}
                    data-video-id={id}
                    style={{ maxWidth: '405px', minWidth: '325px', margin: '0 auto' }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={previewVideo.url}
                      >
                        Voir sur TikTok
                      </a>
                    </section>
                  </blockquote>
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white p-6 text-center">
                    <a
                      href={previewVideo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Ouvrir sur TikTok
                    </a>
                  </div>
                );
              })()}
            </div>
            <div className="flex items-center gap-4 text-slate-600">
              <div className="flex items-center gap-1">
                <TrendingUp size={16} />
                <span className="text-sm font-semibold">{previewVideo.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles size={16} />
                <span className="text-sm font-semibold">{previewVideo.likes}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
