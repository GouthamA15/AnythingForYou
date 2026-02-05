export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-soft-pink/20"
      data-testid="main-navigation"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-center space-x-6">
          <button 
            onClick={() => scrollToSection('landing')} 
            className="text-soft-pink hover:text-rose-gold transition-colors text-sm font-medium"
            data-testid="nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('notes')} 
            className="text-soft-pink hover:text-rose-gold transition-colors text-sm font-medium"
            data-testid="nav-notes"
          >
            Notes
          </button>
          <button 
            onClick={() => scrollToSection('memories')} 
            className="text-soft-pink hover:text-rose-gold transition-colors text-sm font-medium"
            data-testid="nav-memories"
          >
            Memories
          </button>
          <button 
            onClick={() => scrollToSection('game')} 
            className="text-soft-pink hover:text-rose-gold transition-colors text-sm font-medium"
            data-testid="nav-game"
          >
            Game
          </button>
          <button 
            onClick={() => scrollToSection('surprise')} 
            className="text-soft-pink hover:text-rose-gold transition-colors text-sm font-medium"
            data-testid="nav-surprise"
          >
            Surprise
          </button>
        </div>
      </div>
    </nav>
  );
}