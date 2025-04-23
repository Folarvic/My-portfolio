
const AvailabilityCard = () => {
  return (
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
  );
};

export default AvailabilityCard;
