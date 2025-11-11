import { useState } from 'react';
import { Calendar, Clock, ArrowRight, PlusCircle, Edit, Trash2, Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HighlightedText } from '@/lib/highlight-words';
import { useAuth } from '@/hooks/use-auth';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PostForm } from "@/components/PostForm";
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';
import { postFormSchema } from '@/lib/validators';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: Date;
  readTime: string;
  image: string;
  author: string;
}

function BlogPage() {
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const { toast } = useToast();

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: 'Why Your Website Needs a Personality (Not Just a Template)',
      excerpt: 'Generic templates are killing the internet. Here\'s how to inject personality into your digital presence without sacrificing performance.',
      category: 'Design',
      date: new Date('2024-01-15'),
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
    {
      id: 2,
      title: 'The Algorithm Doesn\'t Care About Your Feelings (But We Do)',
      excerpt: 'SEO is ruthless, but understanding how search engines think can give you an unfair advantage. Let\'s decode the matrix.',
      category: 'SEO',
      date: new Date('2024-01-10'),
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=600&fit=crop',
      author: 'PixelPlaque Team',
    },
  ]);

  const categories = ['All', 'Design', 'Development', 'SEO', 'Content'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  const handleAddPost = (values: z.infer<typeof postFormSchema>) => {
    const newPost: Post = {
      id: posts.length + 1,
      title: values.title,
      excerpt: values.excerpt,
      category: values.category,
      image: values.image,
      readTime: values.readTime,
      date: new Date(),
      author: 'PixelPlaque Team',
    };
    setPosts([...posts, newPost]);
    setOpen(false);
  };

  const handleEditPost = (values: z.infer<typeof postFormSchema>) => {
    const updatedPosts = posts.map(post =>
      post.id === editingPost!.id
        ? { ...post, ...values, date: new Date(post.date) }
        : post
    );
    setPosts(updatedPosts as Post[]);
    setEditingPost(null);
    setOpen(false);
  };

  const handleDeletePost = (id: number) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const sharePost = (platform: string, post: Post) => {
    const url = window.location.href;
    const text = post.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: 'Link copied!',
          description: 'Post link copied to clipboard',
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen">
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

      <section className="py-8 bg-muted/30 sticky top-[73px] z-40 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className={selectedCategory === category ? 'bg-primary hover:bg-primary/90' : 'border-primary/30 hover:border-primary'}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
            {isAuthenticated && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="ml-auto" onClick={() => setEditingPost(null)}>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Post
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{editingPost ? 'Edit Post' : 'Add New Post'}</DialogTitle>
                  </DialogHeader>
                  <PostForm
                    onSubmit={editingPost ? handleEditPost : handleAddPost}
                    initialValues={editingPost}
                  />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="relative">
                <Card 
                  onClick={() => {
                    setSelectedPost(post);
                    setModalOpen(true);
                  }}
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
                        {post.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
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
                {isAuthenticated && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setEditingPost(post);
                        setOpen(true);
                      }}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeletePost(post.id)
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedPost && (
            <div className="space-y-4">
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPost.title}</DialogTitle>
              </DialogHeader>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {selectedPost.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {selectedPost.readTime}
                </div>
                <Badge variant="outline">{selectedPost.category}</Badge>
              </div>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {selectedPost.excerpt}
              </p>
              
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Share this post:
                  </span>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => sharePost('twitter', selectedPost)}
                      className="hover:bg-sky-500/10 hover:border-sky-500"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => sharePost('facebook', selectedPost)}
                      className="hover:bg-blue-500/10 hover:border-blue-500"
                    >
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => sharePost('linkedin', selectedPost)}
                      className="hover:bg-blue-700/10 hover:border-blue-700"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => sharePost('copy', selectedPost)}
                      className="hover:bg-primary/10 hover:border-primary"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BlogPage;
