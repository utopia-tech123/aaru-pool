import { ShieldAlert, Activity, AlertTriangle, Lock } from "lucide-react";

const problems = [
  {
    icon: ShieldAlert,
    title: "Privacy Exposure",
    desc: "Positions are revealed to front-runners, exposing investors to potential exploitation.",
    alt: true,
  },
  {
    icon: Activity,
    title: "Operational Complexity",
    desc: "Constant monitoring is required to manage DeFi strategies, creating a barrier to entry for most investors.",
    alt: false,
  },
  {
    icon: AlertTriangle,
    title: "Lack of Risk Mitigation",
    desc: "Most DeFi protocols lack formal mechanisms to mitigate the concentrated risks inherent in high-yield strategies.",
    alt: false,
  },
  {
    icon: Lock,
    title: "Yield vs. Control",
    desc: "DeFi yields 10-30% but at the cost of privacy and control over one's assets.",
    alt: true,
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-gradient-egyptian">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          The Problem
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-xl mx-auto">
          High-Yield DeFi Remains Inaccessible and Risky
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((p) => (
            <div
              key={p.title}
              className={`rounded-lg p-6 border transition-transform hover:-translate-y-1 ${
                p.alt
                  ? "bg-accent/10 border-accent/30"
                  : "bg-card border-gold/10"
              }`}
            >
              <p.icon
                className={`mb-4 ${p.alt ? "text-accent" : "text-primary"}`}
                size={32}
              />
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
