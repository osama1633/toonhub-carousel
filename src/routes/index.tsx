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
  component: ToonhubHero,
});
