import type { Property, Agent } from "./types";

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Sarah Mitchell",
    email: "sarah@havenrealty.com",
    phone: "(555) 123-4567",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "With over 12 years of experience in luxury real estate, Sarah specializes in helping clients find their perfect home.",
    license: "RE-2024-1234",
    yearsExperience: 12,
    specializations: ["Luxury Homes", "Waterfront Properties"],
    rating: 4.9,
    reviewCount: 156,
  },
  {
    id: "agent-2",
    name: "Michael Chen",
    email: "michael@havenrealty.com",
    phone: "(555) 234-5678",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Michael brings a data-driven approach to real estate, ensuring clients make informed investment decisions.",
    license: "RE-2024-5678",
    yearsExperience: 8,
    specializations: ["Investment Properties", "Commercial Real Estate"],
    rating: 4.8,
    reviewCount: 98,
  },
];

export const properties: Property[] = [
  {
    id: "prop-1",
    title: "Modern Lakefront Villa",
    description: "Experience luxury living in this stunning lakefront villa featuring floor-to-ceiling windows, an open-concept living area, and breathtaking water views. The gourmet kitchen boasts premium appliances and custom cabinetry. The master suite offers a private balcony overlooking the lake.",
    price: 2450000,
    priceType: "sale",
    propertyType: "house",
    status: "available",
    address: "1234 Lakeside Drive",
    city: "Lake Tahoe",
    state: "California",
    zipCode: "96150",
    country: "United States",
    latitude: 38.9399,
    longitude: -119.9772,
    bedrooms: 5,
    bathrooms: 4.5,
    squareFeet: 4800,
    lotSize: 12000,
    yearBuilt: 2021,
    parking: 3,
    amenities: ["Pool", "Smart Home", "Wine Cellar", "Home Theater", "Waterfront", "Fireplace"],
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
    listingDate: new Date("2024-01-15"),
    isFeatured: true,
  },
  {
    id: "prop-2",
    title: "Downtown Penthouse Loft",
    description: "Sophisticated urban living awaits in this stunning penthouse loft. Featuring exposed brick walls, industrial-chic design, and panoramic city views. The open floor plan seamlessly connects living, dining, and kitchen areas.",
    price: 1875000,
    priceType: "sale",
    propertyType: "condo",
    status: "available",
    address: "500 Metropolitan Ave, PH1",
    city: "San Francisco",
    state: "California",
    zipCode: "94102",
    country: "United States",
    latitude: 37.7749,
    longitude: -122.4194,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2800,
    yearBuilt: 2019,
    parking: 2,
    amenities: ["Rooftop Access", "Concierge", "Gym", "Smart Home", "City View", "High Ceilings"],
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
    listingDate: new Date("2024-02-01"),
    isFeatured: true,
  },
  {
    id: "prop-3",
    title: "Charming Craftsman Bungalow",
    description: "Step into timeless elegance with this beautifully restored Craftsman bungalow. Original hardwood floors, built-in cabinetry, and a wrap-around porch create warm, inviting spaces. Updated kitchen and bathrooms blend modern convenience with classic charm.",
    price: 895000,
    priceType: "sale",
    propertyType: "house",
    status: "available",
    address: "742 Oak Street",
    city: "Portland",
    state: "Oregon",
    zipCode: "97205",
    country: "United States",
    latitude: 45.5155,
    longitude: -122.6789,
    bedrooms: 4,
    bathrooms: 2,
    squareFeet: 2200,
    lotSize: 6000,
    yearBuilt: 1925,
    parking: 1,
    amenities: ["Garden", "Fireplace", "Hardwood Floors", "Updated Kitchen", "Wrap-around Porch"],
    images: [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-01-20"),
    listingDate: new Date("2024-01-20"),
    isFeatured: true,
  },
  {
    id: "prop-4",
    title: "Luxury High-Rise Apartment",
    description: "Live above it all in this sophisticated high-rise apartment with stunning ocean views. Floor-to-ceiling windows flood the space with natural light. Building amenities include infinity pool, fitness center, and 24-hour concierge.",
    price: 5500,
    priceType: "rent",
    propertyType: "apartment",
    status: "available",
    address: "888 Ocean Boulevard, Unit 2401",
    city: "Miami",
    state: "Florida",
    zipCode: "33139",
    country: "United States",
    latitude: 25.7617,
    longitude: -80.1918,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1600,
    yearBuilt: 2022,
    parking: 1,
    amenities: ["Ocean View", "Pool", "Gym", "Concierge", "Balcony", "In-unit Laundry"],
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10"),
    listingDate: new Date("2024-02-10"),
    isFeatured: false,
  },
  {
    id: "prop-5",
    title: "Contemporary Mountain Retreat",
    description: "Escape to this architectural masterpiece nestled in the mountains. Floor-to-ceiling windows frame spectacular views. The great room features a soaring stone fireplace. Multiple outdoor living spaces perfect for entertaining.",
    price: 3200000,
    priceType: "sale",
    propertyType: "house",
    status: "available",
    address: "2100 Summit Ridge Road",
    city: "Aspen",
    state: "Colorado",
    zipCode: "81611",
    country: "United States",
    latitude: 39.1911,
    longitude: -106.8175,
    bedrooms: 6,
    bathrooms: 5.5,
    squareFeet: 5500,
    lotSize: 20000,
    yearBuilt: 2020,
    parking: 4,
    amenities: ["Mountain View", "Hot Tub", "Ski-in/Ski-out", "Wine Cellar", "Home Theater", "Smart Home"],
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    createdAt: new Date("2024-01-25"),
    updatedAt: new Date("2024-01-25"),
    listingDate: new Date("2024-01-25"),
    isFeatured: true,
  },
  {
    id: "prop-6",
    title: "Cozy Studio in Arts District",
    description: "Perfect starter home or investment property in the vibrant Arts District. This efficiently designed studio features an updated kitchen, in-unit washer/dryer, and access to building rooftop. Walking distance to galleries, restaurants, and transit.",
    price: 1800,
    priceType: "rent",
    propertyType: "apartment",
    status: "available",
    address: "325 Gallery Row",
    city: "Los Angeles",
    state: "California",
    zipCode: "90013",
    country: "United States",
    latitude: 34.0407,
    longitude: -118.2468,
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    yearBuilt: 2018,
    parking: 1,
    amenities: ["Rooftop Access", "In-unit Laundry", "Pet Friendly", "Bike Storage"],
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-2",
    createdAt: new Date("2024-02-15"),
    updatedAt: new Date("2024-02-15"),
    listingDate: new Date("2024-02-15"),
    isFeatured: false,
  },
  {
    id: "prop-7",
    title: "Historic Townhouse",
    description: "Elegant brownstone townhouse in a prestigious historic district. Original architectural details blend seamlessly with modern updates. Private garden, chef's kitchen, and multiple fireplaces throughout.",
    price: 4500000,
    priceType: "sale",
    propertyType: "townhouse",
    status: "pending",
    address: "18 Beacon Street",
    city: "Boston",
    state: "Massachusetts",
    zipCode: "02108",
    country: "United States",
    latitude: 42.3601,
    longitude: -71.0589,
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4200,
    lotSize: 2500,
    yearBuilt: 1890,
    parking: 2,
    amenities: ["Garden", "Fireplace", "Wine Cellar", "Library", "Historic Details"],
    images: [
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec8?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    createdAt: new Date("2024-01-10"),
    updatedAt: new Date("2024-02-20"),
    listingDate: new Date("2024-01-10"),
    isFeatured: false,
  },
  {
    id: "prop-8",
    title: "Beachfront Paradise",
    description: "Wake up to the sound of waves in this stunning beachfront property. Direct beach access, infinity pool overlooking the ocean, and spacious outdoor entertaining areas. Open floor plan designed for coastal living.",
    price: 5750000,
    priceType: "sale",
    propertyType: "house",
    status: "available",
    address: "1 Oceanfront Way",
    city: "Malibu",
    state: "California",
    zipCode: "90265",
    country: "United States",
    latitude: 34.0259,
    longitude: -118.7798,
    bedrooms: 4,
    bathrooms: 4.5,
    squareFeet: 4000,
    lotSize: 8000,
    yearBuilt: 2023,
    parking: 3,
    amenities: ["Beachfront", "Pool", "Smart Home", "Outdoor Kitchen", "Ocean View", "Guest House"],
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    ],
    agentId: "agent-1",
    createdAt: new Date("2024-02-05"),
    updatedAt: new Date("2024-02-05"),
    listingDate: new Date("2024-02-05"),
    isFeatured: true,
  },
];

export const allAmenities = [
  "Pool",
  "Gym",
  "Concierge",
  "Smart Home",
  "Fireplace",
  "Garden",
  "Rooftop Access",
  "Ocean View",
  "Mountain View",
  "City View",
  "Waterfront",
  "Wine Cellar",
  "Home Theater",
  "Hot Tub",
  "Pet Friendly",
  "In-unit Laundry",
  "Hardwood Floors",
  "High Ceilings",
  "Balcony",
  "Parking",
];

export const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
] as const;

