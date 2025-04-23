
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Monitor, User, Code, Github, Mail } from "lucide-react";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update navbar style based on scroll position
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ["home", "projects", "about", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6 py-4",
        scrolled ? "bg-background/90 backdrop-blur-lg shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-primary font-bold text-xl flex items-center gap-2">
          <Code className="h-5 w-5" />
          <span>Dev Portfolio</span>
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {[
              { id: "home", label: "Home", icon: Monitor },
              { id: "projects", label: "Projects", icon: Code },
              { id: "about", label: "About", icon: User },
              { id: "contact", label: "Contact", icon: Mail }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors relative",
                    activeSection === item.id
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-accent transition-colors"
          aria-label="GitHub Profile"
        >
          <Github className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
