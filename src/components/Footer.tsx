import { Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Works', href: '#works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/brian-lang-at-600011187', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/Langat21', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ];

  return (
    <footer className="section-padding bg-secondary/50 pt-12 pb-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-border">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            Langat.K<span className="text-primary">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground link-underline transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Langat.K. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
