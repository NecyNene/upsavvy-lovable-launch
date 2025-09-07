import { useEffect } from "react";

export default function Game() {
  useEffect(() => {
    // Redirect to external UNO game
    window.location.href = "https://code-tell-uno-NeneNecy.replit.app";
  }, []);
  return (
    <main>
      <section className="section-padding bg-background" data-testid="game-redirect">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="redirect-title">
              Redirecting to Game...
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="redirect-description">
              Taking you to our UNO game experience. If you are not redirected automatically, 
              <a href="https://code-tell-uno-NeneNecy.replit.app" className="text-secondary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                click here
              </a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
