import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';

const entries = [
  {
    company: 'Umbrella Financial Services',
    role: 'Low code Developer - Bubble',
    date: 'Apr 2023 — May 2024',
    summary:
      'Developed high-performance internal financial solution. Architecting business logic, scalable database and backend automation layers.',
  },
  {
    company: '​Design Conformity',
    role: 'Software Developer',
    date: 'Sep 2023 — Jun 2025',
    summary:
      'Developing & Enhancing a Carbon efficiency rating software: help furniture manufacturers produce more sustainable products by measuring and reporting their carbon efficiency. Gold Certified with EcoVardis.',
  },
  {
    company: 'Market Leader Technologies',
    role: '​Low code Developer - Bubble/Xano',
    date: 'Jun 2024 — Sep 2025',
    summary:
      'Migrated a solar installers platform Bubble backends to Xano for max scalability. Built real-time salesforce synced dashboards with Bubble and Xano, processing 1K+ leads daily.',
  },
  {
    company: 'Tiny Builds',
    role: 'Product Engineer',
    date: '2020 — 2021',
    summary:
      'Developed a B2C mortgage platform handling lead intake, eligibility checks, loan processing, and automated approval workflows with secure financial data handling; A custom Bubble plugin integrating Confirmo crypto payments with full invoice lifecycle, webhooks, and real-time payment status updates; A Bubble plugin enabling seamless n8n workflow triggers, two-way data sync, and AI agent automation directly from Bubble apps.',
  },
  {
    company: 'FlexBuild',
    role: 'Backend Engineer',
    date: 'Jun 2025 — Oct 2025',
    summary:
      'Developing Xano Backend function for AI-powered solutions: AI Tender Library and Kush Law.',
  },
  {
    company: 'No Code Creations',
    role: 'Low code Developer',
    date: 'Jan 2024 — Feb 2026',
    summary:
      'Leading a dynamic team in developing solutions: Werkling, Cillionaire, and Snapphoto.',
  },
  {
    company: 'Upwork',
    role: 'Software Developer',
    date: 'Jan 2022 — Present',
    summary:
      'Senior Bubble.io Developer – Backend, APIs & Integrations; Bubble Plugin & Platform Extension Developer; Bubble.io Developer – AI-Powered & Production Systems; TypeScript Full-Stack Engineer – App Refactoring, QA Engineering & API Integrations',
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
            WORK HISTORY
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
