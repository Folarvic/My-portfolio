
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include product browsing, shopping cart, and secure checkout.",
    image: "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?q=80&w=2665&auto=format&fit=crop",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: ["web", "fullstack"]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects with team collaboration features, built with React and Firebase.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2672&auto=format&fit=crop",
    tags: ["React", "Firebase", "Tailwind CSS", "Authentication"],
    githubUrl: "https://github.com",
    category: ["web", "frontend"]
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description: "A RESTful API that provides weather forecast data based on location. Built with Node.js and integrates with external weather services.",
    image: "https://images.unsplash.com/photo-1590477277868-8322e2e42d5b?q=80&w=2670&auto=format&fit=crop",
    tags: ["Node.js", "Express", "API", "OpenWeather"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    category: ["api", "backend"]
  },
  {
    id: 4,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances with visualizations and budget planning features.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2726&auto=format&fit=crop",
    tags: ["React", "Chart.js", "Firebase", "Authentication"],
    githubUrl: "https://github.com",
    category: ["web", "frontend"]
  },
  {
    id: 5,
    title: "Inventory Management System",
    description: "A system for tracking inventory levels, orders, sales, and deliveries for small businesses.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2676&auto=format&fit=crop",
    tags: ["Vue.js", "Node.js", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com",
    category: ["web", "fullstack"]
  },
  {
    id: 6,
    title: "Machine Learning Model API",
    description: "A Python-based API that serves machine learning models for sentiment analysis and text classification.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2670&auto=format&fit=crop",
    tags: ["Python", "Flask", "ML", "NLP", "Docker"],
    githubUrl: "https://github.com",
    category: ["api", "backend", "ml"]
  }
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Apps" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "api", label: "API" },
  { value: "ml", label: "Machine Learning" },
  { value: "fullstack", label: "Full-Stack" },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredProjects = activeCategory === "all" 
    ? projects
    : projects.filter(project => project.category.includes(activeCategory));
    
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto">
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-2xl font-bold inline-block">
            <span className="text-primary">&lt;</span>
            Projects
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A collection of projects that showcase my skills and experience in software development.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                size="sm"
                className="rounded-full text-sm"
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden group hover:border-primary/50 transition-all duration-300 bg-card h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="outline" className="rounded-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub Repository</span>
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button size="icon" variant="outline" className="rounded-full" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                        <span className="sr-only">Live Demo</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t pt-4 flex justify-between">
                <Button variant="ghost" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <span>Demo</span>
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
