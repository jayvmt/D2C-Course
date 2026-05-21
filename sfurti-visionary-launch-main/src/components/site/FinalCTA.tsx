import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="apply" className="relative py-[160px] px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 radial-glow" style={{ opacity: 1.4 }} />
      <div className="grain" />
      <div className="relative max-w-[960px] mx-auto text-center">
        <Reveal>
          <h2 className="font-display leading-[1.0]" style={{ fontSize: "clamp(48px, 8vw, 120px)", color: "var(--ivory)" }}>
            If you're serious
            <br /> about building a brand —
            <br /> <span className="italic" style={{ color: "var(--gold)" }}>this is where you start.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-12 mx-auto max-w-xl text-[20px] leading-[1.7]" style={{ color: "var(--ivory-muted)" }}>
            Not because this will be easy. But because building without understanding is how most founders lose everything — slowly, quietly, and unnecessarily.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
            <a href="#contact" className="btn-gold btn-gold-filled">Apply for Mentorship</a>
            <a href="#curriculum" className="btn-gold">Explore the Curriculum</a>
          </div>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="mt-8 text-[13px] tracking-[0.15em]" style={{ color: "var(--ivory-muted)" }}>
            Limited spots available. Personal review process.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
