import { Instagram, Facebook, ExternalLink } from "lucide-react";
import { hotel, expediaUrl, bookingUrl } from "@/lib/hotel";

export function Footer() {
  return (
    <footer className="bg-ink text-cream/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 pb-14 border-b border-cream/10">
          <div className="md:col-span-5">
            <div className="font-serif text-4xl text-cream">Agnaou</div>
            <p className="mt-2 text-[10px] tracking-[0.3em] uppercase text-gold">
              Marrakech · Morocco
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-cream/65 text-sm">
              A discreet riad in the medina, devoted to the slow art of Moroccan
              hospitality since {hotel.founded}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-cream/50">Explore</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Rooms", "Amenities", "Gallery", "Reviews", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
              <li>
                <a href={expediaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  Book on Expedia <ExternalLink className="size-3" />
                </a>
              </li>
              <li>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                  Book on Booking.com <ExternalLink className="size-3" />
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-cream/50">The Riad</div>
            <address className="not-italic mt-5 text-sm leading-relaxed text-cream/75">
              {hotel.address}
            </address>
            <div className="mt-4 text-sm space-y-1">
              <div><a href={`tel:${hotel.phone.replace(/\s/g, "")}`} className="hover:text-gold">{hotel.phone}</a></div>
              <div><a href={`mailto:${hotel.email}`} className="hover:text-gold">{hotel.email}</a></div>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="size-9 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Instagram className="size-4" />
              </a>
              <a href="#" aria-label="Facebook" className="size-9 border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
                <Facebook className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-cream/50">
          <div>© {new Date().getFullYear()} Hôtel Agnaou. All rights reserved.</div>
          <div>Crafted with care in Marrakech</div>
        </div>
      </div>
    </footer>
  );
}
