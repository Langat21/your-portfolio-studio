import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowUpRight } from 'lucide-react';

// Import asset placeholders (ensure these image files exist in your src/assets/ folder)
import coreBackendImage from '@/assets/core-backend.png';
import dataEngineeringImage from '@/assets/data-engineering.png';
import systemArchitectureImage from '@/assets/system-architecture.jpeg';
import asyncPipelineImage from '@/assets/async-pipeline.png';

type Project = {
  name: string;
  tag: string;
  description: string;
  features?: string[];
  stack: string[];
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    name: 'LeadFlow Production Backend',
    tag: 'Case Study 1: AI Lead Lifecycle Automation',
    description:
      'A complete multi-tenant lead intake platform and backend architecture demonstrating robust ingestion, structured AI qualification, durable background job handling, and tenant isolation.',
    features: [
      'Multi-tenant organization & user model with strict workspace isolation',
      'Lead ingestion, validation, and idempotent deduplication',
      'FastAPI endpoints protected with token-based authentication & authorization',
      'AI-powered lead qualification using structured JSON outputs and LLM APIs',
      'Durable follow-up handling, retries, and comprehensive audit trails',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'Supabase', 'React', 'OpenAI', 'n8n'],
    image: coreBackendImage,
    link: '#',
  },
  {
    name: 'Data Import & Reconciliation API',
    tag: 'Case Study 2: Production ETL Pipeline',
    description:
      'A high-performance FastAPI backend service designed to ingest complex CSV/Excel spreadsheets, process rows via Pandas pipelines, and commit validated records securely into PostgreSQL.',
    features: [
      'Strict schema validation and row-level verification rules',
      'Idempotent duplicate detection to make file imports safely rerunnable',
      'Comprehensive valid/invalid row reporting logs and summary statistics',
      'Batch-processed database transactions ensuring atomic multi-row updates',
    ],
    stack: ['Python', 'FastAPI', 'Pandas', 'PostgreSQL', 'SQLAlchemy'],
    image: dataEngineeringImage,
    link: '#',
  },
  {
    name: 'Opslayer Operational Infrastructure',
    tag: 'Case Study 3: B2B Pipeline Scraper',
    description:
      'An end-to-end data acquisition and qualification engine that extracts directory listings, enriches company insights, runs automated classifications, and syncs clean payloads directly into a CRM pipeline.',
    features: [
      'Automated web scraping and directory traversal via Playwright',
      'Multi-source company enrichment and decision-maker contact discovery',
      'Intelligent industry categorisation and scoring rules',
    ],
    stack: ['Playwright', 'FastAPI', 'OpenAI', 'Supabase', 'TypeScript'],
    image: systemArchitectureImage,
    link: '#',
  },
  {
    name: 'Enterprise Backend Modules & APIs',
    tag: 'Case Study 4: Core Backend Engineering',
    description:
      'Production-tested microservices, authentication layers, webhooks, and payment integration pipelines built for fintech, logistics, and legal tech platforms.',
    features: [
      'Secure token authorization, role-based access, and encrypted secrets management',
      'Real-time webhook lifecycle processing and transaction status tracking',
      'Optimized SQL query performance indexes and versioned Alembic migrations',
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'REST APIs', 'Docker'],
    image: asyncPipelineImage,
    link: '#',
  },
];

export default function SelectedWorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 space-y-12">
        <div className="space-y-3 w-full">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Selected Work
          </h1>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
            Operational platforms, robust backend APIs, and production-ready AI workflows engineered for founders and teams across fintech, logistics, legal tech, and SaaS.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors items-stretch"
            >
              <div className="space-y-5 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                    {project.tag}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                    {project.name}
                    {project.link && (
                      <a
                        href={project.link}
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label={`View ${project.name}`}
                      >
                        <ArrowUpRight className="size-5" />
                      </a>
                    )}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.features && (
                  <div className="space-y-2 pt-3 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Architecture Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="leading-snug">
                          <span className="text-slate-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 bg-slate-800/90 border border-slate-700/80 text-slate-300 text-[11px] font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center self-stretch min-h-[260px]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full min-h-[260px] grid place-items-center bg-slate-900/50 text-xs text-slate-500 font-mono">
                    [ Architecture Preview Asset ]
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}