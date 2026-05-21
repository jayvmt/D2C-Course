import { Reveal, LabelTag } from "./Reveal";

const truths = [
  {
    t: "Ads are a data collection system.",
    lines: [
      "The first ₹10,000 doesn't sell. It teaches.",
      "Every click, scroll, and skip is data.",
      "Stop asking \"Why isn't this working?\"",
      "Start asking \"What is this teaching me?\"",
    ],
  },
  {
    t: "Nobody buys on the first ad.",
    lines: [
      "Studies show 7–12 brand exposures before a purchase decision.",
      "Your customer needs to see you again.",
      "And again. And again.",
      "Repetition is trust at scale.",
    ],
  },
  {
    t: "Your creative matters more than your budget.",
    lines: [
      "A ₹500/day campaign with sharp creative will outperform",
      "a ₹5,000/day campaign with generic visuals.",
      "The algorithm rewards relevance, not spend.",
    ],
  },
  {
    t: "Targeting is not your first problem.",
    lines: [
      "Most founders start with \"Who do I target?\"",
      "The real question is \"What am I saying to them?\"",
      "Fix the message before you fix the audience.",
    ],
  },
  {
    t: "Scaling is the last step, not the first.",
    lines: [
      "Prove the unit economics on ₹500/day.",
      "Then scale. Not before.",
    ],
  },
];

export function MetaAds() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <LabelTag>The Ads Truth</LabelTag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.0]" style={{ fontSize: "clamp(44px, 6.5vw, 88px)", color: "var(--ivory)" }}>
            Ads don't fail.
            <br />
            <span className="italic">Your expectations do.</span>
          </h2>
        </Reveal>

        <div className="mt-20 space-y-20">
          {truths.map((tr, i) => (
            <Reveal key={i} delay={0.05}>
              <div className="relative grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-16 items-start py-10" style={{ borderTop: "1px solid var(--ivory-faint)" }}>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -left-6 font-display select-none"
                  style={{ fontSize: "clamp(160px, 22vw, 320px)", color: "var(--ivory)", opacity: 0.04, lineHeight: 0.8 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="label-tag">Truth {String(i + 1).padStart(2, "0")}</div>
                </div>
                <div className="relative">
                  <h3 className="font-display text-[28px] md:text-[36px] italic leading-tight" style={{ color: "var(--gold)" }}>
                    {tr.t}
                  </h3>
                  <div className="mt-6 space-y-2 text-[17px] leading-[1.85]" style={{ color: "var(--ivory-muted)" }}>
                    {tr.lines.map((l, j) => (
                      <p key={j}>{l}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
