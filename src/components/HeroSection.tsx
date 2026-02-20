import heroBg from "@/assets/hero-bg.jpg";
import avatar from "@/assets/avatar.jpeg";

const HieroglyphBar = () => (
  <div className="flex items-center justify-center gap-1 opacity-30 select-none pointer-events-none overflow-hidden" aria-hidden>
    {["𓂀","𓆣","𓇳","𓂋","𓁹","𓆙","𓏏","𓃭","𓆑","𓅓","𓇯","𓂝","𓆗","𓃠","𓇼","𓂀"].map((g, i) => (
      <span key={i} className="font-['NotoSansEgyptian'] text-primary text-base md:text-xl shrink-0">{g}</span>
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <div className="dark">
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay + gradient */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-accent/8 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[200px] h-[200px] rounded-full bg-primary/6 blur-[80px] pointer-events-none" />

      {/* Mesh grid overlay */}
      <div className="absolute inset-0 mesh-grid opacity-30 pointer-events-none" />

      {/* Egyptian corner ornaments */}
      <div className="hidden sm:block absolute top-24 left-6 md:left-12 opacity-15 pointer-events-none select-none" aria-hidden>
        <div className="font-['NotoSansEgyptian'] text-primary text-5xl md:text-7xl leading-none">𓇳</div>
        <div className="font-['NotoSansEgyptian'] text-primary text-3xl md:text-5xl leading-none mt-1 ml-2">𓂀</div>
      </div>
      <div className="hidden sm:block absolute top-24 right-6 md:right-12 opacity-15 pointer-events-none select-none text-right" aria-hidden>
        <div className="font-['NotoSansEgyptian'] text-primary text-5xl md:text-7xl leading-none">𓆣</div>
        <div className="font-['NotoSansEgyptian'] text-primary text-3xl md:text-5xl leading-none mt-1 mr-2">𓁹</div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-4 pt-28 pb-20">

        {/* Hieroglyph top bar */}
        <div className="mb-6">
          <HieroglyphBar />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="badge-pill">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow inline-block" />
            Decentralized DeX Fund · Multi-Chain
          </span>
        </div>

        {/* Avatar with Egyptian ring */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Rotating outer ring */}
            <div className="absolute -inset-3 rounded-full border border-primary/20 animate-spin-slow" />
            <div className="absolute -inset-5 rounded-full border border-primary/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            {/* Glyph dots on ring */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 font-['NotoSansEgyptian'] text-primary text-xs opacity-50">𓇳</div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-['NotoSansEgyptian'] text-primary text-xs opacity-50">𓂀</div>
            <img
              src={avatar}
              alt="Aaru Pool"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-primary/50 glow-gold object-cover animate-float"
            />
          </div>
        </div>

        {/* Eyebrow */}
        <p className="font-heading text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.3em] uppercase text-primary/70 mb-4 px-2">
          The Field of Eternal Yield · DAO Governed · AI Powered
        </p>

        <h1 className="font-heading text-3xl sm:text-5xl md:text-7xl font-bold mb-6 pb-3 leading-tight tracking-tight">
          <span className="text-gradient-gold">Rise with the Chosen.</span>
          <br />
          <span className="text-foreground">Own the Protocol.</span>
          <br />
          <span className="text-gradient-green">Govern the Vault.</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-lg text-muted-foreground mb-4 font-light leading-relaxed px-1">
          Aaru Pool is a decentralized, non-custodial DeFi protocol powered by AI agents and epoch-based
          pools. Early members shape governance and unlock exclusive high-yield vaults, before the gates open to all.
        </p>

        {/* DAO urgency line */}
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-primary/80 mb-8 font-semibold tracking-wide px-2">
          ⚡ Aaru DAO seats are limited. Secure yours before the first epoch begins.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center px-2">
          <a
            href="#subscribe"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-7 sm:px-10 py-4 rounded-full glow-green hover:opacity-90 transition-all duration-200 shadow-lg"
          >
            <span>𓂀</span>
            Join the DAO: Get Early Access
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 glass-gold text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase px-7 sm:px-8 py-4 rounded-full hover:bg-primary/15 transition-all duration-200"
          >
            Explore the Vault
          </a>
        </div>

        {/* Trust micro-copy */}
        <p className="mt-4 text-[10px] sm:text-xs text-muted-foreground opacity-60 tracking-wide px-2">
          Non-custodial · ZK-private · DAO governed · Audited smart contracts
        </p>

        {/* Stats bar */}
        <div className="mt-10 mx-auto max-w-2xl glass-gold rounded-2xl px-3 sm:px-6 py-4 sm:py-5 grid grid-cols-3 gap-2 sm:gap-4 relative overflow-hidden">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          {[
            { label: "Total Supply", value: "1B $AARU" },
            { label: "Listing Price", value: "$0.05" },
            { label: "Target Raise", value: "$4.97M" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-sm sm:text-lg md:text-xl font-bold text-gradient-gold">{s.value}</p>
              <p className="text-[9px] sm:text-xs text-muted-foreground mt-1 tracking-wide uppercase leading-tight">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;

