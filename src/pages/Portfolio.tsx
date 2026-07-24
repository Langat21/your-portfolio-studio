import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  name: string;
  tag: string;
  description: string;
  features?: string[];
  workflow?: string[];
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: 'LeadFlow',
    tag: 'Lead Capture Infrastructure',
    description:
      'A complete lead intake platform connecting websites, CRMs, and automation workflows — so no lead is ever manually re-entered.',
    features: [
      'Public lead forms',
      'Qualification',
      'CRM sync',
      'Email automation',
      'AI summaries',
      'Assignment',
    ],
    stack: ['React', 'FastAPI', 'Supabase', 'OpenAI', 'n8n'],
    link: '#',
  },
  {
    name: 'LeadRadar',
    tag: 'Company Prospect Intelligence',
    description:
      'An automated prospect discovery engine that finds businesses, enriches company information, and prepares outreach-ready lead lists — solving the first step of the sales funnel.',
    features: [
      'Business scraping',
      'Company enrichment',
      'Contact collection',
      'Industry categorisation',
      'Export',
      'CRM integration',
    ],
    stack: ['TypeScript', 'Playwright', 'FastAPI', 'OpenAI', 'PostgreSQL'],
    link: '#',
  },
  {
    name: 'Opslayer Prospect Scraper',
    tag: 'AI Prospect Discovery Engine',
    description:
      'An end-to-end scraping and qualification pipeline that turns public directories into a ready-to-work sales pipeline.',
    workflow: [
      'Google Maps',
      'Company Website',
      'Scraper',
      'Contact Discovery',
      'AI Classification',
      'CRM',
      'Sales Pipeline',
    ],
    stack: ['Playwright', 'FastAPI', 'OpenAI', 'Supabase'],
    link: '#',
  },
  {
    name: 'Bubble ↔ n8n Plugin',
    tag: 'Automation Bridge',
    description:
      'Allows Bubble applications to trigger complex automation workflows through n8n with secure authentication and custom actions.',
    features: [
      'API integration',
      'Workflow execution',
      'Dynamic parameters',
      'Error handling',
    ],
    stack: ['JavaScript', 'Bubble Plugin API', 'n8n', 'REST APIs'],
    link: '#',
  },
  {
    name: 'Mortgage & Loan Management Platform',
    tag: 'Fintech · B2C',
    description:
      'Production mortgage platform with customer onboarding, eligibility assessments, secure document management, loan processing, and approval automation.',
    features: [
      'Onboarding',
      'Eligibility',
      'Document management',
      'Loan processing',
      'Approval workflows',
    ],
    stack: ['Bubble', 'REST APIs', 'SQL'],
    link: '#',
  },
  {
    name: 'Confirmo Crypto Payments Plugin',
    tag: 'Payments · Plugin',
    description:
      'Payment plugin integrating cryptocurrency payments, invoice management, webhook processing, and real-time transaction tracking for Bubble applications.',
    features: ['Invoice lifecycle', 'Webhooks', 'Real-time status', 'Crypto payments'],
    stack: ['JavaScript', 'REST APIs', 'Webhooks'],
    link: '#',
  },
  {
    name: 'Carbon Management Platform',
    tag: 'Sustainability · Reporting',
    description:
      'Sustainability platform enabling manufacturers to measure, report, and improve carbon efficiency through standardised environmental reporting. EcoVadis Gold Certified.',
    features: ['Carbon measurement', 'Reporting', 'Analytics', 'Compliance'],
    stack: ['Bubble', 'REST APIs'],
    link: '#',
  },
  {
    name: 'AI Tender Library & Kush Law',
    tag: 'Legal Tech · AI',
    description:
      'Backend services and AI-powered applications supporting legal technology and tender management platforms using an API-first architecture.',
    features: ['Tender search', 'AI extraction', 'Document workflows'],
    stack: ['Xano', 'OpenAI', 'REST APIs'],
    link: '#',
  },
  {
    name: 'Solar Installers Platform',
    tag: 'Operations · Data Sync',
    description:
      'Migrated Bubble backends to Xano for scale. Built real-time Salesforce-synced dashboards processing 1,000+ leads daily.',
    features: ['Backend migration', 'Real-time sync', 'Ops dashboards'],
    stack: ['Bubble', 'Xano', 'Salesforce API'],
    link: '#',
  },
];

const Card = ({
  project,
  index,
  isVisible,
}: {
  project: Project;
  index: number;
  isVisible: boolean;
}) => (
  <a
    href={project.link || '#'}
    target={project.link && project.link !== '#' ? '_blank' : undefined}
    rel="noopener noreferrer"
    className={`group block rounded-2xl border border-border hover:border-foreground/30 bg-card p-6 md:p-8 transition-all duration-700 hover:-translate-y-0.5 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 70}ms` : '0ms' }}
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/70">
        {project.tag}
      </p>
      <ArrowUpRight
        size={16}
        className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
      />
    </div>
    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 leading-tight">
      {project.name}
    </h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
      {project.description}
    </p>

    {project.features && (
      <ul className="flex flex-wrap gap-1.5 mb-5">
        {project.features.map((f) => (
          <li
            key={f}
            className="text-[11px] tracking-wide text-foreground/80 border border-border rounded-full px-2.5 py-1"
          >
            {f}
          </li>
        ))}
      </ul>
    )}

    {project.workflow && (
      <div className="mb-5 flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
        {project.workflow.map((node, i, arr) => (
          <span key={node} className="flex items-center gap-1.5">
            <span className="border border-border rounded px-2 py-1">{node}</span>
            {i < arr.length - 1 && <span className="opacity-50">→</span>}
          </span>
        ))}
      </div>
    )}

    <div className="flex flex-wrap gap-2 pt-2 border-t border-border/60">
      {project.stack.map((tech) => (
        <span key={tech} className="text-[11px] font-mono text-muted-foreground">
          {tech}
        </span>
      ))}
    </div>
  </a>
);

const Portfolio = () => {
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
            className={`text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Selected Work
          </p>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Operational platforms, lead intelligence, and AI automation shipped in production.
          </h1>
          <p
            className={`text-base text-muted-foreground max-w-2xl mb-14 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Beyond the featured Opslayer project on the homepage, here's the rest of
            what I've built for founders and teams across fintech, solar, logistics,
            legal, and sustainability.
          </p>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.name}
                project={project}
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

export default Portfolio;
