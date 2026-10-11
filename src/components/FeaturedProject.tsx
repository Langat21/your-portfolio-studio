import { ArrowUpRight } from 'lucide-react';

const FEATURED = {
  tag: 'AI job search and outreach platform',
  name: 'AI Job Finder',
  tagline:
    'Job search and outreach platform with rule + LLM ranking and a self-checking email pipeline.',
  description:
    'A focused product that takes the pain out of job hunting across multiple boards, registers, and inboxes. It consolidates opportunity discovery, filters for quality, ranks matches, and automates the next step without the usual manual grind.',
  capabilities: [
    'Multi-source scraping',
    'LLM ranking',
    'Email pipeline',
    'Visa filters',
    'AI summaries',
  ],
  role: 'Founder & Product Engineer',
  year: '2025',
  stack: [
    'Next.js',
    'TypeScript',
    'PostgreSQL',
    'OpenAI',
    'Vercel',
    'Node.js',
  ],
  link: '#',
};

const FeaturedProject = () => {
  return (
    <section id="featured-project" className="section-padding border-t border-border">
      <div className="container-max">
        <div className="mb-8 flex items-end justify-between gap-4">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Featured project
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            All work <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="rounded-[28px] border border-border bg-card/80 p-6 md:p-10">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground/80">
            {FEATURED.tag}
          </p>

          <div className="grid gap-8 md:grid-cols-[1.4fr_0.6fr] md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.06em] text-foreground md:text-5xl">
                {FEATURED.name}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-foreground/90 md:text-2xl">
                {FEATURED.tagline}
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {FEATURED.description}
              </p>

              <div className="mt-8">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground/70">
                  What it does
                </p>
                <div className="flex flex-wrap gap-2">
                  {FEATURED.capabilities.map((item) => (
                    <span key={item} className="rounded-full border border-border px-3 py-1.5 text-[11px] text-foreground/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5 rounded-2xl border border-border bg-background/50 p-4 md:p-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Role</p>
                <p className="mt-2 text-base text-foreground">{FEATURED.role}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Year</p>
                <p className="mt-2 text-base text-foreground">{FEATURED.year}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70">Stack</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {FEATURED.stack.map((item) => (
                    <span key={item} className="rounded-full bg-muted px-2.5 py-1 text-[10px] text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
