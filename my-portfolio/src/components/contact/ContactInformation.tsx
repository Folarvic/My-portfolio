
import { Mail, Github, Linkedin, ExternalLink, Phone } from "lucide-react";

const ContactInformation = () => {
  return (
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
  );
};

export default ContactInformation;
