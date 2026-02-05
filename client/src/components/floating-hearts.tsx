import { useEffect } from "react";

export default function FloatingHearts() {
  useEffect(() => {
    const heartsContainer = document.querySelector('.floating-hearts');
    if (!heartsContainer) return;

    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerHTML = '❤️';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDelay = Math.random() * 2 + 's';
      heartsContainer.appendChild(heart);

      // Remove heart after animation
      setTimeout(() => {
        if (heart.parentNode) {
          heart.parentNode.removeChild(heart);
        }
      }, 8000);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div className="floating-hearts" data-testid="floating-hearts"></div>;
}