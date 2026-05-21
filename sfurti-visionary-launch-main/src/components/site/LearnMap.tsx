import { Reveal, LabelTag } from "./Reveal";

const topics = [
  { t: "D2C Brand Architecture", d: "Build the foundation before the product.", span: "lg:col-span-2" },
  { t: "Pricing Psychology", d: "Price isn't cost-plus. Price is positioning.", span: "" },
  { t: "Meta Ads Reality", d: "Ads are experiments. Not magic buttons.", span: "" },
  { t: "Packaging as Perception", d: "Customers judge the box before the product.", span: "" },
  { t: "Personal Branding", d: "Your face sells before your product does.", span: "" },
  { t: "Influencer Strategy", d: "Reach isn't everything. Alignment is.", span: "lg:col-span-2" },
  { t: "Product Selection", d: "Solve real problems. Don't sell fancy things.", span: "" },
  { t: "Scaling Readiness", d: "Growth without systems is just faster chaos.", span: "lg:col-span-2" },
  { t: "Customer Behavior", d: "What they say they want and what they buy are different.", span: "" },
  { t: "Market Positioning", d: "If you're for everyone, you're for no one.", span: "lg:col-span-4" },
];

export function LearnMap() {
  return (
    <section className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <LabelTag>The Curriculum Map</LabelTag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--ivory)" }}>
            What you will <span className="italic">learn</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {topics.map((t, i) => (
            <Reveal key={t.t} delay={i * 0.04} className={t.span}>
              <div
                className="group h-full p-8 transition-all duration-500"
                style={{ border: "1px solid var(--ivory-faint)", background: "var(--surface)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--gold-muted)";
                  e.currentTarget.style.background = "var(--surface-alt)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--ivory-faint)";
                  e.currentTarget.style.background = "var(--surface)";
                }}
              >
                <div className="font-display leading-none" style={{ color: "var(--gold)", fontSize: "48px", opacity: 0.4 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-6 font-medium text-[18px]" style={{ color: "var(--ivory)" }}>
                  {t.t}
                </div>
                <div className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--ivory-muted)" }}>
                  {t.d}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-[120px]">
          <hr className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
