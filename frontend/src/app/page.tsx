import home from "@/content/home.json";
import { ParallaxHero, StickyPanels, SplitReveal, MetricTiles, LogoMarquee, CTAEndcap } from "@/app/(marketing)/_components";

export default function Home() {
  const { hero, stickyPanels, splitReveal, metrics, logos, cta } = home;
  return (
    <main>
      <ParallaxHero {...hero} />
      <StickyPanels panels={stickyPanels} />
      <SplitReveal items={splitReveal} />
      <MetricTiles metrics={metrics} />
      <LogoMarquee logos={logos} />
      <CTAEndcap {...cta} />
    </main>
  );
}
