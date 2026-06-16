import { Reveal } from "./Reveal";
import gCourtyard from "@/assets/g-courtyard.jpg";
import gDetail from "@/assets/g-detail.jpg";
import { hotel } from "@/lib/hotel";

const stats = [
  { value: "9.1", label: "Location Score" },
  { value: "400m", label: "to Jemaa el-Fna" },
  { value: "5", label: "Room Types" },
  { value: "24h", label: "Reception" },
];

export function Overview() {
  return (
    <section className="relative py-28 md:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-6 order-2 lg:order-1">
          <p className="eyebrow"><span className="gold-rule mr-3" />Our Story</p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            A small guesthouse, <em className="italic text-gold">a short walk from the square.</em>
          </h2>
          <div className="mt-8 space-y-5 text-foreground/75 text-[15px] leading-[1.85] max-w-xl">
            <p>
              Auberge Resto Agnaoue sits on a quiet passage of the old medina, just
              400 metres from Jemaa el-Fna and 500 metres from the Koutoubia mosque.
              Our guests give us a 9.1 out of 10 for location — and it is well earned.
              Step outside the door and the heart of Marrakech is waiting for you.
            </p>
            <p>
              Inside, the spirit is simple and warm: air-conditioned rooms with private
              bathrooms, a continental breakfast each morning, free Wi-Fi praised by
              our guests with a perfect 10 out of 10, and a 24-hour reception ready to
              arrange an airport shuttle, a tagine on the terrace or directions to the
              souks.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-gold/60 pl-5">
                <div className="font-serif text-4xl md:text-5xl text-foreground">{s.value}</div>
                <div className="mt-1 text-[10px] tracking-[0.25em] uppercase text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 order-1 lg:order-2">
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src={gCourtyard}
                alt="Inner courtyard of Hotel Agnaou"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1.4s] hover:scale-[1.04]"
              />
            </div>
            <div className="hidden md:block absolute -bottom-12 -left-12 w-44 h-56 overflow-hidden border-8 border-background shadow-2xl">
              <img
                src={gDetail}
                alt="Brass lantern detail"
                width={400}
                height={500}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -top-6 -right-6 px-5 py-4 bg-gold text-ink">
              <div className="font-serif text-3xl leading-none">{hotel.founded}</div>
              <div className="text-[9px] tracking-[0.25em] uppercase mt-1">Est.</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
