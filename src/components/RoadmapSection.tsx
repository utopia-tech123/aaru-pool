const milestones = [
  { phase: "Q1 2026", title: "Foundation", desc: "Infrastructure deployment on BNB Chain, agent beta launch.", done: true },
  { phase: "Q2 2026", title: "Activation", desc: "Vault activation, staking enablement, initial liquidity.", done: true },
  { phase: "Q3–Q4 2026", title: "Expansion", desc: "Strategy expansion, cross-chain monitoring and integrations.", done: false },
  { phase: "2027", title: "Evolution", desc: "Advanced privacy layers, institutional access tiers.", done: false },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">Roadmap</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          Path to the Future
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Structured milestones driving Aaru Pool from launch to institutional-grade DeFi infrastructure.
        </p>

        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <div key={m.phase} className="flex gap-6 mb-10 last:mb-0 group">
              {/* Timeline column */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-300 ${
                  m.done
                    ? "border-accent bg-accent/15 glow-green"
                    : "border-primary/40 bg-primary/8 group-hover:border-primary/70"
                }`}>
                  {m.done
                    ? <span className="text-accent text-sm">✓</span>
                    : <span className="w-2 h-2 rounded-full bg-primary/60 inline-block" />
                  }
                </div>
                {i < milestones.length - 1 && (
                  <div className={`w-px flex-1 mt-2 ${m.done ? "bg-accent/30" : "bg-primary/15"}`} />
                )}
              </div>

              {/* Content */}
              <div className={`pb-10 last:pb-0 flex-1 rounded-2xl p-5 glow-card transition-all duration-200 group-hover:-translate-x-0.5 ${
                m.done ? "glass-emerald" : "glass-gold"
              }`}>
                <span className={`font-heading text-xs tracking-widest uppercase font-semibold ${
                  m.done ? "text-accent" : "text-primary"
                }`}>{m.phase}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1 mb-1.5">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
