import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Toonhub — Figurine Curators" },
      {
        name: "description",
        content:
          "Toonhub curates collectible 3D character figurines from independent studios and ships them display-ready worldwide.",
      },
      { property: "og:title", content: "About Toonhub — Figurine Curators" },
      {
        property: "og:description",
        content: "How Toonhub curates and ships collectible 3D character figurines.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const STATS = [
  ["6", "Partner studios"],
  ["120+", "Figurines released"],
  ["38", "Countries shipped"],
];

function AboutPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <h1
          className="max-w-2xl text-4xl uppercase leading-[0.95] tracking-[-0.02em] text-foreground sm:text-6xl"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          We hunt down the good stuff
        </h1>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Toonhub started as a shelf. One collector, four figurines, and a habit of emailing studios
          to ask how they sculpt. Today we work directly with independent makers, take small batches
          off their hands, and get them to collectors without the usual reseller markup.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {STATS.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-border bg-card p-6">
              <p
                className="text-4xl leading-none text-foreground"
                style={{ fontFamily: "Anton, sans-serif" }}
              >
                {value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              How we pick
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Bold silhouettes, clean seams, colour that reads across a room. If it doesn't look
              right at arm's length, it doesn't make the shelf.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              How it ships
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Fully assembled, foam-packed, and tracked. Nothing arrives needing glue or paint.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
