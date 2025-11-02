import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HighlightedText } from '@/lib/highlight-words';
import { cn } from '@/lib/utils';

function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What makes PixelPlaque different from other agencies?',
          a: 'We\'re not your typical suit-and-tie agency. We combine technical expertise with creative rebellion. No corporate BS, no cookie-cutter solutions. Just bold, strategic work that actually moves the needle. Plus, we actually enjoy what we do, and it shows.',
        },
        {
          q: 'What size projects do you work on?',
          a: 'We work with businesses of all sizes—from ambitious startups to established enterprises. Whether you need a simple landing page or a full digital overhaul, if you\'re ready to stand out, we\'re ready to help.',
        },
        {
          q: 'Where are you located?',
          a: 'We\'re a remote-first team, which means we work with clients globally. Time zones? Not a problem. We\'re flexible and responsive no matter where you are.',
        },
      ],
    },
    {
      category: 'Services & Process',
      questions: [
        {
          q: 'How long does a typical project take?',
          a: 'It depends on scope. A simple website might take 2-4 weeks, while a full brand identity or complex web app could be 8-12 weeks. We\'ll give you a realistic timeline during our discovery call—no overpromising here.',
        },
        {
          q: 'Can you work with my existing team?',
          a: 'Absolutely. We love collaborating with in-house teams, freelancers, or other agencies. We adapt to your workflow and fill in the gaps where you need us most.',
        },
        {
          q: 'Do you offer ongoing support and maintenance?',
          a: 'Yes! We offer monthly retainer packages for maintenance, updates, content creation, and SEO. Think of us as your on-demand digital team.',
        },
        {
          q: 'What if I need revisions?',
          a: 'Revisions are part of the process. We include a set number of revision rounds in every project (outlined in your proposal). Our goal is to get it right, not just get it done.',
        },
      ],
    },
    {
      category: 'Pricing & Payment',
      questions: [
        {
          q: 'How much do your services cost?',
          a: 'Every project is different, so we don\'t do one-size-fits-all pricing. After understanding your needs, we\'ll send a custom proposal with transparent pricing. No hidden fees, no surprises.',
        },
        {
          q: 'Do you require a deposit?',
          a: 'Yes. We typically require a 50% deposit to kick off a project, with the remaining balance due upon completion. For larger projects, we can split payments into milestones.',
        },
        {
          q: 'What payment methods do you accept?',
          a: 'We accept bank transfers, credit cards, and PayPal. Whatever works best for you.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          q: 'What technologies do you use?',
          a: 'We stay current with modern tech stacks—React, TypeScript, Node.js, Next.js, Tailwind CSS, and more. We choose technologies based on what\'s best for your project, not what\'s trendy.',
        },
        {
          q: 'Do you provide hosting?',
          a: 'We can help you set up hosting with providers like Vercel, Netlify, or AWS. We\'ll guide you through the process and can manage it for you if needed.',
        },
        {
          q: 'Will I own the code and designs?',
          a: 'Yes. Once the project is complete and paid in full, all code, designs, and assets belong to you. We may showcase the work in our portfolio (with your permission, of course).',
        },
      ],
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
              <HighlightedText>Frequently Asked Questions</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got answers. No corporate speak, just straight talk.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* FAQ Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqs.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h2 className="text-3xl font-bold mb-6 text-primary">
                  {section.category}
                </h2>
                <div className="space-y-4">
                  {section.questions.map((faq, qIndex) => {
                    const globalIndex = faqs
                      .slice(0, sectionIndex)
                      .reduce((acc, s) => acc + s.questions.length, 0) + qIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <Card
                        key={qIndex}
                        className={cn(
                          'overflow-hidden transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur',
                          isOpen ? 'border-primary/50 shadow-lg shadow-primary/10' : 'border-border/50'
                        )}
                        onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                      >
                        <CardContent className="p-0">
                          <div className="p-6 flex items-center justify-between">
                            <h3 className="text-lg font-semibold pr-4">
                              {faq.q}
                            </h3>
                            <ChevronDown
                              className={cn(
                                'w-5 h-5 text-primary shrink-0 transition-transform duration-300',
                                isOpen ? 'rotate-180' : ''
                              )}
                            />
                          </div>
                          <div
                            className={cn(
                              'overflow-hidden transition-all duration-300',
                              isOpen ? 'max-h-96' : 'max-h-0'
                            )}
                          >
                            <div className="px-6 pb-6 text-muted-foreground">
                              {faq.a}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <MessageCircle className="w-16 h-16 text-primary mx-auto" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <HighlightedText>Still Have Questions?</HighlightedText>
            </h2>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Drop us a message and we'll get back to you faster 
              than you can say "disturb the algorithm."
            </p>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
