import Navigation from "@/components/Navigation";
import DateInvitation from "@/components/DateInvitation";

const Dates = () => {
  const dateInvitations = [
    {
      title: "Candlelit Dinner",
      description: "Join me for an intimate dinner under the stars. I'll cook your favorite meal, and we can talk about our dreams while soft music plays in the background.",
      location: "Our favorite spot at home",
      datetime: "Saturday, February 14th at 7:00 PM"
    },
    {
      title: "Morning Coffee Adventure",
      description: "Let's explore that cozy little café we've been wanting to try. We can share pastries, steal kisses over lattes, and plan our next adventure together.",
      location: "The Cozy Corner Café, Downtown",
      datetime: "Sunday, February 18th at 10:00 AM"
    },
    {
      title: "Sunset Beach Walk",
      description: "I want to watch the sunset with you by the ocean. We'll walk hand in hand, collect seashells, and maybe build a sandcastle or two. Don't forget to bring your beautiful smile!",
      location: "Moonlight Beach",
      datetime: "Friday, February 23rd at 6:30 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 fade-in">
            <h1 className="font-handwritten text-5xl text-primary mb-4">
              Date Night Invitations
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Special moments I want to share with you. Each invitation is crafted with love 
              and the hope of creating beautiful memories together.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {dateInvitations.map((invitation, index) => (
              <DateInvitation
                key={index}
                {...invitation}
                delay={index * 300}
              />
            ))}
          </div>
          
          <div className="text-center mt-16 fade-in" style={{ animationDelay: "900ms" }}>
            <div className="romantic-card max-w-md mx-auto">
              <h3 className="font-handwritten text-2xl text-primary mb-3">
                More Adventures Await
              </h3>
              <p className="text-muted-foreground">
                These are just the beginning of all the wonderful dates we'll share. 
                Every moment with you is a treasure, and I can't wait to create more memories together.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dates;