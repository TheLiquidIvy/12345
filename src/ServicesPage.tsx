import { Link } from 'react-router-dom';
import { Code, Palette, FileText, Search, PenTool, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { HighlightedText } from '@/lib/highlight-words';

function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      tagline: 'Code That Performs',
      description: 'We build lightning-fast, rock-solid websites and web applications that actually work. No bloat, no excuses. Just clean, efficient code that scales.',
      features: [
        'Custom web applications',
        'E-commerce platforms',
        'Progressive Web Apps (PWA)',
        'API development & integration',
        'Performance optimization',
        'Maintenance & support',
      ],
      color: 'text-primary',
      borderColor: 'border-primary/50',
      glowClass: 'glow-box-magenta',
    },
    {
      icon: Palette,
      title: 'Web Design',
      tagline: 'Pixels With Purpose',
      description: 'Forget templates. We design interfaces that are as functional as they are jaw-dropping. User experience meets visual rebellion.',
      features: [
        'Custom UI/UX design',
        'Responsive layouts',
        'Prototyping & wireframing',
        'Brand identity design',
        'Design systems',
        'Conversion-focused design',
      ],
      color: 'text-secondary',
      borderColor: 'border-secondary/50',
      glowClass: 'glow-box-cyan',
    },
    {
      icon: PenTool,
      title: 'Graphic Design',
      tagline: 'Visuals That Slap',
      description: 'From logos to layouts, we create graphics that demand attention. Bold, memorable, and always on-brand.',
      features: [
        'Logo & brand identity',
        'Marketing materials',
        'Social media graphics',
        'Packaging design',
        'Infographics',
        'Print & digital collateral',
      ],
      color: 'text-accent',
      borderColor: 'border-accent/50',
      glowClass: 'glow-box-lime',
    },
    {
      icon: FileText,
      title: 'Content Creation',
      tagline: 'Words That Work',
      description: 'We write copy that converts and content that connects. No corporate jargon, just real talk that resonates with your audience.',
      features: [
        'Website copywriting',
        'Blog posts & articles',
        'Social media content',
        'Email campaigns',
        'Product descriptions',
        'Brand storytelling',
      ],
      color: 'text-primary',
      borderColor: 'border-primary/50',
      glowClass: 'glow-box-magenta',
    },
    {
      icon: Search,
      title: 'SEO Marketing',
      tagline: 'Hack the Algorithm',
      description: 'Get found. Get clicked. Get results. We speak fluent algorithm and know how to make search engines work for you, not against you.',
      features: [
        'Technical SEO audits',
        'Keyword research & strategy',
        'On-page optimization',
        'Link building',
        'Content strategy',
        'Analytics & reporting',
      ],
      color: 'text-secondary',
      borderColor: 'border-secondary/50',
      glowClass: 'glow-box-cyan',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <HighlightedText>Services That Deliver</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Full-spectrum digital services. Zero compromises. All killer, no filler.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Services Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`group hover:${service.glowClass} transition-all duration-300 border-2 ${service.borderColor} hover:border-opacity-100 bg-card/50 backdrop-blur`}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:${service.glowClass} transition-all duration-300`}>
                      <service.icon className={`w-7 h-7 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className={`text-sm font-semibold ${service.color}`}>
                        {service.tagline}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">What's Included</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${service.color} mt-2 shrink-0`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <HighlightedText>How We Work</HighlightedText>
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Our process is simple, transparent, and designed to get results fast.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discovery', desc: 'We dig deep to understand your goals, audience, and what makes you different.' },
                { step: '02', title: 'Strategy', desc: 'We map out a game plan that aligns with your objectives and budget.' },
                { step: '03', title: 'Execution', desc: 'We build, design, and create with precision and creative flair.' },
                { step: '04', title: 'Launch', desc: 'We deploy, optimize, and make sure everything runs smooth as butter.' },
              ].map((phase, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{phase.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <HighlightedText highlightChance={0.35}>
                Let's Build Something Epic
              </HighlightedText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Whether you need one service or the full package, we're ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white group"
              >
                <Link to="/contact">
                  <span className="flex items-center gap-2">
                    Start Your Project
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
                <Link to="/portfolio">
                  View Portfolio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
