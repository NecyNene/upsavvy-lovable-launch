import ServicesSection from "@/components/sections/services-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building, Calendar, Paintbrush, CheckCircle } from "lucide-react";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-background" data-testid="services-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="services-hero-title">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="services-hero-description">
              Professional systems and support designed to help your business thrive
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-muted" data-testid="detailed-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            
            {/* Business Systems Setup */}
            <div className="grid lg:grid-cols-2 gap-12 items-center" data-testid="service-business-systems">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                    <Building className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-primary">Business Systems Setup</h2>
                    <p className="text-lg text-secondary font-semibold">Flagship Service</p>
                  </div>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Get your business off the ground with proper legal structure, comprehensive documentation, and streamlined processes that ensure compliance and efficiency from day one.
                </p>
                <div className="space-y-3">
                  {[
                    "LLC/EIN registration and setup",
                    "Employee handbook creation",
                    "Standard operating procedures",
                    "Compliance documentation",
                    "Workflow optimization",
                    "Record keeping systems"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-secondary w-5 h-5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-lg font-semibold text-primary">Starting at $2,500</p>
                  <p className="text-sm text-muted-foreground">Complete business foundation package</p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Business systems and documentation" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

            {/* Program & Event Structure */}
            <div className="grid lg:grid-cols-2 gap-12 items-center" data-testid="service-program-structure">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Event planning and program management" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="flex items-center space-x-4">
                  <div className="bg-secondary text-secondary-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-primary">Program & Event Structure</h2>
                    <p className="text-lg text-secondary font-semibold">Secondary Service</p>
                  </div>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Organize and execute successful programs and events with detailed planning, documentation, and tracking systems that ensure smooth operations and measurable results.
                </p>
                <div className="space-y-3">
                  {[
                    "Event planning templates",
                    "Program handbooks and guides",
                    "Progress tracking systems",
                    "Training material development",
                    "Volunteer coordination tools",
                    "Impact measurement frameworks"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-secondary w-5 h-5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-lg font-semibold text-primary">Starting at $1,800</p>
                  <p className="text-sm text-muted-foreground">Complete program management package</p>
                </div>
              </div>
            </div>

            {/* Add-On Design Support */}
            <div className="grid lg:grid-cols-2 gap-12 items-center" data-testid="service-design-support">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent text-accent-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center">
                    <Paintbrush className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-3xl text-primary">Add-On Design Support</h2>
                    <p className="text-lg text-accent font-semibold">Optional Enhancement</p>
                  </div>
                </div>
                <p className="text-lg text-foreground leading-relaxed">
                  Enhance your professional image with custom design materials that reflect your brand and communicate your message effectively across all platforms.
                </p>
                <div className="space-y-3">
                  {[
                    "Professional flyer design",
                    "Custom Canva templates",
                    "Branded document layouts",
                    "Simple website development",
                    "Logo design and refinement",
                    "Marketing material creation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-secondary w-5 h-5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-card rounded-lg p-4 border border-border">
                  <p className="text-lg font-semibold text-primary">Starting at $500</p>
                  <p className="text-sm text-muted-foreground">Individual design projects</p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Design and branding materials" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-background" data-testid="services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Choose the service that best fits your needs, or let us create a custom package for your unique situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary" data-testid="button-get-started">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary" data-testid="button-learn-more">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
