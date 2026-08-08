import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BRANDS, type Brand } from "@/data/brands";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1">
      <div
        className="flex h-32 items-end p-5"
        style={{ backgroundColor: brand.color }}
        aria-hidden="true"
      >
        <span
          className="text-2xl uppercase leading-none tracking-[-0.02em] text-white"
          style={{ fontFamily: "Anton, sans-serif" }}
        >
          {brand.name}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">{brand.tagline}</p>
        <p className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
          {brand.items} figurines
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </p>
      </div>
    </article>
  );
}

export default function BrandsSection({ limit }: { limit?: number }) {
  const brands = limit ? BRANDS.slice(0, limit) : BRANDS;

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Our brands
            </p>
            <h2
              className="mt-2 text-3xl uppercase leading-none tracking-[-0.02em] text-foreground sm:text-5xl"
              style={{ fontFamily: "Anton, sans-serif" }}
            >
              Studios we stock
            </h2>
          </div>
          {limit && (
            <Link
              to="/brands"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground hover:opacity-70"
            >
              View all brands <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </div>
    </section>
  );
}
