import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Server, Atom, Target, Zap } from 'lucide-react';

const skills = [
  { icon: Code, label: 'Full Stack Dev', description: 'End-to-end solutions' },
  { icon: Palette, label: 'UX Focused', description: 'User-first design' },
  { icon: Server, label: 'API Builder', description: 'Scalable backends' },
  { icon: Atom, label: 'React Expert', description: 'Modern interfaces' },
  { icon: Target, label: 'Pixel Perfect', description: 'Attention to detail' },
  { icon: Zap, label: 'Fast Delivery', description: 'Efficient workflow' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-max">
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-primary font-medium tracking-wide mb-4">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Full-stack developer with a love for clean UI and fast apps
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm passionate about creating seamless digital experiences that combine beautiful design 
            with robust functionality. With over a decade of experience, I've helped startups and 
            enterprises bring their visions to life through thoughtful code and user-centric design.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <skill.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-semibold mb-1">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
