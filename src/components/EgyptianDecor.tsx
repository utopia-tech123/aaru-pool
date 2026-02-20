/**
 * EgyptianDecor — shared, performance-first decorative components.
 * All elements use CSS animations only (no JS RAF loops), are pointer-events-none,
 * aria-hidden, and GPU-composited via translateZ(0).
 */

/* ── Nile Wave SVG divider ─────────────────────────────────────────── */
interface NileWaveProps {
  flip?: boolean;
  /** 'gold' | 'emerald' | 'subtle' */
  variant?: "gold" | "emerald" | "subtle";
  className?: string;
}

export const NileWave = ({ flip = false, variant = "subtle", className = "" }: NileWaveProps) => {
  // These look fine in dark. In light mode the fills are still subtle coloured overlays so they remain visible.
  const fills: Record<string, [string, string]> = {
    gold:    ["hsl(43 70% 42% / 0.07)",  "hsl(43 70% 42% / 0.04)"],
    emerald: ["hsl(162 55% 36% / 0.07)", "hsl(162 55% 36% / 0.04)"],
    subtle:  ["hsl(43 70% 42% / 0.05)",  "hsl(162 55% 36% / 0.03)"],
  };
  const [f1, f2] = fills[variant];

  return (
    <div
      className={`nile-wave w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`}
      style={{ height: 56 }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <path
          d="M0,28 C120,46 240,10 360,28 C480,46 600,10 720,28 C840,46 960,10 1080,28 C1200,46 1320,10 1440,28 L1440,56 L0,56 Z"
          fill={f1}
        />
        <path
          d="M0,38 C180,18 360,52 540,38 C720,24 900,52 1080,38 C1260,24 1350,48 1440,38 L1440,56 L0,56 Z"
          fill={f2}
        />
      </svg>
    </div>
  );
};

/* ── Lotus blossom SVG ─────────────────────────────────────────────── */
interface LotusProps {
  className?: string;
  style?: React.CSSProperties;
  /** 'gold' | 'emerald' */
  color?: "gold" | "emerald";
}

export const Lotus = ({ className = "", style, color = "gold" }: LotusProps) => {
  const stroke = color === "emerald"
    ? "hsl(162 55% 40% / 0.55)"
    : "hsl(43 70% 45% / 0.55)";
  const fill = color === "emerald"
    ? "hsl(162 40% 50% / 0.20)"
    : "hsl(43 50% 50% / 0.20)";
  const center = color === "emerald"
    ? "hsl(162 55% 45% / 0.85)"
    : "hsl(43 78% 55% / 0.85)";
  const shadow = color === "emerald"
    ? "hsl(162 55% 36% / 0.10)"
    : "hsl(43 70% 42% / 0.10)";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ willChange: "transform", ...style }}
      aria-hidden
    >
      <ellipse cx="24" cy="40" rx="9" ry="3" fill={shadow} />
      <path d="M24 36 C24 36 13 25 15 13 C17 5 24 10 24 10" stroke={stroke} strokeWidth="1.5" fill={fill} />
      <path d="M24 36 C24 36 35 25 33 13 C31 5 24 10 24 10" stroke={stroke} strokeWidth="1.5" fill={fill} />
      <path d="M24 36 C24 36 17 21 24 10 C31 21 24 36 24 36Z" stroke={stroke} strokeWidth="1.5" fill={color === "emerald" ? "hsl(162 55% 35% / 0.30)" : "hsl(43 55% 35% / 0.30)"} />
      <circle cx="24" cy="10" r="3" fill={center} />
    </svg>
  );
};

/* ── Horizontal hieroglyph strip ───────────────────────────────────── */
interface HieroglyphStripProps {
  glyphs?: string[];
  className?: string;
  opacity?: number;
}

const DEFAULT_GLYPHS = ["𓂀","𓆣","𓇳","𓂋","𓁹","𓆙","𓏏","𓃭","𓆑","𓅓","𓇯","𓂝","𓆗","𓃠","𓇼"];

