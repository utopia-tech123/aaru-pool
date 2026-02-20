const FooterSection = () => {
  return (
    <footer className="border-t border-gold/10 py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm mb-4">Join our community:</p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://x.com/aarupool" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-primary transition-colors">
            X (Twitter)
          </a>
          <a href="https://discord.gg/aarupool" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-primary transition-colors">
            Discord
          </a>
          <a href="https://t.me/aarupool" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-primary transition-colors">
            Telegram
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Aaru Pool. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
