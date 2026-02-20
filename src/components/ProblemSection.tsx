import { ShieldAlert, Activity, AlertTriangle, Lock } from "lucide-react";
import { FloatingLotusCluster, HieroglyphStrip } from "@/components/EgyptianDecor";

const problems = [
  {
    icon: ShieldAlert,
    title: "Privacy Exposure",
    desc: "Positions are revealed to front-runners, exposing investors to potential exploitation.",
    accent: true,
  },
  {
    icon: Activity,
    title: "Operational Complexity",
    desc: "Constant monitoring is required to manage DeFi strategies, creating a barrier to entry for most investors.",
    accent: false,
  },
  {
    icon: AlertTriangle,
    title: "Lack of Risk Mitigation",
    desc: "Most DeFi protocols lack formal mechanisms to mitigate the concentrated risks inherent in high-yield strategies.",
    accent: false,
  },
  {
    icon: Lock,
    title: "Yield vs. Control",
    desc: "DeFi yields 10-30% but at the cost of privacy and control over one's assets.",
    accent: true,
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-destructive/8 blur-[80px] pointer-events-none" />
      <FloatingLotusCluster lotuses={[
        { top: "15%",  left: "2%",   size: 38, delay: "0s",   color: "gold",    opacity: 0.30 },
        { bottom: "10%", right: "3%", size: 30, delay: "2.1s", color: "emerald", opacity: 0.25 },
      ]} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Label */}
        <div className="flex justify-center mb-5">
          <span className="badge-pill" style={{ background: "hsl(var(--destructive) / 0.1)", borderColor: "hsl(var(--destructive) / 0.3)", color: "hsl(var(--destructive))" }}>
            The Problem
          </span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          High-Yield DeFi Remains Inaccessible
        </h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto text-sm">
          The current DeFi landscape creates systemic barriers that prevent most investors from safely capturing yield.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 glow-card ${
                p.accent ? "glass-emerald" : "glass-gold"
              }`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                p.accent
                  ? "bg-accent/15 border border-accent/20"
                  : "bg-primary/10 border border-primary/20"
              }`}>
                <p.icon className={p.accent ? "text-accent" : "text-primary"} size={20} />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2 text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <HieroglyphStrip className="mt-10" opacity={12} />
      </div>
    </section>
  );
};

export default ProblemSection;