export const HieroglyphStrip = ({
  glyphs = DEFAULT_GLYPHS,
  className = "",
  opacity = 20,
}: HieroglyphStripProps) => (
  <div
    className={`flex items-center justify-center gap-4 md:gap-6 select-none pointer-events-none overflow-hidden ${className}`}
    style={{ opacity: opacity / 100 }}
    aria-hidden
  >
    {glyphs.map((g, i) => (
      <span key={i} className="font-['NotoSansEgyptian'] text-primary text-sm md:text-base shrink-0">
        {g}
      </span>
    ))}
  </div>
);

/* ── Scattered floating lotus cluster ─────────────────────────────── */
interface FloatingLotusClusterProps {
  /** positions: array of {top,left,right,bottom} as tailwind-compatible inline values */
  lotuses?: Array<{
    top?: string; left?: string; right?: string; bottom?: string;
    size?: number;
    delay?: string;
    color?: "gold" | "emerald";
    opacity?: number;
  }>;
}

const DEFAULT_CLUSTER = [
  { top: "10%",  left: "4%",   size: 44, delay: "0s",   color: "gold"    as const, opacity: 0.45 },
  { top: "20%",  right: "5%",  size: 32, delay: "1.8s", color: "emerald" as const, opacity: 0.35 },
  { bottom: "15%", left: "8%", size: 36, delay: "3.2s", color: "gold"    as const, opacity: 0.30 },
  { bottom: "20%", right: "6%",size: 28, delay: "2.5s", color: "emerald" as const, opacity: 0.25 },
];

export const FloatingLotusCluster = ({ lotuses = DEFAULT_CLUSTER }: FloatingLotusClusterProps) => (
  <>
    {lotuses.map((l, i) => (
      <Lotus
        key={i}
        color={l.color}
        className="absolute animate-float"
        style={{
          width: l.size ?? 36,
          height: l.size ?? 36,
          top: l.top,
          left: l.left,
          right: l.right,
          bottom: l.bottom,
          opacity: l.opacity ?? 0.35,
          animationDelay: l.delay ?? "0s",
        }}
      />
    ))}
  </>
);

/* ── Nile ripple line SVG ──────────────────────────────────────────── */
export const NileRipple = ({ className = "" }: { className?: string }) => (
  <div className={`w-full overflow-hidden pointer-events-none select-none ${className}`} style={{ height: 48 }} aria-hidden>
    <svg viewBox="0 0 900 48" preserveAspectRatio="none" className="w-full h-full">
      {[
        { y: 24, color: "hsl(43 70% 42%)",  delay: "0s",   dur: "3s" },
        { y: 32, color: "hsl(162 55% 36%)", delay: "0.7s", dur: "4s" },
        { y: 16, color: "hsl(43 70% 42%)",  delay: "1.4s", dur: "3.5s" },
      ].map((r, i) => (
        <path
          key={i}
          d={`M0,${r.y} C150,${r.y - 12} 300,${r.y + 12} 450,${r.y} C600,${r.y - 12} 750,${r.y + 12} 900,${r.y}`}
          stroke={r.color}
          strokeWidth="1"
          fill="none"
          strokeDasharray="8 5"
          opacity="0.35"
          style={{ animation: `nile-drift ${r.dur} linear infinite`, animationDelay: r.delay }}
        />
      ))}
    </svg>
  </div>
);

