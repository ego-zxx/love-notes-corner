import { useState } from "react";
import { MapPin, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface DateInvitationProps {
  title: string;
  description: string;
  location: string;
  datetime: string;
  delay?: number;
}

const DateInvitation = ({ title, description, location, datetime, delay = 0 }: DateInvitationProps) => {
  const [hasResponded, setHasResponded] = useState(false);
  const { toast } = useToast();

  const handleRSVP = (response: "yes" | "maybe") => {
    setHasResponded(true);
    toast({
      title: response === "yes" ? "Yes! I'd love to! 💕" : "Maybe... let me check! 💭",
      description: "Your response has been noted with love",
    });
  };

  return (
    <div 
      className="romantic-card fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-center mb-6">
        <Heart className="mx-auto text-primary mb-3" size={24} />
        <h3 className="font-handwritten text-3xl text-primary mb-2">{title}</h3>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <Clock size={16} />
          <span>{datetime}</span>
        </div>
        
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <MapPin size={16} />
          <span>{location}</span>
        </div>
      </div>
      
      {!hasResponded ? (
        <div className="flex justify-center space-x-4">
          <Button
            onClick={() => handleRSVP("yes")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Yes, I'd love to! 💕
          </Button>
          <Button
            onClick={() => handleRSVP("maybe")}
            variant="outline"
          >
            Maybe... 💭
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-primary font-medium">Thank you for responding! 💕</p>
        </div>
      )}
    </div>
  );
};

export default DateInvitation;