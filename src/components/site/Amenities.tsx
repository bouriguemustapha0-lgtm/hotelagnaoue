import { Wifi, Coffee, Plane, Car, BellRing, Wind, Sun, ConciergeBell, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

const items: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Wifi, title: "Free Wi-Fi", text: "Free wireless internet throughout the property — rated 10/10 by guests." },
  { icon: Coffee, title: "Continental Breakfast", text: "A continental breakfast is served on site each morning." },
  { icon: Plane, title: "Airport Shuttle", text: "Transfers to and from Marrakech-Ménara airport, just 4 km away." },
  { icon: Car, title: "Parking", text: "On-site parking available for guests arriving by car." },
  { icon: BellRing, title: "24-Hour Reception", text: "Front desk staffed around the clock to welcome you any hour." },
  { icon: Wind, title: "Air Conditioning", text: "Every room is air-conditioned with a private bathroom." },
  { icon: Sun, title: "Terrace", text: "An open-air terrace to enjoy the Marrakech sunshine." },
  { icon: ConciergeBell, title: "Room Service", text: "Order food and drinks directly to your room." },
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
