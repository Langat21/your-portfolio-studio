import { useEffect, useRef, useState } from 'react';

const Summary = () => {
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
          className={`max-w-3xl transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-8">
            Professional Summary
          </p>
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Software Engineer with a BSc in Computer Science, building AI-powered SaaS
            platforms, enterprise business applications, and workflow automation systems.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Proven track record designing and delivering production software across
            fintech, operations, logistics, sustainability, healthcare, and marketplace
            industries. Experienced in full-stack development, backend architecture, API
            integrations, cloud systems, and AI automation using React, TypeScript, Python,
            Node.js, FastAPI, Bubble, Xano, Supabase, PostgreSQL, and OpenAI. Passionate
            about scalable software that simplifies operations and unlocks business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
