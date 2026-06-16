import { MapPin, Phone, Mail, Instagram, Facebook, Compass } from "lucide-react";
import { hotel } from "@/lib/hotel";
import { Reveal } from "./Reveal";

const nearby = [
  { name: "Jemaa el-Fna", time: "400 m" },
  { name: "Koutoubia Mosque", time: "500 m" },
  { name: "Mouassine Museum", time: "900 m" },
  { name: "Le Jardin Secret", time: "1 km" },
  { name: "Bahia Palace", time: "1.2 km" },
  { name: "Majorelle Garden", time: "3 km" },
  { name: "Marrakech-Ménara Airport", time: "4 km" },
];

export function Location() {
  return (
    <section id="contact" className="py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow"><span className="gold-rule mr-3" />Find Us</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            A doorway in the medina, <em className="italic text-gold">a world within.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[4/3] lg:aspect-[16/12] w-full overflow-hidden border border-border">
              <iframe
                title="Hotel Agnaou Marrakech location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-7.992%2C31.620%2C-7.978%2C31.632&layer=mapnik&marker=31.626%2C-7.986"
                className="w-full h-full grayscale-[20%] contrast-95"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Map data © OpenStreetMap contributors
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="border border-border p-8 md:p-10 bg-secondary/40">
              <h3 className="font-serif text-3xl">Visit the Riad</h3>
              <div className="mt-6 space-y-5 text-sm">
                <Row icon={<MapPin className="size-4 text-gold" />} label="Address">
                  {hotel.address}
                </Row>
                <Row icon={<Phone className="size-4 text-gold" />} label="Telephone">
                  <a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                    {hotel.phone}
                  </a>
                </Row>
                <Row icon={<Mail className="size-4 text-gold" />} label="Email">
                  <a href={`mailto:${hotel.email}`} className="hover:text-gold">{hotel.email}</a>
                </Row>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="btn-gold">
                  <Phone className="size-3.5" /> Call
                </a>
                <a
                  href={`mailto:${hotel.email}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-xs tracking-[0.22em] uppercase border border-foreground/30 hover:bg-foreground hover:text-background transition-colors"
                >
                  <Mail className="size-3.5" /> Email
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex gap-4">
                <a href="#" aria-label="Instagram" className="size-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Instagram className="size-4" />
                </a>
                <a href="#" aria-label="Facebook" className="size-10 border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                  <Facebook className="size-4" />
                </a>
              </div>
            </div>

            <div className="mt-6 border border-border p-8 md:p-10">
              <div className="flex items-center gap-2 eyebrow">
                <Compass className="size-3.5" /> Nearby
              </div>
              <ul className="mt-5 divide-y divide-border">
                {nearby.map((n) => (
                  <li key={n.name} className="flex items-center justify-between py-3 text-sm">
                    <span className="font-serif text-lg">{n.name}</span>
                    <span className="text-muted-foreground tracking-wider text-xs">{n.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3">
      <span className="mt-1">{icon}</span>
      <div className="min-w-0">
        <div className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground">{label}</div>
        <div className="mt-1 text-foreground">{children}</div>
      </div>
    </div>
  );
}
