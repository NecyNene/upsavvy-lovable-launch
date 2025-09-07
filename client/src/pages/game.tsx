import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Game() {
  useEffect(() => {
    // Small delay to ensure the page loads, then redirect
    const timer = setTimeout(() => {
      window.location.href = "https://code-tell-uno-NeneNecy.replit.app";
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleManualRedirect = () => {
    window.open("https://code-tell-uno-NeneNecy.replit.app", "_blank");
  };

  return (
    <main>
      <section className="section-padding bg-background" data-testid="game-redirect">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="redirect-title">
              Redirecting to Game...
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="redirect-description">
              Taking you to our UNO game experience in just a moment...
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleManualRedirect}
                className="bg-secondary hover:bg-accent text-secondary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
                data-testid="manual-redirect-button"
              >
                Play UNO Game Now
              </Button>
              <p className="text-sm text-muted-foreground">
                Or{" "}
                <a 
                  href="https://code-tell-uno-NeneNecy.replit.app" 
                  className="text-secondary hover:underline" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="backup-link"
                >
                  click here
                </a>{" "}
                if not redirected automatically.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
