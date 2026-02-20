import { useState } from "react";
import { toast } from "sonner";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! We'll keep you updated.");
    setEmail("");
  };

  return (
    <section id="subscribe" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 mesh-grid opacity-20 pointer-events-none" />
      {/* Large gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[150px] bg-accent/6 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Card */}
        <div className="max-w-xl mx-auto glass-gold rounded-3xl p-10 text-center relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
          <div className="flex justify-center mb-6">
            <span className="badge-pill">Early Access</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
            Stay Ahead of the Curve
          </h2>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
            Be first to know about Aaru Pool's launch, token sale, and governance updates.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 glass bg-white/3 border border-white/10 rounded-full px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button
              type="submit"
              className="bg-accent text-white font-semibold text-xs tracking-widest uppercase px-7 py-3.5 rounded-full glow-green hover:opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-4 opacity-70">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
