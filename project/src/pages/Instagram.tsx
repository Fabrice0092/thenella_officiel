import { Instagram, ExternalLink, Heart, MessageCircle, Camera, X } from 'lucide-react';
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

export default function InstagramPage() {
  // Charge automatiquement toutes les photos placées dans src/assets/instagram
  const photos = Object.values(
    import.meta.glob('../assets/instagram/*.{jpg,jpeg,png,webp}', {
      eager: true,
      import: 'default',
    })
  ) as string[];
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Instagram size={64} className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Instagram
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Découvrez mes moments quotidiens, coulisses et inspirations
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedCard>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
              <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900">
                Suivez mon parcours
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Sur Instagram, je partage avec vous les coulisses de ma vie d'artiste,
                mes moments d'inspiration, mes sessions d'enregistrement et bien plus encore.
                Rejoignez-moi pour une expérience visuelle authentique et inspirante.
              </p>
              <a
                href="https://www.instagram.com/thenellaofficiel6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              >
                Suivre sur Instagram
                <ExternalLink size={20} />
              </a>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={200}>
            <h2 className="text-3xl font-bold mb-8 font-serif text-slate-900">
              Galerie Photos
            </h2>
          </AnimatedCard>

          {photos.length === 0 ? (
            <p className="text-center text-slate-600">
              Ajoutez vos photos dans <code>src/assets/instagram</code> (jpg, jpeg, png, webp)
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                 <AnimatedCard key={index} delay={300 + index * 50}>
                   <div
                     className="relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group cursor-zoom-in"
                     onClick={() => setLightboxImage(photo)}
                   >
                     <img
                       src={photo}
                       alt={`Instagram post ${index + 1}`}
                       className="w-full h-full object-cover object-center"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                       <div className="flex gap-4 text-white">
                         <div className="flex items-center gap-1">
                           <Heart size={20} />
                           <span className="text-sm font-semibold">
                             {Math.floor(Math.random() * 500) + 100}
                           </span>
                         </div>
                         <div className="flex items-center gap-1">
                           <MessageCircle size={20} />
                           <span className="text-sm font-semibold">
                             {Math.floor(Math.random() * 50) + 10}
                           </span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <AnimatedCard>
            <Camera size={64} className="mx-auto mb-6 text-purple-600" />
            <h2 className="text-3xl font-bold mb-4 font-serif text-slate-900">
              Stories quotidiennes
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto mb-6">
              Ne manquez pas mes stories quotidiennes où je partage mes pensées,
              versets bibliques favoris, et moments de vie authentiques.
            </p>
            <a
              href="https://www.instagram.com/thenellaofficiel6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            >
              Voir les Stories
              <ExternalLink size={20} />
            </a>
          </AnimatedCard>
        </div>
      </section>
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
          aria-modal="true"
          role="dialog"
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Agrandissement" className="w-full h-auto rounded-lg shadow-2xl" />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-2 right-2 bg-white/90 text-slate-900 rounded-full p-2 hover:bg-white transition flex items-center gap-1"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
