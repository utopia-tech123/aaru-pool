import { useState } from "react";
import { toast } from "sonner";
import { FloatingLotusCluster, HieroglyphStrip, LightSectionDecor } from "@/components/EgyptianDecor";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll keep you updated.");
    setEmail("");
  };

  return (
    <section id="subscribe" className="py-14 relative overflow-hidden bg-gradient-egyptian">
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />
      <LightSectionDecor />
      <FloatingLotusCluster lotuses={[
        { top: "10%",  left: "4%",  size: 38, delay: "0s",   color: "gold",    opacity: 0.30 },
        { bottom: "10%", right: "4%", size: 32, delay: "1.8s", color: "emerald", opacity: 0.25 },
      ]} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className="text-center mb-8">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
            Join the Movement
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Be part of the next generation of private, intelligent DeFi.
          </p>
        </div>
        <div className="max-w-xl mx-auto dark rounded-3xl text-white" style={{ colorScheme: "dark" }}>
          <div className="rounded-3xl p-10 text-center relative overflow-hidden border border-[hsl(43_78%_62%_/_0.18)]" style={{ background: "hsl(158 40% 12%)" }}>
            {/* Top accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="flex justify-center mb-6">
              <span className="badge-pill">Early Access</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
              Stay Ahead of the Curve
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "hsl(0 0% 82%)" }}>
              Be first to know about Aaru Pool's launch, token sale, and governance updates.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              className="flex-1 glass border border-border/40 rounded-full px-5 py-3.5 text-sm focus:outline-none focus:border-primary/50 transition-colors bg-background/40"
              style={{ color: "hsl(0 0% 90%)" }}
              />
              <button
                type="submit"
                className="bg-accent text-white font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded-full glow-green hover:opacity-90 transition-all duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs mt-4 opacity-60" style={{ color: "hsl(0 0% 90%)" }}>
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
        <HieroglyphStrip className="mt-10" opacity={10} />
      </div>
    </section>
  );
};

export default SubscribeSection;
