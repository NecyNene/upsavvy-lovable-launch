import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <section className="section-padding bg-background" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-primary leading-tight" data-testid="hero-headline">
                Helping your business run smoothly and grow with confidence.
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed" data-testid="hero-subtext">
                Smart, organized systems and professional support for small businesses and community organizations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="btn-primary" data-testid="button-work-with-us">
                <Link href="/contact">Work With Us</Link>
              </Button>
              <Button variant="outline" className="btn-secondary" data-testid="button-learn-more">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Professional business owner working confidently" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-lg p-6 shadow-lg" data-testid="hero-stat-card">
              <div className="text-2xl font-heading font-bold" data-testid="hero-stat-number">95%</div>
              <div className="text-sm font-medium" data-testid="hero-stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
