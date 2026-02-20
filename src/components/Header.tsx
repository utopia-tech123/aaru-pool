import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQs" },
  { href: "#subscribe", label: "Subscribe" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="container mx-auto flex items-center justify-between py-4 relative">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0 z-10">
          <img src={logo} alt="Aaru Pool" className="w-9 h-9 rounded-full ring-1 ring-primary/30 glow-gold" />
        </a>

        {/* Desktop nav — absolutely centered */}
        <nav className="hidden lg:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-muted-foreground hover:text-foreground transition-colors relative group tracking-wide"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#subscribe"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-200"
          >
            Launch App
          </a>
          <button
            className="lg:hidden text-foreground p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden glass border-t border-white/5 py-5">
          <div className="container mx-auto flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors py-3 px-2 border-b border-white/5 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#subscribe"
              onClick={() => setMobileOpen(false)}
              className="mt-3 text-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-primary/10 border border-primary/30 text-primary"
            >
              Launch App
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
