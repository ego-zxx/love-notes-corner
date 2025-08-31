import Navigation from "@/components/Navigation";
import LetterCard from "@/components/LetterCard";

const Letters = () => {
  const letters = [
    {
      title: "My Dearest Love",
      preview: "Every morning when I wake up, the first thought that crosses my mind is you. Your smile, your laugh, the way you make everything better just by being there...",
      content: "Every morning when I wake up, the first thought that crosses my mind is you. Your smile, your laugh, the way you make everything better just by being there. I want you to know that you are my sunshine on cloudy days, my peace in chaos, and my greatest joy. Thank you for being the most amazing person I've ever known. I love you more than words could ever express, and I can't wait to create more beautiful memories with you.",
      date: "January 15, 2024"
    },
    {
      title: "Forever Grateful",
      preview: "I've been thinking about all the little things you do that make my heart flutter. The way you laugh at my silly jokes, how you remember my favorite coffee order...",
      content: "I've been thinking about all the little things you do that make my heart flutter. The way you laugh at my silly jokes, how you remember my favorite coffee order, the gentle way you hold my hand when we're walking together. These moments might seem small, but they mean the world to me. You have this incredible ability to make ordinary days feel magical, and I am so grateful to have you in my life. You are my favorite person, my best friend, and my greatest love.",
      date: "January 10, 2024"
    },
    {
      title: "Sweet Dreams",
      preview: "As you read this, I hope you know that you are loved beyond measure. Tonight, as you drift off to sleep, I want you to dream of all the adventures we'll have together...",
      content: "As you read this, I hope you know that you are loved beyond measure. Tonight, as you drift off to sleep, I want you to dream of all the adventures we'll have together, all the places we'll explore, and all the love we'll share. You are my dream come true, and I promise to love you with all my heart for all the days of my life. Sweet dreams, my beautiful angel. I can't wait to see your gorgeous smile tomorrow morning.",
      date: "January 5, 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h1 className="font-handwritten text-5xl text-primary mb-4">
              Letters from My Heart
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each letter is a piece of my soul, written just for you. 
              Click on any letter to read the full message of love.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {letters.map((letter, index) => (
              <LetterCard
                key={index}
                {...letter}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Letters;