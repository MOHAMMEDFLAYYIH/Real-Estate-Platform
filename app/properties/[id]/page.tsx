import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bath, Bed, Calendar, Car, Heart, Home, Maximize, Share2 } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ImageGallery } from "@/components/image-gallery";
import { ContactForm } from "@/components/contact-form";
import { PropertyMap } from "@/components/property-map";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPropertyById, getAgentById, properties, formatPrice } from "@/lib/data";

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;
  const property = getPropertyById(id);
  
  if (!property) {
    notFound();
  }

  const agent = getAgentById(property.agentId);
  
  if (!agent) {
    notFound();
  }

  // Get similar properties (same type, different id)
  const similarProperties = properties
    .filter((p) => p.propertyType === property.propertyType && p.id !== property.id && p.status === "available")
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {/* Breadcrumb */}
        <div className="bg-muted border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Image Gallery */}
              <ImageGallery images={property.images} title={property.title} />

              {/* Property Header */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={property.status === "available" ? "default" : "secondary"}>
                        {property.priceType === "rent" ? "For Rent" : "For Sale"}
                      </Badge>
                      {property.status === "pending" && (
                        <Badge variant="outline">Pending</Badge>
                      )}
                    </div>
                    <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
                      {property.title}
                    </h1>
                    <p className="text-muted-foreground">
                      {property.address}, {property.city}, {property.state} {property.zipCode}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-serif text-3xl font-bold text-primary">
                      {formatPrice(property.price, property.priceType)}
                    </p>
                    {property.priceType === "sale" && (
                      <p className="text-sm text-muted-foreground">
                        ${Math.round(property.price / property.squareFeet).toLocaleString()}/sqft
                      </p>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Heart className="h-4 w-4" />
                    Save
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bed className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.bedrooms}</p>
                      <p className="text-xs text-muted-foreground">Bedrooms</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Bath className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.bathrooms}</p>
                      <p className="text-xs text-muted-foreground">Bathrooms</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Maximize className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.squareFeet.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Sq Ft</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Car className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-foreground">{property.parking}</p>
                      <p className="text-xs text-muted-foreground">Parking</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">About This Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Property Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-8">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Property Type</span>
                      <span className="font-medium capitalize">{property.propertyType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Year Built</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status</span>
                      <span className="font-medium capitalize">{property.status}</span>
                    </div>
                    {property.lotSize && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lot Size</span>
                        <span className="font-medium">{property.lotSize.toLocaleString()} sqft</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Listed</span>
                      <span className="font-medium">
                        {new Date(property.listingDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Amenities & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity) => (
                      <Badge key={amenity} variant="outline" className="px-3 py-1">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <PropertyMap
                latitude={property.latitude}
                longitude={property.longitude}
                address={`${property.address}, ${property.city}, ${property.state} ${property.zipCode}`}
              />
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <div className="sticky top-24">
                <ContactForm agent={agent} propertyTitle={property.title} />
              </div>
            </div>
          </div>

          {/* Similar Properties */}
          {similarProperties.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Similar Properties
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {similarProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
