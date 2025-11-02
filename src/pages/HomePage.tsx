import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, TrendingUp, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HighlightedText } from '@/lib/highlight-words';

function HomePage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Cutting-edge websites that perform. Fast, secure, and built to scale.',
      color: 'text-primary',
      glow: 'glow-box-magenta',
    },
    {
      icon: Palette,
      title: 'Web & Graphic Design',
      description: 'Visuals that pop. Brands that stick. Design that dares to be different.',
      color: 'text-secondary',
      glow: 'glow-box-cyan',
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Words that work. Content that converts. Stories that sell.',
      color: 'text-accent',
      glow: 'glow-box-lime',
    },
    {
      icon: Search,
      title: 'SEO Marketing',
      description: 'Get found. Get clicks. Get results. Algorithms are our playground.',
      color: 'text-primary',
      glow: 'glow-box-magenta',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="absolute inset-0 cyber-grid opacity-20" />
        
        {/* Scan Line Effect */}
        <div className="scan-line absolute inset-0 pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Glitch Title */}
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight glitch"
              data-text="PixelPlaque"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                PixelPlaque
              </span>
            </h1>

            {/* Slogan */}
            <p className="text-2xl md:text-3xl font-semibold text-foreground/90">
              <HighlightedText highlightChance={0.3}>
                Code. Design. Disturb the Algorithm.
              </HighlightedText>
            </p>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not your average agency. We craft digital experiences that break conventions, 
              challenge norms, and make algorithms nervous.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
              >
                <Link to="/contact">
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary hover:border-secondary hover:bg-secondary/10 group"
              >
                <Link to="/portfolio">
                  <span className="flex items-center gap-2">
                    View Our Work
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary glow-magenta">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary glow-cyan">200+</div>
                <div className="text-sm text-muted-foreground mt-1">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent glow-lime">99%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <HighlightedText>What We Do Best</HighlightedText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we've got your digital needs covered with sass and skill.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6 space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:${service.glow} transition-all duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-primary/50 hover:border-primary">
              <Link to="/services">
                <span className="flex items-center gap-2">
                  Explore All Services
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              <HighlightedText>Why PixelPlaque?</HighlightedText>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary glow-box-magenta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Unapologetically Bold</h3>
                    <p className="text-muted-foreground">
                      We don't do boring. Every project is a chance to push boundaries and break rules (the right ones, anyway).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-secondary glow-box-cyan" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                    <p className="text-muted-foreground">
                      Pretty is nice, but performance is non-negotiable. We build to win.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-accent glow-box-lime" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Obsessively Detailed</h3>
                    <p className="text-muted-foreground">
                      From pixels to performance metrics, we sweat the small stuff so you don't have to.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary glow-box-magenta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Zero Fluff Policy</h3>
                    <p className="text-muted-foreground">
                      We communicate clearly, work efficiently, and deliver what we promise. No corporate BS.
                    </p>
                  </div>
                </div>
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
              <HighlightedText highlightChance={0.4}>
                Ready to Disturb the Algorithm?
              </HighlightedText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create something that makes the internet take notice. No cookie-cutter solutions here.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white group"
            >
              <Link to="/contact">
                <span className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
