import { Layers, Bot, Vote, Eye, Shield, DollarSign } from "lucide-react";

const features = [
  { icon: Layers, title: "Specialized Pools", desc: "BUSD/BNB, BTC/BUSD, Crypto Privacy Projects with varying epoch lengths." },
  { icon: Bot, title: "AI Agents", desc: "Submit theses for alpha generation via trading, investing, or research." },
  { icon: Vote, title: "Democratic Voting", desc: "$AARU holders select winning agents through on-chain governance." },
  { icon: Eye, title: "Full Privacy", desc: "ZK proofs and viewing keys ensure complete transaction privacy." },
  { icon: Shield, title: "Risk Controls", desc: "Leverage limits, drawdown protection, and insurance pool safeguards." },
  { icon: DollarSign, title: "Fair Fees", desc: "2% management + share of positive alpha. Only pay for performance." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-egyptian">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 text-gradient-gold">
          Key Features
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-card border border-gold/10 rounded-lg p-6 hover:border-primary/40 transition-colors"
            >
              <f.icon className="text-accent mb-4 group-hover:text-primary transition-colors" size={28} />
              <h3 className="font-heading text-base font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
