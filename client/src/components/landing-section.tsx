import { useState } from "react";

export default function LandingSection() {
  const [giftOpened, setGiftOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const openGift = () => {
    createConfetti();
    setShowMessage(true);
    setGiftOpened(true);
    
    // Animate gift box lid
    const lid = document.getElementById('gift-lid');
    if (lid) {
      lid.style.transform = 'translateY(-20px) rotate(-10deg)';
      lid.style.transition = 'all 0.8s ease';
    }
  };

  const closeGiftMessage = () => {
    setShowMessage(false);
  };

  const createConfetti = () => {
    const container = document.getElementById('confetti-container');
    if (!container) return;
    
    const colors = ['#FFB6C1', '#F7CAC9', '#FFCBA4', '#FFD700', '#FF69B4'];
    
    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti-piece';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(confetti);
      
      setTimeout(() => {
        if (confetti.parentNode) {
          confetti.parentNode.removeChild(confetti);
        }
      }, 3000);
    }
  };

  const toggleMusic = () => {
    const music = document.getElementById('background-music') as HTMLAudioElement;
    if (!music) return;
    
    if (musicPlaying) {
      music.pause();
      setMusicPlaying(false);
    } else {
      music.play().catch(e => console.log('Music play failed:', e));
      setMusicPlaying(true);
    }
  };

  return (
    <section 
      id="landing" 
      className="section bg-gradient-to-br from-cream via-lavender/30 to-soft-pink/20 flex items-center justify-center"
      data-testid="landing-section"
    >
      <div className="text-center z-10">
        <h1 className="font-dancing text-6xl md:text-8xl text-rose-gold mb-8 animate-pulse-soft">
          Anything For You Abhi !
        </h1>
        
        {/* Gift Box Animation */}
        <div className="gift-box mb-8 cursor-pointer" onClick={openGift} data-testid="gift-box">
          <svg width="150" height="150" viewBox="0 0 150 150" className="mx-auto drop-shadow-xl">
            {/* Gift Box Base */}
            <rect x="25" y="60" width="100" height="70" fill="#FFB6C1" stroke="#FF69B4" strokeWidth="2" rx="5"/>
            {/* Gift Box Lid */}
            <rect id="gift-lid" x="20" y="50" width="110" height="20" fill="#F7CAC9" stroke="#FF69B4" strokeWidth="2" rx="5"/>
            {/* Ribbon Vertical */}
            <rect x="70" y="50" width="10" height="80" fill="#FFD700"/>
            {/* Ribbon Horizontal */}
            <rect x="20" y="55" width="110" height="10" fill="#FFD700"/>
            {/* Bow */}
            <ellipse cx="75" cy="40" rx="15" ry="8" fill="#FFD700"/>
            <ellipse cx="75" cy="40" rx="8" ry="5" fill="#FF69B4"/>
          </svg>
        </div>

        <p className="text-gray-600 text-lg mb-6">Click the gift icon! 🎁</p>
        
        {/* Music Toggle */}
        <button 
          onClick={toggleMusic} 
          className="bg-soft-pink text-white px-6 py-2 rounded-full hover:bg-rose-gold transition-colors"
          data-testid="music-toggle"
        >
          {musicPlaying ? '🔇 Stop Music' : '🎵 Play Music'}
        </button>
      </div>

      {/* Confetti Container */}
      <div id="confetti-container" className="fixed inset-0 pointer-events-none z-20" data-testid="confetti-container"></div>

      {/* Gift Opening Message */}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-30 bg-white/90 backdrop-blur-sm" data-testid="gift-message">
          <div className="text-center">
            <h2 className="font-dancing text-5xl md:text-7xl text-rose-gold mb-4 animate-bounce">
              {/* EDIT: Replace with her name */}
              Belated Happy Birthday Abhinaya! 🎉
            </h2>
            <p className="text-gray-800 text-base sm:text-lg md:text-xl font-medium mb-6 border border-gray-200 rounded-2xl p-3 max-w-sm mx-auto text-center">Welcome to your special day, my love! 💖 Sweet 19. If I were there I'd have fill your bag with bunch of 5-Stars😂. I truly admire you Abhi! And never, ever say anything bad about yourself or the way you look— because to me, you’re the most beautiful one I’ll ever see. Today on this special day, I wish you endless happiness, love, and success in everything you dream of!</p>
            <button 
              onClick={closeGiftMessage} 
              className="bg-soft-pink text-white px-8 py-3 rounded-full hover:bg-rose-gold transition-colors"
              data-testid="close-message"
            >
              Continue the Adventure →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}