import { useEffect, useRef, useState } from 'react';
import { Linkedin, Github } from 'lucide-react';

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/brian-lang-at-600011187',
    label: 'LinkedIn',
  },
  {
    icon: Github,
    href: 'https://github.com/Langat21',
    label: 'GitHub',
  },
];

const ConnectCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding" ref={ref}>
      <div className="container-max">
        <div
          className={`text-center space-y-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Let's Connect
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, collaborations, 
            and interesting engineering challenges.
          </p>
          <div className="flex items-center justify-center gap-6 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={16} />
                <span className="link-underline">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectCTA;
