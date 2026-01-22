import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PropertyCard } from "./property-card";
import { getFeaturedProperties } from "@/lib/data";

/**
 * Featured Listings Section
 * 
 * Layout Philosophy:
 * Perfect grids feel robotic. Here we use an "editorial" approach:
 * - First property gets hero treatment (full width)
 * - Remaining properties use staggered grid with subtle asymmetry
 * - Animation delays create a cascading "reveal" effect
 * 
 * Why not a perfect 3-column grid?
 * Magazine layouts use hierarchy - the eye needs a focal point.
 * This approach guides attention while feeling more organic.
 */
export function FeaturedListings() {
  const featuredProperties = getFeaturedProperties();

  // Edge case: gracefully handle empty state
  if (!featuredProperties || featuredProperties.length === 0) {
    return null; // Don't render section if no featured properties
  }

  return (
    <section className="py-24 bg-background relative">
      {/* Subtle background texture - adds depth without distraction */}
      <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - intentionally asymmetric alignment */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="space-y-3">
            {/* Label uses primary color */}
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Featured Properties
            </p>
            {/* 
              Headline copy: Notice we're not saying "Best Properties Ever!"
              Just stating what it is - curated selection. Understated = trusted.
            */}
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Hand-Picked Homes,{" "}
              <span className="font-normal text-muted-foreground">Curated Weekly</span>
            </h2>
          </div>

          <Link href="/properties">
            <Button
              variant="outline"
              className="group bg-transparent hover:bg-primary hover:text-primary-foreground 
                transition-all duration-300"
            >
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 
                group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Hero Property - gets premium placement */}
        {featuredProperties.length > 0 && (
          <div className="mb-10 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <PropertyCard property={featuredProperties[0]} variant="featured" />
          </div>
        )}

        {/* 
          Property Grid - Asymmetric Layout
          Instead of equal columns, we use slight padding variations
          This "imperfection" makes it feel designed by humans
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProperties.slice(1, 4).map((property, index) => (
            <div
              key={property.id}
              className="animate-fade-up"
              style={{
                animationDelay: `${0.2 + index * 0.15}s`,
                // Subtle vertical offset for visual interest
                transform: index === 1 ? 'translateY(8px)' : undefined
              }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Show more if we have additional properties */}
        {featuredProperties.length > 4 && (
          <div className="text-center mt-12">
            <Link href="/properties">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                See {featuredProperties.length - 4} more properties
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
