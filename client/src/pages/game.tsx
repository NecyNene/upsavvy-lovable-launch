import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Sword, Puzzle, Gamepad2 } from "lucide-react";

export default function Game() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section-padding bg-background" data-testid="game-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-primary" data-testid="game-hero-title">
              Game
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed" data-testid="game-hero-description">
              At Upsavvy Solutions, creativity meets strategy. Here's a look at one of our interactive projects.
            </p>
          </div>
        </div>
      </section>

      {/* Main Game Section */}
      <section className="section-padding bg-muted" data-testid="main-game">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="bg-card rounded-xl shadow-lg p-12 border border-border max-w-2xl mx-auto">
              <div className="space-y-6">
                <div className="bg-secondary text-secondary-foreground rounded-lg p-6 w-20 h-20 flex items-center justify-center mx-auto" data-testid="chess-icon">
                  <Sword className="w-10 h-10" />
                </div>
                <h2 className="font-heading font-bold text-2xl text-primary" data-testid="chess-game-title">
                  Strategic Sword Game
                </h2>
                <p className="text-muted-foreground leading-relaxed" data-testid="chess-game-description">
                  Experience strategic thinking in action with our interactive chess game. Coming soon with more creative projects that showcase our problem-solving approach.
                </p>
                <Button className="bg-secondary hover:bg-accent text-secondary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200" data-testid="button-play-game">
                  Play Game (Coming Soon)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects */}
      <section className="section-padding bg-background" data-testid="future-projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-primary" data-testid="future-projects-title">
                More Interactive Projects Coming Soon
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="future-projects-description">
                We're developing more interactive experiences that demonstrate strategic thinking and creative problem-solving.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl shadow-lg p-8 border border-border text-center space-y-4" data-testid="future-project-1">
                <div className="bg-primary text-primary-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <Puzzle className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Strategy Puzzles</h3>
                <p className="text-muted-foreground">Interactive puzzles that challenge strategic thinking and problem-solving skills.</p>
                <div className="text-sm text-secondary font-semibold">Coming Q2 2025</div>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-8 border border-border text-center space-y-4" data-testid="future-project-2">
                <div className="bg-accent text-accent-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <Gamepad2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Business Simulation</h3>
                <p className="text-muted-foreground">A simulation game that teaches business organization and systems thinking.</p>
                <div className="text-sm text-secondary font-semibold">Coming Q3 2025</div>
              </div>

              <div className="bg-card rounded-xl shadow-lg p-8 border border-border text-center space-y-4" data-testid="future-project-3">
                <div className="bg-secondary text-secondary-foreground rounded-lg p-4 w-16 h-16 flex items-center justify-center mx-auto">
                  <Sword className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-xl text-primary">Advanced Sword AI</h3>
                <p className="text-muted-foreground">An enhanced chess experience with AI opponents and strategic analysis.</p>
                <div className="text-sm text-secondary font-semibold">Coming Q4 2025</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-6">
                These projects demonstrate our commitment to innovation and strategic thinking in everything we do.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="btn-primary" data-testid="button-learn-about-approach">
                  <Link href="/about">Learn About Our Approach</Link>
                </Button>
                <Button asChild variant="outline" className="btn-secondary" data-testid="button-discuss-project">
                  <Link href="/contact">Discuss Your Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
