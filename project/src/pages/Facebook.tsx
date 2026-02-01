import { Facebook, ExternalLink, Users, Heart, MessageCircle } from 'lucide-react';
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

export default function FacebookPage() {
  const posts = [
    {
      date: '15 Janvier 2026',
      content:
        'Nouvelle vidéo disponible ! Un moment de louange pour commencer la semaine avec joie et espérance.',
      likes: 245,
      comments: 32,
      url:
        'https://www.facebook.com/100059532433330/posts/pfbid025f8VBWgPbTiQdwCGBPvxYuML5Xrf4WSfuMrfKMEkoigALuEsWUSDGGyfmEcts6FTl/?app=fbl',
    },
    {
      date: '10 Janvier 2026',
      content:
        'Merci pour vos messages de soutien ! Votre amour et vos prières me portent chaque jour.',
      likes: 189,
      comments: 28,
      url:
        'https://www.facebook.com/100059532433330/posts/pfbid0XGc9ZRV2iBXVJ7ofSUxtgJTMNZDK3zDPdoxzdZz25NrzvxswqiAekHqwnTKZNbh9l/?app=fbl',
    },
    {
      date: '5 Janvier 2026',
      content:
        "Concert à venir ! Restez connectés pour plus d'informations sur les dates et lieux.",
      likes: 312,
      comments: 45,
      url:
        'https://www.facebook.com/100059532433330/posts/pfbid02SBxUidx2Nmron7z1ngTs8gwe35cTv1DFAiN1r84euPV94TpSpYRLXyRpP9nuTNqSl/?app=fbl',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Facebook size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Facebook
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Rejoignez notre communauté et restez informés de toutes les actualités
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedCard>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900">
                Rejoignez la communauté
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sur Facebook, partagez des moments de foi, découvrez les coulisses
                de mes créations musicales, et participez à une communauté engagée
                autour de valeurs spirituelles fortes.
              </p>
              <a
                  href="https://web.facebook.com/ThenellaMinistries"
                    aria-label="Suivre sur Facebook"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
                  >
                Suivre sur Facebook
                <ExternalLink size={20} />
              </a>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <h2 className="text-3xl font-bold mb-8 font-serif text-slate-900">
              Publications récentes
            </h2>
          </AnimatedCard>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <AnimatedCard key={index} delay={300 + index * 100}>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ouvrir la publication Facebook du ${post.date}`}
                  className="block"
                >
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Facebook size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">Gospel Thenella</p>
                        <p className="text-sm text-slate-500">{post.date}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed mb-4">{post.content}</p>
                    <div className="flex items-center gap-6 text-slate-600 border-t pt-4">
                      <div className="flex items-center gap-2">
                        <Heart size={20} className="text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageCircle size={20} className="text-blue-500" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard>
            <Users size={64} className="mx-auto mb-6 text-blue-600" />
            <h2 className="text-3xl font-bold mb-4 font-serif text-slate-900">
              Une communauté engagée
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Plus de 10 000 personnes nous suivent sur Facebook pour partager
              la foi, l'espoir et l'amour à travers la musique gospel.
            </p>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
