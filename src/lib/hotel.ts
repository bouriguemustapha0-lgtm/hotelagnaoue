export const expediaUrl =
  "https://www.expedia.com/Marrakech-Hotels-Auberge-Resto-Agnaoue.h130107644.Hotel-Information";

import roomRoyal from "@/assets/real-royal.jpg.asset.json";
import roomDeluxe from "@/assets/real-deluxe.jpg.asset.json";
import roomClassic from "@/assets/real-twin.jpg.asset.json";
import gDining from "@/assets/real-lounge.jpg.asset.json";
import gDetail from "@/assets/rooftop-dinner.jpg.asset.json";
import gCourtyard from "@/assets/real-courtyard.jpg.asset.json";
import roomGreen from "@/assets/real-room-green.jpg.asset.json";
import roomYellow from "@/assets/real-room-yellow.jpg.asset.json";
import twinTeal from "@/assets/real-twin-teal.jpg.asset.json";
import dPizza from "@/assets/dining-pizza.jpg.asset.json";
import dChicken from "@/assets/real-grill.jpg.asset.json";
import dShawarma from "@/assets/dining-shawarma.jpg.asset.json";
import dTagine from "@/assets/real-tagine.jpg.asset.json";
import dBreakfast from "@/assets/dining-breakfast.jpg.asset.json";
import rHallway from "@/assets/real-hallway.jpg.asset.json";
import rCourtyardNight from "@/assets/real-courtyard-night.jpg.asset.json";
import rPoolNight from "@/assets/real-pool-night.jpg.asset.json";
import rPoolGarden from "@/assets/real-pool-garden.jpg.asset.json";
import rPoolAtrium from "@/assets/real-pool-atrium.jpg.asset.json";
import rFacade from "@/assets/real-facade.jpg.asset.json";
import rFountainBlue from "@/assets/real-fountain-blue.jpg.asset.json";

export const hotel = {
  name: "Auberge Resto Agnaoue",
  tagline: "Marrakech · Medina",
  address: "47 Pass. Prince Moulay Rachid, 40000 Marrakech, Morocco",
  phone: "+212 524 383 918",
  email: "reservations@hotel-agnaou.ma",
  rating: 6.9,
  reviewCount: 65,
  locationScore: 9.1,
  founded: 2012,
};

export const rooms = [
  {
    id: "quadruple",
    name: "Classic Quadruple Room",
    image: roomRoyal.url,
    description:
      "Our largest room, with two single beds and one double — ideal for families or small groups exploring the medina together.",
    capacity: "4 Guests · 2 Singles + 1 Double",
    size: "Family Room",
    price: 95,
    amenities: ["Air Conditioning", "Private Bathroom", "Free WiFi", "Flat-screen TV"],
  },
  {
    id: "double",
    name: "Economy Double Room",
    image: roomDeluxe.url,
    description:
      "A comfortable double room with one large bed, private bathroom with shower, and free toiletries — a quiet base steps from Jemaa el-Fna.",
    capacity: "2 Guests · 1 Double Bed",
    size: "Non-smoking",
    price: 55,
    amenities: ["Air Conditioning", "Private Shower", "Free WiFi", "Wardrobe"],
  },
  {
    id: "twin",
    name: "Twin Room",
    image: roomClassic.url,
    description:
      "Two single beds, crisp white linens and a private bathroom — straightforward, restful, and a short walk from the Koutoubia minaret.",
    capacity: "2 Guests · 2 Single Beds",
    size: "Non-smoking",
    price: 55,
    amenities: ["Air Conditioning", "Private Shower", "Free WiFi", "Flat-screen TV"],
  },
];

export const gallery = [
  { src: gDetail.url, alt: "Rooftop dinner under the stars", category: "Dining", h: "tall" },
  { src: gDining.url, alt: "Intimate dining lounge", category: "Dining", h: "tall" },
  { src: dBreakfast.url, alt: "Moroccan breakfast with mint tea", category: "Dining", h: "tall" },
  { src: dTagine.url, alt: "Traditional lamb tagine", category: "Dining", h: "short" },
  { src: dChicken.url, alt: "Grilled platter with frites", category: "Dining", h: "tall" },
  { src: dPizza.url, alt: "Wood-fired four-cheese pizza", category: "Dining", h: "short" },
  { src: dShawarma.url, alt: "Chef's mixed grill platter", category: "Dining", h: "short" },
  { src: gCourtyard.url, alt: "Riad courtyard with carved doors", category: "Interior", h: "tall" },
  { src: roomRoyal.url, alt: "Royal Medina Suite", category: "Rooms", h: "short" },
  { src: roomDeluxe.url, alt: "Deluxe Riad Room", category: "Rooms", h: "tall" },
  { src: roomGreen.url, alt: "Guest room with emerald accents", category: "Rooms", h: "short" },
  { src: roomYellow.url, alt: "Guest room with mustard headboard", category: "Rooms", h: "short" },
  { src: twinTeal.url, alt: "Twin room with teal linens", category: "Rooms", h: "tall" },
  { src: rHallway.url, alt: "Arched hallway with hanging lanterns", category: "Interior", h: "short" },
  { src: rCourtyardNight.url, alt: "Mosaic courtyard at night", category: "Interior", h: "short" },
  { src: rPoolNight.url, alt: "Illuminated pool with arched facade", category: "Wellness", h: "short" },
  { src: rPoolGarden.url, alt: "Garden pool with palms", category: "Wellness", h: "short" },
  { src: rPoolAtrium.url, alt: "Indoor pool beneath the atrium", category: "Wellness", h: "tall" },
  { src: rFacade.url, alt: "Hotel facade and pool terrace", category: "Exterior", h: "short" },
  { src: rFountainBlue.url, alt: "Blue zellige fountain garden", category: "Exterior", h: "tall" },
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
