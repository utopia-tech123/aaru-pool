import { FloatingLotusCluster, NileRipple, LightSectionDecor } from "@/components/EgyptianDecor";

const metrics = [
  { label: "Token Symbol", value: "$AARU" },
  { label: "Total Supply", value: "1,000,000,000", note: "Fixed · No Inflation" },
  { label: "Listing Price", value: "$0.05" },
  { label: "FDV at Listing", value: "$50M" },
  { label: "Initial Circulating", value: "28,000,000", note: "2.8% of total" },
  { label: "Initial Market Cap", value: "$1.4M" },
  { label: "Total Raise", value: "$4.97M", note: "Pre-seed to Strategic" },
];

const allocations = [
  { name: "Pre-Seed", pct: "3%", tokens: "30,000,000", tge: "0%", cliff: "6", vest: "18" },
  { name: "Seed", pct: "5%", tokens: "50,000,000", tge: "0%", cliff: "6", vest: "18" },
];

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="py-14 bg-gradient-egyptian relative overflow-hidden">
      <div className="absolute inset-0 mesh-dot opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/6 blur-[100px] rounded-full pointer-events-none" />
      <LightSectionDecor />
      <FloatingLotusCluster lotuses={[
        { top: "10%",  left: "2%",  size: 34, delay: "0.8s", color: "gold",    opacity: 0.25 },
        { bottom: "8%", right: "2%", size: 30, delay: "2.3s", color: "emerald", opacity: 0.22 },
      ]} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">Tokenomics</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 pb-2 text-gradient-gold">
          $AARU Token Economics
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          Fixed supply, deflationary mechanics, and aligned incentives for long-term holders.
        </p>

        {/* Metrics grid — 2 cols on mobile, 3 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {metrics.map((m) => (
            <div key={m.label} className="glass-gold rounded-2xl p-3 sm:p-5 text-center glow-card group hover:-translate-y-0.5 transition-transform duration-200">
              <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest mb-1.5 font-body leading-tight">{m.label}</p>
              <p className="font-heading text-base sm:text-xl font-bold text-gradient-gold break-all leading-tight">{m.value}</p>
              {m.note && <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-tight">{m.note}</p>}
            </div>
          ))}
        </div>

        {/* Allocation table — full horizontal scroll on mobile */}
        <div className="max-w-4xl mx-auto glass-gold rounded-2xl overflow-hidden">
          <div className="px-4 sm:px-6 pt-5 pb-2">
            <h3 className="font-heading text-base sm:text-lg font-semibold text-foreground mb-1">Allocation Schedule</h3>
            <p className="text-xs text-muted-foreground">Cliff and vesting periods in months</p>
          </div>
          <div className="overflow-x-auto -mx-0">
            <table className="w-full text-sm min-w-[480px]">
              <thead>
                <tr className="border-b border-border/30">
                  {["Allocation", "% Total", "Tokens", "TGE Unlock", "Cliff", "Vesting"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 sm:px-6 text-muted-foreground font-body font-medium text-[10px] sm:text-xs uppercase tracking-widest whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allocations.map((a) => (
                  <tr key={a.name} className="border-b border-border/20 last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4 sm:px-6 text-foreground font-medium text-xs sm:text-sm">{a.name}</td>
                    <td className="py-3 px-4 sm:px-6 text-accent font-semibold text-xs sm:text-sm">{a.pct}</td>
                    <td className="py-3 px-4 sm:px-6 text-foreground text-xs sm:text-sm">{a.tokens}</td>
                    <td className="py-3 px-4 sm:px-6 text-muted-foreground text-xs sm:text-sm">{a.tge}</td>
                    <td className="py-3 px-4 sm:px-6 text-foreground text-xs sm:text-sm">{a.cliff}mo</td>
                    <td className="py-3 px-4 sm:px-6 text-foreground text-xs sm:text-sm">{a.vest}mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <NileRipple className="mt-10 mb-4 opacity-50" />
        <p className="text-center text-muted-foreground mt-2 text-xs max-w-xl mx-auto leading-relaxed">
          veAARU staking boosts voting power and yields. Deflationary buyback and burn from revenue.
        </p>
      </div>
    </section>
  );
};

export default TokenomicsSection;
