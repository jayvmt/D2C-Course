import { Reveal, LabelTag } from "./Reveal";

export function Packaging() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10 overflow-hidden" style={{ background: "#0E0C09" }}>
      <div className="grain" />
      <div className="max-w-[1280px] mx-auto relative">
        <Reveal>
          <LabelTag>The Silent Salesperson</LabelTag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.0]" style={{ fontSize: "clamp(48px, 7vw, 96px)", color: "var(--ivory)" }}>
            The box sells
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>before you do.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <blockquote className="font-display italic leading-[1.4]" style={{ fontSize: "clamp(24px, 2.8vw, 34px)", color: "var(--ivory)" }}>
              "Packaging is not decoration. It is the first handshake between your brand and your customer."
            </blockquote>
            <p className="mt-10 text-[17px] leading-[1.85]" style={{ color: "var(--ivory-muted)" }}>
              Before they read your description. Before they see your ads. Before they look at reviews — they've already judged the package. That judgment takes 0.3 seconds and it's rarely wrong.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5">
              {[
                { label: "Premium Perception", border: "1px solid var(--gold)", glow: "0 0 40px rgba(201,168,76,0.12)", h: "180px" },
                { label: "Mid-Tier Confusion", border: "1px solid rgba(160,152,144,0.4)", glow: "none", h: "140px" },
                { label: "Budget Signal", border: "1px dashed rgba(160,152,144,0.18)", glow: "none", h: "100px" },
              ].map((b) => (
                <div
                  key={b.label}
                  className="relative flex items-center justify-center"
                  style={{ height: b.h, border: b.border, boxShadow: b.glow, background: "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.3))" }}
                >
                  <span className="label-tag" style={{ color: b.label === "Budget Signal" ? "var(--ivory-muted)" : "var(--gold)", opacity: b.label === "Budget Signal" ? 0.5 : 1 }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
