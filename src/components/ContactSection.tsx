import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, ExternalLink, MessageSquare, Phone } from "lucide-react";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally send the form data to a server
    alert("This form submission is simulated. In a real application, it would send your message to the developer.");
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold inline-block">
            <span className="text-primary">&lt;</span>
            Contact Me
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Have a project in mind or want to work together? Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span>Get in Touch</span>
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can I help you?" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Your message here..." 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work, full-time positions, or consulting engagements.
                Don't hesitate to reach out for collaborations or just a friendly chat!
              </p>
              
              <div className="space-y-3 pt-2">
                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:samfolarvic@gmail.com"
                      className="font-medium hover:text-primary flex items-center gap-1"
                    >
                      samfolarvic@gmail.com
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <a
                      href="https://wa.me/2349128279333"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary flex items-center gap-1"
                    >
                      Chat on WhatsApp
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                {/* GitHub */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary flex items-center gap-1"
                    >
                      github.com/developer
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary flex items-center gap-1"
                    >
                      linkedin.com/in/developer
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-3">Availability</h3>
              <p className="text-muted-foreground mb-4">
                I'm currently available for new projects starting from July 2025. My typical response time is within 24 hours.
              </p>
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-sm">Available for hire</span>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border overflow-hidden h-64">
              <iframe 
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1619120413260!5m2!1sen!2sca"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
