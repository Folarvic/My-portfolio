
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
                    src="data:image/jpeg;base64,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"  // Replace with your image path  
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
