import { createFileRoute } from "@tanstack/react-router";
import { Nav, ScrollProgress } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Promo } from "@/components/site/Promo";
import { Problem } from "@/components/site/Problem";
import { Shift } from "@/components/site/Shift";
import { Curriculum } from "@/components/site/Curriculum";
import { LearnMap } from "@/components/site/LearnMap";
import { ProductTruth } from "@/components/site/ProductTruth";
import { Packaging } from "@/components/site/Packaging";
import { MetaAds } from "@/components/site/MetaAds";
import { About } from "@/components/site/About";
import { Autopsy } from "@/components/site/Autopsy";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "D2C by VMT — Business Doesn't Run On Your Belief" },
      { name: "description", content: "A founder's curriculum on positioning, pricing, packaging, and the psychology that decides whether a brand survives." },
      { property: "og:title", content: "D2C by VMT — Mentor to Founders" },
      { property: "og:description", content: "Learn the part of business nobody teaches. Curriculum, mentorship, and the strategy behind brands that last." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Promo />
      <Problem />
      <Shift />
      <Curriculum />
      <LearnMap />
      <ProductTruth />
      <Packaging />
      <MetaAds />
      <About />
      <Autopsy />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Contact />
    </main>
  );
}
