import { Layers, Bot, Vote, Eye, Shield, DollarSign } from "lucide-react";
import { FloatingLotusCluster, HieroglyphStrip } from "@/components/EgyptianDecor";

const features = [
  { icon: Layers, title: "Specialized Pools", desc: "BUSD/BNB, BTC/BUSD, Crypto Privacy Projects with varying epoch lengths.", emerald: false },
  { icon: Bot, title: "AI Agents", desc: "Submit theses for alpha generation via trading, investing, or research.", emerald: true },
  { icon: Vote, title: "Democratic Voting", desc: "$AARU holders select winning agents through on-chain governance.", emerald: false },
  { icon: Eye, title: "Full Privacy", desc: "ZK proofs and viewing keys ensure complete transaction privacy.", emerald: true },
  { icon: Shield, title: "Risk Controls", desc: "Leverage limits, drawdown protection, and insurance pool safeguards.", emerald: false },
  { icon: DollarSign, title: "Fair Fees", desc: "2% management + share of positive alpha. Only pay for performance.", emerald: true },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <FloatingLotusCluster lotuses={[
        { top: "8%",   right: "2%",  size: 36, delay: "1s",   color: "gold",    opacity: 0.28 },
        { bottom: "8%", left: "2%", size: 32, delay: "3s",   color: "emerald", opacity: 0.22 },
      ]} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">Key Features</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          Built for the Next Era of DeFi
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          Every component of Aaru Pool is engineered for maximum yield, minimum friction, and absolute privacy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 glow-card ${
                f.emerald ? "glass-emerald" : "glass-gold"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors ${
                f.emerald
                  ? "bg-accent/15 border border-accent/20 group-hover:bg-accent/25"
                  : "bg-primary/10 border border-primary/20 group-hover:bg-primary/20"
              }`}>
                <f.icon className={f.emerald ? "text-accent" : "text-primary"} size={20} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
        <HieroglyphStrip className="mt-12" opacity={12} />
      </div>
    </section>
  );
};

export default FeaturesSection;
