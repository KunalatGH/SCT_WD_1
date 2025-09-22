import { Heart, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' },
      { name: 'Careers', href: '#' }
    ],
    Services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Cloud Solutions', href: '#services' },
      { name: 'AI Integration', href: '#services' }
    ],
    Support: [
      { name: 'Documentation', href: '#' },
      { name: 'Help Center', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="dark border-t border-border relative">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">

            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-space font-bold">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    TechFlow
                  </span>
                </h3>
                <p className="text-muted-foreground mt-4 max-w-sm">
                  Transforming businesses through innovative technology solutions. 
                  Building the future, one project at a time.
                </p>
              </div>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-muted/50 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-space font-semibold text-foreground mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>© {currentYear} TechFlow. Made with</span>
                <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
                <span>for innovation.</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Terms of Service
                </button>
                <button className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;