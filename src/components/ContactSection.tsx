
import ContactForm from "./contact/ContactForm";
import ContactInformation from "./contact/ContactInformation";
import AvailabilityCard from "./contact/AvailabilityCard";
import LocationMap from "./contact/LocationMap";

const ContactSection = () => {
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
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <ContactInformation />
            <AvailabilityCard />
            <LocationMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
