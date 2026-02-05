import { useEffect, useState } from "react";

export default function SurpriseSection() {
  const [starsInitialized, setStarsInitialized] = useState(false);

  const initStars = () => {
    if (starsInitialized) return;
    
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    // Clear existing stars
    starsContainer.innerHTML = '';
    
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.width = Math.random() * 3 + 1 + 'px';
      star.style.height = star.style.width;
      star.style.animationDelay = Math.random() * 2 + 's';
      starsContainer.appendChild(star);
    }
    
    setStarsInitialized(true);
  };

  const triggerFireworks = () => {
    const container = document.getElementById('fireworks-container');
    if (!container) return;
    
    const colors = ['#FFB6C1', '#F7CAC9', '#FFCBA4', '#FFD700', '#FF69B4', '#E6E6FA'];
    
    // Clear existing fireworks first
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Create multiple particles for each firework burst
        for (let j = 0; j < 6; j++) {
          const particle = firework.cloneNode();
          (particle as HTMLElement).style.transform = `translate(${(Math.random() - 0.5) * 50}px, ${(Math.random() - 0.5) * 50}px)`;
          container.appendChild(particle);
          
          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }, 1500);
        }
        
        container.appendChild(firework);
        
        setTimeout(() => {
          if (firework.parentNode) {
            firework.parentNode.removeChild(firework);
          }
        }, 1500);
      }, i * 100);
    }
  };

  useEffect(() => {
    // Initialize stars when component mounts
    const timer = setTimeout(() => {
      initStars();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="surprise" 
      className="section starry-bg flex items-center justify-center"
      data-testid="surprise-section"
    >
      <div className="text-center z-10 px-4">
        <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl text-white mb-8 animate-pulse-soft">
          {/* EDIT: Replace with her name */}
          Even if we're miles apart,<br />I'm always with you.<br />Belated Happy Birthday, My Love ❤️💚
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Distance is just a number when love is this strong. Thank you for making every day brighter, even from far away. I’ll make sure you’re the happiest person alive,  I’ll annoy you, I’ll make you laugh, I’ll stand by you, and one day, I’ll proudly call you my wife. Here's to many more birthdays together! 🌟
        </p>
        {/* <button 
          onClick={triggerFireworks} 
          className="bg-rose-gold text-white px-8 py-4 rounded-full hover:bg-soft-pink transition-colors text-lg font-medium"
          data-testid="fireworks-trigger"
        >
          Light the Fireworks! 🎆
        </button> */}
      </div>

      {/* Fireworks Container */}
      <div 
        id="fireworks-container" 
        className="fixed inset-0 pointer-events-none z-20"
        data-testid="fireworks-container"
      ></div>

      {/* Stars Container */}
      <div 
        id="stars-container" 
        className="absolute inset-0"
        data-testid="stars-container"
      ></div>
    </section>
  );
}