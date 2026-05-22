import { motion, useScroll, useTransform, AnimatePresence, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Play, Menu, X, Maximize2, Plus, Minus, Instagram, Linkedin, Mail, MessageCircle, Facebook, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-sfurti.png";
import portraitImg from "@/assets/sfurti-portrait.png";
import redImg from "@/assets/sfurti-red.png";
import tedxGslImg from "@/assets/sfurti-tedxgsl.png";
import tedxRomaImg from "@/assets/sfurti-tedxroma.png";

const BRAND = "D2C BY VMT";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: "easeOut", delay: i * 0.12 },
  }),
};

/* ----------------------------- NAV ----------------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  const links = [
    { label: "PROMO", href: "#promo" },
    { label: "EPISODES", href: "#episodes" },
    { label: "GALLERY", href: "#gallery" },
    { label: "LEARN", href: "#learn" },
    { label: "FAQ", href: "#faq" },
    { label: "CONTACT", href: "#contact" },
  ];
  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl border-b border-[var(--color-white-faint)]/40" : ""
        }`}
        style={{ backgroundColor: scrolled ? "rgba(8,8,8,0.85)" : "transparent" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <a href="#top" className="font-brand font-extrabold text-[var(--color-warm-white)] tracking-[0.18em] text-xl md:text-[24px] uppercase">
            {BRAND}
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-[11px] tracking-[0.28em] text-[var(--color-white-muted)] hover:text-[var(--color-gold)] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="text-[11px] tracking-[0.28em] uppercase border border-[var(--color-gold)] text-[var(--color-gold)] px-5 py-2.5 rounded-full hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] hover:shadow-[0_0_24px_rgba(201,168,76,0.45)] transition-all">
              Start Learning
            </a>
          </div>
          <button className="md:hidden text-[var(--color-gold)]" onClick={() => setOpen(true)} aria-label="Menu">
            <Menu size={26} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[var(--color-bg)] flex flex-col">
          <div className="flex justify-between items-center h-20 px-6">
            <span className="font-brand font-extrabold text-[var(--color-warm-white)] tracking-[0.18em] text-xl uppercase">{BRAND}</span>
            <button onClick={() => setOpen(false)} className="text-[var(--color-gold)]"><X size={28} /></button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-[14px] tracking-[0.3em] text-[var(--color-warm-white)]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return <motion.div style={{ width: w }} className="fixed top-0 left-0 h-[1px] bg-[var(--color-gold)] z-[70]" />;
}

/* ------------------------------ HERO ------------------------------ */
const HERO_LINES = [
  { a: "Business does not run according to founders.", b: "It runs according to customers." },
  { a: "Manufacturing is only 50%.", b: "Selling is the other 50%." },
  { a: "Most brands fail because they build emotionally", b: "instead of strategically." },
  { a: "Learn how modern D2C brands", b: "actually scale." },
];

