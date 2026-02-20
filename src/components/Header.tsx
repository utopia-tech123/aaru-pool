import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#tokenomics", label: "Tokenomics" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQs" },
  { href: "#subscribe", label: "Subscribe" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/92 backdrop-blur-md border-b border-primary/15">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} alt="Aaru Pool" className="w-9 h-9 rounded-full" />
        </a>

        {/* Desktop nav — absolutely centered */}
        <nav className="hidden lg:flex gap-7 absolute left-1/2 -translate-x-1/2">
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

        {/* Right spacer (same width as logo for balance) + mobile toggle */}
        <div className="flex items-center w-9 justify-end">
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
