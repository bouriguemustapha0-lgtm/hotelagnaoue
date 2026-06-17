import { useEffect, useRef, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useI18n, languages, type Lang } from "@/lib/i18n";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const langRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "#home", label: t("nav.home") },
    { href: "#rooms", label: t("nav.rooms") },
    { href: "#amenities", label: t("nav.amenities") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#reviews", label: t("nav.reviews") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = languages.find((l) => l.code === lang)!;

  const pickLang = (code: Lang) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-ink text-cream backdrop-blur-md border-b border-ink shadow-md ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl tracking-wide text-cream">
            Agnaou
          </span>
          <span className="hidden sm:inline-block w-px h-5 bg-gold/60" />
          <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-cream/60">
            Marrakech
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9 bg-ink/90 backdrop-blur-sm border border-ink rounded-full px-7 py-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] tracking-[0.22em] uppercase relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full text-cream/80 hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase text-foreground/80 hover:text-foreground transition-colors"
              aria-label="Change language"
            >
              <Globe className="size-3.5" />
              {current.short}
              <ChevronDown className={`size-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-3 min-w-[140px] bg-background border border-border shadow-lg py-1">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => pickLang(l.code)}
                    className={`w-full text-left px-4 py-2 text-xs tracking-wider transition-colors hover:bg-secondary ${
                      l.code === lang ? "text-gold" : "text-foreground/80"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="#book"
            className="inline-flex items-center px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase border transition-all border-foreground/30 text-foreground hover:bg-foreground hover:text-background"
          >
            {t("nav.book")}
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="lg:hidden text-foreground"
        >
          <Menu className="size-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-ink text-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-6 border-b border-cream/10">
          <span className="font-serif text-2xl">Agnaou</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-cream/80 hover:text-gold transition-colors"
          >
            <X className="size-6" />
          </button>
        </div>
        <nav className="flex flex-col px-8 pt-10 pb-8 gap-6">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
              className={`font-serif text-3xl text-cream/90 hover:text-gold transition-all duration-500 ${
                open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-8 btn-gold self-start"
          >
            {t("nav.book")}
          </a>
          <div className="mt-10 pt-6 border-t border-cream/10 flex flex-wrap items-center gap-2">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border transition-colors ${
                  l.code === lang
                    ? "border-gold text-gold"
                    : "border-cream/20 text-cream/60 hover:text-cream hover:border-cream/50"
                }`}
              >
                {l.short}
              </button>
            ))}
          </div>
        </nav>
      </aside>
    </header>
  );
}