function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_LINES.length), 5200);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="top" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroImg} alt="Sfurti Sahare"
        initial={{ scale: 1.15, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,8,0.55)] via-[rgba(8,8,8,0.4)] to-[rgba(8,8,8,0.95)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 grain opacity-[0.05] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}
          className="font-brand text-[var(--color-gold)] uppercase mb-8 text-sm md:text-base tracking-[0.3em] font-medium"
        >
          A Founder&apos;s Manifesto · Led by Sfurti Sahare
        </motion.div>

        <div className="relative h-[230px] md:h-[260px] flex items-center justify-center">
          {HERO_LINES.map((line, i) => (
            <motion.h1 key={i} initial={false}
              animate={{ opacity: idx === i ? 1 : 0, y: idx === i ? 0 : 20 }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center font-display font-light text-[var(--color-warm-white)] leading-[1.05]"
              style={{ fontSize: "clamp(30px, 5.2vw, 76px)" }}>
              <span>{line.a}</span>
              <span className="italic text-[var(--color-gold-light)]">{line.b}</span>
            </motion.h1>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 1 }}
          className="mt-14 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#episodes" className="inline-flex items-center gap-3 bg-[var(--color-gold)] text-[var(--color-bg)] px-9 py-4 text-[11px] tracking-[0.3em] uppercase font-medium rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.55)] transition-all duration-500">
            Start Learning
          </a>
          <a href="#promo" className="inline-flex items-center gap-3 border border-[var(--color-gold)] text-[var(--color-gold)] px-9 py-4 text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-[var(--color-gold)]/10 hover:shadow-[0_0_30px_rgba(201,168,76,0.35)] transition-all duration-500">
            <Play size={13} className="fill-current" /> Watch The Strategy
          </a>
          <a href="#contact" className="inline-flex items-center gap-3 border border-[var(--color-white-faint)] text-[var(--color-warm-white)] px-9 py-4 text-[11px] tracking-[0.3em] uppercase rounded-full hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-500">
            Build Your Brand Properly
          </a>
        </motion.div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {HERO_LINES.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Quote ${i + 1}`}
              className={`h-[2px] transition-all duration-500 ${idx === i ? "w-10 bg-[var(--color-gold)]" : "w-4 bg-[var(--color-white-faint)]"}`} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div className="w-[1px] h-[50px] bg-[var(--color-gold)] animate-pulse-line" />
        <span className="text-[10px] tracking-[0.3em] text-[var(--color-white-muted)] uppercase">Scroll</span>
      </div>
    </section>
  );
}

/* --------------------- FEATURED PROMO ----------------------- */
function FeaturedPromo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const enterFullscreen = () => wrapRef.current?.requestFullscreen?.();
  return (
    <section id="promo" className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="absolute inset-0 grain opacity-[0.03] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="text-center mb-14">
          <div className="label-tag mb-5">Featured Trailer</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
            Before you build a brand, <span className="italic text-[var(--color-gold)]">understand why most brands fail.</span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.1, ease: "easeOut" }} className="relative group">
          <div className="absolute -inset-[1px] bg-gradient-to-r from-[var(--color-gold-muted)] via-[var(--color-gold)] to-[var(--color-gold-muted)] opacity-40 blur-[1px] rounded-[6px] group-hover:opacity-70 transition-opacity duration-700" />
          <div ref={wrapRef} className="relative aspect-video w-full bg-black rounded-[4px] overflow-hidden border border-[var(--color-gold-muted)] shadow-[0_30px_120px_rgba(0,0,0,0.8),0_0_60px_rgba(201,168,76,0.12)]">
            <iframe className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/a4-CTixyiBc?autoplay=1&mute=1&loop=1&playlist=a4-CTixyiBc&controls=1&rel=0&modestbranding=1&playsinline=1"
              title="Featured Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen />
            <div className="pointer-events-none absolute top-5 left-5 z-10">
              <span className="label-tag bg-[var(--color-bg)]/70 backdrop-blur px-3 py-1.5 rounded-sm">Featured · Trailer</span>
            </div>
            <button onClick={enterFullscreen} className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-[var(--color-bg)]/60 backdrop-blur border border-[var(--color-gold-muted)] text-[var(--color-gold)] flex items-center justify-center hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-colors" aria-label="Fullscreen">
              <Maximize2 size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------- EPISODES ----------------------------- */
type Episode = { ep: string; title: string; desc: string; youtube: string; cat: string; dur: string; };

const EPISODES: Episode[] = [
  { ep: "Episode 01", title: "Why Great Products Don't Sell", desc: "The brutal psychology behind market validation — and why founders confuse love with demand.", youtube: "hg6IG9bwSjk", cat: "Founder Psychology", dur: "18 MIN" },
  { ep: "Episode 02", title: "The Customer Decides, Not You", desc: "Stop building emotionally. Start designing for the buyer's mind, behavior, and trust loop.", youtube: "J5Fi-khXRJM", cat: "Customer Strategy", dur: "22 MIN" },
  { ep: "Episode 03", title: "Packaging Is A Sales Tool", desc: "How modern D2C brands turn a box into a billboard, a memory, and a margin lever.", youtube: "aLC3fBNOmgc", cat: "Packaging", dur: "16 MIN" },
  { ep: "Episode 04", title: "The Meta Ads Truth", desc: "Why boosting kills brands — and the testing architecture that scales seven-figure D2C.", youtube: "2JqEZP0r4wU", cat: "Performance Ads", dur: "24 MIN" },
  { ep: "Episode 05", title: "Scaling The D2C Engine", desc: "Architecture, retention, and the operational truths that separate fads from real brands.", youtube: "i2A8BcYyjTA", cat: "Scaling", dur: "21 MIN" },
];

function EpisodeCard({ ep, i }: { ep: Episode; i: number }) {
  const [playing, setPlaying] = useState(false);
  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.08 }}
      className="group relative snap-start shrink-0 w-[88vw] sm:w-[460px] md:w-[520px]">
      <div className="absolute -inset-px rounded-[6px] bg-gradient-to-br from-transparent via-[var(--color-gold-muted)]/0 to-[var(--color-gold)]/0 group-hover:from-[var(--color-gold-muted)]/30 group-hover:to-[var(--color-gold)]/30 transition-all duration-700 blur-[2px]" />
      <div className="relative rounded-[4px] overflow-hidden border border-[var(--color-white-faint)] group-hover:border-[var(--color-gold)] bg-[var(--color-surface)]/60 backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(201,168,76,0.18)]">
        <div className="relative aspect-video bg-black overflow-hidden">
          {playing ? (
            <iframe className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${ep.youtube}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={ep.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
          ) : (
            <>
              <img src={`https://i.ytimg.com/vi/${ep.youtube}/maxresdefault.jpg`} alt={ep.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${ep.youtube}/hqdefault.jpg`; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
              <button onClick={() => setPlaying(true)} aria-label={`Play ${ep.title}`} className="absolute inset-0 flex items-center justify-center">
                <span className="relative w-20 h-20 rounded-full border border-[var(--color-gold)] bg-[var(--color-bg)]/40 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[var(--color-gold)] group-hover:shadow-[0_0_40px_rgba(201,168,76,0.6)]">
                  <Play size={26} className="fill-[var(--color-gold)] text-[var(--color-gold)] group-hover:fill-[var(--color-bg)] group-hover:text-[var(--color-bg)] translate-x-[2px]" />
                </span>
              </button>
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="label-tag bg-[var(--color-bg)]/70 backdrop-blur px-3 py-1.5 rounded-sm">{ep.ep}</span>
              </div>
              <div className="absolute bottom-4 right-4">
                <span className="text-[10px] tracking-[0.28em] text-[var(--color-warm-white)] bg-[var(--color-bg)]/70 backdrop-blur px-3 py-1.5 rounded-sm uppercase">{ep.dur}</span>
              </div>
            </>
          )}
        </div>
        <div className="p-7 md:p-8">
          <div className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold)] mb-3">{ep.cat}</div>
          <h3 className="font-display text-[var(--color-warm-white)] text-2xl md:text-[28px] leading-tight mb-3">{ep.title}</h3>
          <p className="text-[var(--color-white-muted)] text-[14px] leading-relaxed">{ep.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Episodes() {
  return (
    <section id="episodes" className="relative py-24 md:py-36 bg-[var(--color-bg)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-14">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <div className="label-tag mb-5">The Curriculum</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05] max-w-[1000px]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
            Learn the business side <span className="italic text-[var(--color-gold)]">most founders ignore.</span>
          </h2>
          <p className="mt-6 text-[var(--color-white-muted)] text-lg max-w-[680px]">
            Real D2C education. Not motivational noise. Click any episode to begin — no autoplay, full focus.
          </p>
        </motion.div>
      </div>
      <div className="relative">
        <div className="flex gap-7 md:gap-9 overflow-x-auto hide-scrollbar snap-x snap-mandatory px-6 md:px-12 pb-6">
          {EPISODES.map((ep, i) => (<EpisodeCard key={ep.youtube} ep={ep} i={i} />))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
      </div>
    </section>
  );
}

/* -------------------------- GALLERY ----------------------------- */
function Gallery() {
  const photos = [
    { src: portraitImg, label: "Portrait", span: "md:col-span-2 md:row-span-2 aspect-[4/5]" },
    { src: tedxGslImg, label: "TEDx · GSL", span: "aspect-[4/5]" },
    { src: redImg, label: "Editorial", span: "aspect-[4/5]" },
    { src: tedxRomaImg, label: "TEDx · Roma", span: "md:col-span-2 aspect-[16/10]" },
  ];
  return (
    <section id="gallery" className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="label-tag mb-5">Editorial</div>
            <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05] max-w-[800px]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
              A founder built on <span className="italic text-[var(--color-gold)]">stages, stories, and substance.</span>
            </h2>
          </div>
          <p className="text-[var(--color-white-muted)] max-w-[420px]">TEDx speaker. National bestselling author. Mentor to a new generation of D2C operators.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {photos.map((p, i) => (
            <motion.figure key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: "easeOut" }}
              className={`relative overflow-hidden rounded-[3px] border border-[var(--color-white-faint)] group ${p.span}`}>
              <img src={p.src} alt={p.label}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1200ms] group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-700" />
              <figcaption className="absolute bottom-4 left-4 text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold)]">{p.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FOUNDER REALITY ------------------ */
function FounderReality() {
  const items = [
    { n: "01", t: "Dead Inventory", d: "Built without demand. Stored without strategy. Sold at a loss." },
    { n: "02", t: "Emotional Pricing", d: "Discounts disguised as kindness. Margins eroded by sentiment." },
    { n: "03", t: "Failed Meta Ads", d: "Boosted posts, no architecture. Audiences without intent." },
    { n: "04", t: "Weak Packaging", d: "A product, not an experience. A box, not a brand promise." },
    { n: "05", t: "Random Branding", d: "Logos before positioning. Aesthetics before audience." },
    { n: "06", t: "No Customer Psychology", d: "Selling features to people who buy feelings." },
  ];
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)] border-t border-[var(--color-white-faint)]/40">
      <div className="max-w-[1280px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-16 max-w-[900px]">
          <div className="label-tag mb-5">The Founder Reality</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
            Most businesses don't fail loudly. <span className="italic text-[var(--color-gold)]">They fail quietly, for the same six reasons.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-2">
          {items.map((it, i) => (
            <motion.div key={it.n} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group flex gap-6 py-8 border-b border-[var(--color-white-faint)]/40">
              <span className="font-display text-[var(--color-gold)] text-2xl shrink-0 w-12">{it.n}</span>
              <div>
                <h3 className="font-display text-[var(--color-warm-white)] text-2xl md:text-3xl mb-2 group-hover:text-[var(--color-gold-light)] transition-colors">{it.t}</h3>
                <p className="text-[var(--color-white-muted)] text-[15px] leading-relaxed">{it.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ PACKAGING ------------------ */
function Packaging() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-surface)] overflow-hidden">
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none" />
      <div className="max-w-[1280px] mx-auto relative">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="text-center max-w-[1000px] mx-auto">
          <div className="label-tag mb-6">Packaging Psychology</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.02]" style={{ fontSize: "clamp(38px, 7vw, 110px)" }}>
            Packaging is not <span className="italic text-[var(--color-white-muted)]">decoration.</span>
          </h2>
          <h2 className="font-display text-[var(--color-gold)] italic leading-[1.02] mt-2" style={{ fontSize: "clamp(38px, 7vw, 110px)" }}>
            It is perception engineering.
          </h2>
          <p className="text-[var(--color-white-muted)] text-lg mt-10 max-w-[640px] mx-auto">
            Every unboxing is a quiet contract. Every detail signals price, trust, and intent — long before the product is ever used.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {["Material says quality.", "Typography says taste.", "Color says category."].map((t, i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
              className="border border-[var(--color-white-faint)] hover:border-[var(--color-gold)] transition-colors p-10 rounded-[3px] bg-[var(--color-bg)]/40">
              <span className="font-display text-[var(--color-gold)] text-3xl">0{i + 1}</span>
              <p className="font-display text-[var(--color-warm-white)] text-2xl mt-6 leading-snug">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ META ADS ------------------ */
function MetaAds() {
  const truths = [
    { t: "Customer Familiarity", d: "People buy what they recognise, not what they discover." },
    { t: "Repetition Psychology", d: "The first impression sells nothing. The seventh sells everything." },
    { t: "Testing Mindset", d: "Ads are not gambles. They are controlled experiments." },
    { t: "Budget Realism", d: "Scale only what is profitable. Kill what is hopeful." },
    { t: "Trust Building", d: "Performance without brand is rental. Brand makes the spend yours." },
  ];
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-16 max-w-[900px]">
          <div className="label-tag mb-5">Meta Ads · Reality</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
            Ads are not magic buttons. <span className="italic text-[var(--color-gold)]">They are experimentation systems.</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--color-white-faint)]">
          {truths.map((t, i) => (
            <motion.div key={t.t} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[var(--color-bg)] p-8 hover:bg-[var(--color-surface)] transition-colors min-h-[220px] flex flex-col">
              <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold)] mb-6">0{i + 1}</span>
              <h3 className="font-display text-[var(--color-warm-white)] text-xl md:text-2xl mb-3 leading-snug">{t.t}</h3>
              <p className="text-[var(--color-white-muted)] text-[13px] leading-relaxed mt-auto">{t.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ PERSONAL BRAND ------------------ */
function PersonalBrand() {
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 1.2 }} className="relative overflow-hidden rounded-[3px] border border-[var(--color-white-faint)] aspect-[4/5]">
          <img src={portraitImg} alt="Sfurti Sahare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] hover:scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <div className="label-tag">Sfurti Sahare</div>
            <p className="font-display text-[var(--color-warm-white)] text-2xl mt-2">TEDx · Author · Mentor</p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <div className="label-tag mb-5">Personal Branding</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(34px, 5vw, 64px)" }}>
            People trust people <span className="italic text-[var(--color-gold)]">before they trust products.</span>
          </h2>
          <p className="text-[var(--color-white-muted)] text-lg mt-8 leading-relaxed">
            Sfurti Sahare is a trusted educator, founder strategist, and D2C psychology expert — guiding a new generation of operators to build brands with intent, not noise.
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-10">
            {[
              { k: "TEDx", v: "Speaker" },
              { k: "National", v: "Bestselling Author" },
              { k: "D2C", v: "Psychology Expert" },
              { k: "Founder", v: "Strategist" },
            ].map((s) => (
              <div key={s.k}>
                <div className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold)]">{s.k}</div>
                <div className="font-display text-[var(--color-warm-white)] text-xl mt-2">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------ WHAT YOU WILL LEARN ------------------ */
function Learn() {
  const topics = [
    "D2C Strategy", "Pricing Psychology", "Customer Behavior", "Meta Ads Architecture",
    "Packaging Psychology", "Personal Branding", "Influencer Marketing", "Scaling Systems",
    "Positioning", "Founder Mindset",
  ];
  return (
    <section id="learn" className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)] border-t border-[var(--color-white-faint)]/40">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-16 max-w-[900px]">
          <div className="label-tag mb-5">What You Will Learn</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(34px, 5.5vw, 72px)" }}>
            Where products stop being emotional <span className="italic text-[var(--color-gold)]">and start becoming scalable.</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--color-white-faint)]">
          {topics.map((t, i) => (
            <motion.div key={t} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-[var(--color-bg)] hover:bg-[var(--color-surface)] transition-colors p-8 min-h-[180px] flex flex-col justify-between group">
              <span className="text-[10px] tracking-[0.32em] uppercase text-[var(--color-gold)]">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-display text-[var(--color-warm-white)] text-2xl leading-tight group-hover:text-[var(--color-gold-light)] transition-colors">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ TESTIMONIALS ------------------ */
function Testimonials() {
  const items = [
    { q: "I finally understood why my product wasn't selling. It was never the product.", a: "Aarav M.", r: "Skincare Founder" },
    { q: "The clarity on Meta Ads alone saved me six months of wasted spend.", a: "Ishita R.", r: "Wellness D2C" },
    { q: "This is not a course. It's the operating manual no founder is taught.", a: "Vikram S.", r: "Apparel Brand" },
    { q: "Packaging psychology changed how I think about every decision.", a: "Niharika P.", r: "Home & Living" },
  ];
  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-surface)]">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-14">
          <div className="label-tag mb-5">Founders Speak</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05] max-w-[900px]" style={{ fontSize: "clamp(34px, 5vw, 64px)" }}>
            Words from those who <span className="italic text-[var(--color-gold)]">stopped guessing.</span>
          </h2>
        </motion.div>
        <div className="flex gap-7 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="snap-start shrink-0 w-[88vw] sm:w-[460px] border border-[var(--color-white-faint)] hover:border-[var(--color-gold)] transition-colors rounded-[3px] p-10 bg-[var(--color-bg)]/60 backdrop-blur">
              <p className="font-display text-[var(--color-warm-white)] text-2xl leading-snug italic">"{it.q}"</p>
              <div className="mt-8 pt-6 border-t border-[var(--color-white-faint)]/60">
                <div className="text-[var(--color-gold)] text-sm tracking-[0.2em] uppercase">{it.a}</div>
                <div className="text-[var(--color-white-muted)] text-xs tracking-[0.2em] mt-1">{it.r}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FAQ ------------------ */
function FAQ() {
  const faqs = [
    { q: "Can complete beginners join?", a: "Yes. This is built for serious beginners and existing founders alike. We teach the fundamentals most founders never learn." },
    { q: "Do I need business experience?", a: "No prior experience is required. What's required is intent — to build a brand strategically, not emotionally." },
    { q: "How much budget is needed?", a: "We teach budget realism. You'll learn how to start lean, test small, and scale only what is profitable." },
    { q: "What if my product already failed?", a: "Most great brands are built on the lessons of a first failure. We dissect why, and how to relaunch properly." },
    { q: "Is this only for D2C founders?", a: "It's optimised for D2C, but the psychology of pricing, packaging, and customer behavior applies to any modern brand." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-36 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="max-w-[1080px] mx-auto">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-14">
          <div className="label-tag mb-5">Questions</div>
          <h2 className="font-display text-[var(--color-warm-white)] leading-[1.05] max-w-[800px]" style={{ fontSize: "clamp(34px, 5vw, 64px)" }}>
            The honest answers <span className="italic text-[var(--color-gold)]">before you commit.</span>
          </h2>
        </motion.div>
        <div className="divide-y divide-[var(--color-white-faint)]/60 border-y border-[var(--color-white-faint)]/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-6 py-7 text-left group">
                  <span className="font-display text-[var(--color-warm-white)] text-xl md:text-2xl group-hover:text-[var(--color-gold-light)] transition-colors">{f.q}</span>
                  <span className="text-[var(--color-gold)] shrink-0">{isOpen ? <Minus size={20} /> : <Plus size={20} />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: "easeOut" }} className="overflow-hidden">
                      <p className="pb-7 text-[var(--color-white-muted)] text-[15px] leading-relaxed max-w-[800px]">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------ FINAL CTA ------------------ */
function FinalCTA() {
  return (
    <section className="relative py-32 md:py-44 px-6 md:px-12 bg-[var(--color-bg)] overflow-hidden border-t border-[var(--color-white-faint)]/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_rgba(0,0,0,0)_60%)]" />
      <div className="absolute inset-0 grain opacity-[0.04] pointer-events-none" />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
        className="relative max-w-[1100px] mx-auto text-center">
        <div className="label-tag mb-6">Begin</div>
        <h2 className="font-display text-[var(--color-warm-white)] leading-[1.02]" style={{ fontSize: "clamp(40px, 7vw, 110px)" }}>
          If you are serious about <br />
          <span className="italic text-[var(--color-gold)]">building a brand properly,</span> start here.
        </h2>
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a href="#contact" className="inline-flex items-center gap-3 bg-[var(--color-gold)] text-[var(--color-bg)] px-10 py-4 text-[11px] tracking-[0.3em] uppercase font-medium rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.55)] transition-all duration-500">
            Apply for Mentorship
          </a>
          <a href="#episodes" className="inline-flex items-center gap-3 border border-[var(--color-gold)] text-[var(--color-gold)] px-10 py-4 text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-[var(--color-gold)]/10 transition-all duration-500">
            Explore Episodes
          </a>
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------------------- FOOTER ----------------------------- */
function Footer() {
  return (
    <footer id="contact" className="relative pt-24 pb-12 px-6 md:px-12 border-t border-[var(--color-white-faint)]/60 bg-[var(--color-bg)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-14 mb-16">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
            <div className="label-tag mb-5">Inquire</div>
            <h3 className="font-display text-[var(--color-warm-white)] leading-[1.05]" style={{ fontSize: "clamp(30px, 4vw, 52px)" }}>
              Build a brand that <span className="italic text-[var(--color-gold)]">converts believers.</span>
            </h3>
            <p className="mt-6 text-[var(--color-white-muted)] max-w-[420px]">
              Reach out for mentorship, partnerships, or speaking inquiries.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/?text=Hi%20Sfurti" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase font-medium rounded-full hover:shadow-[0_0_40px_rgba(201,168,76,0.55)] transition-all">
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a href="mailto:hello@d2cbyvmt.com"
                className="inline-flex items-center gap-3 border border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-[var(--color-gold)]/10 transition-all">
                <Mail size={14} /> Email
              </a>
            </div>
          </motion.div>

          <motion.form initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-white-muted)]">Name</label>
              <input type="text" className="mt-2 w-full bg-transparent border-b border-[var(--color-white-faint)] focus:border-[var(--color-gold)] outline-none py-3 text-[var(--color-warm-white)] transition-colors" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-white-muted)]">Email</label>
              <input type="email" className="mt-2 w-full bg-transparent border-b border-[var(--color-white-faint)] focus:border-[var(--color-gold)] outline-none py-3 text-[var(--color-warm-white)] transition-colors" />
            </div>
            <div>
              <label className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-white-muted)]">Message</label>
              <textarea rows={3} className="mt-2 w-full bg-transparent border-b border-[var(--color-white-faint)] focus:border-[var(--color-gold)] outline-none py-3 text-[var(--color-warm-white)] transition-colors resize-none" />
            </div>
            <button type="submit" className="mt-2 inline-flex items-center gap-3 border border-[var(--color-gold)] text-[var(--color-gold)] px-8 py-3.5 text-[11px] tracking-[0.3em] uppercase rounded-full hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all">
              Send Inquiry
            </button>
          </motion.form>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-[var(--color-white-faint)]/50">
          <div className="font-brand font-extrabold text-[var(--color-warm-white)] tracking-[0.18em] text-xl uppercase">{BRAND}</div>
          <div className="flex gap-5 text-[var(--color-white-muted)]">
            <a href="https://www.instagram.com/sfurti_d_sahare/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="https://www.facebook.com/SfurtiSahare1/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors" aria-label="Facebook"><Facebook size={18} /></a>
            <a href="https://www.linkedin.com/in/sfurtisahare/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://www.youtube.com/@sfurtisahare6518" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)] transition-colors" aria-label="YouTube"><Youtube size={18} /></a>
          </div>
          <div className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-white-muted)]">© {new Date().getFullYear()} D2C by VMT</div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------- LANDING PAGE --------------------------- */
export function LandingPage() {
  return (
    <div className="bg-[var(--color-bg)] text-[var(--color-warm-white)] min-h-screen overflow-x-hidden">
      <ProgressBar />
      <Nav />
      <Hero />
      <FeaturedPromo />
      <Episodes />
      <Gallery />
      <FounderReality />
      <Packaging />
      <MetaAds />
      <PersonalBrand />
      <Learn />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default LandingPage;
