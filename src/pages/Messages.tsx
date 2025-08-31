import Navigation from "@/components/Navigation";
import MessageBubble from "@/components/MessageBubble";

const Messages = () => {
  const messages = [
    "You make my heart skip a beat every single day 💕",
    "Your smile is my favorite view in the world",
    "I love the way you laugh at your own jokes",
    "You're my sunshine on the rainiest days ☀️",
    "Thank you for being perfectly imperfect",
    "Your hugs feel like home to me",
    "I could listen to your voice for hours",
    "You make ordinary moments feel extraordinary",
    "I'm so grateful for your kind heart",
    "You're my favorite notification 📱",
    "I love how you dance when you're happy",
    "Your eyes tell the most beautiful stories",
    "You make me believe in fairy tales again",
    "I love your midnight thoughts and 3am laughs",
    "You're my favorite adventure 🗺️",
    "Your hand fits perfectly in mine",
    "I love how you make coffee taste better",
    "You're my calm in every storm",
    "Your dreams inspire my dreams",
    "You make me want to be better every day",
    "I love your sleepy morning voice",
    "You're my favorite reason to smile 😊",
    "Your love is my safe haven",
    "I love how you see magic in small things"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h1 className="font-handwritten text-5xl text-primary mb-4">
              Sweet Little Messages
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Random thoughts and feelings that pop into my head throughout the day, 
              all dedicated to you, my love.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-start">
              {messages.map((message, index) => (
                <MessageBubble
                  key={index}
                  message={message}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 fade-in" style={{ animationDelay: "2400ms" }}>
            <p className="font-handwritten text-2xl text-primary">
              And many more thoughts coming your way... 💕
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;