import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Toonhub — Orders & Studio Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with Toonhub about orders, restocks, wholesale, or partnering your figurine studio with us.",
      },
      { property: "og:title", content: "Contact Toonhub — Orders & Studio Enquiries" },
      {
        property: "og:description",
        content: "Reach Toonhub about orders, restocks, wholesale, or studio partnerships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { Icon: Mail, label: "hello@toonhub.studio" },
  { Icon: Phone, label: "+20 100 000 0000" },
  { Icon: MapPin, label: "Cairo, Egypt" },
];

function ContactPage() {
  return (
    <div className="bg-background py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-8 lg:grid-cols-2">
        <div>
          <h1
            className="text-4xl uppercase leading-none tracking-[-0.02em] text-foreground sm:text-6xl"
            style={{ fontFamily: "Anton, sans-serif" }}
          >
            Say hello
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Orders, restocks, wholesale, or a studio that wants a shelf here — write to us and we
            reply within two working days.
          </p>
          <ul className="mt-8 space-y-4">
            {DETAILS.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3 text-sm text-foreground">
                <span className="rounded-full border border-border p-2 text-muted-foreground">
                  <Icon size={16} />
                </span>
                {label}
              </li>
            ))}
          </ul>
        </div>

        <form
          className="rounded-2xl border border-border bg-card p-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4">
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Name
              <input
                type="text"
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Email
              <input
                type="email"
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Message
              <textarea
                rows={5}
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-md bg-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
