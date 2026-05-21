import { useEffect, useRef, useState } from "react";
import { Reveal, LabelTag } from "./Reveal";

const testimonials = [
  { q: "Before this, I thought my product was the problem. Turns out my packaging, my pricing, and my positioning were all wrong. Sfurti helped me see the full picture.", n: "Ananya R.", r: "Skincare Founder, Pune" },
  { q: "The Meta Ads section alone saved me from wasting another ₹2 lakh. I finally understand what I'm actually buying with ad spend.", n: "Rohan M.", r: "Apparel Brand, Delhi" },
  { q: "This isn't motivation. This is real business education. I've never felt so clear about what to do next.", n: "Priya K.", r: "Home Decor Brand, Bangalore" },
  { q: "I went from 'why isn't this working' to 'here's exactly what I need to change.' That shift is priceless.", n: "Vikram S.", r: "Food Brand, Hyderabad" },
  { q: "The packaging module completely changed how I think about presentation. My return rate dropped. My repeat orders went up.", n: "Sneha T.", r: "Gifting Brand, Mumbai" },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const len = testimonials.length;

  const scrollTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % len;
        scrollTo(next);
        return next;
      });
    }, 4500);
    return () => clearInterval(id);
  }, [len]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const cardW = el.children[0] ? (el.children[0] as HTMLElement).offsetWidth + 20 : 400;
      setActive(Math.round(el.scrollLeft / cardW));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="testimonials" className="relative py-[120px] px-6 lg:px-10">
      <div className="max-w-[1280px] mx-auto">
        <Reveal><LabelTag>What Founders Say</LabelTag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--ivory)" }}>
            Real words. <span className="italic" style={{ color: "var(--gold)" }}>Real results.</span>
          </h2>
        </Reveal>

        <div ref={ref} className="hide-scrollbar mt-16 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4">
          {testimonials.map((t) => (
            <div
              key={t.n}
              className="group shrink-0 snap-start p-10 transition-all duration-500"
              style={{ width: "min(420px, 85vw)", background: "var(--surface)", border: "1px solid var(--ivory-faint)" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--gold-muted)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--ivory-faint)")}
            >
              <div className="font-display leading-none" style={{ color: "var(--gold)", opacity: 0.3, fontSize: "72px" }}>"</div>
              <p className="-mt-4 text-[17px] leading-[1.8]" style={{ color: "var(--ivory)" }}>{t.q}</p>
              <hr className="my-6" style={{ borderColor: "var(--gold-muted)", opacity: 0.5 }} />
              <div className="font-medium text-[14px]" style={{ color: "var(--ivory)" }}>{t.n}</div>
              <div className="mt-1 text-[12px]" style={{ color: "var(--ivory-muted)" }}>{t.r}</div>
              <div className="mt-4 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); scrollTo(i); }}
              aria-label={`Testimonial ${i + 1}`}
              className="h-[6px] rounded-full transition-all duration-500"
              style={{ width: active === i ? "24px" : "6px", background: active === i ? "var(--gold)" : "var(--gold-muted)", opacity: active === i ? 1 : 0.5 }}
            />
          ))}
        </div>

        <div className="mt-[120px]"><hr className="gold-rule" /></div>
      </div>
    </section>
  );
}
