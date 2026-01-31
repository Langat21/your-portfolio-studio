import { useEffect, useRef, useState } from 'react';
import { Rocket, Heart, Star } from 'lucide-react';

const achievements = [
  { number: '50+', label: 'Projects Launched', icon: Rocket },
  { number: '40+', label: 'Clients Served', icon: Heart },
  { number: '96%', label: 'Satisfaction Rate', icon: Star },
];

const Achievements = () => {
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
    <section className="section-padding bg-foreground text-background" ref={ref}>
      <div className="container-max">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
              }}
            >
              <item.icon className="w-10 h-10 mx-auto mb-4 text-primary" />
              <div className="text-5xl md:text-6xl font-bold mb-2">{item.number}</div>
              <div className="text-lg text-background/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
