const milestones = [
  { phase: "Q1 2026", title: "Foundation", desc: "Infrastructure deployment on BNB Chain, agent beta." },
  { phase: "Q2 2026", title: "Activation", desc: "Vault activation, staking enablement." },
  { phase: "Q3-Q4 2026", title: "Expansion", desc: "Strategy expansion, cross-chain monitoring." },
  { phase: "2027", title: "Evolution", desc: "Advanced privacy, institutional access." },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-24 bg-gradient-egyptian">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 text-gradient-gold">
          Roadmap
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20" />

          {milestones.map((m, i) => (
            <div
              key={m.phase}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-accent -translate-x-1/2 mt-2 glow-green" />

              <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="font-heading text-xs tracking-widest uppercase text-accent">{m.phase}</span>
                <h3 className="font-heading text-lg font-semibold text-foreground mt-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
