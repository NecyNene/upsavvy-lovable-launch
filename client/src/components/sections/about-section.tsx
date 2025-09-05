import { CheckCircle, Settings } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-padding bg-muted" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Organized modern workspace with structured systems" 
              className="rounded-xl shadow-xl w-full h-auto"
              data-testid="about-image"
            />
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-lg" data-testid="about-icon-badge">
              <Settings className="w-6 h-6" />
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary" data-testid="about-title">
              Why Upsavvy Solutions?
            </h2>
            <p className="text-lg text-foreground leading-relaxed" data-testid="about-description">
              Upsavvy Solutions brings clarity, structure, and professional systems to businesses and nonprofits. We take the overwhelm out of organization so you can focus on what you do best.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3" data-testid="about-feature-1">
                <div className="bg-secondary text-secondary-foreground rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-foreground font-medium">Professional systems implementation</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="about-feature-2">
                <div className="bg-secondary text-secondary-foreground rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-foreground font-medium">Customized organizational solutions</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="about-feature-3">
                <div className="bg-secondary text-secondary-foreground rounded-full p-2 w-8 h-8 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span className="text-foreground font-medium">Ongoing support and guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
