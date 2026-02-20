import mascotWave from "@/assets/mascot-wave.png";
import mascotLotus from "@/assets/mascot-lotus.png";
import mascotCoin from "@/assets/mascot-coin.png";
import { NileWave, FloatingLotusCluster, HieroglyphStrip, NileRipple } from "@/components/EgyptianDecor";

const mascots = [
  {
    img: mascotWave,
    alt: "Aaru Guardian — Waving",
    title: "Join the DAO",
    desc: "Every $AARU holder becomes a Guardian of the Vault. Vote on strategies, shape the protocol, and earn your place among the chosen.",
    glyph: "𓂀",
    glass: "glass-gold",
    delay: "0s",
  },
  {
    img: mascotLotus,
    alt: "Aaru Guardian — Lotus",
    title: "Harvest the Nile",
    desc: "AI agents cultivate yield like lotus blooms on the Nile — epoch-based pools that grow in harmony with the market's flow.",
    glyph: "𓇳",
    glass: "glass-emerald",
    delay: "0.4s",
  },
  {
    img: mascotCoin,
    alt: "Aaru Guardian — Coin",
    title: "Claim Your Yield",
    desc: "Only pay for performance. Our fee structure rewards winners — if the vault doesn't outperform, you keep your share.",
    glyph: "𓆣",
    glass: "glass-gold",
    delay: "0.8s",
  },
];

const MascotSection = () => {
  return (
    <section className="relative overflow-hidden">
      <NileWave variant="emerald" />

      <div className="py-16 relative dark" style={{ background: "hsl(158 40% 12%)" }}>
        <div className="absolute inset-0 mesh-dot opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        <FloatingLotusCluster lotuses={[
          { top: "10%",  left: "3%",   size: 44, delay: "0s",   color: "gold",    opacity: 0.40 },
          { top: "18%",  right: "4%",  size: 32, delay: "1.8s", color: "emerald", opacity: 0.32 },
          { bottom: "12%", left: "6%", size: 36, delay: "3.2s", color: "gold",    opacity: 0.28 },
          { bottom: "18%", right: "5%",size: 28, delay: "2.5s", color: "emerald", opacity: 0.22 },
        ]} />

        <HieroglyphStrip className="mb-10" opacity={18} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-center mb-5">
            <span className="badge-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow inline-block" />
              The Guardians of Aaru
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3 text-gradient-gold">
            Three Paths. One Protocol.
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto text-sm leading-relaxed">
            The Guardians of Aaru embody the three pillars of the protocol — governance, yield, and performance.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {mascots.map((m) => (
              <div
                key={m.title}
                className={`group relative rounded-3xl p-6 pb-8 text-center ${m.glass} transition-all duration-500 hover:-translate-y-2 glow-card overflow-hidden`}
              >
                <span className="absolute top-4 right-5 font-['NotoSansEgyptian'] text-primary/25 text-3xl select-none" aria-hidden>
                  {m.glyph}
                </span>
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/8 scale-125 blur-xl group-hover:bg-primary/15 transition-all duration-500" />
                  <img
                    src={m.img}
                    alt={m.alt}
                    className="relative w-28 h-28 sm:w-36 sm:h-36 object-contain mx-auto animate-float drop-shadow-lg"
                    style={{ animationDelay: m.delay }}
                  />
                </div>

                <h3 className="font-heading text-lg font-bold mb-2 text-gradient-gold">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>

          <NileRipple className="mt-12 opacity-50" />
        </div>

        <HieroglyphStrip className="mt-10" opacity={15} />
      </div>

      <NileWave variant="gold" flip />
    </section>
  );
};

export default MascotSection;
