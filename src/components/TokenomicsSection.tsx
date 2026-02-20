const metrics = [
  { label: "Token Symbol", value: "$AARU" },
  { label: "Total Supply", value: "1,000,000,000", note: "Fixed, no inflation" },
  { label: "Listing Price", value: "$0.05" },
  { label: "FDV at Listing", value: "$50,000,000" },
  { label: "Initial Circulating", value: "28,000,000", note: "2.8% of total" },
  { label: "Initial Market Cap", value: "$1,400,000" },
  { label: "Total Raise", value: "$4,970,000", note: "Pre-seed to strategic" },
];

const allocations = [
  { name: "Pre-Seed", pct: "3%", tokens: "30,000,000", tge: "0%", cliff: "6", vest: "18" },
  { name: "Seed", pct: "5%", tokens: "50,000,000", tge: "0%", cliff: "6", vest: "18" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 text-gradient-gold">
          Tokenomics: $AARU
        </h2>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-14">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card border border-gold/10 rounded-lg p-4 text-center">
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1 font-body">{m.label}</p>
              <p className="font-heading text-lg font-bold text-primary">{m.value}</p>
              {m.note && <p className="text-xs text-muted-foreground mt-1">{m.note}</p>}
            </div>
          ))}
        </div>

        {/* Allocation table */}
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Allocation</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gold/20">
                {["Allocation", "% Total", "Tokens", "TGE Unlock", "Cliff", "Vesting"].map((h) => (
                  <th key={h} className="text-left py-3 px-3 text-muted-foreground font-body font-medium text-xs uppercase tracking-widest">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allocations.map((a) => (
                <tr key={a.name} className="border-b border-gold/10 hover:bg-card/60 transition-colors">
                  <td className="py-3 px-3 text-foreground font-medium">{a.name}</td>
                  <td className="py-3 px-3 text-accent">{a.pct}</td>
                  <td className="py-3 px-3 text-foreground">{a.tokens}</td>
                  <td className="py-3 px-3 text-foreground">{a.tge}</td>
                  <td className="py-3 px-3 text-foreground">{a.cliff}mo</td>
                  <td className="py-3 px-3 text-foreground">{a.vest}mo</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm max-w-xl mx-auto">
          veAARU staking boosts voting power and yields. Deflationary buyback and burn from revenue.
        </p>
      </div>
    </section>
  );
};

export default TokenomicsSection;
