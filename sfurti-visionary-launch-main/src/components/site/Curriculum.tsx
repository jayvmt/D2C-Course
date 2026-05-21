import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, LabelTag } from "./Reveal";

const FEATURED = {
  id: "hg6IG9bwSjk",
  ep: "EP 01",
  cat: "Positioning",
  title: "Why Great Products Don't Sell",
  duration: "18 min",
};

const episodes = [
  { id: "J5Fi-khXRJM", ep: "EP 02", cat: "D2C Strategy", title: "Why You're Solving the Wrong Problem", duration: "22 min" },
  { id: "aLC3fBNOmgc", ep: "EP 03", cat: "Packaging", title: "The Box Is a Sales Tool", duration: "16 min" },
  { id: "2JqEZP0r4wU", ep: "EP 04", cat: "Pricing", title: "Why Cheap Brands Die Young", duration: "19 min" },
];

export function Curriculum() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement | undefined;
    if (card) el.scrollTo({ left: card.offsetLeft - 16, behavior: "smooth" });
  };

  const scrollBy = (dir: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = 356;
      setActive(Math.round(el.scrollLeft / cardW));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="curriculum" className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <LabelTag>The Curriculum</LabelTag>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(42px, 6vw, 80px)", color: "var(--ivory)" }}>
            Every Episode.
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>One Business Truth.</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="mt-6 text-[18px] max-w-xl" style={{ color: "var(--ivory-muted)" }}>
            Short, dense, and designed for founders who don't have time for fluff.
          </p>
        </Reveal>

        {/* Featured */}
        <Reveal delay={0.15}>
          <div
            className="mt-16 relative rounded-[4px] overflow-hidden"
            style={{ border: "1px solid var(--gold-muted)", boxShadow: "0 0 60px rgba(201,168,76,0.08)" }}
          >
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${FEATURED.id}?rel=0&modestbranding=1`}
                title={FEATURED.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              />
            </div>
            <div
              className="px-6 md:px-10 py-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
              style={{ background: "rgba(8,8,8,0.85)", borderTop: "1px solid var(--ivory-faint)" }}
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="label-tag">{FEATURED.ep}</span>
                  <span className="label-tag" style={{ padding: "4px 10px", border: "1px solid var(--gold)" }}>Featured</span>
                </div>
                <h3 className="font-display text-[22px] md:text-[26px] mt-2" style={{ color: "var(--ivory)" }}>
                  {FEATURED.title}
                </h3>
              </div>
              <div className="flex gap-8 shrink-0">
                <div>
                  <div className="label-tag" style={{ color: "var(--ivory-muted)" }}>Duration</div>
                  <div className="text-[14px] mt-1" style={{ color: "var(--ivory)" }}>{FEATURED.duration}</div>
                </div>
                <div>
                  <div className="label-tag" style={{ color: "var(--ivory-muted)" }}>Category</div>
                  <div className="text-[14px] mt-1" style={{ color: "var(--ivory)" }}>{FEATURED.cat}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Carousel */}
        <div className="relative mt-16">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-colors hover:bg-[var(--surface)]"
            style={{ border: "1px solid var(--gold-muted)", color: "var(--gold)", background: "rgba(8,8,8,0.6)" }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full items-center justify-center transition-colors hover:bg-[var(--surface)]"
            style={{ border: "1px solid var(--gold-muted)", color: "var(--gold)", background: "rgba(8,8,8,0.6)" }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div ref={scrollerRef} className="hide-scrollbar flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4">
            {episodes.map((e) => (
              <div
                key={e.id}
                className="group relative shrink-0 snap-start rounded-[4px] overflow-hidden transition-all duration-500"
                style={{ width: "340px", background: "var(--surface)", border: "1px solid transparent" }}
                onMouseEnter={(ev) => (ev.currentTarget.style.borderColor = "var(--gold-muted)")}
                onMouseLeave={(ev) => (ev.currentTarget.style.borderColor = "transparent")}
              >
                <div className="aspect-video w-full" style={{ background: "#000" }}>
                  <iframe
                    className="w-full h-full"
                    loading="lazy"
                    src={`https://www.youtube.com/embed/${e.id}?rel=0&modestbranding=1`}
                    title={e.title}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <span className="label-tag">{e.ep}</span>
                    <span className="label-tag" style={{ color: "var(--ivory-muted)" }}>{e.cat}</span>
                  </div>
                  <h4 className="font-display text-[19px] mt-2 leading-snug" style={{ color: "var(--ivory)" }}>
                    {e.title}
                  </h4>
                  <div className="mt-2 text-[12px]" style={{ color: "var(--ivory-muted)" }}>{e.duration}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {episodes.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to episode ${i + 1}`}
                className="h-[6px] rounded-full transition-all duration-500"
                style={{
                  width: active === i ? "24px" : "6px",
                  background: active === i ? "var(--gold)" : "var(--gold-muted)",
                  opacity: active === i ? 1 : 0.5,
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a href="#apply" className="btn-gold">Unlock Full Curriculum</a>
        </div>

        <div className="mt-[120px]">
          <hr className="gold-rule" />
        </div>
      </div>
    </section>
  );
}
