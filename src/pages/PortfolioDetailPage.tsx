
import { useParams } from 'react-router-dom';
import { ExternalLink, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

function PortfolioDetailPage() {
  const { id } = useParams();

  // Mock project data - will be replaced with database in Phase 2
  const project = {
      id: 1,
      title: 'TechFlow SaaS Platform',
      category: 'Web Development',
      description: 'A next-gen SaaS platform with real-time collaboration features and AI-powered analytics. We delivered a full-stack solution including a scalable backend, a responsive frontend, and a secure cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      liveUrl: '#',
      caseStudyUrl: '#',
    };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src={project.image} alt={project.title} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">{project.category}</span>
            <h1 className="text-4xl font-bold my-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span key={index} className="flex items-center text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
                  <Tag className="w-3 h-3 mr-2" /> {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" /> View Live Site
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                  Read Case Study
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
