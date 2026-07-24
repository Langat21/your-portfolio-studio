import { useEffect, useRef, useState } from 'react';

const studies = [
  {
    title: 'Helping Solar Companies Replace Spreadsheet Operations',
    industry: 'Solar · Field Service',
    problem:
      'Sales, installations, technicians, and customer updates were managed across spreadsheets and WhatsApp. Nothing was visible, nothing was measurable, and every hand-off leaked information.',
    solution:
      'Designed a centralised operations platform integrating CRM, project management, technician scheduling, AI reporting, and customer communication into a single workspace.',
    results: [
      'Single operational workspace',
      'Reduced manual administration',
      'Improved project visibility',
      'Automated repetitive workflows',
    ],
    architecture: ['Website', 'FastAPI', 'OpenAI', 'Supabase', 'n8n', 'Bubble'],
  },
  {
    title: 'Turning Manual Prospecting into a Continuous Pipeline',
    industry: 'B2B Sales · Lead Engineering',
    problem:
      'Sales teams were manually searching Google Maps and websites for prospects, then copying details into spreadsheets before any outreach could happen.',
    solution:
      'Built an automated prospect discovery engine — scraping business sources, enriching companies, discovering contacts, and pushing outreach-ready lead lists straight into the CRM.',
    results: [
      'Continuous lead flow',
      'AI-classified prospects',
      'CRM-ready enriched data',
      'Zero manual data entry',
    ],
    architecture: ['Google Maps', 'Scraper', 'AI Extraction', 'Enrichment', 'CRM'],
  },
];

const CaseStudies = () => {
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
            Case Studies
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
            Real problems. Systems that quietly do the work.
          </h2>
        </div>

        <div className="space-y-10">
          {studies.map((study, index) => (
            <div
              key={study.title}
              className={`rounded-2xl border border-border bg-card p-8 md:p-10 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: isVisible ? `${index * 120}ms` : '0ms' }}
            >
              <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/70 mb-3">
                {study.industry}
              </p>
              <h3 className="text-xl md:text-2xl font-semibold mb-6 max-w-3xl leading-snug">
                {study.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-2">
                    Problem
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-2">
                    Solution
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {study.solution}
                  </p>
                </div>
                <div>
                  <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-2">
                    Results
                  </p>
                  <ul className="space-y-1.5">
                    {study.results.map((r) => (
                      <li key={r} className="text-sm text-foreground/90 flex gap-2">
                        <span className="text-muted-foreground/50">—</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-3">
                  Architecture
                </p>
                <div className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  {study.architecture.map((node, i, arr) => (
                    <span key={node} className="flex items-center gap-1.5">
                      <span className="border border-border rounded px-2 py-1">{node}</span>
                      {i < arr.length - 1 && <span className="opacity-50">→</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
