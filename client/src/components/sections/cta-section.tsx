import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground" data-testid="cta-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl" data-testid="cta-title">
            Ready to Get Organized?
          </h2>
          <p className="text-xl opacity-90 leading-relaxed" data-testid="cta-description">
            Transform your business operations with our proven systems and professional support. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-secondary text-accent-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200" data-testid="button-book-consultation">
              <Link href="/contact">Book Your Consultation</Link>
            </Button>
            <Button variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-200" data-testid="button-cta-learn-more">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
