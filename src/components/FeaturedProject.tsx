import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED = {
  tag: 'AI Operational Infrastructure Platform',
  name: 'Opslayer',
  tagline:
    'A single workspace where operations-heavy businesses run projects, technicians, clients, approvals, documents, and reporting.',
  description:
    'Designed and built an operational software platform that unifies fragmented spreadsheets, WhatsApp threads, and legacy tools into one workspace — with AI-assisted workflows, customer portals, risk monitoring, and a reporting engine.',
  capabilities: [
    'Multi-workspace SaaS',
    'AI-powered workflows',
    'Customer portal',
    'Technician management',
    'Risk monitoring',
    'Reporting engine',
    'Workflow automation',
  ],
  role: 'Founder & Product Engineer',
  year: '2026 — Present',
  stack: ['Bubble', 'Xano', 'FastAPI', 'OpenAI', 'n8n', 'Supabase'],
  link: '#',
};

const FeaturedProject = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding border-t border-border" ref={ref}>
      <div className="container-max">
        <div
          className={`flex items-end justify-between mb-10 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
            Featured Project
          </p>
          <Link
            to="/portfolio"
            className="text-xs font-medium tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5"
          >
            All Work <ArrowUpRight size={14} />
          </Link>
        </div>

        <a
          href={FEATURED.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block rounded-3xl border border-border hover:border-foreground/30 bg-card p-8 md:p-12 lg:p-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-[11px] font-medium tracking-widest uppercase text-muted-foreground/70 mb-4">
            {FEATURED.tag}
          </p>

          <div className="grid md:grid-cols-12 gap-10 md:gap-12">
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-baseline gap-3">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  {FEATURED.name}
                </h2>
                <ArrowUpRight
                  size={28}
                  className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-snug max-w-2xl">
                {FEATURED.tagline}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {FEATURED.description}
              </p>

              <div className="pt-2">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-3">
                  What it does
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {FEATURED.capabilities.map((c) => (
                    <li
                      key={c}
                      className="text-[11px] tracking-wide text-foreground/80 border border-border rounded-full px-2.5 py-1"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-3">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {FEATURED.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono tracking-wide text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 md:border-l md:border-border md:pl-8 space-y-6">
              <div>
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-1.5">
                  Role
                </p>
                <p className="text-sm text-foreground">{FEATURED.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-1.5">
                  Timeline
                </p>
                <p className="text-sm text-foreground">{FEATURED.year}</p>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-1.5">
                  Scope
                </p>
                <p className="text-sm text-foreground">
                  Product · Architecture · Engineering
                </p>
              </div>

              {/* Mini workflow */}
              <div className="pt-4 border-t border-border">
                <p className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground/60 mb-3">
                  Workflow
                </p>
                <div className="flex flex-col gap-1.5 font-mono text-[11px] text-muted-foreground">
                  {['Lead', 'CRM', 'AI Ops', 'Portal', 'Reports'].map((s, i, arr) => (
                    <div key={s} className="flex flex-col">
                      <span>{s}</span>
                      {i < arr.length - 1 && <span className="opacity-40">↓</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProject;
