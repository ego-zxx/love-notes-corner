import Navigation from "@/components/Navigation";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto fade-in">
              <div className="mb-8">
                <Heart className="mx-auto text-primary mb-6" size={48} />
                <h1 className="font-handwritten text-6xl md:text-7xl text-primary mb-6 leading-tight">
                  Welcome to Our
                  <br />
                  Love Story
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  This is our special corner of the internet, filled with love letters, 
                  sweet messages, and invitations to create beautiful memories together.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link to="/letters">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full">
                    Read My Letters 💕
                  </Button>
                </Link>
                <Link to="/messages">
                  <Button variant="outline" className="px-8 py-6 text-lg rounded-full">
                    Sweet Messages ✨
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Romantic Quote Section */}
        <section className="py-16 px-4 romantic-gradient">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto fade-in" style={{ animationDelay: "600ms" }}>
              <Sparkles className="mx-auto text-white/80 mb-6" size={32} />
              <blockquote className="font-handwritten text-3xl md:text-4xl text-white/90 mb-6 leading-relaxed">
                "In all the world, there is no heart for me like yours. 
                In all the world, there is no love for you like mine."
              </blockquote>
              <cite className="text-white/70 text-lg">- Maya Angelou</cite>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Link to="/letters" className="group">
                <div className="romantic-card text-center fade-in hover:scale-105 transition-transform">
                  <Heart className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-handwritten text-2xl text-primary mb-3">Love Letters</h3>
                  <p className="text-muted-foreground">Heartfelt letters written just for you, filled with love and dreams</p>
                </div>
              </Link>
              
              <Link to="/messages" className="group">
                <div className="romantic-card text-center fade-in hover:scale-105 transition-transform" style={{ animationDelay: "200ms" }}>
                  <Sparkles className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-handwritten text-2xl text-primary mb-3">Sweet Messages</h3>
                  <p className="text-muted-foreground">Little thoughts and feelings that make my heart flutter</p>
                </div>
              </Link>
              
              <Link to="/dates" className="group">
                <div className="romantic-card text-center fade-in hover:scale-105 transition-transform" style={{ animationDelay: "400ms" }}>
                  <Heart className="mx-auto text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-handwritten text-2xl text-primary mb-3">Date Invitations</h3>
                  <p className="text-muted-foreground">Special moments I want to create and share with you</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer Message */}
        <section className="py-12 px-4 border-t border-border">
          <div className="container mx-auto text-center">
            <div className="fade-in" style={{ animationDelay: "800ms" }}>
              <p className="font-handwritten text-2xl text-primary mb-2">
                Made with endless love for the most amazing person in my world
              </p>
              <p className="text-muted-foreground">
                Every word, every message, every invitation comes straight from my heart to yours
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
