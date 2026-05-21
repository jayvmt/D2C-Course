import { useState } from "react";
import { Reveal, LabelTag } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-[120px] px-6 lg:px-10" style={{ background: "#060606" }}>
      <div className="max-w-[1280px] mx-auto">
        <Reveal><LabelTag>Let's Talk</LabelTag></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display mt-6 leading-[1.05]" style={{ fontSize: "clamp(40px, 5.5vw, 72px)", color: "var(--ivory)" }}>
            Begin the <span className="italic" style={{ color: "var(--gold)" }}>conversation</span>.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-2"
            >
              {[
                { name: "name", ph: "Your name", type: "text" },
                { name: "email", ph: "Your email", type: "email" },
                { name: "brand", ph: "Your brand or business (if you have one)", type: "text" },
              ].map((f) => (
                <input
                  key={f.name}
                  type={f.type}
                  name={f.name}
                  placeholder={f.ph}
                  required={f.name !== "brand"}
                  className="w-full bg-transparent text-[16px] py-4 outline-none transition-colors"
                  style={{ borderBottom: "1px solid var(--ivory-faint)", color: "var(--ivory)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--ivory-faint)")}
                />
              ))}
              <textarea
                name="message"
                rows={4}
                placeholder="What are you working on?"
                required
                className="w-full bg-transparent text-[16px] py-4 outline-none transition-colors resize-none"
                style={{ borderBottom: "1px solid var(--ivory-faint)", color: "var(--ivory)" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "var(--gold)")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "var(--ivory-faint)")}
              />
              <div className="pt-8">
                <button type="submit" className="btn-gold" disabled={sent}>
                  {sent ? "Inquiry Received" : "Send Inquiry"}
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <div className="font-display italic text-[28px]" style={{ color: "var(--ivory)" }}>D2C by VMT</div>
              <p className="mt-4 text-[15px] leading-[1.8]" style={{ color: "var(--ivory-muted)" }}>
                Mentor to founders building brands of consequence. Inquiries are read personally.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  { l: "Instagram", h: "#" },
                  { l: "LinkedIn", h: "#" },
                  { l: "Email", h: "mailto:hello@sfurtisahare.com" },
                  { l: "WhatsApp", h: "#" },
                ].map((link) => (
                  <a
                    key={link.l}
                    href={link.h}
                    className="group flex items-center gap-3 text-[16px] transition-colors"
                    style={{ color: "var(--ivory-muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-muted)")}
                  >
                    <span style={{ color: "var(--gold)" }}>→</span>
                    <span>{link.l}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <footer className="mt-[120px] pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px]" style={{ borderTop: "1px solid var(--gold-muted)", color: "var(--ivory-muted)" }}>
          <span>© 2025 D2C by VMT. All Rights Reserved.</span>
          <span className="italic">Built with intention.</span>
        </footer>
      </div>
    </section>
  );
}
