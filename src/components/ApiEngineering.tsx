import { useEffect, useRef, useState } from 'react';

type Api = {
  name: string;
  method: 'POST' | 'GET';
  path: string;
  purpose: string;
  flow: string[];
};

const apis: Api[] = [
  {
    name: 'AI Workspace Generator',
    method: 'POST',
    path: '/workspace/generate',
    purpose:
      'Creates a complete operational workspace — projects, teams, tasks, automations, permissions and KPIs — from a single business description.',
    flow: ['Business Type', 'OpenAI', 'Workspace Blueprint', 'Provision'],
  },
  {
    name: 'AI Risk Engine',
    method: 'POST',
    path: '/risk-analysis',
    purpose:
      'Analyses live operational data and returns a health score, bottlenecks, recommendations, and prioritised actions.',
    flow: ['Ops Data', 'AI Analysis', 'Health Score', 'Priority Actions'],
  },
  {
    name: 'Lead Qualification API',
    method: 'POST',
    path: '/leads/qualify',
    purpose:
      'Scores inbound leads using AI qualification rules and routes them into the CRM with priority tiers.',
    flow: ['Lead', 'OpenAI', 'Qualification', 'Priority Score', 'CRM'],
  },
  {
    name: 'Company Enrichment API',
    method: 'POST',
    path: '/enrich/company',
    purpose:
      'From a domain, returns contacts, company summary, industry and headcount using scraping + AI extraction.',
    flow: ['Website', 'Scraping', 'AI Extraction', 'Contacts + Summary'],
  },
  {
    name: 'Workflow Recommendation API',
    method: 'POST',
    path: '/workflows/recommend',
    purpose:
      'Reads a description of a business and returns suggested automations, workflows, modules, and workspace configuration.',
    flow: ['Business Ops', 'AI', 'Suggested Automations', 'Modules'],
  },
  {
    name: 'Proposal Generator API',
    method: 'POST',
    path: '/proposals/generate',
    purpose:
      'Turns a customer + requirements payload into a branded PDF proposal ready to send.',
    flow: ['Customer', 'Requirements', 'AI', 'PDF Proposal'],
  },
  {
    name: 'Technician Scheduling API',
    method: 'POST',
    path: '/schedule/assign',
    purpose:
      'Optimises technician assignments against availability, skills, and job location.',
    flow: ['Technicians', 'Jobs', 'Availability', 'AI Optimisation', 'Assignment'],
  },
];

const ApiEngineering = () => {
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
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-max">
        <div
          className={`max-w-2xl mb-14 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
            API Engineering
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-4">
            Production APIs powering AI, automation, and operational platforms.
          </h2>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            A selection of FastAPI services I've designed for AI-native operations —
            each one an endpoint doing real work behind Opslayer and client platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {apis.map((api, index) => (
            <div
              key={api.name}
              className={`rounded-xl border border-border bg-card p-6 hover:border-foreground/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 70}ms` : '0ms' }}
            >
              <div className="flex items-center gap-2 mb-3 font-mono text-[11px]">
                <span className="text-foreground bg-secondary rounded px-1.5 py-0.5">
                  {api.method}
                </span>
                <span className="text-muted-foreground">{api.path}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{api.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {api.purpose}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted-foreground/80">
                {api.flow.map((step, i) => (
                  <span key={step} className="flex items-center gap-1.5">
                    <span className="border border-border rounded px-1.5 py-0.5">
                      {step}
                    </span>
                    {i < api.flow.length - 1 && <span className="opacity-50">→</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiEngineering;
