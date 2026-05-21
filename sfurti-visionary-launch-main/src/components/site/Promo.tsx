import { Reveal, LabelTag } from "./Reveal";

export function Promo() {
  return (
    <section id="vision" className="relative py-[100px] px-6 lg:px-10 overflow-hidden">
      {/* Theatre curtain vignette */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[120px]" style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7), transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[120px]" style={{ background: "linear-gradient(to left, rgba(0,0,0,0.7), transparent)" }} />

      <div className="max-w-[1100px] mx-auto text-center relative z-10">
        <Reveal>
          <LabelTag>The Vision</LabelTag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05] mx-auto max-w-[900px]" style={{ fontSize: "clamp(42px, 6vw, 80px)", color: "var(--ivory)" }}>
            This Is What Real
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>D2C Education Looks Like.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            className="mt-16 mx-auto w-full aspect-video overflow-hidden rounded-[4px]"
            style={{
              maxWidth: "960px",
              border: "1px solid var(--gold-muted)",
              boxShadow: "0 0 60px rgba(201,168,76,0.08)",
            }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/a4-CTixyiBc?autoplay=1&mute=1&loop=1&playlist=a4-CTixyiBc&controls=1&rel=0&modestbranding=1"
              title="D2C by VMT — The Vision"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Reveal>

        <div className="mt-[100px]">
          <hr className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
