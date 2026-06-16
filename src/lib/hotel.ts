export const expediaUrl =
  "https://www.expedia.com/Marrakech-Hotels-Auberge-Resto-Agnaoue.h130107644.Hotel-Information";

import roomRoyal from "@/assets/room-royal.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomClassic from "@/assets/room-classic.jpg";
import gDining from "@/assets/g-dining.jpg";
import gSpa from "@/assets/g-spa.jpg";
import gPool from "@/assets/g-pool.jpg";
import gExterior from "@/assets/g-exterior.jpg";
import gDetail from "@/assets/g-detail.jpg";
import gCourtyard from "@/assets/g-courtyard.jpg";

export const hotel = {
  name: "Agnaou",
  tagline: "Marrakech · Medina",
  address: "10 Avenue Prince Moulay Rachid, Medina, 40000 Marrakech, Morocco",
  phone: "+212 524 383 918",
  email: "reservations@hotel-agnaou.ma",
  rating: 4.9,
  reviewCount: 1049,
  founded: 2012,
};

export const rooms = [
  {
    id: "royal",
    name: "Royal Medina Suite",
    image: roomRoyal,
    description:
      "A grand corner suite with private balcony overlooking the rose-hued rooftops of the old medina and the Koutoubia minaret at dusk.",
    capacity: "2 Guests · King Bed",
    size: "48 m²",
    price: 320,
    amenities: ["Private Terrace", "Hand-carved Cedar", "Marble Bath", "City View"],
  },
  {
    id: "deluxe",
    name: "Deluxe Riad Room",
    image: roomDeluxe,
    description:
      "An elegant retreat beneath an antique painted ceiling, dressed in crisp linen, Berber rugs and the quiet glow of brass lanterns.",
    capacity: "2 Guests · Queen Bed",
    size: "32 m²",
    price: 210,
    amenities: ["Courtyard View", "Rain Shower", "Zellige Tilework", "Air Conditioning"],
  },
  {
    id: "classic",
    name: "Classic Twin",
    image: roomClassic,
    description:
      "Warm terracotta walls, twin beds in crisp white, and a small wrought-iron balcony — the romance of the medina in miniature.",
    capacity: "2 Guests · Twin Beds",
    size: "24 m²",
    price: 145,
    amenities: ["Medina Balcony", "Free WiFi", "Hand-loomed Textiles", "Soundproofed"],
  },
];

export const gallery = [
  { src: gExterior, alt: "Rooftop terrace at sunset", category: "Exterior", h: "tall" },
  { src: gDining, alt: "Intimate dining lounge", category: "Dining", h: "tall" },
  { src: gPool, alt: "Outdoor pool and facade", category: "Wellness", h: "tall" },
  { src: gSpa, alt: "Hammam spa", category: "Wellness", h: "short" },
  { src: gCourtyard, alt: "Courtyard fountain", category: "Interior", h: "tall" },
  { src: gDetail, alt: "Djemaa el-Fna by night", category: "Exterior", h: "short" },
  { src: roomRoyal, alt: "Royal Medina Suite", category: "Rooms", h: "short" },
  { src: roomDeluxe, alt: "Deluxe Riad Room", category: "Rooms", h: "tall" },
];

export const reviews = [
  {
    name: "Camille Laurent",
    country: "Paris, France",
    rating: 5,
    text:
      "From the moment we crossed the threshold, Agnaou felt like a secret kept by Marrakech for those who truly know her. The staff anticipates every wish.",
    initial: "C",
  },
  {
    name: "Hiroshi Tanaka",
    country: "Tokyo, Japan",
    rating: 5,
    text:
      "Breakfast on the rooftop as the call to prayer rose over the medina was a moment I will carry forever. Every detail has been considered.",
    initial: "H",
  },
  {
    name: "Olivia Brennan",
    country: "London, UK",
    rating: 5,
    text:
      "A perfect balance of authentic Moroccan soul and refined luxury. The hammam ritual alone is worth the journey.",
    initial: "O",
  },
  {
    name: "Marcus Weil",
    country: "Berlin, Germany",
    rating: 4,
    text:
      "Exquisite craftsmanship throughout the riad. Quiet, central, and impossibly photogenic at every hour of the day.",
    initial: "M",
  },
];
