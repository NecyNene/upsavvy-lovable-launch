import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/service-card";
import { Building, Calendar, Paintbrush } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Building,
      iconBg: "bg-primary",
      iconColor: "text-primary-foreground",
      title: "Business Systems Setup",
      description: "LLC/EIN setup, comprehensive handbooks, streamlined workflows, and compliance management to establish your business foundation.",
      features: [
        "Legal structure setup",
        "Employee handbooks",
        "Workflow optimization"
      ]
    },
    {
      icon: Calendar,
      iconBg: "bg-secondary",
      iconColor: "text-secondary-foreground",
      title: "Program & Event Structure",
      description: "Detailed schedules, program handbooks, progress trackers, and comprehensive training materials for seamless execution.",
      features: [
        "Event planning systems",
        "Program documentation",
        "Training materials"
      ]
    },
    {
      icon: Paintbrush,
      iconBg: "bg-accent",
      iconColor: "text-accent-foreground",
      title: "Add-On Design Support",
      description: "Professional flyers, custom Canva templates, branded documents, and simple website development to enhance your brand presence.",
      features: [
        "Marketing materials",
        "Brand templates",
        "Website development"
      ]
    }
  ];

  return (
    <section className="section-padding bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary" data-testid="services-title">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            Comprehensive solutions to streamline your business operations and drive growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              data-testid={`service-card-${index}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-primary hover:bg-secondary text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200" data-testid="button-see-full-services">
            <Link href="/services">See Full Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
