import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Curriculum", href: "#curriculum" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--ivory-faint)" : "1px solid transparent",
        }}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 lg:px-10 py-5">
          <a href="#top" className="text-[13px] tracking-[0.25em] uppercase font-medium" style={{ color: "var(--gold)" }}>
            D2C by VMT
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] tracking-[0.2em] uppercase transition-colors hover:text-[var(--gold)]"
                style={{ color: "var(--ivory-muted)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#apply"
              className="text-[12px] tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-all"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
            >
              Apply Now
            </a>
          </nav>

          <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu className="w-6 h-6" style={{ color: "var(--gold)" }} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden flex flex-col items-center justify-center gap-8" style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(24px)" }}>
          <button className="absolute top-6 right-6" onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="w-7 h-7" style={{ color: "var(--gold)" }} />
          </button>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl"
              style={{ color: "var(--ivory)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setOpen(false)}
            className="mt-4 px-8 py-3 text-[13px] tracking-[0.2em] uppercase"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            Apply Now
          </a>
        </div>
      )}
    </>
  );
}

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setW(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[1px]" style={{ background: "transparent" }}>
      <div className="h-full" style={{ width: `${w}%`, background: "var(--gold)", transition: "width 0.1s linear" }} />
    </div>
  );
}
