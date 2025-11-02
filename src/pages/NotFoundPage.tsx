import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HighlightedText } from '@/lib/highlight-words';

function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      {/* Scan Line Effect */}
      <div className="scan-line absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Glitch 404 */}
          <div className="relative">
            <h1 
              className="text-9xl md:text-[200px] font-bold glitch leading-none"
              data-text="404"
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                404
              </span>
            </h1>
          </div>

          {/* Message */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              <HighlightedText highlightChance={0.4}>
                Page Not Found
              </HighlightedText>
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Looks like this page got lost in the digital void. Even algorithms make mistakes sometimes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white group"
            >
              <Link to="/">
                <span className="flex items-center gap-2">
                  <Home className="w-5 h-5" />
                  Back to Home
                </span>
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary hover:border-secondary hover:bg-secondary/10 group"
            >
              <Link to="/contact">
                <span className="flex items-center gap-2">
                  Get Help
                  <Zap className="w-4 h-4" />
                </span>
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Or try one of these:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { path: '/services', label: 'Services' },
                { path: '/portfolio', label: 'Portfolio' },
                { path: '/about', label: 'About' },
                { path: '/blog', label: 'Blog' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary hover:text-secondary transition-colors underline underline-offset-4"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse" />
    </div>
  );
}

export default NotFoundPage;
