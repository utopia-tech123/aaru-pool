import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-24 pb-16">
        {/* Avatar */}
        <img
          src={avatar}
          alt="Aaru Pool Avatar"
          className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-primary/50 glow-gold mb-8 object-cover animate-float"
        />

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient-gold">Unlock High-Yield DeFi</span>
          <br />
          <span className="text-foreground">with Privacy, Control &amp; Governance</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 font-light leading-relaxed">
          Aaru Pool is a decentralized, non-custodial protocol providing access to high-yield DeFi
          strategies through AI agents, epoch-based pools, and robust risk management.
        </p>

        <a
          href="#subscribe"
          className="inline-block bg-accent text-accent-foreground font-heading font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm glow-green hover:opacity-90 transition-opacity"
        >
          Subscribe for Updates
        </a>

        {/* Decorative line */}
        <div className="mt-16 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
