import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/70 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span
            className={`font-serif text-2xl tracking-wide transition-colors ${
              scrolled ? "text-foreground" : "text-cream"
            }`}
          >
            Agnaou
          </span>
          <span className="hidden sm:inline-block w-px h-5 bg-gold/60" />
          <span
            className={`hidden sm:inline text-[10px] tracking-[0.3em] uppercase transition-colors ${
              scrolled ? "text-muted-foreground" : "text-cream/80"
            }`}
          >
            Marrakech
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[11px] tracking-[0.22em] uppercase relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full ${
                scrolled ? "text-foreground/80 hover:text-foreground" : "text-cream/90 hover:text-cream"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden lg:inline-flex items-center px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase border transition-all ${
            scrolled
              ? "border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
              : "border-cream/60 text-cream hover:bg-cream hover:text-ink"
          }`}
        >
          Reserve
        </a>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-ink text-cream transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6">
          <span className="font-serif text-2xl">Agnaou</span>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X className="size-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 mt-20">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-serif text-4xl text-cream/90 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 btn-gold"
          >
            Reserve a Stay
          </a>
        </nav>
      </div>
    </header>
  );
}
