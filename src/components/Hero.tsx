import { ArrowUpRight, Calendar, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const workflowSteps = ['Lead', 'Scraping', 'CRM', 'Automation', 'AI', 'Reports', 'Ops'];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-end section-padding pb-16 md:pb-24 overflow-hidden">
      {/* Ambient workflow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] select-none"
      >
        <div className="flex flex-col items-center gap-6 text-sm md:text-base font-mono tracking-wider">
          {workflowSteps.map((step, i) => (
            <div key={step} className="flex flex-col items-center gap-2">
              <span
                className="opacity-0 animate-fade-up"
                style={{ animationDelay: `${i * 120}ms`, animationFillMode: 'forwards' }}
              >
                {step}
              </span>
              {i < workflowSteps.length - 1 && (
                <span
                  className="opacity-0 animate-fade-in"
                  style={{ animationDelay: `${i * 120 + 60}ms`, animationFillMode: 'forwards' }}
                >
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gradient fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
      />

      <div className="container-max w-full relative">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase opacity-0 animate-fade-up">
            Brian Lang'at — Operations Software &amp; AI Automation Engineer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight opacity-0 animate-fade-up animate-delay-100">
            I build AI-powered operational software for logistics, solar, and field service companies.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-up animate-delay-200">
            From lead generation to AI automation, I design internal platforms that
            eliminate manual work, centralize operations, and help teams scale.
          </p>

          <div className="flex flex-wrap gap-3 pt-4 opacity-0 animate-fade-up animate-delay-300">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-foreground text-background rounded-full px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects <ArrowUpRight size={16} />
            </Link>
            <a
              href="https://cal.com/brianlangat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border hover:border-foreground/40 rounded-full px-5 py-2.5 text-sm font-medium text-foreground transition-colors"
            >
              <Calendar size={16} /> Book a Call
            </a>
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 border border-border hover:border-foreground/40 rounded-full px-5 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
