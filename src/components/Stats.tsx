import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Clock, Rocket, Globe } from 'lucide-react';

const stats = [
  { number: 50, suffix: '+', label: 'Projects', icon: Briefcase },
  { number: 40, suffix: '+', label: 'Clients', icon: Users },
  { number: 10, suffix: '+', label: 'Years in Dev', icon: Clock },
  { number: 15, suffix: '+', label: 'Live Apps', icon: Rocket },
  { number: 35, suffix: '+', label: 'Websites', icon: Globe },
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-max" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group text-center p-6 rounded-2xl bg-card hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <stat.icon
                className="w-8 h-8 mx-auto mb-4 text-primary opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.number}{stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
