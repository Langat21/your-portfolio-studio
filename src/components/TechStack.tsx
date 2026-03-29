import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'Product & Frontend',
    items: [
      { name: 'Bubble.io', note: 'Certified' },
      { name: 'React', note: null },
      { name: 'Tailwind', note: null },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    items: [
      { name: 'Xano', note: 'Certified' },
      { name: 'Supabase', note: null },
      { name: 'AWS', note: 'DynamoDB / Lambda' },
      { name: 'Node.js', note: null },
    ],
  },
  {
    title: 'Automation',
    items: [
      { name: 'n8n', note: null },
      { name: 'Make', note: null },
      { name: 'OpenAI / Claude APIs', note: null },
    ],
  },
];

const TechStack = () => {
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
        <p
          className={`text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          The Stack
        </p>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: isVisible ? `${catIndex * 150}ms` : '0ms' }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-6 tracking-wide">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item.name} className="flex items-baseline gap-2">
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                    {item.note && (
                      <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground/60 border border-border rounded px-1.5 py-0.5">
                        {item.note}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
