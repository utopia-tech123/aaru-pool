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
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-14 text-gradient-gold">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-gold/10 rounded-lg px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-sm font-heading font-semibold text-foreground hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
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
