import { useEffect, useRef, useState } from 'react';

const studies = [
  {
    title: 'Built the React web app with 75 pages for travellers, partners and admins, while also integrating Google Maps search, live order tracking, and QR booking passes.',
    industry: 'Travel operations · SaaS',
    problem:
      'Operations were fragmented across internal tools and external channels, leaving teams without a single source of truth for orders, travellers, and partner coordination.',
    solution:
      'Designed and shipped a scalable React product surface for core operational workflows: booking journeys, admin views, live status tracking, and partner management.',
    results: ['75-page product surface', 'Live order tracking', 'QR booking flows', 'Unified partner/admin views'],
    architecture: ['React', 'TypeScript', 'Maps API', 'Webhooks', 'Dashboard flows'],
  },
  {
    title: 'Built and led an internal travel super-app used by a global luxury group across operations, customer journeys, and partner workflows.',
    industry: 'Luxury travel · B2B + B2C',
    problem:
      'The business needed a single operating layer across customer services, back-office coordination, and distributed partner operations without depending on disconnected tools.',
    solution:
      'Created a product platform for managing bookings, workflows, customer touchpoints, and internal coordination across multiple business units.',
    results: [
      'Operational system across business units',
      'Faster internal coordination',
      'Reduced fragmented workflows',
      'Improved service reliability',
    ],
    architecture: ['React', 'Workflow tooling', 'Internal APIs', 'Customer journeys', 'Ops dashboards'],
  },
  {
    title: 'Led a team of 10 engineers while shipping production systems, mentoring engineers, and balancing product quality with speed.',
    industry: 'Engineering leadership · Product delivery',
    problem:
      'A growing organisation needed senior technical leadership to maintain quality, reduce bottlenecks, and keep delivery consistent as product complexity increased.',
    solution:
      'Led engineering planning, code review, architecture decisions, and stakeholder communication across a fast-moving product environment.',
    results: [
      '10 engineer team leadership',
      'Architecture guidance',
      'Code quality culture',
      'Delivery consistency',
    ],
    architecture: ['Team leadership', 'Architecture', 'Code review', 'Execution', 'Mentoring'],
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding border-t border-border">
      <div className="container-max">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Case studies
          </p>
          <h2 className="text-3xl font-semibold tracking-[-0.05em] text-foreground md:text-5xl">
            High-ownership work, from product shipping to engineering leadership.
          </h2>
        </div>

        <div className="space-y-6">
          {studies.map((study) => (
            <article key={study.title} className="rounded-[28px] border border-border bg-card/90 p-6 md:p-8">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
                {study.industry}
              </p>
              <h3 className="max-w-4xl text-2xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
                {study.title}
              </h3>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Problem</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{study.problem}</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Solution</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Outcomes</p>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    {study.results.map((result) => (
                      <li key={result} className="flex gap-2">
                        <span className="text-muted-foreground">•</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-border">
                {study.architecture.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
