export const expediaUrl =
  "https://www.expedia.com/Marrakech-Hotels-Auberge-Resto-Agnaoue.h130107644.Hotel-Information";

export const bookingUrl =
  "https://www.booking.com/hotel/ma/auberge-resto-agnaoue.html";


import room1 from "@/assets/room-852743505.jpg.asset.json";
import room2 from "@/assets/room-852743530.jpg.asset.json";
import room3 from "@/assets/room-852743536.jpg.asset.json";
import room4 from "@/assets/room-852743547.jpg.asset.json";
import room5 from "@/assets/room-852743583.jpg.asset.json";
import room6 from "@/assets/room-852743595.jpg.asset.json";
import room7 from "@/assets/room-852743609.jpg.asset.json";
import room8 from "@/assets/room-852743634.jpg.asset.json";
import room9 from "@/assets/room-852743638.jpg.asset.json";
import room10 from "@/assets/room-852743640.jpg.asset.json";
import gDining from "@/assets/real-lounge.jpg.asset.json";
import gDetail from "@/assets/rooftop-dinner.jpg.asset.json";
import gCourtyard from "@/assets/real-courtyard.jpg.asset.json";
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
    image: room7.url,
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
    image: room1.url,
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
    image: room3.url,
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
  { src: room1.url, alt: "Double room with wood headboard", category: "Rooms", h: "short" },
  { src: room2.url, alt: "Double room in soft white", category: "Rooms", h: "tall" },
  { src: room3.url, alt: "Twin room with mosaic bathroom", category: "Rooms", h: "short" },
  { src: room4.url, alt: "Twin room with framed art", category: "Rooms", h: "short" },
  { src: room5.url, alt: "Twin room with stained-glass window", category: "Rooms", h: "tall" },
  { src: room6.url, alt: "Triple room beneath carved ceiling", category: "Rooms", h: "short" },
  { src: room7.url, alt: "Quadruple room with wall-mounted TV", category: "Rooms", h: "tall" },
  { src: room8.url, alt: "Double room with upholstered headboard", category: "Rooms", h: "short" },
  { src: room9.url, alt: "Single room with throw blanket", category: "Rooms", h: "short" },
  { src: room10.url, alt: "Twin room with bright window", category: "Rooms", h: "tall" },
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
