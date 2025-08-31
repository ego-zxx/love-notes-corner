import { Heart } from "lucide-react";

interface MessageBubbleProps {
  message: string;
  delay?: number;
}

const MessageBubble = ({ message, delay = 0 }: MessageBubbleProps) => {
  return (
    <div 
      className="bubble-message inline-block m-2 fade-in hover:scale-105 transition-transform cursor-pointer group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-2">
        <Heart size={14} className="text-accent group-hover:text-primary transition-colors" />
        <span className="text-sm text-foreground/90">{message}</span>
      </div>
    </div>
  );
};

export default MessageBubble;