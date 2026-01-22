import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PropertyFilters } from "@/components/property-filters";
import { PropertyCard } from "@/components/property-card";
import { SearchBar } from "@/components/search-bar";
import { filterProperties } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

interface PropertiesPageProps {
  searchParams: Promise<{
    type?: string;
    city?: string;
    priceMin?: string;
    priceMax?: string;
    bedrooms?: string;
    bathrooms?: string;
    amenities?: string;
    query?: string;
  }>;
}

function PropertyGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="space-y-4">
          <Skeleton className="aspect-[4/3] w-full rounded-lg" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      ))}
    </div>
  );
}

async function PropertyGrid({ searchParams }: { searchParams: PropertiesPageProps["searchParams"] }) {
  const params = await searchParams;

  const filters = {
    propertyType: params.type ? [params.type] : undefined,
    city: params.city || undefined,
    priceMin: params.priceMin ? Number.parseInt(params.priceMin) : undefined,
    priceMax: params.priceMax ? Number.parseInt(params.priceMax) : undefined,
    bedroomsMin: params.bedrooms ? Number.parseInt(params.bedrooms) : undefined,
    bathroomsMin: params.bathrooms ? Number.parseInt(params.bathrooms) : undefined,
    amenities: params.amenities ? params.amenities.split(",") : undefined,
    query: params.query || undefined,
  };

  const properties = filterProperties(filters);

  if (properties.length === 0) {
    return (
      <div className="text-center py-16">
        <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
          No properties found
        </h3>
        <p className="text-muted-foreground mb-6">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <>
      <PropertyFilters totalCount={properties.length} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </>
  );
}

export default function PropertiesPage({ searchParams }: PropertiesPageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Page Header */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-8">
              <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                Browse Our Collection
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                Available Properties
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our curated selection of exceptional properties.
                Use the filters below to find your perfect home.
              </p>
            </div>
            <div className="flex justify-center">
              <SearchBar variant="compact" />
            </div>
          </div>
        </section>

        {/* Property Grid */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<PropertyGridSkeleton />}>
              <PropertyGrid searchParams={searchParams} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
