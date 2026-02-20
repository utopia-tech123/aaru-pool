import mascotWave from "@/assets/mascot-wave.png";
import mascotLotus from "@/assets/mascot-lotus.png";
import mascotCoin from "@/assets/mascot-coin.png";

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

const NileWave = ({ flip = false }: { flip?: boolean }) => (
  <div
    className={`w-full overflow-hidden leading-none pointer-events-none ${flip ? "rotate-180" : ""}`}
    style={{ height: "64px" }}
    aria-hidden
  >
    <svg
      viewBox="0 0 1440 64"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <path
        d="M0,32 C120,52 240,12 360,32 C480,52 600,12 720,32 C840,52 960,12 1080,32 C1200,52 1320,12 1440,32 L1440,64 L0,64 Z"
        fill="hsl(43 78% 62% / 0.06)"
      />
      <path
        d="M0,42 C180,22 360,58 540,42 C720,26 900,58 1080,42 C1260,26 1350,52 1440,42 L1440,64 L0,64 Z"
        fill="hsl(162 55% 48% / 0.04)"
      />
    </svg>
  </div>
);

interface LotusProps {
  className?: string;
  style?: React.CSSProperties;
}

const Lotus = ({ className, style }: LotusProps) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden
  >
    <ellipse cx="24" cy="38" rx="10" ry="4" fill="hsl(162 55% 48% / 0.15)" />
    <path d="M24 34 C24 34 14 24 16 14 C18 6 24 10 24 10" stroke="hsl(43 78% 62% / 0.5)" strokeWidth="1.5" fill="hsl(43 40% 20% / 0.3)" />
    <path d="M24 34 C24 34 34 24 32 14 C30 6 24 10 24 10" stroke="hsl(43 78% 62% / 0.5)" strokeWidth="1.5" fill="hsl(43 40% 20% / 0.3)" />
    <path d="M24 34 C24 34 18 20 24 10 C30 20 24 34 24 34Z" stroke="hsl(43 78% 62% / 0.6)" strokeWidth="1.5" fill="hsl(43 55% 30% / 0.4)" />
    <circle cx="24" cy="10" r="3" fill="hsl(43 85% 75% / 0.7)" />
  </svg>
);

const MascotSection = () => {
  return (
    <section className="relative overflow-hidden">
      <NileWave />

      <div className="py-16 relative">
        <div className="absolute inset-0 mesh-dot opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Floating lotus ornaments */}
        <Lotus className="absolute top-12 left-6 md:left-20 w-12 h-12 animate-float opacity-60" />
        <Lotus className="absolute top-20 right-8 md:right-24 w-8 h-8 animate-float opacity-40" style={{ animationDelay: "2s" }} />
        <Lotus className="absolute bottom-10 left-1/3 w-10 h-10 animate-float opacity-30" style={{ animationDelay: "4s" }} />

        {/* Hieroglyph strip top */}
        <div className="flex items-center justify-center gap-6 mb-10 opacity-20 select-none pointer-events-none" aria-hidden>
          {["𓂀","𓆣","𓇳","𓂋","𓁹","𓆙","𓏏","𓃭","𓆑"].map((g, i) => (
            <span key={i} className="font-['NotoSansEgyptian'] text-primary text-base md:text-lg">{g}</span>
          ))}
        </div>

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

          {/* Nile water ripple strip */}
          <div className="mt-14 mx-auto max-w-3xl relative h-12 overflow-hidden" aria-hidden>
            <svg viewBox="0 0 800 48" preserveAspectRatio="none" className="w-full h-full opacity-30">
              {[0, 8, 16].map((offset, i) => (
                <path
                  key={i}
                  d={`M0,${24 + offset} C100,${8 + offset} 200,${38 + offset} 300,${24 + offset} C400,${10 + offset} 500,${38 + offset} 600,${24 + offset} C700,${10 + offset} 750,${34 + offset} 800,${24 + offset}`}
                  stroke={i === 1 ? "hsl(162 55% 48%)" : "hsl(43 78% 62%)"}
                  strokeWidth="1"
                  fill="none"
                  strokeDasharray="6 4"
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Hieroglyph strip bottom */}
        <div className="flex items-center justify-center gap-6 mt-10 opacity-20 select-none pointer-events-none" aria-hidden>
          {["𓅓","𓇯","𓂝","𓆗","𓃠","𓇼","𓂀","𓆣","𓇳"].map((g, i) => (
            <span key={i} className="font-['NotoSansEgyptian'] text-primary text-base md:text-lg">{g}</span>
          ))}
        </div>
      </div>

      <NileWave flip />
    </section>
  );
};

export default MascotSection;
