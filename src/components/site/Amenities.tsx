import { Wifi, UtensilsCrossed, Waves, Sparkles, Dumbbell, Plane, Car, BellRing, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Wifi, title: "Wireless Internet", text: "High-speed connectivity throughout the riad." },
  { icon: UtensilsCrossed, title: "Rooftop Restaurant", text: "Modern Moroccan cuisine under the stars." },
  { icon: Waves, title: "Courtyard Pool", text: "A turquoise plunge framed by carved arches." },
  { icon: Sparkles, title: "Hammam & Spa", text: "Traditional rose, argan and clay rituals." },
  { icon: Dumbbell, title: "Fitness Studio", text: "Private studio with Technogym equipment." },
  { icon: Plane, title: "Airport Transfer", text: "Discreet chauffeur in a vintage Mercedes." },
  { icon: Car, title: "Valet Parking", text: "Complimentary parking at the medina gate." },
  { icon: BellRing, title: "24h Concierge", text: "From hot-air balloon at dawn to dinner in the desert." },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">The Riad</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Considered comforts, <em className="italic text-gold">quietly offered.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-x-px gap-y-px bg-border">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="group p-8 md:p-10 bg-background h-full transition-colors duration-500 hover:bg-secondary/60">
                <div className="size-12 flex items-center justify-center border border-gold/50 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-6 font-serif text-xl md:text-2xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
