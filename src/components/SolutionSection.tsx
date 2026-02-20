const steps = [
  { label: "Proposal", icon: "𓁿", desc: "AI agents submit investment theses" },
  { label: "Voting", icon: "𓂀", desc: "Token holders cast on-chain votes" },
  { label: "Selection", icon: "𓃭", desc: "Winning strategy is selected" },
  { label: "Execution", icon: "𓋴", desc: "Strategy executes in ZK-shielded pool" },
  { label: "Settlement", icon: "𓊝", desc: "Yields distributed, fees burned" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-28 bg-gradient-egyptian relative overflow-hidden">
      <div className="absolute inset-0 mesh-dot opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-primary/6 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">The Solution</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          Epoch-Based AI Governance Model
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-sm leading-relaxed">
          Aaru Pool leverages AI agents competing for capital in structured cycles.
          Token holders govern strategies, ensuring alignment and oversight.
        </p>

        {/* Epoch flow — row 1: 3 cols, row 2: 2 cols centered */}
        <div className="max-w-3xl mx-auto mb-16 space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-5">
            {steps.slice(0, 3).map((s) => (
              <div
                key={s.label}
                className="glass-gold rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 glow-card"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="font-heading text-xs tracking-widest uppercase text-primary font-semibold">{s.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          {/* Row 2 — centered */}
          <div className="grid grid-cols-2 gap-5 max-w-[calc(66.66%-10px)] mx-auto">
            {steps.slice(3).map((s) => (
              <div
                key={s.label}
                className="glass-gold rounded-2xl p-6 flex flex-col items-center text-center gap-3 hover:border-primary/40 hover:-translate-y-0.5 transition-all duration-200 glow-card"
              >
                <span className="text-3xl">{s.icon}</span>
                <span className="font-heading text-xs tracking-widest uppercase text-primary font-semibold">{s.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Pillars */}
        <div className="max-w-4xl mx-auto mt-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-2xl font-bold text-gradient-gold mb-3">Core Protocol Pillars</h3>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Two foundational principles that make Aaru Pool the most trustworthy yield protocol in DeFi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Privacy First",
                icon: "🔐",
                badge: "ZK-Shielded",
                badgeColor: "emerald" as const,
                bullets: [
                  "Railgun & Aztec integration for shielded transactions",
                  "Viewing keys grant selective disclosure without exposure",
                  "ZK proofs of innocence maintain compliance",
                ],
                emerald: true,
              },
              {
                title: "Sustainable Revenue",
                icon: "♻️",
                badge: "Deflationary",
                badgeColor: "gold" as const,
                bullets: [
                  "Performance fees only — you pay for positive alpha",
                  "Staking rewards funded by protocol revenue",
                  "Buyback & burn mechanics reduce circulating supply",
                ],
                emerald: false,
              },
            ].map((c) => (
              <div
                key={c.title}
                className={`rounded-2xl p-7 glow-card ${c.emerald ? "glass-emerald" : "glass-gold"}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <h4 className="font-heading text-lg font-semibold text-foreground">{c.title}</h4>
                  </div>
                  <span
                    className="text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={c.emerald
                      ? { background: "hsl(162 55% 48% / 0.12)", border: "1px solid hsl(162 55% 48% / 0.3)", color: "hsl(162 65% 65%)" }
                      : { background: "hsl(43 78% 62% / 0.1)", border: "1px solid hsl(43 78% 62% / 0.3)", color: "hsl(43 85% 72%)" }
                    }
                  >
                    {c.badge}
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className={`mt-0.5 flex-shrink-0 ${c.emerald ? "text-accent" : "text-primary"}`}>→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
