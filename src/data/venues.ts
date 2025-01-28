// import { Venue } from "../types";

// export type VenueCategory = {
//   local: Venue[];
//   international: Venue[];
// };

// export const venues: VenueCategory = {
//   local: [
//     {
//       id: "1",
//       name: "Udaipur",
//       // location: "Beverly Hills, CA",
//       type: "local",
//       description:
//         "An elegant estate with sprawling gardens and a grand ballroom",
//       capacity: 500,
//       imageUrl: "images/Destination/udaipur.jpg",
//       features: [
//         "Garden Ceremony Space",
//         "Ballroom",
//         "Bridal Suite",
//         "Valet Parking",
//       ],
//     },
//     {
//       id: "2",
//       name: "Goa",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/goa.webp",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//     {
//       id: "3",
//       name: "Jaipur",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/jaipur.jpg",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//     {
//       id: "4",
//       name: "Jodhpur",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/jodhpur.jpeg",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//     {
//       id: "5",
//       name: "Kerela",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/kerela.jpg",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//     {
//       id: "6",
//       name: "Andaman Nicobar",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/a$n.webp",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//     {
//       id: "7",
//       name: "Jaisalmer",
//       // location: "Malibu, CA",
//       type: "local",
//       description: "Breathtaking oceanfront venue with panoramic views",
//       capacity: 300,
//       imageUrl: "images/Destination/jaisalmer.jpg",
//       features: ["Beach Ceremony", "Indoor Reception", "Ocean View Terrace"],
//     },
//   ],
//   international: [
//     {
//       id: "8",
//       name: "Bali",
//       // location: "Florence, Italy",
//       type: "international",
//       description: "Historic villa in the heart of Tuscany's wine country",
//       capacity: 200,
//       imageUrl: "images/Destination/Bali.jpg",
//       features: ["Vineyard", "Historic Chapel", "Accommodation", "Wine Cellar"],
//     },
//     {
//       id: "9",
//       name: "Thailand",
//       // location: "Santorini, Greece",
//       type: "international",
//       description: "Stunning cliffside venue with Aegean Sea views",
//       capacity: 150,
//       imageUrl: "images/Destination/Thailand.webp",
//       features: ["Sunset Views", "Infinity Pool", "Private Beach Access"],
//     },
//     {
//       id: "10",
//       name: "UAE",
//       // location: "Santorini, Greece",
//       type: "international",
//       description: "Stunning cliffside venue with Aegean Sea views",
//       capacity: 150,
//       imageUrl: "images/Destination/uae.jpg",
//       features: ["Sunset Views", "Infinity Pool", "Private Beach Access"],
//     },
//     {
//       id: "11",
//       name: "Turkey",
//       // location: "Santorini, Greece",
//       type: "international",
//       description: "Stunning cliffside venue with Aegean Sea views",
//       capacity: 150,
//       imageUrl: "images/Destination/Turkey.jpg",
//       features: ["Sunset Views", "Infinity Pool", "Private Beach Access"],
//     },
//     {
//       id: "12",
//       name: "Sri Lanka",
//       // location: "Santorini, Greece",
//       type: "international",
//       description: "Stunning cliffside venue with Aegean Sea views",
//       capacity: 150,
//       imageUrl: "images/Destination/Sri-Lanka.jpg",
//       features: ["Sunset Views", "Infinity Pool", "Private Beach Access"],
//     },
//     {
//       id: "13",
//       name: "Maldives",
//       // location: "Santorini, Greece",
//       type: "international",
//       description: "Stunning cliffside venue with Aegean Sea views",
//       capacity: 150,
//       imageUrl: "images/Destination/Maldives.jpg",
//       features: ["Sunset Views", "Infinity Pool", "Private Beach Access"],
//     },
//   ],
// };
import { Venue } from "../types";

export type VenueCategory = {
  local: Venue[];
  international: Venue[];
};

