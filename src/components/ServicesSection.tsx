import { Code, Smartphone, Cloud, Brain, Shield, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies for optimal performance and user experience.',
      features: ['React & Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Ready']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to future-proof your business operations.',
      features: ['AWS & Azure', 'Auto Scaling', 'Cost Optimization', '99.9% Uptime']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Intelligent automation and machine learning solutions to enhance productivity and decision-making.',
      features: ['Machine Learning', 'Data Analytics', 'Process Automation', 'Smart Insights']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', '24/7 Monitoring']
    },
    {
      icon: Rocket,
      title: 'Digital Strategy',
      description: 'Strategic consulting to help you navigate digital transformation and achieve business goals.',
      features: ['Growth Strategy', 'Tech Consulting', 'Digital Roadmap', 'ROI Optimization']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative bg-muted/30 ">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Comprehensive Solutions for
              <br />
              <span className="text-primary">Every Challenge</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From concept to deployment, we offer end-to-end technology services 
              that transform ideas into powerful digital experiences.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="glass p-8 hover-glow transition-all duration-300 group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-space font-semibold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="glass p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-space font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our technology solutions can drive your business forward 
                and help you achieve your digital goals.
              </p>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Get Started Today
                <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;