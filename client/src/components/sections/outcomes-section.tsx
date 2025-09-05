import OutcomeCard from "@/components/ui/outcome-card";
import { Lightbulb, Award, Rocket, Clock } from "lucide-react";

export default function OutcomesSection() {
  const outcomes = [
    {
      icon: Lightbulb,
      iconBg: "bg-secondary",
      iconColor: "text-secondary-foreground",
      title: "Clarity",
      description: "Clear systems and processes that eliminate confusion and streamline operations."
    },
    {
      icon: Award,
      iconBg: "bg-primary",
      iconColor: "text-primary-foreground",
      title: "Professionalism",
      description: "Polished, professional presentation that builds trust with clients and stakeholders."
    },
    {
      icon: Rocket,
      iconBg: "bg-accent",
      iconColor: "text-accent-foreground",
      title: "Confidence",
      description: "The assurance that comes from having organized, reliable systems in place."
    },
    {
      icon: Clock,
      iconBg: "bg-secondary",
      iconColor: "text-secondary-foreground",
      title: "More Time",
      description: "Efficient processes that free up your time to focus on growth and core activities."
    }
  ];

  return (
    <section className="section-padding bg-muted" data-testid="outcomes-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary" data-testid="outcomes-title">
            What You'll Achieve
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="outcomes-subtitle">
            Transform your business operations with measurable outcomes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((outcome, index) => (
            <OutcomeCard 
              key={index} 
              outcome={outcome} 
              data-testid={`outcome-card-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