/* ── Light-mode section decorations ───────────────────────────────── */
export const LightSectionDecor = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden light-section-decor" aria-hidden>

    {/* Top-left corner — lotus stem */}
    <svg className="absolute -top-4 -left-4 w-52 h-52 opacity-[0.10]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 180 C30 180 30 80 80 40" stroke="hsl(43 70% 45%)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M80 40 C80 40 50 20 40 5" stroke="hsl(43 70% 45%)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M80 40 C80 40 95 15 100 0" stroke="hsl(43 70% 45%)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M80 40 C80 40 110 28 120 18" stroke="hsl(43 70% 45%)" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="80" cy="40" r="5" fill="hsl(43 78% 55% / 0.6)"/>
      <path d="M30 110 C50 105 65 115 60 130" stroke="hsl(162 55% 40%)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      <rect x="0" y="0" width="40" height="2" fill="hsl(43 70% 45%)"/>
      <rect x="0" y="0" width="2" height="40" fill="hsl(43 70% 45%)"/>
      <rect x="5" y="5" width="24" height="1.5" fill="hsl(43 70% 45%)"/>
      <rect x="5" y="5" width="1.5" height="24" fill="hsl(43 70% 45%)"/>
    </svg>

    {/* Top-right corner — ankh */}
    <svg className="absolute -top-4 -right-4 w-48 h-48 opacity-[0.09]" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="100" y1="80" x2="100" y2="175" stroke="hsl(43 70% 45%)" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="65" y1="110" x2="135" y2="110" stroke="hsl(43 70% 45%)" strokeWidth="2.5" strokeLinecap="round"/>
      <ellipse cx="100" cy="70" rx="22" ry="28" stroke="hsl(43 70% 45%)" strokeWidth="2.5"/>
      <rect x="160" y="0" width="40" height="2" fill="hsl(43 70% 45%)"/>
      <rect x="198" y="0" width="2" height="40" fill="hsl(43 70% 45%)"/>
      <rect x="172" y="5" width="24" height="1.5" fill="hsl(43 70% 45%)"/>
      <rect x="194" y="5" width="1.5" height="24" fill="hsl(43 70% 45%)"/>
    </svg>

    {/* Bottom-left — Eye of Horus */}
    <svg className="absolute bottom-4 left-4 w-44 h-28 opacity-[0.09]" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 45 C40 10 140 10 170 45 C140 80 40 80 10 45Z" stroke="hsl(162 55% 40%)" strokeWidth="2" fill="hsl(162 40% 50% / 0.06)"/>
      <circle cx="90" cy="45" r="16" stroke="hsl(162 55% 40%)" strokeWidth="2"/>
      <circle cx="90" cy="45" r="7" fill="hsl(162 55% 40% / 0.25)"/>
      <path d="M90 61 C85 75 75 85 60 88" stroke="hsl(162 55% 40%)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M90 61 C95 72 100 80 120 85" stroke="hsl(162 55% 40%)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>

    {/* Bottom-right — geometric hexagon pattern */}
    <svg className="absolute bottom-4 right-4 w-36 h-36 opacity-[0.08]" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,20 140,60 140,120 80,160 20,120 20,60" stroke="hsl(43 70% 45%)" strokeWidth="1.5"/>
      <polygon points="80,40 120,65 120,115 80,140 40,115 40,65" stroke="hsl(162 55% 40%)" strokeWidth="1"/>
      <circle cx="80" cy="90" r="8" fill="hsl(43 78% 55% / 0.20)" stroke="hsl(43 70% 45%)" strokeWidth="1"/>
    </svg>

    {/* Left column hieroglyphs */}
    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 opacity-[0.13]">
      {["𓂀","𓆣","𓇳","𓂋","𓁹"].map((g, i) => (
        <span key={i} className="font-['NotoSansEgyptian'] text-xl" style={{ color: "hsl(43 70% 45%)" }}>{g}</span>
      ))}
    </div>

    {/* Right column hieroglyphs */}
    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 opacity-[0.13]">
      {["𓏏","𓃭","𓆑","𓅓","𓇯"].map((g, i) => (
        <span key={i} className="font-['NotoSansEgyptian'] text-xl" style={{ color: "hsl(162 55% 40%)" }}>{g}</span>
      ))}
    </div>

    {/* Center top divider with scarab */}
    <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-[0.15]">
      <div className="w-20 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(43 70% 45%))" }}/>
      <span className="font-['NotoSansEgyptian'] text-base" style={{ color: "hsl(43 70% 45%)" }}>𓆣</span>
      <div className="w-20 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(43 70% 45%))" }}/>
    </div>
  </div>
);
