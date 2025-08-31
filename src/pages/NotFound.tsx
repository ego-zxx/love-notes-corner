import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Heart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md mx-auto px-4">
        <Heart className="mx-auto text-primary mb-6" size={64} />
        <h1 className="font-handwritten text-6xl text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          This page got lost in love...
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          It seems like this page wandered off somewhere. 
          Let's get you back to our romantic corner where all the love letters are waiting.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full">
            <Home className="mr-2" size={18} />
            Take Me Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
