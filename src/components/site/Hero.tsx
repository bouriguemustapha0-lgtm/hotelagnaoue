import { motion } from "framer-motion";
import { Star, MapPin, Users } from "lucide-react";
import heroAsset from "@/assets/real-courtyard.jpg.asset.json";
const heroImg = heroAsset.url;
import { hotel, expediaUrl } from "@/lib/hotel";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Hotel Agnaou Marrakech courtyard at golden hour"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/20 to-ink/80" />

      <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-20 md:pb-28 text-cream">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow text-gold-soft"
        >
          <span className="gold-rule mr-3 align-middle" />
          A Riad in the Heart of the Medina
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.02] max-w-5xl"
        >
          Experience Luxury <em className="italic text-gold-soft">Beyond</em> Expectations
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-6 max-w-xl text-cream/85 text-base md:text-lg leading-relaxed"
        >
          Discover refined comfort and unforgettable Moroccan hospitality, four minutes
          from Djemaa el-Fna.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#rooms" className="btn-gold">Explore Rooms</a>
          <a href={expediaUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">Book on Expedia</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] sm:flex sm:flex-wrap items-center gap-y-4 gap-x-8 border-t border-cream/20 pt-6 text-sm"
        >
          <Stat icon={<Star className="size-4 fill-gold text-gold" />}>
            <strong className="font-medium">{hotel.rating}</strong>
            <span className="text-cream/70 ml-1">/ 5 · {hotel.reviewCount.toLocaleString()} reviews</span>
          </Stat>
          <Stat icon={<MapPin className="size-4 text-gold" />}>
            <span>Medina, Marrakech</span>
          </Stat>
          <Stat icon={<Users className="size-4 text-gold" />}>
            <span>5,000+ guests welcomed</span>
          </Stat>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-[10px] tracking-[0.3em] uppercase flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <span className="w-px h-10 bg-cream/40 animate-pulse" />
      </motion.div>
    </section>
  );
}

function Stat({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 min-w-0">
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{children}</span>
    </div>
  );
}
