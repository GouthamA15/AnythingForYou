import { useState } from "react";

interface BalloonData {
  message: string;
  color: string;
  animationDelay: string;
}

export default function GameSection() {
  const [poppedBalloons, setPoppedBalloons] = useState<Set<number>>(new Set());

  // EDIT: Replace these messages with your own
  const balloons: BalloonData[] = [
    { message: "I miss you ❤️", color: "bg-rose-gold", animationDelay: "0s" },
    { message: "Future ice cream date 🍦", color: "bg-soft-pink", animationDelay: "1s" },
    { message: "You're my sunshine ☀️", color: "bg-purple-400", animationDelay: "2s" },
    { message: "Future Movie dates 🍿", color: "bg-peach", animationDelay: "0.5s" },
    { message: "Dreams about you 💭", color: "bg-yellow-400", animationDelay: "1.5s" },
    { message: "You're amazing! 🌟", color: "bg-pink-400", animationDelay: "2.5s" },
    { message: "Love your Smile 😄", color: "bg-indigo-400", animationDelay: "3s" },
    { message: "Always thinking of you 💭", color: "bg-green-400", animationDelay: "0.8s" },
    { message: "Can't wait to hug you 🤗", color: "bg-red-400", animationDelay: "1.8s" },
    { message: "You're my everything! 💕", color: "bg-teal-400", animationDelay: "2.2s" }
  ];

  const popBalloon = (index: number) => {
    setPoppedBalloons(prev => new Set(Array.from(prev).concat([index])));
  };

  const resetBalloons = () => {
    setPoppedBalloons(new Set());
  };

  return (
    <section 
      id="game" 
      className="section bg-gradient-to-br from-lavender/20 via-peach/10 to-soft-pink/20 py-20"
      data-testid="game-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-5xl md:text-6xl text-center text-rose-gold mb-8">Pop the Balloons! 🎈</h2>
        <p className="text-center text-gray-600 text-lg mb-16">Click on the balloons to reveal sweet messages!</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
          {balloons.map((balloon, index) => (
            <div 
              key={index}
              className="balloon text-center animate-float" 
              onClick={() => popBalloon(index)}
              style={{ animationDelay: balloon.animationDelay }}
              data-testid={`balloon-${index}`}
            >
              <div 
                className={`text-6xl md:text-8xl cursor-pointer transition-transform duration-300 ${
                  poppedBalloons.has(index) ? 'scale-0' : 'hover:scale-110'
                }`}
              >
                {poppedBalloons.has(index) ? '💥' : '🎈'}
              </div>
              {poppedBalloons.has(index) && (
                <div 
                  className={`message ${balloon.color} text-white p-4 rounded-lg mt-4 shadow-lg animate-pulse`}
                  data-testid={`message-${index}`}
                >
                  {balloon.message}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={resetBalloons} 
            className="bg-soft-pink text-white px-8 py-3 rounded-full hover:bg-rose-gold transition-colors"
            data-testid="reset-balloons"
          >
            Reset Balloons 🎈
          </button>
        </div>
      </div>
    </section>
  );
}