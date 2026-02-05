import { useState } from "react";

interface NoteCardProps {
  title: string;
  message: string;
  frontColor: string;
  backColor: string;
  index: number;
}

function NoteCard({ title, message, frontColor, backColor, index }: NoteCardProps) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`note-card ${flipped ? 'flipped' : ''}`} onClick={flipCard} data-testid={`note-card-${index}`}>
      <div className="note-card-inner">
        <div className={`note-card-front ${frontColor} text-white`}>
          <div>
            <h3 className="font-pacifico text-2xl mb-2">{title}</h3>
            <p className="text-sm opacity-80">Click to reveal ✨</p>
          </div>
        </div>
        <div className={`note-card-back ${backColor} text-white`}>
          <div>
            {/* EDIT: Replace with your messages */}
            <p className="text-lg font-medium leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NotesSection() {
  // EDIT: Replace these messages with your own
  const notes = [
    {
      title: "Open Note 1",
      message: "Every morning I wake up thinking about your beautiful smile. You make my world brighter every single day! 🌅❤️",
      frontColor: "bg-pink-400",
      backColor: "bg-rose-400"
    },
    {
      title: "Open Note 2",
      message: "Distance means nothing when you mean everything to me. I Love You Everyday, Every Minute, Every Second 🌍💕",
      frontColor: "bg-purple-300",
      backColor: "bg-purple-400"
    },
    {
      title: "Open Note 3",
      message: "Your laugh, Your Smile and Your Happiness is always my Favorite. Belated Happy birthday Honey! 🎂✨",
      frontColor: "bg-peach",
      backColor: "bg-orange-400"
    },
    {
      title: "Open Note 4",
      message: "A year ago, when I saw you— my heart started racing with love, and in my eyes, you looked like an angel❤️",
      frontColor: "bg-rose-gold",
      backColor: "bg-pink-400"
    },
    {
      title: "Open Note 5",
      message: "You have a larger forehead nah,  Well that just means there’s more space specially reserved for me to give endless forehead kisses.🤗",
      frontColor: "bg-purple-400",
      backColor: "bg-purple-300"
    },
    {
      title: "Open Note 6",
      message: "Here's a lot of wishes and kisses ✨✨😘😘, even from miles away. I love you endlessly! 🌟💕",
      frontColor: "bg-yellow-400",
      backColor: "bg-peach"
    }
  ];

  return (
    <section 
      id="notes" 
      className="section bg-gradient-to-br from-peach/20 via-white to-lavender/20 py-20"
      data-testid="notes-section"
    >
      <div className="container mx-auto px-4">
        <h2 className="font-dancing text-5xl md:text-6xl text-center text-rose-gold mb-16">Love Notes 💕</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {notes.map((note, index) => (
            <NoteCard key={index} {...note} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}