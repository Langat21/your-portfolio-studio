import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';

const entries = [
  {
    company: 'Studio (Self-Founded)',
    role: 'Founder & Lead Engineer',
    date: '2023 — Present',
    summary:
      'Building high-performance SaaS MVPs for startups and enterprises. Architecting AI-native products with full-stack pipelines using React, Xano, and automation layers.',
  },
  {
    company: 'Enterprise SaaS Client',
    role: 'Senior Software Engineer',
    date: '2022 — 2023',
    summary:
      'Architected multi-tenant B2B strategy platforms serving 10K+ users. Led migration from monolithic architecture to microservices on AWS Lambda and DynamoDB.',
  },
  {
    company: 'Fintech Startup',
    role: 'Full-Stack Engineer',
    date: '2021 — 2022',
    summary:
      'Migrated Bubble backends to Xano/AWS for 10x scalability. Built real-time payment dashboards with React and Supabase, processing $2M+ monthly.',
  },
  {
    company: 'Agency / Contract Work',
    role: 'Product Engineer',
    date: '2020 — 2021',
    summary:
      'Delivered 15+ client projects across e-commerce, healthcare, and education verticals. Established automation workflows with n8n and Make, reducing manual ops by 80%.',
  },
  {
    company: 'EdTech Platform',
    role: 'Frontend Engineer',
    date: '2019 — 2020',
    summary:
      'Built responsive learning interfaces with React and Tailwind CSS. Implemented real-time collaboration features and optimized Core Web Vitals scores to 95+.',
  },
  {
    company: 'Digital Agency',
    role: 'Junior Developer',
    date: '2018 — 2019',
    summary:
      'Developed custom WordPress and Bubble.io solutions for SMBs. Introduced component-based architecture patterns that reduced development time by 40%.',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    date: '2016 — 2018',
    summary:
      'Started building websites and web apps for local businesses. Learned the fundamentals of full-stack development, shipping 30+ projects across diverse industries.',
  },
];

const TimelineEntry = ({
  entry,
  index,
  isVisible,
}: {
  entry: (typeof entries)[0];
  index: number;
  isVisible: boolean;
}) => (
  <div
    className={`relative pl-8 md:pl-12 pb-12 last:pb-0 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 100}ms` : '0ms' }}
  >
    {/* Timeline dot */}
    <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-muted-foreground/40" />

    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
        <h3 className="text-sm font-semibold text-foreground">{entry.company}</h3>
        <span className="text-xs text-muted-foreground">— {entry.role}</span>
        <span className="text-xs text-muted-foreground/50 sm:ml-auto">{entry.date}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
        {entry.summary}
      </p>
    </div>
  </div>
);

const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="section-padding pt-32" ref={ref}>
        <div className="container-max">
          <p
            className={`text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Work History
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3px] top-3 bottom-3 w-px bg-border" />

            {entries.map((entry, index) => (
              <TimelineEntry
                key={entry.company}
                entry={entry}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
