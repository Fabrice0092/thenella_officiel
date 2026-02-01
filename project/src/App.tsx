import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import YouTube from './pages/YouTube';
import FacebookPage from './pages/Facebook';
import InstagramPage from './pages/Instagram';
import TikTokPage from './pages/TikTok';
import Streaming from './pages/Streaming';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'youtube':
        return <YouTube />;
      case 'facebook':
        return <FacebookPage />;
      case 'instagram':
        return <InstagramPage />;
      case 'tiktok':
        return <TikTokPage />;
      case 'streaming':
        return <Streaming />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
