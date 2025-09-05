import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
    features: string[];
  };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { icon: Icon, iconBg, iconColor, title, description, features } = service;

  return (
    <div className="bg-card rounded-xl shadow-lg p-8 border border-border hover:shadow-xl transition-shadow duration-300" data-testid="service-card">
      <div className={`${iconBg} ${iconColor} rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6`} data-testid="service-icon">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-bold text-xl text-primary mb-4" data-testid="service-title">
        {title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="service-description">
        {description}
      </p>
      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm text-foreground" data-testid={`service-feature-${index}`}>
            <ArrowRight className="text-secondary w-4 h-4" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      <Button asChild className="w-full bg-secondary hover:bg-accent text-secondary-foreground font-semibold py-3 px-6 rounded-lg transition-colors duration-200" data-testid="service-learn-more-button">
        <Link href="/services">Learn More</Link>
      </Button>
    </div>
  );
}
