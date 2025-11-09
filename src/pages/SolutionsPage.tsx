import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HighlightedText } from '@/lib/highlight-words';
import { 
  Zap, Check, ArrowRight, Cloud, Shield, Rocket, 
  BarChart3, Users, Database, Globe, Sparkles 
} from 'lucide-react';

interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: any;
  category: string;
  features: string[];
  pricing: string;
  color: string;
  status: 'Live' | 'Coming Soon' | 'Beta';
}

function SolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const solutions: Solution[] = [
    {
      id: 'cloudflow',
      name: 'CloudFlow',
      tagline: 'Workflow Automation Platform',
      description: 'Streamline your business processes with intelligent automation. Connect your tools, automate repetitive tasks, and boost productivity.',
      icon: Cloud,
      category: 'Automation',
      features: [
        'Visual workflow builder',
        'Integration with 500+ apps',
        'Real-time analytics',
        'Team collaboration',
        'API access'
      ],
      pricing: 'Starting at $29/month',
      color: 'border-blue-500/50',
      status: 'Live'
    },
    {
      id: 'datasync',
      name: 'DataSync Pro',
      tagline: 'Real-time Data Integration',
      description: 'Sync data across all your platforms in real-time. Keep your systems aligned and your data accurate.',
      icon: Database,
      category: 'Data',
      features: [
        'Bi-directional sync',
        'Custom data mapping',
        'Conflict resolution',
        'Scheduled syncs',
        'Data validation'
      ],
      pricing: 'Starting at $49/month',
      color: 'border-purple-500/50',
      status: 'Live'
    },
    {
      id: 'analyticshub',
      name: 'AnalyticsHub',
      tagline: 'Business Intelligence Platform',
      description: 'Transform your data into actionable insights. Beautiful dashboards, powerful analytics, and AI-powered predictions.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Customizable dashboards',
        'Predictive analytics',
        'Automated reports',
        'Data visualization',
        'Export capabilities'
      ],
      pricing: 'Starting at $79/month',
      color: 'border-green-500/50',
      status: 'Live'
    },
    {
      id: 'teamspace',
      name: 'TeamSpace',
      tagline: 'Collaborative Workspace',
      description: 'All-in-one workspace for modern teams. Chat, projects, docs, and meetings in one beautiful interface.',
      icon: Users,
      category: 'Collaboration',
      features: [
        'Team messaging',
        'Project management',
        'Document collaboration',
        'Video conferencing',
        'File sharing'
      ],
      pricing: 'Starting at $15/user/month',
      color: 'border-orange-500/50',
      status: 'Beta'
    },
    {
      id: 'securepass',
      name: 'SecurePass',
      tagline: 'Enterprise Password Manager',
      description: 'Keep your business secure with enterprise-grade password management. Share credentials safely, enforce policies.',
      icon: Shield,
      category: 'Security',
      features: [
        'Encrypted vault',
        'Team password sharing',
        'Two-factor authentication',
        'Activity logs',
        'Policy enforcement'
      ],
      pricing: 'Starting at $5/user/month',
      color: 'border-red-500/50',
      status: 'Live'
    },
    {
      id: 'globalcdn',
      name: 'GlobalCDN',
      tagline: 'Content Delivery Network',
      description: 'Lightning-fast content delivery worldwide. Reduce latency, improve performance, and delight your users.',
      icon: Globe,
      category: 'Infrastructure',
      features: [
        'Global edge network',
        'DDoS protection',
        'SSL certificates',
        'Real-time purging',
        'Image optimization'
      ],
      pricing: 'Pay as you go',
      color: 'border-cyan-500/50',
      status: 'Live'
    },
    {
      id: 'launchpad',
      name: 'LaunchPad',
      tagline: 'Rapid App Deployment',
      description: 'Deploy applications in seconds, not hours. Focus on building, we handle the infrastructure.',
      icon: Rocket,
      category: 'DevOps',
      features: [
        'One-click deployment',
        'Auto-scaling',
        'CI/CD integration',
        'Environment variables',
        'Monitoring & logs'
      ],
      pricing: 'Starting at $10/month',
      color: 'border-yellow-500/50',
      status: 'Coming Soon'
    },
    {
      id: 'aiassist',
      name: 'AI Assist',
      tagline: 'AI-Powered Business Assistant',
      description: 'Your intelligent business companion. Automate customer support, generate content, and analyze sentiment.',
      icon: Sparkles,
      category: 'AI & ML',
      features: [
        'Natural language processing',
        'Sentiment analysis',
        'Content generation',
        'Smart automation',
        'Custom training'
      ],
      pricing: 'Starting at $99/month',
      color: 'border-pink-500/50',
      status: 'Beta'
    }
  ];

  const categories = ['All', 'Automation', 'Data', 'Analytics', 'Collaboration', 'Security', 'Infrastructure', 'DevOps', 'AI & ML'];

  const filteredSolutions = selectedCategory === 'All'
    ? solutions
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="outline" className="border-primary/50">
              <Zap className="w-3 h-3 mr-1" />
              SaaS Solutions
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold">
              <HighlightedText>Powerful Tools for Modern Business</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover our suite of SaaS products designed to accelerate your business.
              From automation to analytics, we've got you covered.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30 sticky top-[73px] z-40 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : 'border-primary/30 hover:border-primary'}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.id}
                  className={`group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden bg-card/50 backdrop-blur ${solution.color}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge 
                        variant={solution.status === 'Live' ? 'default' : solution.status === 'Beta' ? 'secondary' : 'outline'}
                      >
                        {solution.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{solution.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{solution.tagline}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-semibold mb-4">{solution.pricing}</p>
                      <Button 
                        className="w-full group/btn"
                        disabled={solution.status === 'Coming Soon'}
                      >
                        {solution.status === 'Coming Soon' ? 'Coming Soon' : 'Learn More'}
                        {solution.status !== 'Coming Soon' && (
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team to discuss which solutions are right for you.
              We'll help you choose the perfect tools to accelerate your growth.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <a href="/contact">Contact Sales</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/services">View Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolutionsPage;
