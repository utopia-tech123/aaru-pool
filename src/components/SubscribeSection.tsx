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
    <section id="subscribe" className="py-24 bg-gradient-egyptian">
      <div className="container mx-auto px-4 text-center max-w-lg">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-gradient-gold">
          Stay Updated
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">
          Subscribe to receive the latest news about Aaru Pool.
        </p>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-card border border-gold/20 rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="bg-accent text-accent-foreground font-heading font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm glow-green hover:opacity-90 transition-opacity border border-accent/30"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
