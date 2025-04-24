
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Terminal, Code, Laptop } from "lucide-react";
import { TypewriterEffect } from "./TypewriterEffect";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const roles = [
    { text: "Software" },
    { text: "Developer" },
    { text: "Frontend" },
    { text: "Backend" },
    { text: "Full-Stack" },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 px-4">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 -z-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 bg-primary/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/3 h-96 w-96 bg-accent/20 rounded-full filter blur-3xl opacity-60"></div>
      </div>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="col-span-2 space-y-8 slide-in-left">
          <div className="space-y-2">
            <h2 className="text-xl font-medium text-primary">Hello, my name is</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Sam
            </h1>
            <div className="h-16 my-4">
              <TypewriterEffect words={roles.map(role => ({ text: role.text }))} />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              I build exceptional, high-quality websites and applications 
              that solve real-world problems.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Button onClick={scrollToProjects} className="gap-2 group">
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
          </div>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              <span>JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              <span>React</span>
            </div>
            <div className="flex items-center gap-2">
              <Laptop className="h-4 w-4" />
              <span>Node.js</span>
            </div>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center items-center fade-in">
          <div className="relative">
            <div className="w-64 h-64 bg-muted rounded-full overflow-hidden flex justify-center items-end pulse-glow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-40 h-40 text-primary opacity-90">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg border border-border">
              <Code className="h-8 w-8 text-primary" />


          <div className="hidden md:flex justify-center items-center fade-in">  
            <div className="relative">  
              <div className="w-64 h-64 bg-muted rounded-full overflow-hidden flex justify-center items-center pulse-glow">  
                {/* Image container - maintains circle shape */}  
                <div className="w-40 h-40 rounded-full overflow-hidden">  
                  <img   
                    src="public/image.png"  // Replace with your image path  
                    alt="Profile"   
                    className="w-full h-full object-cover"  // Ensures image fills circle  
                  />  
                </div>  
              </div>  
              <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg border border-border">  
                <Code className="h-8 w-8 text-primary" />  
              </div>  
            </div>  
          </div>  


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
