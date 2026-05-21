import { Reveal, LabelTag } from "./Reveal";

const principles = [
  { t: "Market Validation First", d: "Build what sells, not what you love building." },
  { t: "Pricing Is Psychology", d: "Your price signals your brand's worth before the product does." },
  { t: "Trust Requires Repetition", d: "A customer needs 7–12 brand touchpoints before they buy." },
  { t: "The Product Is 50%", d: "The other 50% is how you position, package, and sell it." },
  { t: "Personal Brand Is Infrastructure", d: "People trust people before they trust products." },
];

export function Shift() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <LabelTag>The Shift</LabelTag>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <Reveal>
            <h2 className="font-display italic leading-[1.05]" style={{ fontSize: "clamp(36px, 5vw, 64px)", color: "var(--ivory)" }}>
              Your customer
              <br /> decides if your
              <br /> business lives.
              <br />
              <span className="not-italic" style={{ color: "var(--gold)" }}>Not you.</span>
            </h2>
            <p className="mt-8 text-sm tracking-wide" style={{ color: "var(--ivory-muted)" }}>
              This is not pessimism. This is strategy.
            </p>
          </Reveal>

          <div>
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.1}>
                <div className="py-7" style={{ borderTop: i === 0 ? "none" : "1px solid var(--ivory-faint)" }}>
                  <div className="flex items-baseline gap-6">
                    <span className="font-display text-[40px] leading-none" style={{ color: "var(--gold)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="font-medium text-[18px]" style={{ color: "var(--ivory)" }}>{p.t}</div>
                      <div className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--ivory-muted)" }}>{p.d}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-[120px]">
          <hr className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
