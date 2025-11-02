import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HighlightedText } from '@/lib/highlight-words';

function BlogPage() {
  // Mock blog data - will be replaced with database in Phase 2
  const posts = [
    {
      id: 1,
      title: 'Why Your Website Needs a Personality (Not Just a Template)',
      excerpt: 'Generic templates are killing the internet. Here\'s how to inject personality into your digital presence without sacrificing performance.',
      category: 'Design',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 2,
      title: 'The Algorithm Doesn\'t Care About Your Feelings (But We Do)',
      excerpt: 'SEO is ruthless, but understanding how search engines think can give you an unfair advantage. Let\'s decode the matrix.',
      category: 'SEO',
      date: '2024-01-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 3,
      title: 'Content That Converts: Writing Like You Actually Talk',
      excerpt: 'Ditch the corporate speak. Here\'s how to write web copy that sounds human, builds trust, and gets people to actually click that button.',
      category: 'Content',
      date: '2024-01-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 4,
      title: 'React vs Vue vs Vanilla: Choosing Your Tech Stack in 2024',
      excerpt: 'Framework fatigue is real. We break down when to use React, when to use Vue, and when to just stick with good old JavaScript.',
      category: 'Development',
      date: '2023-12-28',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 5,
      title: 'Color Psychology: Why Your Brand Needs More Than "Blue"',
      excerpt: 'Every color tells a story. Learn how to choose a palette that actually reflects your brand personality and drives action.',
      category: 'Design',
      date: '2023-12-20',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 6,
      title: 'Performance Matters: Why Your 3-Second Load Time is Killing Conversions',
      excerpt: 'Speed isn\'t just a nice-to-have. We dive into how load times impact everything from bounce rates to SEO rankings.',
      category: 'Development',
      date: '2023-12-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
  ];

  const categories = ['All', 'Design', 'Development', 'SEO', 'Content'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              <HighlightedText>The PixelPlaque Blog</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Insights, hot takes, and actual useful advice on design, dev, and digital marketing. 
              No fluff. Just the good stuff.
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

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="group hover:border-primary/50 transition-all duration-300 overflow-hidden border-2 border-primary/20 bg-card/50 backdrop-blur">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto overflow-hidden bg-muted">
                  <img 
                    src={posts[0].image} 
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="text-primary font-semibold">{posts[0].category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(posts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {posts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {posts[0].excerpt}
                  </p>
                  <Button className="w-fit bg-primary hover:bg-primary/90 group/btn">
                    <span className="flex items-center gap-2">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card 
                key={post.id}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden bg-card/50 backdrop-blur"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary font-semibold">{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group/btn p-0 h-auto">
                      <span className="flex items-center gap-1">
                        Read More
                        <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Note about coming features */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto border-primary/30 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">More Articles Coming</h3>
                <p className="text-muted-foreground">
                  Full blog functionality with article pages, comments, and search features 
                  are coming in Phase 2. Stay tuned!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
