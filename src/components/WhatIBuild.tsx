import { Bot, BriefcaseBusiness, LayoutDashboard, Search } from 'lucide-react';

const buckets = [
  {
    icon: LayoutDashboard,
    title: 'AI Operations Platforms',
    tagline: 'Operational software that replaces spreadsheets and fragmented tools.',
    examples: [
      'Dashboards',
      'Workflow orchestration',
      'Team visibility',
      'Reporting',
      'Customer portals',
    ],
  },
  {
    icon: Search,
    title: 'Lead Intelligence Systems',
    tagline: 'Prospect discovery, enrichment, and outreach built for business growth.',
    examples: [
      'Company scraping',
      'Lead ranking',
      'CRM sync',
      'Contact discovery',
      'Outreach workflows',
    ],
  },
  {
    icon: Bot,
    title: 'AI Automation',
    tagline: 'Agents and workflows that reduce repetitive work at scale.',
    examples: [
      'LLM workflows',
      'Email automation',
      'Email QA',
      'Classification',
      'Decision support',
    ],
  },
  {
    icon: BriefcaseBusiness,
    title: 'Internal Software',
    tagline: 'Tools built to help field service, logistics, and operations teams move faster.',
    examples: [
      'Project ops',
      'Scheduling',
      'Task orchestration',
      'Internal tooling',
      'Analytics',
    ],
  },
];

const WhatIBuild = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-max">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            What I build
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-5xl">
            Systems that turn manual operations into leverage.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {buckets.map((bucket) => (
            <div key={bucket.title} className="rounded-[28px] border border-border bg-card/90 p-6 md:p-8">
              <bucket.icon className="mb-5 h-6 w-6 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">{bucket.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{bucket.tagline}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {bucket.examples.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1.5 text-[11px] text-foreground/80">
                    {item}
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

export default WhatIBuild;
