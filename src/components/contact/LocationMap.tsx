
const LocationMap = () => {
  return (
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
  );
};

export default LocationMap;
