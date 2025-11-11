import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { WysiwygEditor } from '@/components/WysiwygEditor';
import { ImageUploadDialog } from '@/components/ImageUploadDialog';
import { 
  PlusCircle, Search, Edit, Trash2, Eye, Save, 
  FileText, Briefcase, Upload, Clock 
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { HighlightedText } from '@/lib/highlight-words';
import { useAutoSave } from '@/hooks/use-auto-save';

interface Tag {
  id: number;
  name: string;
}

interface BlogPost {
  id?: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  imageUrl: string;
  slug: string;
  status: 'draft' | 'published';
  readTime: string;
  author: string;
  seoTitle: string;
  metaDescription: string;
  ogImage: string;
  tags: Tag[];
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

interface Project {
  id?: number;
  title: string;
  description: string;
  content: string;
  category: string;
  imageUrl: string;
  slug: string;
  status: 'draft' | 'published';
  seoTitle: string;
  metaDescription: string;
  ogImage: string;
  tags: Tag[];
  createdAt?: Date;
  updatedAt?: Date;
  publishedAt?: Date;
}

export function CMSPage() {
  const [activeTab, setActiveTab] = useState('blog');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [imageUploadOpen, setImageUploadOpen] = useState(false);
  const [uploadTarget, setUploadTarget] = useState<'main' | 'og'>('main');
  const { toast } = useToast();

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [availableTags] = useState<Tag[]>([
    { id: 1, name: 'Design' },
    { id: 2, name: 'Development' },
    { id: 3, name: 'SEO' },
    { id: 4, name: 'Content' },
    { id: 5, name: 'React' },
    { id: 6, name: 'TypeScript' },
    { id: 7, name: 'UI/UX' },
  ]);

  const emptyBlogPost: BlogPost = {
    title: '',
    excerpt: '',
    content: '',
    category: '',
    imageUrl: '',
    slug: '',
    status: 'draft',
    readTime: '',
    author: 'PixelPlaque Team',
    seoTitle: '',
    metaDescription: '',
    ogImage: '',
    tags: [],
  };

  const emptyProject: Project = {
    title: '',
    description: '',
    content: '',
    category: '',
    imageUrl: '',
    slug: '',
    status: 'draft',
    seoTitle: '',
    metaDescription: '',
    ogImage: '',
    tags: [],
  };

  const [currentBlogPost, setCurrentBlogPost] = useState<BlogPost>(emptyBlogPost);
  const [currentProject, setCurrentProject] = useState<Project>(emptyProject);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useAutoSave(
    currentBlogPost,
    (post) => {
      if (isEditing && activeTab === 'blog' && post.title) {
        const now = new Date();
        const savedPost = { ...post, updatedAt: now };
        if (post.id) {
          setBlogPosts(blogPosts.map(p => p.id === post.id ? savedPost : p));
        }
        setLastSaved(now);
      }
    },
    3000,
    isEditing && activeTab === 'blog' && currentBlogPost.id !== undefined
  );

  useAutoSave(
    currentProject,
    (project) => {
      if (isEditing && activeTab === 'portfolio' && project.title) {
        const now = new Date();
        const savedProject = { ...project, updatedAt: now };
        if (project.id) {
          setProjects(projects.map(p => p.id === project.id ? savedProject : p));
        }
        setLastSaved(now);
      }
    },
    3000,
    isEditing && activeTab === 'portfolio' && currentProject.id !== undefined
  );

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleBlogTitleChange = (title: string) => {
    setCurrentBlogPost({
      ...currentBlogPost,
      title,
      slug: generateSlug(title),
      seoTitle: title,
    });
  };

  const handleProjectTitleChange = (title: string) => {
    setCurrentProject({
      ...currentProject,
      title,
      slug: generateSlug(title),
      seoTitle: title,
    });
  };

  const toggleTag = (tag: Tag, type: 'blog' | 'project') => {
    if (type === 'blog') {
      const hasTag = currentBlogPost.tags.some(t => t.id === tag.id);
      setCurrentBlogPost({
        ...currentBlogPost,
        tags: hasTag 
          ? currentBlogPost.tags.filter(t => t.id !== tag.id)
          : [...currentBlogPost.tags, tag]
      });
    } else {
      const hasTag = currentProject.tags.some(t => t.id === tag.id);
      setCurrentProject({
        ...currentProject,
        tags: hasTag 
          ? currentProject.tags.filter(t => t.id !== tag.id)
          : [...currentProject.tags, tag]
      });
    }
  };

  const handleSaveBlogPost = (status: 'draft' | 'published') => {
    const now = new Date();
    const post = {
      ...currentBlogPost,
      status,
      updatedAt: now,
      publishedAt: status === 'published' ? now : undefined,
    };

    if (post.id) {
      setBlogPosts(blogPosts.map(p => p.id === post.id ? post : p));
      toast({ title: 'Blog post updated successfully!' });
    } else {
      const newPost = { ...post, id: Date.now(), createdAt: now };
      setBlogPosts([...blogPosts, newPost]);
      toast({ title: 'Blog post created successfully!' });
    }

    setIsEditing(false);
    setCurrentBlogPost(emptyBlogPost);
  };

  const handleSaveProject = (status: 'draft' | 'published') => {
    const now = new Date();
    const project = {
      ...currentProject,
      status,
      updatedAt: now,
      publishedAt: status === 'published' ? now : undefined,
    };

    if (project.id) {
      setProjects(projects.map(p => p.id === project.id ? project : p));
      toast({ title: 'Project updated successfully!' });
    } else {
      const newProject = { ...project, id: Date.now(), createdAt: now };
      setProjects([...projects, newProject]);
      toast({ title: 'Project created successfully!' });
    }

    setIsEditing(false);
    setCurrentProject(emptyProject);
  };

  const handleDeleteBlogPost = (id: number) => {
    setBlogPosts(blogPosts.filter(p => p.id !== id));
    toast({ title: 'Blog post deleted successfully!' });
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
    toast({ title: 'Project deleted successfully!' });
  };

  const handleEditBlogPost = (post: BlogPost) => {
    setCurrentBlogPost(post);
    setIsEditing(true);
  };

  const handleEditProject = (project: Project) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleImageUploaded = (url: string) => {
    if (activeTab === 'blog') {
      setCurrentBlogPost({
        ...currentBlogPost,
        [uploadTarget === 'main' ? 'imageUrl' : 'ogImage']: url,
      });
    } else {
      setCurrentProject({
        ...currentProject,
        [uploadTarget === 'main' ? 'imageUrl' : 'ogImage']: url,
      });
    }
  };

  const filteredBlogPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">
            <HighlightedText>Content Management System</HighlightedText>
          </h1>
          <p className="text-muted-foreground">Manage your blog posts and portfolio items</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex items-center justify-between mb-6">
            <TabsList>
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Blog Posts
              </TabsTrigger>
              <TabsTrigger value="portfolio" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Portfolio Items
              </TabsTrigger>
            </TabsList>

            <Button onClick={() => {
              setIsEditing(true);
              if (activeTab === 'blog') {
                setCurrentBlogPost(emptyBlogPost);
              } else {
                setCurrentProject(emptyProject);
              }
            }}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Create New
            </Button>
          </div>

          {!isEditing && (
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          )}

          <TabsContent value="blog">
            {!isEditing ? (
              <div className="grid gap-4">
                {filteredBlogPosts.map((post) => (
                  <Card key={post.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <Badge variant={post.status === 'published' ? 'default' : 'secondary'}>
                              {post.status}
                            </Badge>
                            {post.tags.map(tag => (
                              <Badge key={tag.id} variant="outline">{tag.name}</Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                          <p className="text-xs text-muted-foreground mt-2">
                            {post.category} • {post.readTime}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleEditBlogPost(post)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleDeleteBlogPost(post.id!)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredBlogPosts.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No blog posts found. Create your first post!
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Blog Post Editor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Title *</Label>
                      <Input
                        value={currentBlogPost.title}
                        onChange={(e) => handleBlogTitleChange(e.target.value)}
                        placeholder="Enter blog post title"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Category *</Label>
                        <Select
                          value={currentBlogPost.category}
                          onValueChange={(value) => setCurrentBlogPost({ ...currentBlogPost, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Design">Design</SelectItem>
                            <SelectItem value="Development">Development</SelectItem>
                            <SelectItem value="SEO">SEO</SelectItem>
                            <SelectItem value="Content">Content</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Read Time</Label>
                        <Input
                          value={currentBlogPost.readTime}
                          onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, readTime: e.target.value })}
                          placeholder="e.g., 5 min read"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Excerpt</Label>
                      <Textarea
                        value={currentBlogPost.excerpt}
                        onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, excerpt: e.target.value })}
                        placeholder="Brief excerpt of the blog post"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Content *</Label>
                      <WysiwygEditor
                        content={currentBlogPost.content}
                        onChange={(content) => setCurrentBlogPost({ ...currentBlogPost, content })}
                        contentType="blog"
                      />
                    </div>

                    <div>
                      <Label>Featured Image</Label>
                      <div className="flex gap-2">
                        <Input
                          value={currentBlogPost.imageUrl}
                          onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, imageUrl: e.target.value })}
                          placeholder="Image URL"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setUploadTarget('main');
                            setImageUploadOpen(true);
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {availableTags.map(tag => (
                          <Badge
                            key={tag.id}
                            variant={currentBlogPost.tags.some(t => t.id === tag.id) ? 'default' : 'outline'}
                            className="cursor-pointer"
                            onClick={() => toggleTag(tag, 'blog')}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Slug (URL)</Label>
                      <Input
                        value={currentBlogPost.slug}
                        onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, slug: e.target.value })}
                        placeholder="url-friendly-slug"
                      />
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold mb-4">SEO Settings</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>SEO Title</Label>
                          <Input
                            value={currentBlogPost.seoTitle}
                            onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, seoTitle: e.target.value })}
                            placeholder="SEO optimized title"
                          />
                        </div>

                        <div>
                          <Label>Meta Description</Label>
                          <Textarea
                            value={currentBlogPost.metaDescription}
                            onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, metaDescription: e.target.value })}
                            placeholder="SEO meta description"
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>OG Image</Label>
                          <div className="flex gap-2">
                            <Input
                              value={currentBlogPost.ogImage}
                              onChange={(e) => setCurrentBlogPost({ ...currentBlogPost, ogImage: e.target.value })}
                              placeholder="Open Graph image URL"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setUploadTarget('og');
                                setImageUploadOpen(true);
                              }}
                            >
                              <Upload className="w-4 h-4 mr-2" />
                              Upload
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {lastSaved && currentBlogPost.id && (
                          <>
                            <Clock className="w-4 h-4" />
                            <span>Last saved {Math.floor((Date.now() - lastSaved.getTime()) / 1000)}s ago</span>
                          </>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            setCurrentBlogPost(emptyBlogPost);
                            setLastSaved(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleSaveBlogPost('draft')}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button onClick={() => handleSaveBlogPost('published')}>
                          Publish
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => setPreviewOpen(true)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="portfolio">
            {!isEditing ? (
              <div className="grid gap-4">
                {filteredProjects.map((project) => (
                  <Card key={project.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <Badge variant={project.status === 'published' ? 'default' : 'secondary'}>
                              {project.status}
                            </Badge>
                            {project.tags.map(tag => (
                              <Badge key={tag.id} variant="outline">{tag.name}</Badge>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">{project.category}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleEditProject(project)}
                          >
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => handleDeleteProject(project.id!)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-12 text-muted-foreground">
                    No portfolio items found. Create your first project!
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Portfolio Item Editor</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Title *</Label>
                      <Input
                        value={currentProject.title}
                        onChange={(e) => handleProjectTitleChange(e.target.value)}
                        placeholder="Enter project title"
                      />
                    </div>

                    <div>
                      <Label>Category *</Label>
                      <Select
                        value={currentProject.category}
                        onValueChange={(value) => setCurrentProject({ ...currentProject, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Web Design">Web Design</SelectItem>
                          <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                          <SelectItem value="Content Creation">Content Creation</SelectItem>
                          <SelectItem value="SEO Marketing">SEO Marketing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Description</Label>
                      <Textarea
                        value={currentProject.description}
                        onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                        placeholder="Brief description of the project"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label>Content</Label>
                      <WysiwygEditor
                        content={currentProject.content}
                        onChange={(content) => setCurrentProject({ ...currentProject, content })}
                        contentType="portfolio"
                      />
                    </div>

                    <div>
                      <Label>Featured Image</Label>
                      <div className="flex gap-2">
                        <Input
                          value={currentProject.imageUrl}
                          onChange={(e) => setCurrentProject({ ...currentProject, imageUrl: e.target.value })}
                          placeholder="Image URL"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setUploadTarget('main');
                            setImageUploadOpen(true);
                          }}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label>Tags</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {availableTags.map(tag => (
                          <Badge
                            key={tag.id}
                            variant={currentProject.tags.some(t => t.id === tag.id) ? 'default' : 'outline'}
                            className="cursor-pointer"
                            onClick={() => toggleTag(tag, 'project')}
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label>Slug (URL)</Label>
                      <Input
                        value={currentProject.slug}
                        onChange={(e) => setCurrentProject({ ...currentProject, slug: e.target.value })}
                        placeholder="url-friendly-slug"
                      />
                    </div>

                    <div className="border-t pt-4">
                      <h3 className="font-semibold mb-4">SEO Settings</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label>SEO Title</Label>
                          <Input
                            value={currentProject.seoTitle}
                            onChange={(e) => setCurrentProject({ ...currentProject, seoTitle: e.target.value })}
                            placeholder="SEO optimized title"
                          />
                        </div>

                        <div>
                          <Label>Meta Description</Label>
                          <Textarea
                            value={currentProject.metaDescription}
                            onChange={(e) => setCurrentProject({ ...currentProject, metaDescription: e.target.value })}
                            placeholder="SEO meta description"
                            rows={3}
                          />
                        </div>

                        <div>
                          <Label>OG Image</Label>
                          <div className="flex gap-2">
                            <Input
                              value={currentProject.ogImage}
                              onChange={(e) => setCurrentProject({ ...currentProject, ogImage: e.target.value })}
                              placeholder="Open Graph image URL"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setUploadTarget('og');
                                setImageUploadOpen(true);
                              }}
                            >
                              <Upload className="w-4 h-4 mr-2" />
                              Upload
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        {lastSaved && currentProject.id && (
                          <>
                            <Clock className="w-4 h-4" />
                            <span>Last saved {Math.floor((Date.now() - lastSaved.getTime()) / 1000)}s ago</span>
                          </>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          onClick={() => {
                            setIsEditing(false);
                            setCurrentProject(emptyProject);
                            setLastSaved(null);
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleSaveProject('draft')}
                        >
                          <Save className="w-4 h-4 mr-2" />
                          Save Draft
                        </Button>
                        <Button onClick={() => handleSaveProject('published')}>
                          Publish
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => setPreviewOpen(true)}
                        >
                          <Eye className="w-4 h-4 mr-2" />
                          Preview
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>
        </Tabs>

        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Preview</DialogTitle>
            </DialogHeader>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none">
              {activeTab === 'blog' ? (
                <>
                  <h1>{currentBlogPost.title}</h1>
                  {currentBlogPost.imageUrl && (
                    <img src={currentBlogPost.imageUrl} alt={currentBlogPost.title} className="rounded-lg" />
                  )}
                  <p className="text-muted-foreground">{currentBlogPost.excerpt}</p>
                  <div dangerouslySetInnerHTML={{ __html: currentBlogPost.content }} />
                </>
              ) : (
                <>
                  <h1>{currentProject.title}</h1>
                  {currentProject.imageUrl && (
                    <img src={currentProject.imageUrl} alt={currentProject.title} className="rounded-lg" />
                  )}
                  <p className="text-muted-foreground">{currentProject.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: currentProject.content }} />
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>

        <ImageUploadDialog
          open={imageUploadOpen}
          onClose={() => setImageUploadOpen(false)}
          onImageUploaded={handleImageUploaded}
          type={activeTab === 'blog' ? 'blog' : 'portfolio'}
        />
      </div>
    </div>
  );
}
