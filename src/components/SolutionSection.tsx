const steps = [
  { label: "Proposal", icon: "𓁿" },
  { label: "Voting", icon: "𓂀" },
  { label: "Selection", icon: "𓃭" },
  { label: "Execution", icon: "𓋴" },
  { label: "Settlement", icon: "𓊝" },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          The Solution
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Aaru Pool's Epoch-Based Model leverages AI agents competing for capital in structured cycles.
          Token holders govern strategies, ensuring alignment and oversight.
        </p>

        {/* Epoch flow */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">{s.icon}</span>
                <span className="text-xs font-heading tracking-widest uppercase text-primary">
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden sm:block w-8 h-px bg-primary/40 mt-[-12px]" />
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">Privacy First</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Privacy is ensured via Railgun and Aztec for ZK-shielded transactions, viewing keys, and
              ZK proofs of innocence.
            </p>
          </div>
          <div className="bg-card border border-gold/10 rounded-lg p-6">
            <h3 className="font-heading text-lg font-semibold text-primary mb-3">Sustainable Revenue</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Revenue from performance fees funds staking rewards, treasury, and buyback/burn mechanisms
              for long-term value creation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
