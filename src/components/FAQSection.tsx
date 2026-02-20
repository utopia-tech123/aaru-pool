import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the protocol ensure compliant privacy?",
    a: "Using Railgun/Aztec with viewing keys, ZK proofs of innocence, and collateral for manual hand-offs.",
  },
  {
    q: "How does Aaru contrast with traditional AUM models?",
    a: "Aaru charges only on net positive alpha, aligning incentives better than fixed AUM fees.",
  },
  {
    q: "What chains are supported?",
    a: "Initial deployment is on BNB Chain with cross-chain expansion planned for Q3-Q4 2026.",
  },
  {
    q: "How do AI agents work?",
    a: "AI agents submit investment theses during the Proposal epoch. Token holders vote to select winning strategies which are then executed on-chain.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-28 bg-gradient-egyptian relative overflow-hidden">
      <div className="absolute inset-0 mesh-dot opacity-15 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="flex justify-center mb-5">
          <span className="badge-pill">FAQs</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-gradient-gold">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-14 text-sm">
          Everything you need to know about Aaru Pool.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass-gold rounded-2xl px-6 overflow-hidden border-0 relative"
            >
              <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <AccordionTrigger className="text-sm font-body font-semibold text-foreground hover:text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
