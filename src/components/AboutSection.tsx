
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Laptop, Server, Database, Code, Layout, Terminal } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

const frontendSkills: Skill[] = [
  { name: "HTML & CSS", level: 95, icon: Layout },
  { name: "JavaScript", level: 90, icon: Code },
  { name: "React", level: 85, icon: Code },
  { name: "TypeScript", level: 80, icon: Code },
  { name: "Tailwind CSS", level: 85, icon: Layout },
];

const backendSkills: Skill[] = [
  { name: "Node.js", level: 85, icon: Server },
  { name: "Express", level: 80, icon: Server },
  { name: "MongoDB", level: 75, icon: Database },
  { name: "SQL", level: 75, icon: Database },
  { name: "Python", level: 70, icon: Terminal },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold inline-block">
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            A passionate software developer with a focus on creating efficient, scalable, and user-friendly applications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Laptop className="h-5 w-5 text-primary" />
              <span>My Journey</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a software developer with over 5 years of experience building web applications and services. 
                My journey in tech started with a curiosity about how websites work, which led me to learn 
                HTML and CSS, and eventually JavaScript.
              </p>
              <p>
                As my skills evolved, I found myself drawn to both frontend development with React and 
                backend development with Node.js. This dual interest has allowed me to work on full-stack 
                projects where I can create seamless experiences from database to UI.
              </p>
              <p>
                I'm passionate about clean code, performance optimization, and creating intuitive user experiences. 
                When I'm not coding, I enjoy contributing to open-source projects and mentoring aspiring developers.
              </p>
            </div>
            
            <div className="pt-4">
              <h4 className="text-lg font-medium mb-4">Education & Certifications</h4>
              <div className="space-y-4">
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-muted-foreground">University of Technology, 2015-2019</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">Full-Stack Web Development Certification</p>
                  <p className="text-sm text-muted-foreground">Tech Academy, 2020</p>
                </div>
                <div className="border-l-2 border-primary pl-4 py-1">
                  <p className="font-medium">AWS Certified Developer</p>
                  <p className="text-sm text-muted-foreground">Amazon Web Services, 2021</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <Code className="h-5 w-5 text-primary" />
                <span>Frontend Skills</span>
              </h3>
              
              <div className="space-y-4">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-muted" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <Server className="h-5 w-5 text-primary" />
                <span>Backend Skills</span>
              </h3>
              
              <div className="space-y-4">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-muted" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">30+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="bg-card p-4 rounded-lg border">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Open Source Contributions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
