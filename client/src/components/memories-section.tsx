import { useState, useEffect } from "react";

interface SlideData {
  image: string;
  alt: string;
  caption: string;
}

export default function MemoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // EDIT: Replace these images and captions with your own photos and memories
    const slides: SlideData[] = [
      {
        image: "/images/img1.jpg",
        alt: "",
        caption: "The day we first met - I knew you were special! ❤️"
      },
    {
      image: "/images/img2.jpg",
      alt: "",
      caption: "I still Remember How Happy I was When I Finally Met You! 🌹"
    },
    {
      image: "/images/img3.jpg",
      alt: "",
      caption: "Just Being Together is what I'm Dreaming Of!"
    }
  ];

  const changeSlide = (direction: number) => {
    setCurrentSlide(prev => {
      let next = prev + direction;
      if (next >= slides.length) next = 0;
      if (next < 0) next = slides.length - 1;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="memories" 
      className="section bg-gradient-to-br from-white via-cream to-soft-pink/10 py-20"
      data-testid="memories-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-5xl md:text-6xl text-center text-rose-gold mb-16">Our Beautiful Memories 📸</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden" data-testid="slideshow-container">
            {/* Slideshow Container */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`${index === currentSlide ? 'block' : 'hidden'} relative`}
                  data-testid={`slide-${index}`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.alt} 
                    className="w-full h-69 md:h-96 object-cover"

                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <p className="text-white text-lg font-medium">{slide.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            {/* <button 
              onClick={() => changeSlide(-1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              data-testid="slide-prev"
            >
              ❮
            </button>
            <button 
              onClick={() => changeSlide(1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
              data-testid="slide-next"
            >
              ❯
            </button> */}

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  data-testid={`slide-indicator-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}