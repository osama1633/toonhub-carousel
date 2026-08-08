import { createFileRoute } from "@tanstack/react-router";
import { BRANDS } from "@/data/brands";

const FIGURINES = [
  "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/1.02464a56.png",
  "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/2.b977faab.png",
  "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/3.4df853b4.png",
  "https://fifth-gentle-45902158.figma.site/_components/v2/4de492f6d9cf8244ad5293233e5c6f52407d42fc/4.4457fbce.png",
];

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Toonhub Figurines" },
      {
        name: "description",
        content:
          "Shop the current Toonhub collection of hand-finished 3D character figurines, ready to display.",
      },
      { property: "og:title", content: "Collection — Toonhub Figurines" },
      {
        property: "og:description",
        content: "Shop the current Toonhub collection of hand-finished 3D character figurines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h1
          className="text-4xl uppercase leading-none tracking-[-0.02em] text-foreground sm:text-6xl"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          The collection
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Every piece is cast, sanded, and painted by hand before it ships fully prepared.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FIGURINES.map((src, i) => {
            const brand = BRANDS[i % BRANDS.length]!;
            return (
              <article key={src} className="overflow-hidden rounded-2xl border border-border">
                <div
                  className="flex h-64 items-end justify-center"
                  style={{ backgroundColor: brand.color }}
                >
                  <img
                    src={src}
                    alt={`${brand.name} collectible figurine`}
                    loading="lazy"
                    className="h-[92%] w-full object-contain object-bottom"
                  />
                </div>
                <div className="bg-card p-4">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                    {brand.name}
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Series 0{i + 1} · $
                    {49 + i * 10}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
