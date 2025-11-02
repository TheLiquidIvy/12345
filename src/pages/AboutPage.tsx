import { Link } from 'react-router-dom';
import { Zap, Target, Rocket, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HighlightedText } from '@/lib/highlight-words';

function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: 'Bold & Unapologetic',
      description: 'We don\'t play it safe. Every project is an opportunity to push boundaries and challenge the status quo.',
      color: 'text-primary',
    },
    {
      icon: Target,
      title: 'Results-Obsessed',
      description: 'Pretty designs are nice. Designs that convert? That\'s what we\'re after. Performance is non-negotiable.',
      color: 'text-secondary',
    },
    {
      icon: Rocket,
      title: 'Speed & Quality',
      description: 'We move fast without cutting corners. Agile execution meets obsessive attention to detail.',
      color: 'text-accent',
    },
    {
      icon: Users,
      title: 'No BS Communication',
      description: 'You\'ll always know where your project stands. Clear updates, honest timelines, zero corporate fluff.',
      color: 'text-primary',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <HighlightedText>We're PixelPlaque</HighlightedText>
            </h1>
            <p className="text-2xl font-semibold text-primary">
              And We're Here to Disturb the Algorithm
            </p>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a digital agency that refuses to blend in. Born from a love of code, 
              design, and a healthy disrespect for boring, we create digital experiences 
              that make people stop scrolling.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Story Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <HighlightedText>The Origin Story</HighlightedText>
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                PixelPlaque started with a simple observation: the internet was getting boring. 
                Cookie-cutter websites, predictable designs, and safe strategies were everywhere. 
                Someone needed to shake things up.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                So we built an agency that does things differently. We combine technical excellence 
                with creative rebellion. We write code that performs and design that provokes. 
                We don't just follow trends—we set them, break them, and remix them into something new.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we work with brands that aren't afraid to stand out. From startups disrupting 
                industries to established companies ready to shake off the dust, we help businesses 
                find their edge and sharpen it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              <HighlightedText>What We Stand For</HighlightedText>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Our values aren't just words on a page. They're how we work, every single day.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:glow-box-magenta transition-all duration-300">
                        <value.icon className={`w-6 h-6 ${value.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <HighlightedText>Our Mission</HighlightedText>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To help businesses break free from digital mediocrity. We create websites, 
              brands, and campaigns that don't just exist—they <span className="text-primary font-semibold">disrupt</span>, 
              they <span className="text-secondary font-semibold">engage</span>, and they <span className="text-accent font-semibold">convert</span>.
            </p>
            <p className="text-lg text-muted-foreground">
              One pixel-perfect project at a time, we're making the internet less boring.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              <HighlightedText>By the Numbers</HighlightedText>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary glow-magenta mb-2">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Projects Launched</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-secondary glow-cyan mb-2">200+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-accent glow-lime mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary glow-magenta mb-2">99%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <HighlightedText highlightChance={0.35}>
                Ready to Work With Us?
              </HighlightedText>
            </h2>
            <p className="text-lg text-muted-foreground">
              If you're looking for safe and predictable, we're not your agency. But if you want 
              bold, strategic, and results-driven? Let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white group"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary hover:border-secondary hover:bg-secondary/10"
              >
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
