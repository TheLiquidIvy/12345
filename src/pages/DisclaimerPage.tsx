import { Shield, AlertTriangle, FileText, Scale } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { HighlightedText } from '@/lib/highlight-words';

function DisclaimerPage() {
  const sections = [
    {
      icon: Shield,
      title: 'General Information',
      content: [
        'The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.',
        'Any reliance you place on such information is therefore strictly at your own risk. In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.',
      ],
      color: 'text-primary',
    },
    {
      icon: FileText,
      title: 'Professional Services',
      content: [
        'PixelPlaque provides web design, web development, graphic design, content creation, and SEO marketing services. All services are provided "as is" and we make every effort to deliver high-quality work that meets industry standards.',
        'Project timelines, deliverables, and pricing are outlined in individual project proposals and contracts. Specific terms and conditions may vary depending on the scope of work.',
        'Results from SEO and marketing services may vary and are influenced by numerous factors beyond our control, including but not limited to market conditions, competition, and algorithm changes. We do not guarantee specific rankings, traffic numbers, or conversion rates.',
      ],
      color: 'text-secondary',
    },
    {
      icon: AlertTriangle,
      title: 'External Links',
      content: [
        'Through this website, you may be able to link to other websites which are not under our control. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
        'Every effort is made to keep the website up and running smoothly. However, PixelPlaque takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.',
      ],
      color: 'text-accent',
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of PixelPlaque or its content suppliers and is protected by international copyright laws.',
        'Portfolio work showcased on this site may be subject to client confidentiality agreements and is displayed with permission. Unauthorized use or reproduction of any materials is strictly prohibited.',
        'Upon full payment for services rendered, clients receive full ownership of deliverables as outlined in the project contract. PixelPlaque retains the right to showcase completed work in our portfolio unless otherwise agreed upon in writing.',
      ],
      color: 'text-primary',
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
              <HighlightedText>Disclaimer</HighlightedText>
            </h1>
            <p className="text-xl text-muted-foreground">
              The legal stuff. It's important, but we'll try to keep it readable.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/20 rounded-full blur-[120px]" />
      </section>

      {/* Last Updated */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <Card 
                key={index}
                className="border-2 border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/50 backdrop-blur"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                      <section.icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                    </div>
                  </div>
                  <div className="space-y-4 text-muted-foreground pl-16">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Additional Terms */}
            <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  <HighlightedText highlightChance={0.25}>Changes to This Disclaimer</HighlightedText>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    We reserve the right to update or modify this disclaimer at any time without prior notice. 
                    Changes will be effective immediately upon posting to this page. Your continued use of this 
                    website following the posting of changes constitutes your acceptance of such changes.
                  </p>
                  <p className="leading-relaxed">
                    We encourage you to periodically review this disclaimer to stay informed about how we're 
                    protecting the information we collect and your rights.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="border-2 border-secondary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  <HighlightedText highlightChance={0.25}>Questions About This Disclaimer?</HighlightedText>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you have any questions about this disclaimer or need clarification on any of our policies, 
                  please don't hesitate to reach out. We're here to help and committed to transparency.
                </p>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Contact us at:</span>{' '}
                  <a href="mailto:hello@pixelplaque.com" className="text-primary hover:underline">
                    hello@pixelplaque.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bottom Notice */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground italic">
              This disclaimer is part of our commitment to transparency and protecting both our clients 
              and our business. We believe in honest communication and clear expectations. If something 
              doesn't make sense or you need clarification, just ask. We're happy to explain things in 
              plain English (or whatever language you prefer).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DisclaimerPage;
