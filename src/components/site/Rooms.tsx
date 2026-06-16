import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Users, Maximize, Check, ExternalLink } from "lucide-react";
import { rooms, expediaUrl, bookingUrl } from "@/lib/hotel";
import { Reveal } from "./Reveal";

export function Rooms() {
  const [active, setActive] = useState<(typeof rooms)[number] | null>(null);

  return (
    <section id="rooms" className="py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-3xl">
          <p className="eyebrow"><span className="gold-rule mr-3" />Accommodation</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Rooms & suites. <em className="italic text-gold">No two alike.</em>
          </h2>
          <p className="mt-6 text-foreground/70 leading-relaxed max-w-xl">
            Each room is composed around a single piece — an antique door, a particular
            shade of tadelakt, a view of a minaret — and built outward with restraint.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {rooms.map((r, i) => (
            <Reveal key={r.id} delay={i * 0.1}>
              <article className="group cursor-pointer" onClick={() => setActive(r)}>
                <div className="aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={r.image}
                    alt={r.name}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl md:text-3xl truncate">{r.name}</h3>
                    <p className="mt-1 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {r.capacity}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-foreground/70 line-clamp-2">
                  {r.description}
                </p>
                <div className="mt-5 text-[11px] tracking-[0.22em] uppercase text-foreground/90 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 group-hover:border-gold group-hover:text-gold transition-colors">
                  View Details →
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative bg-background max-w-5xl w-full max-h-[90vh] overflow-auto grid md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 p-2 bg-background/80 text-foreground hover:bg-gold transition-colors"
              >
                <X className="size-5" />
              </button>
              <img
                src={active.image}
                alt={active.name}
                className="w-full h-64 md:h-full object-cover"
              />
              <div className="p-8 md:p-12">
                <p className="eyebrow">{active.capacity.split("·")[0]}</p>
                <h3 className="mt-3 font-serif text-3xl md:text-4xl">{active.name}</h3>
                <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2"><Users className="size-4 text-gold" /> {active.capacity}</span>
                  <span className="flex items-center gap-2"><Maximize className="size-4 text-gold" /> {active.size}</span>
                </div>
                <p className="mt-6 text-foreground/75 leading-relaxed">{active.description}</p>
                <div className="mt-8">
                  <div className="eyebrow text-foreground/60">Included</div>
                  <ul className="mt-3 grid grid-cols-2 gap-y-2 text-sm">
                    {active.amenities.map((a) => (
                      <li key={a} className="flex items-center gap-2">
                        <Check className="size-3.5 text-gold" /> {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-8 flex flex-wrap items-end justify-end gap-4 border-t border-border pt-6">
                  <div className="flex flex-wrap gap-2">
                    <a href={expediaUrl} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center gap-2">
                      <ExternalLink className="size-4" /> Expedia
                    </a>
                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 text-xs tracking-[0.22em] uppercase border border-foreground/30 hover:bg-foreground hover:text-background transition-colors">
                      <ExternalLink className="size-4" /> Booking.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
