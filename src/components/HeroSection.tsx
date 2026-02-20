import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 bg-background/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/6 blur-[90px] pointer-events-none" />

      {/* Mesh grid overlay */}
      <div className="absolute inset-0 mesh-grid opacity-40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-28 pb-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow inline-block" />
            Decentralized DeX Fund · BNB Chain
          </span>
        </div>

        {/* Avatar */}
        <img
          src={avatar}
          alt="Aaru Pool"
          className="mx-auto w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-primary/40 glow-gold mb-8 object-cover animate-float"
        />

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          <span className="text-gradient-gold">Unlock High-Yield DeFi</span>
          <br />
          <span className="text-foreground">with Privacy, Control &amp; Governance</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-muted-foreground mb-10 font-light leading-relaxed">
          Aaru Pool is a decentralized, non-custodial protocol providing access to high-yield DeFi
          strategies through AI agents, epoch-based pools, and robust risk management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#subscribe"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full glow-green hover:opacity-90 transition-all duration-200"
          >
            Subscribe for Updates
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 glass-gold text-primary font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-primary/15 transition-all duration-200"
          >
            Explore Features
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-16 mx-auto max-w-2xl glass rounded-2xl px-6 py-5 grid grid-cols-3 gap-4 border border-white/5">
          {[
            { label: "Total Supply", value: "1B $AARU" },
            { label: "Listing Price", value: "$0.05" },
            { label: "Target Raise", value: "$4.97M" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-lg md:text-xl font-bold text-gradient-gold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Decorative line */}
        <div className="mt-12 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
