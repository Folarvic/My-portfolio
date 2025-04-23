
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // This would normally send the form data to a server
    alert("This form submission is simulated. In a real application, it would send your message to the developer.");
  };

  return (
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
  );
};

export default ContactForm;
