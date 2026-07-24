const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-end section-padding pb-12 md:pb-16">
      <div className="container-max w-full">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase opacity-0 animate-fade-up">
            Brian Lang'at — Software Engineer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight opacity-0 animate-fade-up animate-delay-100">
            Software Engineer building AI-powered SaaS &amp; automation platforms.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed opacity-0 animate-fade-up animate-delay-200">
            BSc in Computer Science with experience shipping production software across
            fintech, operations, logistics, sustainability, healthcare, and marketplaces.
            I design full-stack systems, backend architecture, API integrations, and AI
            automation — turning complex business workflows into scalable products.
          </p>
          <div className="flex flex-wrap gap-2 pt-2 opacity-0 animate-fade-up animate-delay-300">
            {['AI & Automation', 'Product Engineering', 'SaaS Architecture'].map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
