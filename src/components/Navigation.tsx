import { Link, useLocation } from "react-router-dom";
import { Heart, Mail, MessageCircle, Calendar } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", label: "Home", icon: Heart },
    { path: "/letters", label: "Letters", icon: Mail },
    { path: "/messages", label: "Messages", icon: MessageCircle },
    { path: "/dates", label: "Dates", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-handwritten text-2xl text-primary hover:text-primary/80 transition-colors">
            Love Notes Corner
          </Link>
          
          <div className="flex space-x-6">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  location.pathname === path
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/20"
                }`}
              >
                <Icon size={18} />
                <span className="hidden sm:inline font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;