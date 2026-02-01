import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import YouTubeModal from '../components/YouTubeModal';

function VideoCard({ videoId, title, description, delay = 0 }: {
  videoId: string;
  title: string;
  description: string;
  delay?: number;
}) {
  const { elementRef, isVisible } = useScrollAnimation();
  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <div
        ref={elementRef}
        className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-700 hover:-translate-y-2 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        <button
          onClick={() => setShowPreview(true)}
          className="relative w-full aspect-video overflow-hidden group"
          aria-label={`Aperçu de ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
            <div className="bg-red-600 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform">
              <Play size={32} className="text-white" fill="white" />
            </div>
          </div>
        </button>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
          <p className="text-slate-600 mb-4 leading-relaxed">{description}</p>

          <div className="flex gap-3">
            <button
              onClick={() => setShowPreview(true)}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Play size={18} />
              Écouter un extrait
            </button>
            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              aria-label="Ouvrir sur YouTube"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {showPreview && (
        <YouTubeModal
          videoId={videoId}
          onClose={() => setShowPreview(false)}
        />
      )}
    </>
  );
}

export default function YouTube() {
  const videos = [
    {
      videoId: 'RGobI7ZDg34',
      title: 'INVITE JÉSUS - Clip officiel',
      description: 'Thenella feat Falonne Njim\'sk - Un appel à inviter Jésus dans nos vies.',
    },
    {
      videoId: 'hbZu7ahHY7A',
      title: 'Je te bénirai',
      description: 'Cameroon Gospel Music - Une chanson de bénédiction et de gratitude envers le Seigneur.',
    },
    {
      videoId: 'XfOHHI68sQ8',
      title: '1h de louange et d\'adoration avec Thenella',
      description: 'Une heure complète de louange et adoration pour élever votre esprit.',
    },
    {
      videoId: 'eyF6_wUTW2Y',
      title: 'Aire de repos',
      description: 'Cameroon Gospel Music - Une mélodie apaisante pour trouver le repos en Dieu.',
    },
    {
      videoId: 'v8d9WEFjTb0',
      title: 'YOU ARE THE BEGINNING',
      description: 'Lyrics video - Tu es le commencement de toute chose en moi.',
    },
    {
      videoId: 'qqCMbScd_VU',
      title: 'J\'OBTIENS LA GUERISON - Clip Officiel',
      description: 'Un puissant message de guérison et de délivrance par la grâce de Dieu.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
            Chaîne YouTube
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Découvrez mes vidéos musicales, clips et performances gospel
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
                description={video.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-serif text-slate-900">
            Abonnez-vous à ma chaîne
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            Ne manquez aucune de mes nouvelles vidéos ! Abonnez-vous et activez
            les notifications pour être informé de chaque sortie.
          </p>
          <a
            href="https://youtube.com/@thenellaofficiel?si=piv-8qOW0FyjP8YH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
          >
            S'abonner sur YouTube
            <ExternalLink size={20} />
          </a>
        </div>
      </section>
    </div>
  );
}
