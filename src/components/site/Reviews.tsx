import { Star, Quote } from "lucide-react";
import { reviews, hotel } from "@/lib/hotel";
import { Reveal } from "./Reveal";

export function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-40 bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow"><span className="gold-rule mr-3" />Guest Voices</p>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream">
              Words from those who <em className="italic text-gold">stayed.</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="inline-flex items-baseline gap-3">
              <span className="font-serif text-6xl md:text-7xl text-gold">{hotel.rating}</span>
              <span className="text-cream/60 text-sm">/ 5</span>
            </div>
            <div className="flex lg:justify-end gap-1 mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-cream/60 text-xs tracking-[0.2em] uppercase mt-3">
              {hotel.reviewCount.toLocaleString()} verified reviews
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-cream/10">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <article className="bg-ink p-8 md:p-12 h-full">
                <Quote className="size-8 text-gold mb-6" />
                <p className="font-serif text-xl md:text-2xl leading-[1.5] text-cream/95">
                  "{r.text}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-cream/15 pt-6">
                  <div className="size-12 rounded-full bg-gold/20 border border-gold/40 text-gold flex items-center justify-center font-serif text-xl">
                    {r.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{r.name}</div>
                    <div className="text-xs text-cream/60 tracking-wider">{r.country}</div>
                  </div>
                  <div className="flex gap-0.5 shrink-0">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
