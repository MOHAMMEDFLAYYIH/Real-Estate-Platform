'use client';

import Image from "next/image";
import Link from "next/link";
import { Bath, Bed, MapPin, Maximize, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@/lib/types";
import { formatPrice } from "@/lib/data";

/**
 * PropertyCard Component
 * 
 * Design philosophy:
 * - Cards use subtle asymmetric hover (rotate + scale) for organic feel
 * - Price display uses our signature olive color
 * - Transitions are slightly "bouncy" - feels more alive than linear
 * 
 * Why the rotation on hover?
 * It's a technique from print design that makes interactions feel handcrafted.
 * Linear animations feel robotic; this subtle tilt feels human.
 */

interface PropertyCardProps {
  property: Property;
  variant?: "default" | "featured";
}

export function PropertyCard({ property, variant = "default" }: PropertyCardProps) {
  const isFeatured = variant === "featured";

  // Edge case: handle properties with no images gracefully
  const primaryImage = property.images?.[0] || "/placeholder.svg";

  // Edge case: some properties might have 0 bedrooms (studios)
  const bedroomLabel = property.bedrooms === 0 ? "Studio" : `${property.bedrooms} Beds`;

  return (
    <Link href={`/properties/${property.id}`}>
      {/* 
        The hover-lift class applies our custom asymmetric animation.
        We also add a slight rotation that feels "picked up" on hover.
      */}
      <Card className={`group overflow-hidden transition-all duration-300 ease-out 
        hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 hover:rotate-[0.3deg]
        ${isFeatured ? "md:flex" : ""}`}
      >
        {/* Image Container */}
        <div className={`relative overflow-hidden ${isFeatured ? "md:w-1/2" : "aspect-[4/3]"
          }`}>
          <div className={isFeatured ? "aspect-[4/3] md:aspect-auto md:h-full" : ""}>
            <Image
              src={primaryImage}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          </div>

          {/* Gradient overlay - warm tint matches our palette */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Status Badge - using primary color */}
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge
              variant={property.status === "available" ? "default" : "secondary"}
              className="bg-primary text-primary-foreground font-medium shadow-sm"
            >
              {property.priceType === "rent" ? "For Rent" : "For Sale"}
            </Badge>
            {property.status === "pending" && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Pending
              </Badge>
            )}
          </div>

          {/* Favorite Button with micro-interaction */}
          <button
            type="button"
            className="absolute top-3 right-3 p-2.5 rounded-full bg-background/90 backdrop-blur-sm 
              hover:bg-background hover:scale-110 active:scale-95 
              transition-all duration-200 shadow-sm"
            onClick={(e) => {
              e.preventDefault();
              // TODO: Implement favorites with local storage
              // We'll add this in the next iteration
            }}
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4 text-foreground transition-colors hover:text-destructive" />
          </button>

          {/* Price Tag - styled to stand out */}
          <div className="absolute bottom-3 left-3">
            <span className="text-lg font-bold text-foreground bg-background/95 backdrop-blur-sm 
              px-3 py-1.5 rounded-lg shadow-md border border-border/50">
              {formatPrice(property.price, property.priceType)}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <CardContent className={`p-4 ${isFeatured ? "md:w-1/2 md:p-6 md:flex md:flex-col md:justify-center" : ""}`}>
          <div className="space-y-3">
            {/* Title */}
            <h3 className={`font-serif font-semibold text-foreground 
              group-hover:text-primary transition-colors duration-300 line-clamp-1 ${isFeatured ? "text-xl md:text-2xl" : "text-lg"
              }`}>
              {property.title}
            </h3>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary/60" />
              <span className="text-sm line-clamp-1">
                {property.address}, {property.city}
              </span>
            </div>

            {/* Description for Featured - only visible on larger cards */}
            {isFeatured && (
              <p className="text-muted-foreground text-sm line-clamp-2 hidden md:block leading-relaxed">
                {property.description}
              </p>
            )}

            {/* Stats Row */}
            <div className="flex items-center gap-4 pt-3 border-t border-border/60">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Bed className="h-4 w-4" />
                <span className="text-sm font-medium">{bedroomLabel}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Bath className="h-4 w-4" />
                <span className="text-sm font-medium">{property.bathrooms} Baths</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Maximize className="h-4 w-4" />
                <span className="text-sm font-medium">{property.squareFeet.toLocaleString()} sqft</span>
              </div>
            </div>

            {/* Amenities Preview - only for featured */}
            {isFeatured && property.amenities.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {property.amenities.slice(0, 4).map((amenity) => (
                  <Badge
                    key={amenity}
                    variant="outline"
                    className="text-xs bg-secondary/50 border-border hover:bg-secondary transition-colors"
                  >
                    {amenity}
                  </Badge>
                ))}
                {property.amenities.length > 4 && (
                  <Badge variant="outline" className="text-xs bg-muted text-muted-foreground">
                    +{property.amenities.length - 4} more
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
