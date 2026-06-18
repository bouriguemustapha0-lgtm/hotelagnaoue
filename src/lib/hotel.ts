export const expediaUrl =
  "https://www.expedia.com/Marrakech-Hotels-Auberge-Resto-Agnaoue.h130107644.Hotel-Information";

export const bookingUrl =
  "https://www.booking.com/hotel/ma/auberge-resto-agnaoue.html";


import room1 from "@/assets/room-852743505.jpg";
import room2 from "@/assets/room-852743530.jpg";
import room3 from "@/assets/room-852743536.jpg";
import room4 from "@/assets/room-852743547.jpg";
import room5 from "@/assets/room-852743583.jpg";
import room6 from "@/assets/room-852743595.jpg";
import room7 from "@/assets/room-852743609.jpg";
import room8 from "@/assets/room-852743634.jpg";
import room9 from "@/assets/room-852743638.jpg";
import room10 from "@/assets/room-852743640.jpg";
import gDining from "@/assets/real-lounge.jpg";
import gDetail from "@/assets/rooftop-dinner.jpg";

import dPizza from "@/assets/dining-pizza.jpg";
import dChicken from "@/assets/real-grill.jpg";
import dShawarma from "@/assets/dining-shawarma.jpg";
import dTagine from "@/assets/real-tagine.jpg";
import dBreakfast from "@/assets/dining-breakfast.jpg";

import int1 from "@/assets/interior-852742148.jpg";
import int2 from "@/assets/interior-852742394.jpg";
import int3 from "@/assets/interior-852742427.jpg";
import int4 from "@/assets/interior-852742884.jpg";
import int5 from "@/assets/interior-852742932.jpg";
import int6 from "@/assets/interior-852743511.jpg";
import int7 from "@/assets/interior-852743564.jpg";
import int8 from "@/assets/interior-852743570.jpg";
import int9 from "@/assets/interior-852743573.jpg";
import int10 from "@/assets/interior-852743581.jpg";

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
    image: room7,
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
    image: room1,
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
    image: room3,
    description:
      "Two single beds, crisp white linens and a private bathroom — straightforward, restful, and a short walk from the Koutoubia minaret.",
    capacity: "2 Guests · 2 Single Beds",
    size: "Non-smoking",
    price: 55,
    amenities: ["Air Conditioning", "Private Shower", "Free WiFi", "Flat-screen TV"],
  },
];

export const gallery = [
  { src: gDetail, alt: "Rooftop dinner under the stars", category: "Dining", h: "tall" },
  { src: gDining, alt: "Intimate dining lounge", category: "Dining", h: "tall" },
  { src: dBreakfast, alt: "Moroccan breakfast with mint tea", category: "Dining", h: "tall" },
  { src: dTagine, alt: "Traditional lamb tagine", category: "Dining", h: "short" },
  { src: dChicken, alt: "Grilled platter with frites", category: "Dining", h: "tall" },
  { src: dPizza, alt: "Wood-fired four-cheese pizza", category: "Dining", h: "short" },
  { src: dShawarma, alt: "Chef's mixed grill platter", category: "Dining", h: "short" },
  
  { src: room1, alt: "Double room with wood headboard", category: "Rooms", h: "short" },
  { src: room2, alt: "Double room in soft white", category: "Rooms", h: "tall" },
  { src: room3, alt: "Twin room with mosaic bathroom", category: "Rooms", h: "short" },
  { src: room4, alt: "Twin room with framed art", category: "Rooms", h: "short" },
  { src: room5, alt: "Twin room with stained-glass window", category: "Rooms", h: "tall" },
  { src: room6, alt: "Triple room beneath carved ceiling", category: "Rooms", h: "short" },
  { src: room7, alt: "Quadruple room with wall-mounted TV", category: "Rooms", h: "tall" },
  { src: room8, alt: "Double room with upholstered headboard", category: "Rooms", h: "short" },
  { src: room9, alt: "Single room with throw blanket", category: "Rooms", h: "short" },
  { src: room10, alt: "Twin room with bright window", category: "Rooms", h: "tall" },
  { src: int1, alt: "Stairwell with arched alcove", category: "Interior", h: "tall" },
  { src: int2, alt: "Reception lounge with chandeliers", category: "Interior", h: "short" },
  { src: int3, alt: "Sitting room with Berber wall plates", category: "Interior", h: "short" },
  { src: int4, alt: "Atrium with wrought-iron balcony", category: "Interior", h: "tall" },
  { src: int5, alt: "Arched corridor with painted ceiling", category: "Interior", h: "tall" },
  { src: int6, alt: "Main salon with archway", category: "Interior", h: "short" },
  { src: int7, alt: "Reception desk beneath Moorish arch", category: "Interior", h: "short" },
  { src: int8, alt: "Long lounge with woven wall art", category: "Interior", h: "short" },
  { src: int9, alt: "Stairs framing the atrium", category: "Interior", h: "tall" },
  { src: int10, alt: "Upper gallery overlooking the courtyard", category: "Interior", h: "short" },
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
