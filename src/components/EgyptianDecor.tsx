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
/* Large, visible, animated Egyptian artwork — light mode only         */

/* Floating Ankh */
const FloatingAnkh = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 80 110" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute pointer-events-none select-none animate-float"
    style={{ willChange: "transform", ...style }} aria-hidden>
    {/* shaft */}
    <line x1="40" y1="52" x2="40" y2="100" stroke="hsl(43 70% 45%)" strokeWidth="5" strokeLinecap="round"/>
    {/* crossbar */}
    <line x1="14" y1="62" x2="66" y2="62" stroke="hsl(43 70% 45%)" strokeWidth="5" strokeLinecap="round"/>
    {/* loop */}
    <ellipse cx="40" cy="34" rx="18" ry="22" stroke="hsl(43 70% 45%)" strokeWidth="5" fill="hsl(43 78% 62% / 0.12)"/>
    {/* inner loop accent */}
    <ellipse cx="40" cy="34" rx="10" ry="13" stroke="hsl(43 78% 62%)" strokeWidth="1.5" fill="none" opacity="0.5"/>
  </svg>
);

/* Floating Eye of Horus */
const FloatingEye = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute pointer-events-none select-none animate-float"
    style={{ willChange: "transform", ...style }} aria-hidden>
    {/* outer eye shape */}
    <path d="M8 40 C35 8 105 8 132 40 C105 72 35 72 8 40Z"
      stroke="hsl(162 55% 38%)" strokeWidth="3" fill="hsl(162 50% 40% / 0.08)"/>
    {/* iris */}
    <circle cx="70" cy="40" r="18" stroke="hsl(162 55% 38%)" strokeWidth="3" fill="hsl(162 45% 45% / 0.14)"/>
    {/* pupil */}
    <circle cx="70" cy="40" r="9" fill="hsl(162 55% 35% / 0.30)"/>
    {/* tear mark top */}
    <path d="M70 10 C65 4 60 2 55 5" stroke="hsl(162 55% 38%)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* lower kohl lines */}
    <path d="M70 58 C62 70 50 76 36 76" stroke="hsl(162 55% 38%)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M70 58 C78 68 88 73 104 74" stroke="hsl(162 55% 38%)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M36 76 C34 72 36 68 40 67" stroke="hsl(162 55% 38%)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Floating Lotus (detailed) */
const FloatingLotusArt = ({ style, color = "gold" }: { style?: React.CSSProperties; color?: "gold" | "emerald" }) => {
  const c = color === "gold" ? "hsl(43 72% 48%)" : "hsl(162 55% 38%)";
  const f = color === "gold" ? "hsl(43 78% 62% / 0.15)" : "hsl(162 55% 40% / 0.12)";
  return (
    <svg viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg"
      className="absolute pointer-events-none select-none animate-float"
      style={{ willChange: "transform", ...style }} aria-hidden>
      {/* stem */}
      <path d="M45 95 C45 95 45 68 45 58" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
      {/* left leaf */}
      <path d="M45 75 C32 68 22 72 16 80" stroke={c} strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* right leaf */}
      <path d="M45 75 C58 68 68 72 74 80" stroke={c} strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* outer petals */}
      <path d="M45 58 C32 46 26 28 34 14 C38 8 45 14 45 14" stroke={c} strokeWidth="2.5" fill={f}/>
      <path d="M45 58 C58 46 64 28 56 14 C52 8 45 14 45 14" stroke={c} strokeWidth="2.5" fill={f}/>
      {/* middle petals */}
      <path d="M45 58 C22 42 20 18 32 6 C38 0 45 8 45 8" stroke={c} strokeWidth="2" fill={f}/>
      <path d="M45 58 C68 42 70 18 58 6 C52 0 45 8 45 8" stroke={c} strokeWidth="2" fill={f}/>
      {/* center petal */}
      <path d="M45 58 C35 40 35 20 45 8 C55 20 55 40 45 58Z" stroke={c} strokeWidth="2.5"
        fill={color === "gold" ? "hsl(43 65% 52% / 0.25)" : "hsl(162 55% 42% / 0.22)"}/>
      {/* stamen */}
      <circle cx="45" cy="18" r="4" fill={c} opacity="0.7"/>
    </svg>
  );
};

/* Floating Pyramid */
const FloatingPyramid = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute pointer-events-none select-none animate-float"
    style={{ willChange: "transform", animationDelay: "1.5s", ...style }} aria-hidden>
    {/* main triangle */}
    <polygon points="60,6 110,84 10,84"
      stroke="hsl(43 70% 45%)" strokeWidth="3"
      fill="hsl(43 78% 62% / 0.10)"/>
    {/* inner lines for depth */}
    <line x1="60" y1="6" x2="60" y2="84" stroke="hsl(43 70% 45%)" strokeWidth="1.5" opacity="0.4"/>
    <line x1="60" y1="30" x2="98" y2="84" stroke="hsl(43 70% 45%)" strokeWidth="1" opacity="0.3"/>
    <line x1="60" y1="30" x2="22" y2="84" stroke="hsl(43 70% 45%)" strokeWidth="1" opacity="0.3"/>
    {/* capstone eye */}
    <circle cx="60" cy="18" r="5" fill="hsl(43 78% 62%)" opacity="0.5"/>
    <circle cx="60" cy="18" r="2.5" fill="hsl(43 78% 62%)" opacity="0.8"/>
    {/* base line */}
    <line x1="4" y1="84" x2="116" y2="84" stroke="hsl(43 70% 45%)" strokeWidth="2" opacity="0.6"/>
  </svg>
);

