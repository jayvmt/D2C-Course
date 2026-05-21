import { Reveal, LabelTag } from "./Reveal";

export function ProductTruth() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center">
          <Reveal>
            <LabelTag>Product Truth</LabelTag>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-6 leading-[1.05] mx-auto max-w-4xl" style={{ fontSize: "clamp(38px, 5.5vw, 72px)", color: "var(--ivory)" }}>
              Selling something <span className="italic">beautiful</span>
              <br /> is not a business strategy.
            </h2>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="p-10 h-full" style={{ background: "linear-gradient(180deg, rgba(140,40,40,0.06), transparent)", border: "1px solid rgba(140,40,40,0.25)" }}>
              <div className="label-tag" style={{ color: "#c97a7a" }}>The Wrong Approach</div>
              <p className="mt-6 font-display italic text-[22px] leading-[1.5]" style={{ color: "var(--ivory)" }}>
                A luxury scented candle in a city where people can barely afford rent.
                A handcrafted journal in a market that uses phones for everything.
                Beautiful things nobody asked for.
              </p>
              <div className="mt-10 text-[12px] tracking-[0.2em] uppercase" style={{ color: "#c97a7a" }}>
                Low Conversion. High Abandonment.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="p-10 h-full" style={{ background: "linear-gradient(180deg, rgba(201,168,76,0.07), transparent)", border: "1px solid var(--gold-muted)" }}>
              <div className="label-tag">The Right Approach</div>
              <p className="mt-6 font-display italic text-[22px] leading-[1.5]" style={{ color: "var(--ivory)" }}>
                A product that solves a real irritation. A daily-use item with a premium
                experience layered on top. Something they needed anyway — now packaged
                to feel like a treat.
              </p>
              <div className="mt-10 text-[12px] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                Repeat Purchase. Word of Mouth.
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <blockquote className="mt-24 text-center font-display italic mx-auto max-w-4xl" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--ivory)", lineHeight: 1.4 }}>
            "Scalable brands solve problems first. They offer luxury second."
            <footer className="mt-6 text-[13px] tracking-[0.2em] uppercase not-italic font-body" style={{ color: "var(--gold)" }}>
              — D2C by VMT
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
