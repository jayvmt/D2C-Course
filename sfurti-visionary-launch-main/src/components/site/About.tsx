import { Reveal, LabelTag } from "./Reveal";
import aboutPortrait from "@/assets/about-portrait.png";

export function About() {
  return (
    <section id="about" className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <LabelTag>The Founder Behind the Curriculum</LabelTag>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <Reveal>
            <h2 className="font-display italic leading-[1.05]" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--ivory)" }}>
              People trust people
              <br /> before they trust
              <br />
              <span style={{ color: "var(--gold)" }}>products.</span>
            </h2>

            <div className="mt-12 space-y-6 text-[17px] leading-[1.9]" style={{ color: "var(--ivory-muted)" }}>
              <p>
                Before a customer buys your product, they're already asking:{" "}
                <span className="italic" style={{ color: "var(--ivory)" }}>Who made this? Can I trust them? Do they understand my life?</span>
              </p>
              <p>Your personal brand answers those questions before your product even loads on their screen.</p>
              <p>
                D2C by VMT has spent years at the intersection of entrepreneurship, psychology, and storytelling — building brands that don't just sell, but create believers.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4 text-[11px] tracking-[0.2em] uppercase" style={{ color: "var(--ivory-muted)" }}>
              {["TEDx Speaker", "National Bestselling Author", "D2C Mentor", "Women's Empowerment"].map((c, i, a) => (
                <span key={c} className="flex items-center gap-4">
                  <span>{c}</span>
                  {i < a.length - 1 && <span className="h-3 w-px" style={{ background: "var(--gold-muted)" }} />}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative aspect-[3/4] w-full max-w-[420px] mx-auto overflow-hidden" style={{ border: "1px solid var(--gold-muted)" }}>
              <span className="absolute -top-1 -left-1 w-6 h-6 z-10" style={{ background: "var(--gold)" }} />
              <span className="absolute -bottom-1 -right-1 w-6 h-6 z-10" style={{ background: "var(--gold)" }} />
              <img
                src={aboutPortrait}
                alt="Sfurti Sahare — Founder of D2C by VMT"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,8,0.4))" }} />
            </div>
          </Reveal>
        </div>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
