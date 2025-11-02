import { useState } from 'react';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { HighlightedText } from '@/lib/highlight-words';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent! 🚀',
      description: "We'll get back to you faster than you can say 'disturb the algorithm'.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@pixelplaque.com',
      color: 'text-primary',
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Remote & Global',
      color: 'text-secondary',
    },
    {
      icon: Clock,
      title: 'Response Time',
      info: 'Within 24 hours',
      color: 'text-accent',
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
              <HighlightedText>Let's Make Magic</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Got a project? A question? An idea that needs some digital muscle? 
              Drop us a line. We don't bite (much).
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <Card 
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto group-hover:glow-box-magenta transition-all duration-300">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.info}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20 shadow-xl shadow-primary/10 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">
                    <HighlightedText highlightChance={0.3}>Start Your Project</HighlightedText>
                  </h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you ASAP. The more details, the better.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-primary/30 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="border-primary/30 focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full h-10 px-3 rounded-md border border-primary/30 bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">Select a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="web-design">Web Design</option>
                        <option value="graphic-design">Graphic Design</option>
                        <option value="content-creation">Content Creation</option>
                        <option value="seo-marketing">SEO Marketing</option>
                        <option value="full-package">Full Package</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project, goals, timeline, or any questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="border-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-white group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      {!isSubmitting && (
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              <HighlightedText>What Happens Next?</HighlightedText>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary glow-magenta">01</div>
                <h3 className="text-xl font-semibold">We Review</h3>
                <p className="text-sm text-muted-foreground">
                  We'll read through your message and assess how we can help.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary glow-cyan">02</div>
                <h3 className="text-xl font-semibold">We Respond</h3>
                <p className="text-sm text-muted-foreground">
                  You'll hear from us within 24 hours with next steps.
                </p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent glow-lime">03</div>
                <h3 className="text-xl font-semibold">We Build</h3>
                <p className="text-sm text-muted-foreground">
                  Once aligned, we get to work bringing your vision to life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
