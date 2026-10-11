import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import coreBackendImage from '@/assets/core-backend.png';
import dataEngineeringImage from '@/assets/data-engineering.png';
import asyncPipelineImage from '@/assets/async-pipeline.png';
import systemArchitectureImage from '@/assets/system-architecture.jpeg';
import aiIntegrationImage from '@/assets/ai-integration.jpeg';
import otherServicesImage from '@/assets/other-services.png';


import {
  ArrowRight,
  Bot,
  Braces,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

type ServiceCard = {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
  accent: string;
  image: string;
};

const buildArt = (kind: 'backend' | 'ai' | 'data' | 'tools') => {
  const themes = {
    backend: {
      bg: '#f2efe9',
      primary: '#1f2937',
      secondary: '#d7d2c7',
      accent: '#f4b66b',
    },
    ai: {
      bg: '#f3f1ef',
      primary: '#1f2937',
      secondary: '#d9d3cf',
      accent: '#8ca3c8',
    },
    data: {
      bg: '#eef3f0',
      primary: '#1f2937',
      secondary: '#cfe0d8',
      accent: '#7db9a2',
    },
    tools: {
      bg: '#f6f2f4',
      primary: '#1f2937',
      secondary: '#e4d5db',
      accent: '#c39ac4',
    },
  };

  const palette = themes[kind];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="900" height="520" viewBox="0 0 900 520">
      <rect width="900" height="520" rx="36" fill="${palette.bg}"/>
      <g opacity="0.9">
        <rect x="40" y="70" width="180" height="130" rx="18" fill="${palette.secondary}" stroke="${palette.primary}" stroke-width="2"/>
        <rect x="100" y="95" width="60" height="20" rx="6" fill="${palette.primary}" opacity="0.15"/>
        <rect x="88" y="125" width="88" height="18" rx="8" fill="${palette.primary}" opacity="0.28"/>
        <rect x="88" y="152" width="96" height="18" rx="8" fill="${palette.primary}" opacity="0.18"/>
      </g>
      <g opacity="0.95">
        <rect x="260" y="70" width="180" height="130" rx="18" fill="${palette.secondary}" stroke="${palette.primary}" stroke-width="2"/>
        <circle cx="320" cy="126" r="30" fill="${palette.accent}" opacity="0.9"/>
        <circle cx="385" cy="126" r="30" fill="${palette.accent}" opacity="0.6"/>
      </g>
      <g opacity="0.95">
        <rect x="480" y="70" width="180" height="130" rx="18" fill="${palette.secondary}" stroke="${palette.primary}" stroke-width="2"/>
        <path d="M520 168L560 118L610 145L650 112L670 168Z" fill="${palette.accent}" opacity="0.85"/>
      </g>
      <g opacity="0.9">
        <rect x="125" y="250" width="300" height="180" rx="22" fill="${palette.secondary}" stroke="${palette.primary}" stroke-width="2"/>
        <rect x="165" y="290" width="220" height="20" rx="10" fill="${palette.primary}" opacity="0.2"/>
        <rect x="165" y="325" width="190" height="16" rx="8" fill="${palette.primary}" opacity="0.18"/>
        <rect x="165" y="360" width="160" height="16" rx="8" fill="${palette.primary}" opacity="0.15"/>
      </g>
      <g opacity="0.9">
        <rect x="475" y="250" width="300" height="180" rx="22" fill="${palette.secondary}" stroke="${palette.primary}" stroke-width="2"/>
        <rect x="520" y="290" width="210" height="20" rx="10" fill="${palette.primary}" opacity="0.18"/>
        <rect x="520" y="325" width="185" height="16" rx="8" fill="${palette.primary}" opacity="0.14"/>
        <rect x="520" y="360" width="165" height="16" rx="8" fill="${palette.primary}" opacity="0.1"/>
      </g>
      <g opacity="0.75">
        <path d="M245 215C278 182 330 178 363 215" stroke="${palette.primary}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M586 215C618 182 669 178 703 215" stroke="${palette.primary}" stroke-width="3" fill="none" stroke-linecap="round"/>
      </g>
    </svg>
  `;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const cards: ServiceCard[] = [
  {
    title: 'Core backend',
    description: 'I build reliable APIs, PostgreSQL-backed systems, and resilient services that support SaaS products and operational teams.',
    details: ['FastAPI', 'PostgreSQL', 'Supabase', 'REST APIs'],
    icon: Layers3,
    accent: 'from-slate-200 to-stone-100',
    image: coreBackendImage,
  },
  {
    title: 'AI integration',
    description: 'I connect LLMs, structured outputs, tool calling, retrieval layers, and evaluation loops into business workflows.',
    details: ['LLM APIs', 'Structured outputs', 'Tool calling', 'Retrieval'],
    icon: Bot,
    accent: 'from-slate-100 to-zinc-100',
    image: aiIntegrationImage,
  },
  {
    title: 'Data engineering',
    description: 'I design data pipelines, validation layers, and reporting systems that make operational data trustworthy and useful.',
    details: ['Pandas', 'ETL', 'Validation', 'Background jobs'],
    icon: Database,
    accent: 'from-emerald-100 to-teal-50',
    image: dataEngineeringImage,
  },
  {
    title: 'Supporting tools',
    description: 'I support rapid product delivery with Xano, automation stacks, and specialized build tooling for operations and internal systems.',
    details: ['Xano', 'n8n', 'Automation', 'Ops tooling'],
    icon: Workflow,
    accent: 'from-violet-50 to-fuchsia-50',
    image: otherServicesImage,
  },
];

const architectureCards = [
  {
    title: 'System architecture',
    description: 'AWS + MongoDB + integrations',
    bullets: ['Client layer', 'Application layer', 'Data layer', 'Automation'],
    image: systemArchitectureImage,
  },
  {
    title: 'Async ETL pipeline',
    description: 'FastAPI + Pandas + PostgreSQL',
    bullets: ['CSV / API ingest', 'Transform', 'Load to warehouse', 'Validation'],
    image: asyncPipelineImage,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-32 pb-20">
        <section className="container-max">
          <div className="rounded-[32px] border border-border bg-card/80 p-6 md:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-muted-foreground">
              SOFTWARE ENGINEERING
            </p>
            <h1 className="max-w-5xl text-4xl font-bold tracking-[-0.06em] md:text-4xl">
              Backend &amp; AI Integration
            </h1>
            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-muted-foreground md:text-2xl">
              I build reliable APIs, PostgreSQL-backed systems and AI integrations that power SaaS products and automate business operations.
            </p>

            {/* Stack cards vertically in a single column */}
            <div className="mt-10 flex flex-col gap-8">
              {cards.map(({ title, description, details, icon: Icon, image }) => (
                <article key={title} className="grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-[28px] border border-border bg-background">
                  {/* Left: Image side-by-side without padding */}
                  <div className="h-64 md:h-full w-full overflow-hidden border-b md:border-b-0 md:border-r border-border">
                    <img 
                      src={image} 
                      alt={title} 
                      className="h-full w-full object-cover" 
                    />
                  </div>

                  {/* Right: Description & Tags */}
                  <div className="flex flex-col justify-between space-y-6 p-6 md:p-8 lg:p-10">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.04em]">{title}</h2>
                      </div>

                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {details.map((item) => (
                        <span key={item} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container-max mt-20">
          <div className="mb-10 max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              What I do
            </p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-5xl">
              End-to-end systems for fast-moving product teams.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {architectureCards.map(({ title, description, bullets, image }) => (
              <article key={title} className="overflow-hidden rounded-[30px] border border-border bg-card/80 p-4 md:p-6">
                <div className="mb-5 overflow-hidden rounded-[22px] border border-border bg-background">
                  <img src={image} alt={title} className="h-64 w-full object-cover" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-[-0.05em]">{title}</h3>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <p className="text-base text-muted-foreground">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {bullets.map((item) => (
                      <span key={item} className="rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-foreground/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container-max mt-20">
          <div className="rounded-[32px] border border-border bg-card/70 p-6 md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-foreground" />
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                Service approach
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Design',
                  copy: 'Product strategy, architecture, and service boundaries that are easy to evolve.',
                  icon: Braces,
                },
                {
                  title: 'Build',
                  copy: 'Fast implementation of APIs, data flows, automations, and internal tooling.',
                  icon: Gauge,
                },
                {
                  title: 'Scale',
                  copy: 'Operational reliability, observability, and governance as the system grows.',
                  icon: Database,
                },
              ].map(({ title, copy, icon: Icon }) => (
                <div key={title} className="rounded-[24px] border border-border bg-background p-5">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-[-0.04em]">{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;