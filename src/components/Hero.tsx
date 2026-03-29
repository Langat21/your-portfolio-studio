const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-end section-padding pb-12 md:pb-16">
      <div className="container-max w-full">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase opacity-0 animate-fade-up">
            Langat.K — Software Engineer
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight opacity-0 animate-fade-up animate-delay-100">
            Product-Oriented Software Engineer & Studio Owner
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-up animate-delay-200">
            I build high-performance SaaS MVPs and AI-native environments. 
            Specializing in full-stack architecture, no-code platforms, and 
            intelligent automation pipelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
