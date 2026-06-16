import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/lib/hotel";
import { Reveal } from "./Reveal";

const categories = ["All", "Rooms", "Interior", "Exterior", "Dining", "Wellness"];

export function Gallery() {
  const [cat, setCat] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (cat === "All" ? gallery : gallery.filter((g) => g.category === cat)),
    [cat],
  );

  const next = () => setLightbox((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () => setLightbox((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));

  return (
    <section id="gallery" className="py-28 md:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <Reveal>
            <p className="eyebrow"><span className="gold-rule mr-3" />Experience</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] max-w-xl">
              An <em className="italic text-gold">editorial</em> of stillness.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-4 py-2 text-[10px] tracking-[0.25em] uppercase border transition-all ${
                    cat === c
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-gold hover:text-gold"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {items.map((g, i) => (
            <motion.button
              key={g.src + i}
              layout
              onClick={() => setLightbox(i)}
              className="group block w-full overflow-hidden bg-muted relative"
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110 ${
                  g.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 flex items-end p-5">
                <span className="text-cream text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                  {g.category} — {g.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
              aria-label="Close"
              className="absolute top-5 right-5 text-cream p-2 hover:text-gold"
            >
              <X className="size-7" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-4 md:left-10 text-cream/70 hover:text-cream p-3"
            >
              <ChevronLeft className="size-8" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              src={items[lightbox].src}
              alt={items[lightbox].alt}
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-4 md:right-10 text-cream/70 hover:text-cream p-3"
            >
              <ChevronRight className="size-8" />
            </button>
            <div className="absolute bottom-6 left-0 right-0 text-center text-cream/70 text-[10px] tracking-[0.3em] uppercase">
              {items[lightbox].category} · {lightbox + 1} / {items.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
