import { ArrowRight, Play, Zap, Shield, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-muted/30 pt-32">
      {/* Background Image */}
      {/* <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      ></div> */}
      {/* Overlay for better text readability */}
      <div className=" absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary rounded-full animate-float opacity-50" style={{animationDelay: '2s'}}></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Badge */}
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Next-Gen Technology Solutions</span>
          </div> */}

          {/* Hero Title */}
          <h1 className="text-5xl md:text-7xl font-space font-bold mb-6 animate-slide-up">
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
              Digital Future
            </span>
          </h1>

          {/* Hero Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>
            Empowering businesses with cutting-edge technology solutions that drive innovation, 
            boost efficiency, and accelerate growth in the digital age.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className=" bg-gradient-to-r from-primary to-accent hover:shadow-glow hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#about')}
              className="border-primary/30 hover:bg-primary/5 hover:border-primary/50 hover:text-white transition-all duration-300 text-lg px-8 py-6 animate-glow"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 animate-scale-in " style={{animationDelay: '0.6s'}}>
            <Card className="glass hover-glow p-6 text-center">
              <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-space font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground text-sm">Deploy solutions in minutes, not months</p>
            </Card>
            
            <Card className="glass hover-glow p-6 text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="font-space font-semibold text-lg mb-2">Ultra Secure</h3>
              <p className="text-muted-foreground text-sm">Enterprise-grade security built-in</p>
            </Card>
            
            <Card className="glass hover-glow p-6 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-space font-semibold text-lg mb-2">AI Powered</h3>
              <p className="text-muted-foreground text-sm">Intelligent automation for better results</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;