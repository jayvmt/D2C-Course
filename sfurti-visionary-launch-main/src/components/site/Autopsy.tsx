import { Reveal, LabelTag } from "./Reveal";

const failures = [
  { t: "Emotional Decision Making", lines: ['"I love this product" is not a business plan.', "Founders who build for themselves go broke for themselves."] },
  { t: "Weak Brand Identity", lines: ["When your brand looks like everyone else's,", "the only competition you have left is price."] },
  { t: "Poor Packaging", lines: ["If your product looks cheap, it is cheap.", "Perception is pricing power."] },
  { t: "Unrealistic Pricing", lines: ["Too high without trust. Too low without margin.", "Neither works. Both kill."] },
  { t: "Random Advertising", lines: ["Running ads without a strategy is burning money with extra steps.", "You don't need more ads. You need a clearer message."] },
  { t: "Zero Positioning", lines: ['"We sell handmade candles" is a description.', '"The brand for women who protect their peace" is a position.', "One is a product. One is a movement."] },
];

export function Autopsy() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <Reveal>
            <LabelTag>The Autopsy</LabelTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 leading-[1.0]" style={{ fontSize: "clamp(40px, 6vw, 80px)", color: "var(--ivory)" }}>
              It wasn't the product.
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>It was never the product.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-20">
          {failures.map((f, i) => (
            <Reveal key={f.t} delay={0.05}>
              <div className="grid grid-cols-1 md:grid-cols-[120px_1fr_2fr] gap-6 md:gap-12 py-10" style={{ borderTop: "1px solid var(--gold-muted)" }}>
                <div className="font-display text-[44px] leading-none" style={{ color: "var(--gold)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-medium text-[20px] tracking-wide uppercase" style={{ color: "var(--ivory)", letterSpacing: "0.08em", fontSize: "16px" }}>
                  {f.t}
                </div>
                <div className="space-y-2 text-[17px] leading-[1.8]" style={{ color: "var(--ivory-muted)" }}>
                  {f.lines.map((l, j) => <p key={j}>{l}</p>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-24 text-center font-display italic mx-auto max-w-3xl" style={{ fontSize: "clamp(22px, 2.6vw, 32px)", color: "var(--gold)", lineHeight: 1.4 }}>
            "Most brands don't die from competition. They die from confusion."
          </p>
        </Reveal>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
