import { createFileRoute } from "@tanstack/react-router";
import BrandsSection from "@/components/BrandsSection";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Toonhub Figurine Studios" },
      {
        name: "description",
        content:
          "Browse every studio stocked at Toonhub, from pastel character labs to limited midnight editions.",
      },
      { property: "og:title", content: "Brands — Toonhub Figurine Studios" },
      {
        property: "og:description",
        content: "Browse every figurine studio stocked at Toonhub.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <div>
      <div className="border-b border-border/60 bg-background px-4 pt-16 pb-4 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h1
            className="text-4xl uppercase leading-none tracking-[-0.02em] text-foreground sm:text-6xl"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            All brands
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Six independent studios, each with its own palette, finish, and release rhythm.
          </p>
        </div>
      </div>
      <BrandsSection />
    </div>
  );
}
