import { ExternalLink, Code, Palette, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HighlightedText } from '@/lib/highlight-words';

function PortfolioPage() {
  // Mock portfolio data - will be replaced with database in Phase 2
  const projects = [
    {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'Web Development',
      description: 'A next-gen SaaS platform with real-time collaboration features and AI-powered analytics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Node.js'],
      color: 'border-primary/50',
    },
    {
      id: 2,
      title: 'Neon Dreams Brand Identity',
      category: 'Graphic Design',
      description: 'Complete brand overhaul for a cybersecurity startup. Logo, guidelines, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Logo Design', 'Print'],
      color: 'border-secondary/50',
    },
    {
      id: 3,
      title: 'Urban Eats Website',
      category: 'Web Design',
      description: 'Mouth-watering restaurant website with online ordering and reservation system.',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop',
      tags: ['UI/UX', 'Responsive', 'E-commerce'],
      color: 'border-accent/50',
    },
    {
      id: 4,
      title: 'GrowthLabs SEO Campaign',
      category: 'SEO Marketing',
      description: '300% organic traffic increase in 6 months through strategic content and technical SEO.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['SEO', 'Content Strategy', 'Analytics'],
      color: 'border-primary/50',
    },
    {
      id: 5,
      title: 'FitLife Content Series',
      category: 'Content Creation',
      description: '50+ blog posts, social media content, and email campaigns for a fitness brand.',
      image: 'https://images.unsplash.com/photo-1434596922112-19c563067271?w=800&h=600&fit=crop',
      tags: ['Copywriting', 'Social Media', 'Email'],
      color: 'border-secondary/50',
    },
    {
      id: 6,
      title: 'CryptoVault Web App',
      category: 'Web Development',
      description: 'Secure cryptocurrency portfolio tracker with real-time price updates and alerts.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
      tags: ['React', 'Web3', 'API Integration'],
      color: 'border-accent/50',
    },
  ];

  const categories = ['All', 'Web Development', 'Web Design', 'Graphic Design', 'Content Creation', 'SEO Marketing'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <HighlightedText>Our Work Speaks</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              From bold brands to high-performing websites, here's a taste of what we've built. 
              Spoiler: it's all killer, zero filler.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-[73px] z-40 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                size="sm"
                className={category === 'All' ? 'bg-primary hover:bg-primary/90' : 'border-primary/30 hover:border-primary'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className={`group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden bg-card/50 backdrop-blur border-2 ${project.color}`}
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note about coming features */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/30 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-primary" />
                  <Palette className="w-6 h-6 text-secondary" />
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-2">More Coming Soon</h3>
                <p className="text-muted-foreground">
                  This is just a sample of our work. Full portfolio management and filtering features 
                  are coming in the next phase. Stay tuned!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;
