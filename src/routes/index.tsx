import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Overview } from "@/components/site/Overview";
import { Rooms } from "@/components/site/Rooms";
import { Amenities } from "@/components/site/Amenities";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hôtel Agnaou — A Luxury Riad in the Heart of Marrakech" },
      {
        name: "description",
        content:
          "Discover Hôtel Agnaou, a refined Moroccan riad in the Marrakech medina. Hand-carved suites, rooftop dining, hammam spa and quiet luxury moments from Djemaa el-Fna.",
      },
      { property: "og:title", content: "Hôtel Agnaou — Luxury Riad in Marrakech" },
      {
        property: "og:description",
        content:
          "Refined Moroccan hospitality in the heart of the medina. Suites, rooftop dining and a traditional hammam, moments from Djemaa el-Fna.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Overview />
        <Rooms />
        <Amenities />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
