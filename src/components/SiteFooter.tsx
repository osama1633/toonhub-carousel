import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-8">
        <div>
          <p
            className="text-xl uppercase tracking-[0.16em] text-foreground"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Toonhub
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Collectible 3D character figurines from independent studios, shipped display-ready.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/brands", label: "Brands" },
              { to: "/collection", label: "Collection" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
            Follow
          </h2>
          <div className="mt-4 flex gap-3">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social profile"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-5 text-center text-xs text-muted-foreground sm:px-8">
        © {new Date().getFullYear()} Toonhub. All rights reserved.
      </div>
    </footer>
  );
}