/* Floating Scarab */
const FloatingScarab = ({ style }: { style?: React.CSSProperties }) => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="absolute pointer-events-none select-none animate-float"
    style={{ willChange: "transform", animationDelay: "2.8s", ...style }} aria-hidden>
    {/* body */}
    <ellipse cx="40" cy="46" rx="18" ry="22" stroke="hsl(162 55% 38%)" strokeWidth="2.5" fill="hsl(162 45% 42% / 0.12)"/>
    {/* head */}
    <ellipse cx="40" cy="24" rx="10" ry="8" stroke="hsl(162 55% 38%)" strokeWidth="2.5" fill="hsl(162 45% 42% / 0.12)"/>
    {/* wings spread */}
    <path d="M22 44 C10 36 4 24 10 16 C16 10 22 18 22 18" stroke="hsl(162 55% 38%)" strokeWidth="2" fill="hsl(162 40% 45% / 0.10)"/>
    <path d="M58 44 C70 36 76 24 70 16 C64 10 58 18 58 18" stroke="hsl(162 55% 38%)" strokeWidth="2" fill="hsl(162 40% 45% / 0.10)"/>
    {/* wing detail lines */}
    <path d="M22 38 C12 32 8 22 12 16" stroke="hsl(162 55% 38%)" strokeWidth="1" opacity="0.5"/>
    <path d="M58 38 C68 32 72 22 68 16" stroke="hsl(162 55% 38%)" strokeWidth="1" opacity="0.5"/>
    {/* body segments */}
    <line x1="28" y1="40" x2="52" y2="40" stroke="hsl(162 55% 38%)" strokeWidth="1" opacity="0.5"/>
    <line x1="26" y1="52" x2="54" y2="52" stroke="hsl(162 55% 38%)" strokeWidth="1" opacity="0.5"/>
    {/* antennae */}
    <path d="M34 17 C28 10 24 6 20 4" stroke="hsl(162 55% 38%)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M46 17 C52 10 56 6 60 4" stroke="hsl(162 55% 38%)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* Hieroglyph side column */
const HieroglyphColumn = ({ side, glyphs, color }: { side: "left" | "right"; glyphs: string[]; color: string }) => (
  <div
    className="absolute top-1/2 -translate-y-1/2 flex flex-col gap-6"
    style={{ [side]: "12px" }}
    aria-hidden
  >
    {glyphs.map((g, i) => (
      <span
        key={i}
        className="font-['NotoSansEgyptian'] text-2xl animate-float"
        style={{ color, opacity: 0.35 - i * 0.04, animationDelay: `${i * 0.6}s` }}
      >{g}</span>
    ))}
  </div>
);

export const LightSectionDecor = () => (
  <div className="absolute inset-0 pointer-events-none select-none overflow-hidden light-section-decor" aria-hidden>

    {/* LEFT: Large Ankh */}
    <FloatingAnkh style={{ left: "2%", top: "15%", width: 72, height: 100, opacity: 0.32, animationDelay: "0s" }} />

    {/* LEFT: Lotus below ankh */}
    <FloatingLotusArt color="emerald" style={{ left: "1%", bottom: "10%", width: 70, height: 80, opacity: 0.28, animationDelay: "1.2s" }} />

    {/* RIGHT: Eye of Horus */}
    <FloatingEye style={{ right: "2%", top: "18%", width: 120, height: 70, opacity: 0.28, animationDelay: "0.8s" }} />

    {/* RIGHT: Scarab below eye */}
    <FloatingScarab style={{ right: "2%", bottom: "12%", width: 68, height: 68, opacity: 0.26, animationDelay: "2s" }} />

    {/* CENTER-LEFT: floating lotus gold */}
    <FloatingLotusArt color="gold" style={{ left: "10%", top: "8%", width: 52, height: 60, opacity: 0.22, animationDelay: "2.4s" }} />

    {/* CENTER-RIGHT: pyramid */}
    <FloatingPyramid style={{ right: "10%", bottom: "8%", width: 100, height: 76, opacity: 0.22 }} />

    {/* Hieroglyph columns on sides */}
    <HieroglyphColumn side="left" glyphs={["𓂀","𓆣","𓇳","𓂋","𓁹"]} color="hsl(43 70% 42%)" />
    <HieroglyphColumn side="right" glyphs={["𓏏","𓃭","𓆑","𓅓","𓇯"]} color="hsl(162 55% 36%)" />

    {/* Top center divider */}
    <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-25">
      <div className="w-32 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(43 70% 45%))" }}/>
      <span className="font-['NotoSansEgyptian'] text-lg" style={{ color: "hsl(43 70% 45%)" }}>𓆣</span>
      <div className="w-32 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(43 70% 45%))" }}/>
    </div>

    {/* Bottom center divider */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-25">
      <div className="w-32 h-px" style={{ background: "linear-gradient(to right, transparent, hsl(162 55% 36%))" }}/>
      <span className="font-['NotoSansEgyptian'] text-lg" style={{ color: "hsl(162 55% 36%)" }}>𓇳</span>
      <div className="w-32 h-px" style={{ background: "linear-gradient(to left, transparent, hsl(162 55% 36%))" }}/>
    </div>
  </div>
);
