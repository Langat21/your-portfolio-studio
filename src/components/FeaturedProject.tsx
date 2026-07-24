import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FEATURED = {
  eyebrow: 'Featured Project',
  name: 'Opslayer',
  tagline: 'AI-powered operational infrastructure for operations-intensive businesses.',
  description:
    'A modular multi-tenant SaaS platform combining CRM, project management, field service management, customer portals, AI automation, and operational analytics — unified into a single operating system for modern operators. Leading product strategy, architecture, and engineering from concept to production.',
  role: 'Founder & Product Engineer',
  year: '2026 — Present',
  stack: ['React', 'Bubble', 'Xano', 'Supabase', 'OpenAI', 'n8n'],
  link: '#', // user will add link
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
    <section className="section-padding" ref={ref}>
      <div className="container-max">
        <div
          className={`flex items-end justify-between mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase">
            {FEATURED.eyebrow}
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
          className={`group block rounded-2xl border border-border hover:border-foreground/30 bg-card p-8 md:p-12 lg:p-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-8 space-y-6">
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
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
              <div className="flex flex-wrap gap-2 pt-2">
                {FEATURED.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
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
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default FeaturedProject;
