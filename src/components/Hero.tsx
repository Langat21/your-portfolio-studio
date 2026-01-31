import profileAvatar from '@/assets/profile-avatar.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="container-max w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-primary font-medium tracking-wide opacity-0 animate-fade-up">
                HELLO, I'M
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight opacity-0 animate-fade-up animate-delay-100">
                Hi, I'm{' '}
                <span className="text-gradient">Your Name</span>.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-lg opacity-0 animate-fade-up animate-delay-200">
                I press buttons and interfaces happen. Full-stack developer crafting digital experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4 opacity-0 animate-fade-up animate-delay-300">
                <a
                  href="#works"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-secondary-foreground font-medium rounded-lg hover:bg-secondary/80 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative opacity-0 animate-scale-in animate-delay-200">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-300/20 rounded-full blur-3xl scale-110" />
              <div className="relative">
                <img
                  src={profileAvatar}
                  alt="Profile Avatar"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
