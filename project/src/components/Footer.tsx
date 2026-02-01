import { Youtube, Facebook, Instagram, Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-serif mb-2">Gospel Thenella</h3>
            <p className="text-slate-400">Artiste Gospel</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://youtube.com/@thenellaofficiel?si=piv-8qOW0FyjP8YH"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://web.facebook.com/ThenellaMinistries"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/thenellaofficiel6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://music.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
              aria-label="Streaming"
            >
              <Music size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Gospel Thenella. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
