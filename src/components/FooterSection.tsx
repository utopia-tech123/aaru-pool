import logo from "@/assets/logo.png";

const FooterSection = () => {
  return (
    <footer className="relative border-t border-white/5 py-14 overflow-hidden">
      <div className="absolute inset-0 mesh-dot opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <img src={logo} alt="Aaru Pool" className="w-10 h-10 rounded-full ring-1 ring-primary/30 glow-gold" />

          {/* Links */}
          <div className="flex gap-8">
            {[
              { href: "https://x.com/aarupool", label: "X (Twitter)" },
              { href: "https://discord.gg/aarupool", label: "Discord" },
              { href: "https://t.me/aarupool", label: "Telegram" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <p className="text-xs text-muted-foreground tracking-wide">
            © 2026 Aaru Pool · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
