import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "fr" | "es" | "ar";

export const languages: { code: Lang; label: string; short: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "fr", label: "Français", short: "FR", dir: "ltr" },
  { code: "es", label: "Español", short: "ES", dir: "ltr" },
  { code: "ar", label: "العربية", short: "AR", dir: "rtl" },
];

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.rooms": "Rooms",
    "nav.amenities": "Amenities",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.book": "Book Now",
    "hero.eyebrow": "Where Moroccan Hospitality Feels Like Home",
    "hero.title.a": "Stay in the Soul of",
    "hero.title.b": "Marrakech",
    "hero.subtitle": "Discover refined comfort and unforgettable Moroccan hospitality, four minutes from Djemaa el-Fna.",
    "hero.cta.rooms": "Explore Rooms",
    "hero.cta.expedia": "Book on Expedia",
    "hero.cta.booking": "Book on Booking.com",
    "hero.stat.reviews": "reviews",
    "hero.stat.location": "Medina, Marrakech",
    "hero.stat.distance": "400 m to Jemaa el-Fna",
    "hero.scroll": "Scroll",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.rooms": "Chambres",
    "nav.amenities": "Services",
    "nav.gallery": "Galerie",
    "nav.reviews": "Avis",
    "nav.contact": "Contact",
    "nav.book": "Réserver",
    "hero.eyebrow": "Où l'hospitalité marocaine se sent comme chez soi",
    "hero.title.a": "Séjournez au cœur de",
    "hero.title.b": "Marrakech",
    "hero.subtitle": "Découvrez un confort raffiné et une hospitalité marocaine inoubliable, à quatre minutes de Djemaa el-Fna.",
    "hero.cta.rooms": "Voir les chambres",
    "hero.cta.expedia": "Réserver sur Expedia",
    "hero.cta.booking": "Réserver sur Booking.com",
    "hero.stat.reviews": "avis",
    "hero.stat.location": "Médina, Marrakech",
    "hero.stat.distance": "400 m de Jemaa el-Fna",
    "hero.scroll": "Défiler",
  },
  es: {
    "nav.home": "Inicio",
    "nav.rooms": "Habitaciones",
    "nav.amenities": "Servicios",
    "nav.gallery": "Galería",
    "nav.reviews": "Opiniones",
    "nav.contact": "Contacto",
    "nav.book": "Reservar",
    "hero.eyebrow": "Donde la hospitalidad marroquí se siente como en casa",
    "hero.title.a": "Alójate en el alma de",
    "hero.title.b": "Marrakech",
    "hero.subtitle": "Descubre un confort refinado y una hospitalidad marroquí inolvidable, a cuatro minutos de Djemaa el-Fna.",
    "hero.cta.rooms": "Ver habitaciones",
    "hero.cta.expedia": "Reservar en Expedia",
    "hero.cta.booking": "Reservar en Booking.com",
    "hero.stat.reviews": "opiniones",
    "hero.stat.location": "Medina, Marrakech",
    "hero.stat.distance": "400 m de Jemaa el-Fna",
    "hero.scroll": "Desliza",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.rooms": "الغرف",
    "nav.amenities": "الخدمات",
    "nav.gallery": "المعرض",
    "nav.reviews": "التقييمات",
    "nav.contact": "اتصل بنا",
    "nav.book": "احجز الآن",
    "hero.eyebrow": "حيث تشعر الضيافة المغربية كأنك في بيتك",
    "hero.title.a": "أقم في قلب",
    "hero.title.b": "مراكش",
    "hero.subtitle": "اكتشف الراحة الراقية والضيافة المغربية التي لا تُنسى، على بعد أربع دقائق من ساحة جامع الفنا.",
    "hero.cta.rooms": "استكشف الغرف",
    "hero.cta.expedia": "احجز عبر Expedia",
    "hero.cta.booking": "احجز عبر Booking.com",
    "hero.stat.reviews": "تقييم",
    "hero.stat.location": "المدينة القديمة، مراكش",
    "hero.stat.distance": "400 م من ساحة جامع الفنا",
    "hero.scroll": "مرر",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("lang") as Lang)) || null;
    if (saved && translations[saved]) setLangState(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = languages.find((l) => l.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
