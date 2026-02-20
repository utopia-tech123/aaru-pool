const milestones = [
  {
    phase: "01",
    quarter: "Q1 2026",
    title: "Foundation",
    status: "completed",
    items: [
      "Infrastructure deployment & chain integrations",
      "AI agent beta program launch",
      "Core smart contract audits",
    ],
  },
  {
    phase: "02",
    quarter: "Q2 2026",
    title: "Activation",
    status: "active",
    items: [
      "Vault activation & first epoch",
      "Staking & veAARU enablement",
      "Initial liquidity bootstrapping",
    ],
  },
  {
    phase: "03",
    quarter: "Q3–Q4 2026",
    title: "Expansion",
    status: "upcoming",
    items: [
      "Multi-strategy pool expansion",
      "Cross-chain monitoring integration",
      "DAO governance v2 deployment",
    ],
  },
  {
    phase: "04",
    quarter: "2027",
    title: "Evolution",
    status: "upcoming",
    items: [
      "Advanced ZK privacy layers",
      "Institutional access tiers",
      "Cross-chain vault deployment",
    ],
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    dot: "bg-accent",
    glow: "glass-emerald",
    badge: { bg: "hsl(var(--accent) / 0.12)", border: "hsl(var(--accent) / 0.35)", color: "hsl(var(--accent))" },
    numColor: "hsl(var(--accent) / 0.10)",
    accentColor: "text-accent",
    arrow: "text-accent",
  },
  active: {
    label: "Live Now",
    dot: "bg-primary animate-pulse",
    glow: "glass-gold",
    badge: { bg: "hsl(var(--primary) / 0.12)", border: "hsl(var(--primary) / 0.40)", color: "hsl(var(--primary))" },
    numColor: "hsl(var(--primary) / 0.10)",
    accentColor: "text-primary",
    arrow: "text-primary",
  },
  upcoming: {
    label: "Upcoming",
    dot: "bg-muted-foreground/40",
    glow: "glass",
    badge: { bg: "hsl(var(--muted))", border: "hsl(var(--border))", color: "hsl(var(--muted-foreground))" },
    numColor: "hsl(var(--muted) / 0.5)",
    accentColor: "text-muted-foreground",
    arrow: "text-muted-foreground/50",
  },
};

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="py-14 relative overflow-hidden dark" style={{ background: "hsl(158 40% 12%)" }}>
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-0 w-60 h-60 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">Roadmap</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3 pb-2 text-gradient-gold">
          Path to the Future
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto text-sm">
          Structured milestones driving Aaru Pool from launch to institutional-grade DeFi.
        </p>

        {/* Progress bar connector */}
        <div className="max-w-5xl mx-auto mb-8 hidden md:flex items-center gap-0 px-8">
          {milestones.map((m, i) => {
            const cfg = statusConfig[m.status as keyof typeof statusConfig];
            return (
              <div key={m.phase} className="flex items-center flex-1">
                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${cfg.dot}`} />
                {i < milestones.length - 1 && (
                  <div className={`flex-1 h-px ${m.status === "upcoming" ? "bg-white/8" : m.status === "active" ? "bg-gradient-to-r from-primary/60 to-white/10" : "bg-accent/40"}`} />
                )}
              </div>
            );
          })}
        </div>

        {/* Cards grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {milestones.map((m) => {
            const cfg = statusConfig[m.status as keyof typeof statusConfig];
            return (
              <div
                key={m.phase}
                className={`${cfg.glow} rounded-2xl p-6 relative overflow-hidden flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Large background phase number */}
                <span
                  className="absolute -top-3 -right-2 font-heading text-8xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: cfg.numColor }}
                >
                  {m.phase}
                </span>

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cfg.badge.border.replace("0.35", "0.6").replace("0.4", "0.7").replace("0.12", "0.3")}, transparent)`,
                  }}
                />

                {/* Status badge */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{
                      background: cfg.badge.bg,
                      border: `1px solid ${cfg.badge.border}`,
                      color: cfg.badge.color,
                    }}
                  >
                    {cfg.label}
                  </span>
                  <span className="font-heading text-xs text-muted-foreground tracking-wide">{m.quarter}</span>
                </div>

                {/* Title */}
                <h3 className={`font-heading text-xl font-bold ${cfg.accentColor}`}>{m.title}</h3>

                {/* Items */}
                <ul className="space-y-2 flex-1">
                  {m.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className={`mt-0.5 flex-shrink-0 ${cfg.arrow}`}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