export const venues: VenueCategory = {
  local: [
    {
      id: "1",
      name: "Udaipur",
      type: "local",
      description:
        "A regal city known for its stunning palaces, shimmering lakes, and vibrant culture, perfect for an unforgettable celebration.",
      capacity: 500,
      imageUrl: "images/Destination/udaipur.jpg",
      features: [
        "Scenic Garden Ceremony Space",
        "Opulent Ballroom",
        "Luxurious Bridal Suite",
        "Valet Parking Services",
      ],
    },
    {
      id: "2",
      name: "Goa",
      type: "local",
      description:
        "A tropical paradise offering beachfront venues and mesmerizing ocean views, ideal for a dream beach wedding.",
      capacity: 300,
      imageUrl: "images/Destination/goa.webp",
      features: [
        "Exclusive Beach Ceremony",
        "Indoor Reception Area",
        "Oceanfront Terrace",
      ],
    },
    {
      id: "3",
      name: "Jaipur",
      type: "local",
      description:
        "A royal destination showcasing historic forts and majestic palaces, perfect for a lavish and cultural celebration.",
      capacity: 400,
      imageUrl: "images/Destination/jaipur.jpg",
      features: [
        "Historic Ambiance",
        "Traditional Décor",
        "Indoor & Outdoor Spaces",
      ],
    },
    {
      id: "4",
      name: "Jodhpur",
      type: "local",
      description:
        "The 'Blue City' offers majestic settings with desert landscapes, heritage palaces, and warm hospitality.",
      capacity: 350,
      imageUrl: "images/Destination/jodhpur.jpeg",
      features: ["Heritage Venue", "Rooftop Views", "Customized Services"],
    },
    {
      id: "5",
      name: "Kerala",
      type: "local",
      description:
        "Experience serenity with picturesque backwaters and lush greenery, perfect for an intimate and peaceful celebration.",
      capacity: 300,
      imageUrl: "images/Destination/kerela.jpg",
      features: [
        "Houseboat Ceremonies",
        "Scenic Outdoor Areas",
        "Unique Local Cuisine",
      ],
    },
    {
      id: "6",
      name: "Andaman Nicobar",
      type: "local",
      description:
        "A tranquil island escape featuring pristine beaches and turquoise waters, ideal for a romantic destination wedding.",
      capacity: 250,
      imageUrl: "images/Destination/a$n.webp",
      features: ["Private Beaches", "Exotic Island Settings", "Outdoor Dining"],
    },
    {
      id: "7",
      name: "Jaisalmer",
      type: "local",
      description:
        "The 'Golden City' offers enchanting desert landscapes, perfect for a grand wedding under the starlit sky.",
      capacity: 300,
      imageUrl: "images/Destination/jaisalmer.jpg",
      features: ["Desert Safari Wedding", "Camel Caravans", "Luxury Tents"],
    },
  ],
  international: [
    {
      id: "8",
      name: "Bali",
      type: "international",
      description:
        "A tropical haven with breathtaking beaches and luxurious venues, ideal for a serene and enchanting wedding celebration.",
      capacity: 200,
      imageUrl: "images/Destination/Bali.jpg",
      features: [
        "Beachfront Venues",
        "Private Villas",
        "Exquisite Sunset Views",
      ],
    },
    {
      id: "9",
      name: "Thailand",
      type: "international",
      description:
        "An exotic destination blending vibrant culture with stunning coastal venues, perfect for a memorable celebration.",
      capacity: 150,
      imageUrl: "images/Destination/Thailand.webp",
      features: [
        "Private Beach Access",
        "Infinity Pools",
        "Thai Culinary Delights",
      ],
    },
    {
      id: "10",
      name: "UAE",
      type: "international",
      description:
        "A luxurious destination featuring world-class venues, from desert dunes to opulent skyscraper settings.",
      capacity: 300,
      imageUrl: "images/Destination/uae.jpg",
      features: ["Skyline Views", "Palatial Venues", "Desert Experiences"],
    },
    {
      id: "11",
      name: "Turkey",
      type: "international",
      description:
        "Where East meets West, Turkey offers a fusion of historic charm and contemporary elegance for your big day.",
      capacity: 250,
      imageUrl: "images/Destination/Turkey.jpg",
      features: [
        "Cultural Landmarks",
        "Elegant Ballrooms",
        "Traditional Cuisine",
      ],
    },
    {
      id: "12",
      name: "Sri Lanka",
      type: "international",
      description:
        "An island gem with lush landscapes and serene beaches, perfect for an unforgettable and exotic wedding.",
      capacity: 200,
      imageUrl: "images/Destination/Sri-Lanka.jpg",
      features: [
        "Beachfront Ceremonies",
        "Hill Country Views",
        "Unique Traditions",
      ],
    },
    {
      id: "13",
      name: "Maldives",
      type: "international",
      description:
        "A luxurious island destination surrounded by crystal-clear waters and white sandy beaches, ideal for a private wedding.",
      capacity: 150,
      imageUrl: "images/Destination/Maldives.jpg",
      features: [
        "Underwater Ceremonies",
        "Secluded Resorts",
        "Overwater Villas",
      ],
    },
  ],
};