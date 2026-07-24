import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect, useRef, useState } from 'react';

type Entry = {
  company: string;
  role: string;
  date: string;
  summary: string;
  bullets?: string[];
};

const experience: Entry[] = [
  {
    company: 'KHL Group',
    role: 'Product Software Engineer',
    date: 'Dec 2025 — Present',
    summary:
      'Lead the design and development of digital platforms supporting multiple business operations.',
    bullets: [
      'Architect AI-powered operational systems, automation workflows, and internal software tools.',
      'Define product roadmaps, technical architecture, and scalable software solutions.',
      'Build systems that improve operational efficiency and reduce manual processes.',
    ],
  },
  {
    company: 'Opslayer',
    role: 'Founder & Product Engineer',
    date: 'May 2026 — Present',
    summary:
      'Building an AI-powered operational infrastructure platform for operations-intensive businesses.',
    bullets: [
      'Designed a modular SaaS platform combining CRM, project management, field operations, customer portals, AI automation, and analytics.',
      'Leading product strategy, software architecture, and engineering execution from concept to production.',
    ],
  },
  {
    company: 'Upwork',
    role: 'Senior Software Engineer',
    date: 'Jan 2022 — Present',
    summary:
      'Delivered software solutions for startups and SMEs across fintech, logistics, healthcare, sustainability, operations, and marketplaces.',
    bullets: [
      'Built scalable SaaS platforms, backend APIs, AI-powered applications, and workflow automation systems.',
      'Integrated third-party services including OpenAI, Stripe, Plaid, payment gateways, and enterprise APIs.',
      'Worked directly with founders and product teams to transform business requirements into production-ready software.',
    ],
  },
];

const additional: Entry[] = [
  {
    company: 'FlexBuild',
    role: 'Back End Engineer',
    date: 'Jun 2025 — Oct 2025',
    summary:
      'Built backend services and AI-powered applications supporting legal technology and tender management platforms using modern API-first architecture.',
  },
  {
    company: 'No Code Creations',
    role: 'Low-Code Developer',
    date: 'Jan 2024 — Feb 2026',
    summary:
      'Delivered SaaS applications, marketplaces, and operational software (Werkling, Cillionaire, Snapphoto) while collaborating across distributed product teams.',
  },
  {
    company: 'Market Leader Technologies',
    role: 'Bubble / Xano Developer',
    date: 'Jun 2024 — Sep 2025',
    summary:
      'Migrated a solar installers platform from Bubble to Xano for scale. Built real-time Salesforce-synced dashboards processing 1,000+ leads daily.',
  },
  {
    company: 'Design Conformity',
    role: 'Software Developer',
    date: 'Sep 2023 — Jun 2025',
    summary:
      'Developed features for a sustainability platform helping furniture manufacturers measure and report carbon efficiency in line with international standards. EcoVadis Gold Certified.',
  },
  {
    company: 'Tiny Builds',
    role: 'Senior Bubble Developer',
    date: '2020 — 2021',
    summary:
      'Developed fintech products, payment infrastructure, Bubble plugins, and automation solutions for international clients — including a B2C mortgage platform, a Confirmo crypto payments plugin, and an n8n automation plugin.',
  },
  {
    company: 'Umbrella Financial Services',
    role: 'Bubble Developer',
    date: 'Apr 2023 — May 2024',
    summary:
      'Built financial services software with secure backend workflows, API integrations, and customer management functionality.',
  },
];

const education = [
  { degree: 'Master of Engineering (MEng), Computer Science', note: 'In Progress' },
  { degree: 'Bachelor of Science (BSc), Computer Science', note: null },
];

const certifications = [
  'Certified Bubble Developer',
  'Xano Developer Certification',
  'Associate Software Developer',
];

const ExperienceCard = ({
  entry,
  index,
  isVisible,
}: {
  entry: Entry;
  index: number;
  isVisible: boolean;
}) => (
  <div
    className={`relative pl-8 md:pl-10 pb-10 last:pb-0 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
  >
    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-foreground/70" />
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
        <h3 className="text-base font-semibold text-foreground">{entry.role}</h3>
        <span className="text-sm text-muted-foreground">— {entry.company}</span>
        <span className="text-xs text-muted-foreground/60 sm:ml-auto">{entry.date}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        {entry.summary}
      </p>
      {entry.bullets && (
        <ul className="space-y-1.5 pt-1 max-w-3xl">
          {entry.bullets.map((b) => (
            <li key={b} className="text-sm text-muted-foreground/90 flex gap-2 leading-relaxed">
              <span className="text-muted-foreground/40">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const AdditionalCard = ({
  entry,
  index,
  isVisible,
}: {
  entry: Entry;
  index: number;
  isVisible: boolean;
}) => (
  <div
    className={`relative pl-6 pb-6 last:pb-0 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms' }}
  >
    <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 mb-1.5">
      <h4 className="text-sm font-medium text-foreground">
        {entry.role} <span className="text-muted-foreground">— {entry.company}</span>
      </h4>
      <span className="text-xs text-muted-foreground/60 sm:ml-auto">{entry.date}</span>
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
      {entry.summary}
    </p>
  </div>
);

const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.03 }
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
            Brian Lang'at — Curriculum Vitae
          </p>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 max-w-3xl transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Software Engineer · AI &amp; Automation Engineer · Product Engineer
          </h1>
          <p
            className={`text-base text-muted-foreground max-w-3xl leading-relaxed mb-16 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Software Engineer with a BSc in Computer Science and experience building
            AI-powered SaaS platforms, enterprise business applications, and workflow
            automation systems. Proven ability to design, develop, and deliver
            production-ready software across fintech, operations, logistics,
            sustainability, healthcare, and marketplace industries.
          </p>

          {/* Professional Experience */}
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase mb-8">
              Professional Experience
            </p>
            <div className="relative">
              <div className="absolute left-[3px] top-3 bottom-3 w-px bg-border" />
              {experience.map((entry, i) => (
                <ExperienceCard
                  key={entry.company}
                  entry={entry}
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Additional */}
          <div className="mb-16">
            <p className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase mb-8">
              Additional Experience
            </p>
            <div className="relative">
              <div className="absolute left-[2px] top-2 bottom-2 w-px bg-border" />
              {additional.map((entry, i) => (
                <AdditionalCard
                  key={entry.company}
                  entry={entry}
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Education
              </p>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="text-sm text-foreground">{e.degree}</p>
                    {e.note && (
                      <p className="text-xs text-muted-foreground mt-0.5">{e.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-medium tracking-[0.3em] text-muted-foreground uppercase mb-6">
                Certifications
              </p>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="text-sm text-foreground">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;
