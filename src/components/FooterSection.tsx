import logo from "@/assets/logo.png";
import { Send, Twitter, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <div className="dark">
    <footer className="relative border-t border-white/5 overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 mesh-dot opacity-10 pointer-events-none" />

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">

          {/* Brand column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Aaru Pool" className="w-9 h-9 rounded-full ring-1 ring-primary/30 glow-gold" />
              <span className="font-heading text-lg font-bold text-gradient-gold">Aaru Pool</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Aaru Pool puts yield first, combining AI-driven strategies, on-chain governance, and ZK-shielded privacy in one decentralized fund protocol.
            </p>
          </div>

          {/* Follow column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-5 tracking-wide">Follow Aaru Pool</h4>
            <ul className="space-y-3">
              {[
                { icon: Send, label: "Telegram", href: "https://t.me/aarupool" },
                { icon: Twitter, label: "X (Twitter)", href: "https://x.com/aarupool" },
                { icon: MessageCircle, label: "Discord", href: "https://discord.com/invite/3VhrnNF3WU" },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <Icon size={15} className="group-hover:text-primary transition-colors flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-5 tracking-wide">Legal</h4>
            <ul className="space-y-3">
              {[
                { label: "Privacy Policy", href: "https://drive.google.com/file/d/1c_spuGulLOnVvzIwZAmhfHkTA4CG5rl5/view?usp=sharing" },
                { label: "Terms of Service", href: "https://drive.google.com/file/d/1tV0hS_dyx-1G0f6ST4KUv9rOGhF0_L0m/view?usp=sharing" },
                { label: "Risk Disclaimer", href: "https://drive.google.com/file/d/1PdcVllE_GDZxjg6p_egETA6nAPc30mbQ/view?usp=sharing" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30 relative z-10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-xs text-muted-foreground">
            © Aaru Pool 2026. All rights reserved.
          </p>
          <span className="hidden sm:inline text-muted-foreground/30">·</span>
          <p className="text-xs text-muted-foreground">
            Multi-Chain · Powered by ZK Privacy
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default FooterSection;
