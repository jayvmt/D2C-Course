import { Reveal, LabelTag } from "./Reveal";

export function Problem() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[800px] ml-0 lg:ml-[8%]">
          <Reveal>
            <LabelTag>The Real Problem</LabelTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(42px, 6vw, 80px)", color: "var(--ivory)" }}>
              You built something real.
              <br />
              <span className="italic">Nobody bought it.</span>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-10 text-[18px] leading-[1.85]" style={{ color: "var(--ivory-muted)" }}>
            <Reveal>
              <p>You spent months on the product. You researched suppliers. You got the packaging done. You launched.</p>
            </Reveal>
            <Reveal>
              <p className="pl-6" style={{ borderLeft: "2px solid var(--gold-muted)" }}>
                And then — <span className="font-display italic text-[22px]" style={{ color: "var(--ivory)" }}>silence.</span>
              </p>
            </Reveal>
            <Reveal>
              <p>
                Not because your product was bad. But because you made every decision based on{" "}
                <span className="font-display italic text-[21px]" style={{ color: "var(--ivory)" }}>what you loved</span> — not{" "}
                <span className="font-display italic text-[21px]" style={{ color: "var(--gold-light)" }}>what your customer needed</span>.
              </p>
            </Reveal>
            <Reveal>
              <p className="pl-6" style={{ borderLeft: "2px solid var(--gold-muted)" }}>
                Dead inventory. Wrong pricing. Ads that burned money without a single sale. A brand that only made sense to you.
              </p>
            </Reveal>
            <Reveal>
              <p>
                This is not failure. This is the gap between <span className="italic">making</span> something and <span className="italic">selling</span> something. Nobody teaches founders this gap.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10">
              {[
                { stat: "72%", label: "of new D2C brands fail in year one" },
                { stat: "₹2.4L", label: "avg dead inventory per founder in year one" },
                { stat: "9 months", label: "before most founders quit" },
              ].map((s) => (
                <div key={s.stat}>
                  <div className="font-display leading-none" style={{ color: "var(--gold)", fontSize: "clamp(48px, 5vw, 72px)" }}>
                    {s.stat}
                  </div>
                  <div className="mt-3 text-[12px] tracking-[0.18em] uppercase" style={{ color: "var(--ivory-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-[120px]">
          <hr className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