export function formatPrice(price: number, priceType: "sale" | "rent"): string {
  if (priceType === "rent") {
    return `$${price.toLocaleString()}/mo`;
  }
  return `$${price.toLocaleString()}`;
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getAgentById(id: string): Agent | undefined {
  return agents.find((a) => a.id === id);
}

export function getFeaturedProperties(): Property[] {
  return properties.filter((p) => p.isFeatured && p.status === "available");
}

export function filterProperties(filters: Partial<{
  propertyType: string[];
  priceMin: number;
  priceMax: number;
  bedroomsMin: number;
  bathroomsMin: number;
  amenities: string[];
  city: string;
  query: string;
}>): Property[] {
  return properties.filter((property) => {
    if (filters.propertyType?.length && !filters.propertyType.includes(property.propertyType)) {
      return false;
    }
    if (filters.priceMin && property.price < filters.priceMin) {
      return false;
    }
    if (filters.priceMax && property.price > filters.priceMax) {
      return false;
    }
    if (filters.bedroomsMin && property.bedrooms < filters.bedroomsMin) {
      return false;
    }
    if (filters.bathroomsMin && property.bathrooms < filters.bathroomsMin) {
      return false;
    }
    if (filters.amenities?.length) {
      const hasAllAmenities = filters.amenities.every((a) =>
        property.amenities.includes(a)
      );
      if (!hasAllAmenities) return false;
    }
    if (filters.city && !property.city.toLowerCase().includes(filters.city.toLowerCase())) {
      return false;
    }
    if (filters.query) {
      const searchTerm = filters.query.toLowerCase();
      const searchableText = `${property.title} ${property.description} ${property.city} ${property.address}`.toLowerCase();
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }
    return true;
  });
}
