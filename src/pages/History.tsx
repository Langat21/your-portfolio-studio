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
    date: 'Dec 2025 – Present',
    summary:
      'Lead the engineering and deployment of digital operational platforms and internal software tools.',
    bullets: [
      'Architect AI-powered operational systems, automation pipelines, and core internal infrastructure.',
      'Define technical architecture, data models, and scalable API services across business units.',
      'Streamline business processes to eliminate manual intervention and increase operational throughput.',
    ],
  },
  {
    company: 'Opslayer',
    role: 'Founder & Product Engineer',
    date: 'May 2026 – Present',
    summary:
      'Building an AI-driven operational infrastructure platform designed for complex, service-heavy operations.',
    bullets: [
      'Engineered a modular SaaS platform unifying CRM, field management, client portals, and AI workflows.',
      'Directing product roadmap, database schema design, system security, and cloud deployment strategies.',
    ],
  },
  {
    company: 'Upwork',
    role: 'Senior Backend & AI Integration Engineer',
    date: 'Jan 2022 – Present',
    summary:
      'Delivered production-grade backend systems, custom APIs, and AI integrations for international startups and SMEs.',
    bullets: [
      'Engineered scalable FastAPI services, PostgreSQL architectures, and durable asynchronous task pipelines.',
      'Integrated LLMs, structured extraction algorithms, payment webhooks, and enterprise third-party APIs.',
      'Collaborated directly with technical founders to refactor legacy codebases, optimize SQL performance, and improve reliability.',
    ],
  },
];

const additional: Entry[] = [
  {
    company: 'FlexBuild',
    role: 'Backend Engineer',
    date: 'Jun 2025 – Oct 2025',
    summary:
      'Developed API-first backend microservices and AI-powered parsing workflows for legal technology and tender management software.',
  },
  {
    company: 'No Code Creations',
    role: 'Full-Stack Developer',
    date: 'Jan 2024 – Feb 2026',
    summary:
      'Engineered multi-tenant SaaS platforms, marketplaces, and business applications (Werkling, Cillionaire, Snapphoto) within distributed product teams.',
  },
  {
    company: 'Market Leader Technologies',
    role: 'Backend & Data Engineer',
    date: 'Jun 2024 – Sep 2025',
    summary:
      'Migrated solar installer backend systems to Xano and PostgreSQL for enterprise scale. Built real-time Salesforce integrations handling over 1,000 daily lead events.',
  },
  {
    company: 'Design Conformity',
    role: 'Software Developer',
    date: 'Sep 2023 – Jun 2025',
    summary:
      'Built reporting and compliance modules for a sustainability platform enabling manufacturers to measure carbon efficiency in alignment with international standards.',
  },
  {
    company: 'Tiny Builds',
    role: 'Senior Software Engineer',
    date: '2020 – 2021',
    summary:
      'Built fintech products, custom API plugins, payment infrastructure, and automation engines including a B2C loan processing system and cryptocurrency gateways.',
  },
  {
    company: 'Umbrella Financial Services',
    role: 'Backend Developer',
    date: 'Apr 2023 – May 2024',
    summary:
      'Engineered financial management tools featuring strict user access controls, secure data validation, and third-party banking integrations.',
  },
];

const education = [
  { degree: 'Master of Engineering (MEng), Computer Science', note: 'In Progress' },
  { degree: 'Bachelor of Science (BSc), Computer Science', note: 'The Catholic University of Eastern Africa' },
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
    className={`relative pl-6 md:pl-8 pb-10 last:pb-0 transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`}
    style={{ transitionDelay: isVisible ? `${index * 90}ms` : '0ms' }}
  >
    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-slate-400" />
    <div className="space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
        <div className="flex flex-wrap items-baseline gap-2">
          <h3 className="text-base font-semibold text-slate-100">{entry.role}</h3>
          <span className="text-sm font-medium text-indigo-400">@ {entry.company}</span>
        </div>
        <span className="text-xs text-slate-400 font-mono">{entry.date}</span>
      </div>
      <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
        {entry.summary}
      </p>
      {entry.bullets && (
        <ul className="space-y-1.5 pt-2 max-w-3xl">
          {entry.bullets.map((bullet, idx) => (
            <li key={idx} className="text-xs md:text-sm text-slate-400 flex items-start gap-2 leading-relaxed">
              <span className="text-indigo-400 font-bold select-none">•</span>
              <span>{bullet}</span>
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
    <div className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-slate-600" />
    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
      <div className="flex flex-wrap items-baseline gap-2">
        <h4 className="text-sm font-medium text-slate-200">{entry.role}</h4>
        <span className="text-xs text-slate-400">@ {entry.company}</span>
      </div>
      <span className="text-xs text-slate-500 font-mono">{entry.date}</span>
    </div>
    <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-3xl">
      {entry.summary}
    </p>
  </div>
);

export default function History() {
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navigation />

      <section className="flex-1 w-full max-w-5xl mx-auto px-6 md:px-10 py-24 space-y-16" ref={ref}>
        {/* Header Block */}
        <div className="space-y-4 w-full">
          <span
            className={`text-xs font-semibold tracking-widest text-indigo-400 uppercase block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Brian Lang'at &nbsp; Curriculum Vitae
          </span>
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Backend &amp; AI Integration Engineer
          </h1>
          <p
            className={`text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Software Engineer with a BSc in Computer Science, specializing in robust FastAPI backends, PostgreSQL database architecture, and production AI integrations. Extensive track record taking complete engineering responsibility for high-value business logic, API design, and automation across fintech, operations, logistics, legal tech, and SaaS systems.
          </p>
        </div>

        {/* Primary Professional Experience */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Primary Professional Roles
          </h2>
          <div className="relative border-l border-slate-800 ml-1">
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

        {/* Additional Selected Experience */}
        <div className="space-y-8">
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
            Selected Engineering Consultancies
          </h2>
          <div className="relative border-l border-slate-800 ml-1">
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

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-10 pt-6 border-t border-slate-800/80">
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Education
            </h2>
            <ul className="space-y-4">
              {education.map((e) => (
                <li key={e.degree} className="space-y-0.5">
                  <p className="text-sm font-semibold text-slate-200">{e.degree}</p>
                  {e.note && (
                    <p className="text-xs text-slate-400">{e.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Certifications
            </h2>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-slate-300 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}