import { useEffect, useRef, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface YouTubeModalProps {
  videoId: string | null;
  onClose: () => void;
}

declare global {
  interface Window {
    YT: {
      Player: typeof YT.Player;
      PlayerState: typeof YT.PlayerState;
    };
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeModal({ videoId, onClose }: YouTubeModalProps) {
  const playerRef = useRef<YT.Player | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isApiReady, setIsApiReady] = useState(false);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setIsApiReady(true);
      };
    } else {
      setIsApiReady(true);
    }
  }, []);

  useEffect(() => {
    if (!videoId || !isApiReady) return;

    if (playerRef.current) {
      playerRef.current.destroy();
    }

    playerRef.current = new window.YT.Player('ytPreviewPlayer', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 1,
        modestbranding: 1,
        rel: 0,
      },
      events: {
        onReady: (event: { target: YT.Player }) => {
          event.target.playVideo();
        },
      },
    });

    setTimeLeft(30);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    const timeout = setTimeout(() => {
      if (playerRef.current) {
        playerRef.current.pauseVideo();
      }
    }, 30000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, isApiReady]);

  if (!videoId) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-xl max-w-4xl w-full shadow-2xl overflow-hidden">
        <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">Aperçu - 30 secondes</h3>
            <p className="text-sm text-slate-400">
              {timeLeft > 0 ? `${timeLeft} secondes restantes` : 'Aperçu terminé'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-800 rounded transition-colors"
            aria-label="Fermer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="relative bg-black" style={{ paddingBottom: '56.25%' }}>
          <div
            id="ytPreviewPlayer"
            className="absolute inset-0"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="p-6 bg-slate-50">
          <p className="text-slate-700 mb-4">
            Vous avez apprécié cet extrait ? Regardez la vidéo complète sur YouTube !
          </p>
          <div className="flex gap-4">
            <a
              href={`https://youtu.be/${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Continuer sur YouTube
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-lg font-semibold transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
