interface TestimonialCardProps {
  testimonial: {
    name: string;
    title: string;
    image: string;
    quote: string;
  };
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { name, title, image, quote } = testimonial;

  return (
    <div className="bg-card rounded-xl shadow-lg p-8 border border-border" data-testid="testimonial-card">
      <div className="flex items-center space-x-4 mb-6">
        <img 
          src={image} 
          alt={`${name}, ${title}`} 
          className="rounded-full w-16 h-16 object-cover" 
          data-testid="testimonial-image"
        />
        <div>
          <div className="font-semibold text-foreground" data-testid="testimonial-name">
            {name}
          </div>
          <div className="text-muted-foreground text-sm" data-testid="testimonial-title">
            {title}
          </div>
        </div>
      </div>
      <p className="text-foreground italic leading-relaxed" data-testid="testimonial-quote">
        "{quote}"
      </p>
    </div>
  );
}
