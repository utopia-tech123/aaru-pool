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
  const fills: Record<string, [string, string]> = {
    gold:    ["hsl(43 78% 62% / 0.08)",  "hsl(43 78% 62% / 0.04)"],
    emerald: ["hsl(162 55% 48% / 0.08)", "hsl(162 55% 48% / 0.04)"],
    subtle:  ["hsl(43 78% 62% / 0.05)",  "hsl(162 55% 48% / 0.03)"],
  };
  const [f1, f2] = fills[variant];

  return (
    <div
      className={`w-full overflow-hidden leading-none pointer-events-none select-none ${flip ? "rotate-180" : ""} ${className}`}
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
    ? "hsl(162 55% 48% / 0.55)"
    : "hsl(43 78% 62% / 0.55)";
  const fill = color === "emerald"
    ? "hsl(162 40% 20% / 0.35)"
    : "hsl(43 40% 20% / 0.35)";
  const center = color === "emerald"
    ? "hsl(162 65% 70% / 0.8)"
    : "hsl(43 85% 75% / 0.8)";

  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none ${className}`}
      style={{ willChange: "transform", ...style }}
      aria-hidden
    >
      <ellipse cx="24" cy="40" rx="9" ry="3" fill={color === "emerald" ? "hsl(162 55% 48% / 0.1)" : "hsl(43 78% 62% / 0.1)"} />
      <path d="M24 36 C24 36 13 25 15 13 C17 5 24 10 24 10" stroke={stroke} strokeWidth="1.5" fill={fill} />
      <path d="M24 36 C24 36 35 25 33 13 C31 5 24 10 24 10" stroke={stroke} strokeWidth="1.5" fill={fill} />
      <path d="M24 36 C24 36 17 21 24 10 C31 21 24 36 24 36Z" stroke={stroke} strokeWidth="1.5" fill={color === "emerald" ? "hsl(162 55% 30% / 0.45)" : "hsl(43 55% 30% / 0.45)"} />
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
        { y: 24, color: "hsl(43 78% 62%)",  delay: "0s",   dur: "3s" },
        { y: 32, color: "hsl(162 55% 48%)", delay: "0.7s", dur: "4s" },
        { y: 16, color: "hsl(43 78% 62%)",  delay: "1.4s", dur: "3.5s" },
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
