import AboutSection from "@/components/sections/about-section";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle, Target, Users, Award } from "lucide-react";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-background" data-testid="about-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="about-hero-title">
              About Upsavvy Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="about-hero-description">
              We bring clarity, structure, and professionalism to businesses and community organizations
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutSection />

      {/* Mission & Values */}
      <section className="section-padding bg-background" data-testid="mission-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="text-center space-y-4" data-testid="mission-card">
              <div className="bg-primary text-primary-foreground rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower small businesses and community organizations with the systems, structure, and support they need to operate efficiently and grow confidently.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="approach-card">
              <div className="bg-secondary text-secondary-foreground rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary">Our Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                We take the time to understand your unique needs and create customized solutions that fit your organization's culture, goals, and resources.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="commitment-card">
              <div className="bg-accent text-accent-foreground rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-primary">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to delivering professional, practical solutions that make a real difference in how you operate and serve your community.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Promise */}
      <section className="section-padding bg-muted" data-testid="brand-promise">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary">
              Our Promise to You
            </h2>
            <div className="bg-card rounded-xl shadow-lg p-8 border border-border">
              <p className="text-lg text-foreground leading-relaxed italic">
                "At Upsavvy Solutions, we help small businesses and community organizations bring clarity, structure, and professionalism to their systems and programs so they can grow with confidence."
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-2">
                <div className="text-3xl font-heading font-bold text-secondary">Structure</div>
                <p className="text-sm text-muted-foreground">Organized systems that work</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-heading font-bold text-secondary">Systems</div>
                <p className="text-sm text-muted-foreground">Efficient processes and workflows</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-heading font-bold text-secondary">Support</div>
                <p className="text-sm text-muted-foreground">Ongoing guidance and expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-background" data-testid="about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss how we can help bring structure, systems, and support to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-primary" data-testid="button-start-conversation">
                <Link href="/contact">Start the Conversation</Link>
              </Button>
              <Button asChild variant="outline" className="btn-secondary" data-testid="button-view-services">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
