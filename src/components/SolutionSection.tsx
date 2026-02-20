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

        {/* Epoch flow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex flex-col sm:flex-row items-stretch gap-0">
            {steps.map((s, i) => (
              <div key={s.label} className="flex sm:flex-col items-center sm:items-stretch flex-1">
                <div className="glass-gold rounded-2xl p-5 flex-1 flex flex-col items-center text-center gap-3 hover:border-primary/40 transition-all duration-200 group">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="font-heading text-xs tracking-widest uppercase text-primary font-semibold">
                    {s.label}
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed hidden sm:block">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="sm:hidden mx-3 w-px h-8 bg-primary/30" />
                )}
                {i < steps.length - 1 && (
                  <div className="hidden sm:flex items-center justify-center w-5 flex-shrink-0 self-center">
                    <div className="w-full h-px bg-gradient-to-r from-primary/40 to-primary/10" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              title: "Privacy First",
              icon: "🔐",
              text: "Privacy is ensured via Railgun and Aztec for ZK-shielded transactions, viewing keys, and ZK proofs of innocence.",
              emerald: true,
            },
            {
              title: "Sustainable Revenue",
              icon: "♻️",
              text: "Revenue from performance fees funds staking rewards, treasury, and buyback/burn mechanisms for long-term value creation.",
              emerald: false,
            },
          ].map((c) => (
            <div key={c.title} className={`rounded-2xl p-7 glow-card ${c.emerald ? "glass-emerald" : "glass-gold"}`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{c.icon}</span>
                <h3 className="font-heading text-lg font-semibold text-primary">{c.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
