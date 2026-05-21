import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Reveal, LabelTag } from "./Reveal";

const faqs = [
  { q: "Is this for complete beginners?", a: "Yes. The curriculum starts from first principles — what a business is, who it serves, and how it survives. No prior experience needed." },
  { q: "Do I need a product already?", a: "No. Some of the most important work happens before you build anything. Ideally you learn this before launching." },
  { q: "How much ad budget do I need to start?", a: "You don't need a large budget to learn. The curriculum teaches you to test on ₹300–₹500 per day and only scale when you have proof." },
  { q: "My product already launched and failed. Is it too late?", a: "No. Failure is data. The curriculum is designed to help you diagnose what went wrong and rebuild with clarity." },
  { q: "Is this only for D2C brands?", a: "The core principles apply to any product-based business — D2C, retail, private label, or manufacturing brands." },
  { q: "What makes this different from other business courses?", a: "This isn't motivation dressed as education. Every module addresses a real business failure pattern with strategic, actionable understanding." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[960px] mx-auto">
        <Reveal><LabelTag>Questions Answered</LabelTag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(38px, 5vw, 64px)", color: "var(--ivory)" }}>
            Before you reach out.
          </h2>
        </Reveal>

        <div className="mt-16">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={0.04}>
                <div style={{ borderTop: "1px solid var(--ivory-faint)" }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left flex items-center justify-between gap-6 py-7 group"
                  >
                    <span className="font-medium text-[17px] md:text-[19px] transition-colors" style={{ color: isOpen ? "var(--gold)" : "var(--ivory)" }}>
                      {f.q}
                    </span>
                    <span className="shrink-0 transition-transform duration-500" style={{ color: "var(--gold)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}>
                      <Plus className="w-5 h-5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-[16px] leading-[1.85]" style={{ color: "var(--ivory-muted)" }}>
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
          <div style={{ borderTop: "1px solid var(--ivory-faint)" }} />
        </div>
      </div>
    </section>
  );
}
