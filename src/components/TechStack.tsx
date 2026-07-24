import { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: 'Frontend',
    items: ['React', 'React Native', 'Bubble', 'Tailwind CSS', 'TypeScript'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Node.js', 'Xano', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'AI',
    items: [
      'OpenAI APIs',
      'Prompt Engineering',
      'AI Agents',
      'RAG',
      'Function Calling',
    ],
  },
  {
    title: 'Automation',
    items: ['n8n', 'Make', 'Zapier', 'Webhooks', 'Background Jobs'],
  },
  {
    title: 'Data Engineering',
    items: [
      'TypeScript Scrapers',
      'Playwright',
      'Puppeteer',
      'Data Extraction',
      'Company Enrichment',
    ],
  },
  {
    title: 'Infrastructure',
    items: ['Docker', 'GitHub Actions', 'Vercel', 'Render', 'Railway'],
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
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-max">
        <div
          className={`max-w-2xl mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
            My Technology Stack
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            The tools I reach for to ship production systems.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {categories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${catIndex * 100}ms` : '0ms' }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-5 tracking-wide">
                {category.title}
              </h3>
              <ul className="space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
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
