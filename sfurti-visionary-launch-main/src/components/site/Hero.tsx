import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

export function Hero() {
  const { scrollY } = useScroll();
  const subY = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section id="top" className="relative min-h-screen flex items-end justify-start overflow-hidden">
      {/* Portrait background */}
      <img
        src={heroPortrait}
        alt="Sfurti Sahare — D2C by VMT"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.92) 100%)",
        }}
      />
      <div className="grain" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 lg:px-20 pb-24 lg:pb-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span
            className="inline-block"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              letterSpacing: "0.15em",
              color: "var(--gold)",
              lineHeight: 1,
            }}
          >
            D2C BY VMT
          </span>
        </motion.div>

        <h1
          className="font-display mt-8 leading-[0.95] tracking-tight max-w-[820px]"
          style={{ color: "var(--ivory)", fontSize: "clamp(48px, 8vw, 120px)" }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            Business Doesn't Run
          </motion.span>
          <motion.span
            className="block italic"
            style={{ color: "var(--ivory)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            On Your Belief.
          </motion.span>
        </h1>

        <motion.p
          style={{ y: subY, color: "var(--ivory-muted)" }}
          className="mt-8 text-lg md:text-[20px] max-w-[560px] leading-[1.7]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
        >
          Manufacturing is 50% of the game.
          <br />
          Selling is the other half nobody teaches.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <a href="#apply" className="btn-gold">Build Your Brand Properly</a>
          <a href="#vision" className="btn-ghost">Watch the Strategy</a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="pulse-line h-[60px] w-px" style={{ background: "var(--gold)" }} />
        <ChevronDown className="w-4 h-4" style={{ color: "var(--gold)" }} />
      </motion.div>
    </section>
  );
}
