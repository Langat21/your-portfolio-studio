import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  link?: string;
};

const projects: Project[] = [
  {
    name: 'AI Operations Platform — Opslayer',
    category: 'SaaS · AI · Multi-Tenant',
    description:
      'Multi-tenant SaaS platform for operations-intensive businesses combining CRM, project management, field service management, customer portals, AI automation, and operational analytics into one unified system.',
    stack: ['React', 'Bubble', 'Xano', 'Supabase', 'OpenAI', 'n8n'],
    link: '#',
  },
  {
    name: 'Mortgage & Loan Management Platform',
    category: 'Fintech · B2C',
    description:
      'Production mortgage platform with customer onboarding, eligibility assessments, secure document management, loan processing, and approval automation with integrated backend workflows.',
    stack: ['Bubble', 'REST APIs', 'SQL'],
    link: '#',
  },
  {
    name: 'n8n AI Automation Plugin',
    category: 'Developer Tools · Marketplace',
    description:
      'Production Bubble marketplace plugin enabling seamless integration with n8n workflows, AI agents, webhooks, and two-way data synchronization for business automation.',
    stack: ['JavaScript', 'Bubble Plugin API', 'REST APIs', 'n8n'],
    link: '#',
  },
  {
    name: 'Confirmo Crypto Payments Plugin',
    category: 'Payments · Plugin',
    description:
      'Production payment plugin integrating cryptocurrency payments, invoice management, webhook processing, and real-time transaction tracking for Bubble applications.',
    stack: ['JavaScript', 'REST APIs', 'Webhooks'],
    link: '#',
  },
  {
    name: 'Carbon Management Platform',
    category: 'Sustainability · Reporting',
    description:
      'Sustainability platform enabling manufacturers to measure, report, and improve carbon efficiency through standardized environmental reporting and analytics. EcoVadis Gold Certified.',
    stack: ['Bubble', 'REST APIs'],
    link: '#',
  },
  {
    name: 'AI Tender Library & Kush Law',
    category: 'Legal Tech · AI',
    description:
      'Backend services and AI-powered applications supporting legal technology and tender management platforms using an API-first architecture.',
    stack: ['Xano', 'OpenAI', 'REST APIs'],
    link: '#',
  },
  {
    name: 'Solar Installers Platform',
    category: 'Operations · Data Sync',
    description:
      'Migrated Bubble backends to Xano for maximum scalability. Built real-time Salesforce-synced dashboards processing 1,000+ leads daily.',
    stack: ['Bubble', 'Xano', 'Salesforce API'],
    link: '#',
  },
];

const ProjectCard = ({
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
    className={`group block rounded-2xl border border-border hover:border-foreground/30 bg-card p-6 md:p-8 transition-all duration-700 hover:-translate-y-1 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 80}ms` : '0ms' }}
  >
    <div className="flex items-start justify-between gap-4 mb-3">
      <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/70">
        {project.category}
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
    <div className="flex flex-wrap gap-1.5">
      {project.stack.map((tech) => (
        <span
          key={tech}
          className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground border border-border rounded px-1.5 py-0.5"
        >
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
            Selected Engineering Projects
          </p>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-12 max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Production software across fintech, operations, sustainability, and AI.
          </h1>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
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
