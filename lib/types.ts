// Database Schema Types for Real Estate Application

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  priceType: "sale" | "rent";
  propertyType: "house" | "apartment" | "condo" | "townhouse" | "land" | "commercial";
  status: "available" | "pending" | "sold" | "rented";
  
  // Location
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  latitude: number;
  longitude: number;
  
  // Property Details
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt: number;
  parking: number;
  
  // Features & Amenities
  amenities: string[];
  
  // Media
  images: string[];
  virtualTourUrl?: string;
  
  // Agent Info
  agentId: string;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
  listingDate: Date;
  
  // Featured flag
  isFeatured: boolean;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  bio: string;
  license: string;
  yearsExperience: number;
  specializations: string[];
  rating: number;
  reviewCount: number;
}

export interface SearchFilters {
  query?: string;
  propertyType?: Property["propertyType"][];
  priceMin?: number;
  priceMax?: number;
  bedroomsMin?: number;
  bathroomsMin?: number;
  squareFeetMin?: number;
  squareFeetMax?: number;
  amenities?: string[];
  city?: string;
  status?: Property["status"];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  propertyId: string;
  agentId: string;
}

// Suggested Database Schema (SQL):
/*
-- Properties Table
CREATE TABLE properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(12, 2) NOT NULL,
  price_type VARCHAR(10) CHECK (price_type IN ('sale', 'rent')),
  property_type VARCHAR(20) CHECK (property_type IN ('house', 'apartment', 'condo', 'townhouse', 'land', 'commercial')),
  status VARCHAR(20) DEFAULT 'available' CHECK (status IN ('available', 'pending', 'sold', 'rented')),
  
  -- Location
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip_code VARCHAR(20),
  country VARCHAR(100) DEFAULT 'United States',
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  
  -- Details
  bedrooms INTEGER DEFAULT 0,
  bathrooms DECIMAL(3, 1) DEFAULT 0,
  square_feet INTEGER,
  lot_size INTEGER,
  year_built INTEGER,
  parking INTEGER DEFAULT 0,
  
  -- Media
  images TEXT[], -- Array of image URLs
  virtual_tour_url TEXT,
  
  -- Relations
  agent_id UUID REFERENCES agents(id),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  listing_date DATE DEFAULT CURRENT_DATE,
  
  -- Flags
  is_featured BOOLEAN DEFAULT false
);

-- Agents Table
CREATE TABLE agents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  photo TEXT,
  bio TEXT,
  license VARCHAR(50),
  years_experience INTEGER DEFAULT 0,
  specializations TEXT[],
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Property Amenities (Many-to-Many)
CREATE TABLE amenities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) UNIQUE NOT NULL,
  icon VARCHAR(50)
);

CREATE TABLE property_amenities (
  property_id UUID REFERENCES properties(id) ON DELETE CASCADE,
  amenity_id UUID REFERENCES amenities(id) ON DELETE CASCADE,
  PRIMARY KEY (property_id, amenity_id)
);

-- Contact Inquiries
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES properties(id),
  agent_id UUID REFERENCES agents(id),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'closed'))
);

-- Indexes for Performance
CREATE INDEX idx_properties_city ON properties(city);
CREATE INDEX idx_properties_price ON properties(price);
CREATE INDEX idx_properties_type ON properties(property_type);
CREATE INDEX idx_properties_status ON properties(status);
CREATE INDEX idx_properties_featured ON properties(is_featured) WHERE is_featured = true;
CREATE INDEX idx_properties_location ON properties(latitude, longitude);
*/
