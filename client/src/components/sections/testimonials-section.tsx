import TestimonialCard from "@/components/ui/testimonial-card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CEO, Growth Partners LLC",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      quote: "Upsavvy Solutions transformed our chaotic operations into a well-oiled machine. The systems they implemented have saved us countless hours and given us the confidence to scale."
    },
    {
      name: "Michael Rodriguez",
      title: "Director, Community Impact Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&h=100",
      quote: "The program structure and training materials they created have revolutionized how we serve our community. Our volunteers are better prepared and our impact has doubled."
    }
  ];

  return (
    <section className="section-padding bg-background" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary" data-testid="testimonials-title">
            Client Success Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              data-testid={`testimonial-card-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
