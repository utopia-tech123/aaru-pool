import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#features", label: "Features" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: "#subscribe", label: "Subscribe" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3 font-heading text-2xl font-bold tracking-wider">
          <img src={logo} alt="Aaru Pool" className="w-9 h-9 rounded-full" />
          <span className="text-gradient-gold">Aaru Pool</span>{" "}
          <span className="text-accent text-sm font-body font-light tracking-widest hidden sm:inline">
            Decentralized DeX Fund
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body text-muted-foreground hover:text-primary transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="lg:hidden bg-background border-t border-gold/10 py-4">
          <div className="container mx-auto flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-body text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
