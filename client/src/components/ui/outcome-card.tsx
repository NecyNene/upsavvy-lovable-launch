interface OutcomeCardProps {
  outcome: {
    icon: React.ComponentType<{ className?: string }>;
    iconBg: string;
    iconColor: string;
    title: string;
    description: string;
  };
}

export default function OutcomeCard({ outcome }: OutcomeCardProps) {
  const { icon: Icon, iconBg, iconColor, title, description } = outcome;

  return (
    <div className="text-center space-y-4" data-testid="outcome-card">
      <div className={`${iconBg} ${iconColor} rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto`} data-testid="outcome-icon">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-heading font-bold text-xl text-primary" data-testid="outcome-title">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed" data-testid="outcome-description">
        {description}
      </p>
    </div>
  );
}
