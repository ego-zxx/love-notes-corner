import { useState } from "react";
import { Heart, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LetterCardProps {
  title: string;
  preview: string;
  content: string;
  date: string;
  delay?: number;
}

const LetterCard = ({ title, preview, content, date, delay = 0 }: LetterCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className="romantic-card fade-in cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-handwritten text-2xl text-primary mb-2 group-hover:text-primary/80 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-muted-foreground text-sm mb-3">
            <Calendar size={14} className="mr-2" />
            {date}
          </div>
        </div>
        <Heart className="text-accent ml-4 group-hover:text-primary transition-colors" size={20} />
      </div>
      
      <div className="text-foreground/80 leading-relaxed">
        {isExpanded ? (
          <div className="space-y-4">
            <p>{content}</p>
            <Button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              variant="outline"
              size="sm"
              className="mt-4"
            >
              Close
            </Button>
          </div>
        ) : (
          <div>
            <p className="line-clamp-3 mb-4">{preview}</p>
            <p className="text-primary font-medium text-sm">Click to read more...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterCard;