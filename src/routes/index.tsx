import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import ToonhubHero from "@/components/ToonhubHero";
import BrandsSection from "@/components/BrandsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TOONHUB — Collectible 3D Character Figurines" },
      {
        name: "description",
        content:
          "Explore TOONHUB's collectible 3D character figurines: bold colors, flawless craft, shipped ready to display.",
      },
      { property: "og:title", content: "TOONHUB — Collectible 3D Character Figurines" },
      {
        property: "og:description",
        content:
          "Explore TOONHUB's collectible 3D character figurines: bold colors, flawless craft, shipped ready to display.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <ToonhubHero />
      <BrandsSection limit={3} />
      <section className="border-t border-border/60 bg-background py-16 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:px-8">
          <h2
            className="max-w-2xl text-3xl uppercase leading-none tracking-[-0.02em] text-foreground sm:text-5xl"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Ready to start a shelf?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Browse the current collection or read how we work with each studio before a release.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/collection"
              className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop collection <ArrowRight size={14} />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 rounded-full border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-accent"
            >
              About us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
