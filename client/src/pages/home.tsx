import { useEffect } from "react";
import Navigation from "@/components/navigation";
import FloatingHearts from "@/components/floating-hearts";
import LandingSection from "@/components/landing-section";
import NotesSection from "@/components/notes-section";
import MemoriesSection from "@/components/memories-section";
import GameSection from "@/components/game-section";
import SurpriseSection from "@/components/surprise-section";

export default function Home() {
  useEffect(() => {
    // Initialize page title with girlfriend's name
    // EDIT: Replace with her name
    document.title = "Happy Birthday Abhinaya! 💚";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A romantic birthday surprise website with love notes, memories, games, and special messages for my amazing girlfriend.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A romantic birthday surprise website with love notes, memories, games, and special messages for my amazing girlfriend.';
      document.getElementsByTagName('head')[0].appendChild(meta);
    }
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Background Music (Optional) */}
      {/* EDIT: Add your music file URL here */}
      <audio id="background-music" loop>
        <source src="/songs/TaylorMix.mp3" type="audio/mpeg" /> {/* EDIT: Replace # with your music file URL */}
      </audio>

      {/* Floating Hearts Background */}
      <FloatingHearts />

      {/* Navigation */}
      <Navigation />

      {/* All Sections */}
      <LandingSection />
      <NotesSection />
      <MemoriesSection />
      <GameSection />
      <SurpriseSection />
    </div>
  );
}
