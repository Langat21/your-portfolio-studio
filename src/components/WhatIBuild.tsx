import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, Radar, Bot, Wrench } from 'lucide-react';

const buckets = [
  {
    icon: LayoutDashboard,
    title: 'AI Operations Platforms',
    tagline: 'Enterprise software that replaces spreadsheets.',
    examples: [
      'Operations dashboards',
      'Job management',
      'Team coordination',
      'Customer portals',
      'Reporting',
    ],
  },
  {
    icon: Radar,
    title: 'Lead Intelligence Systems',
    tagline: 'Automatically discover, enrich, and route prospects.',
    examples: [
      'Company scraping',
      'Contact discovery',
      'Lead qualification',
      'CRM enrichment',
    ],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    tagline: 'Agents and workflows that eliminate manual work.',
    examples: [
      'n8n workflows',
      'OpenAI agents',
      'Email automation',
      'Proposal generation',
      'Internal assistants',
    ],
  },
  {
    icon: Wrench,
    title: 'Internal Software',
    tagline: 'Purpose-built tools for operations-heavy industries.',
    examples: ['Logistics', 'Solar', 'Warehousing', 'Manufacturing', 'Field Operations'],
  },
];

const WhatIBuild = () => {
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
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
            What I Build
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            Business outcomes — not a technology checklist.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {buckets.map((bucket, index) => (
            <div
              key={bucket.title}
              className={`group rounded-2xl border border-border hover:border-foreground/30 bg-card p-6 md:p-8 transition-all duration-700 hover:-translate-y-0.5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
            >
              <bucket.icon
                size={22}
                className="text-muted-foreground group-hover:text-foreground transition-colors mb-5"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{bucket.title}</h3>
              <p className="text-sm text-muted-foreground mb-5">{bucket.tagline}</p>
              <ul className="flex flex-wrap gap-1.5">
                {bucket.examples.map((ex) => (
                  <li
                    key={ex}
                    className="text-[11px] tracking-wide text-muted-foreground border border-border rounded-full px-2.5 py-1"
                  >
                    {ex}
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

export default WhatIBuild;
