import { Users, Trophy, Globe, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+' },
    { icon: Trophy, label: 'Awards Won', value: '50+' },
    { icon: Globe, label: 'Countries', value: '25+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%' },
  ];

  return (
    <section id="about" className="py-20  relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium text-primary">About TechFlow</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-space font-bold mb-6">
              Innovating the Future,
              <br />
              <span className="text-primary">One Solution at a Time</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a team of passionate technologists, designers, and strategists 
              dedicated to transforming businesses through innovative digital solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-space font-semibold mb-6">
                Building Tomorrow's Technology Today
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2020, TechFlow has rapidly emerged as a leading force in 
                  digital transformation. Our mission is simple: to empower businesses 
                  with cutting-edge technology that drives real results.
                </p>
                <p>
                  We believe in the power of innovation to solve complex challenges. 
                  Our team combines deep technical expertise with creative problem-solving 
                  to deliver solutions that don't just meet expectations—they exceed them.
                </p>
                <p>
                  From startups to Fortune 500 companies, we've helped organizations 
                  across industries unlock their digital potential and achieve 
                  unprecedented growth.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="glass p-8 hover-glow">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-space font-semibold text-lg">Expert Team</h4>
                    <p className="text-sm text-muted-foreground">50+ Professionals</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-space font-semibold text-lg">Industry Awards</h4>
                    <p className="text-sm text-muted-foreground">Recognition Excellence</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-space font-semibold text-lg">Global Reach</h4>
                    <p className="text-sm text-muted-foreground">Worldwide Impact</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="font-space font-semibold text-lg">Proven Results</h4>
                    <p className="text-sm text-muted-foreground">Measurable Success</p>
                  </div>
                </div>
              </Card>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="glass text-center p-6 hover-glow">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-space font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;