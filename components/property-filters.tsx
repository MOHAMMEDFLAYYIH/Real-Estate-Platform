"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { allAmenities, propertyTypes } from "@/lib/data";

interface PropertyFiltersProps {
  totalCount: number;
}

export function PropertyFilters({ totalCount }: PropertyFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  // Current filter values from URL
  const currentType = searchParams.get("type") || "";
  const currentCity = searchParams.get("city") || "";
  const currentPriceMin = searchParams.get("priceMin") || "";
  const currentPriceMax = searchParams.get("priceMax") || "";
  const currentBedrooms = searchParams.get("bedrooms") || "";
  const currentBathrooms = searchParams.get("bathrooms") || "";
  const currentAmenities = searchParams.get("amenities")?.split(",") || [];

  // Local state for filters
  const [filters, setFilters] = useState({
    type: currentType,
    city: currentCity,
    priceMin: currentPriceMin,
    priceMax: currentPriceMax,
    bedrooms: currentBedrooms,
    bathrooms: currentBathrooms,
    amenities: currentAmenities,
  });

  const applyFilters = () => {
    const params = new URLSearchParams();
    if (filters.type && filters.type !== "all") params.set("type", filters.type);
    if (filters.city) params.set("city", filters.city);
    if (filters.priceMin) params.set("priceMin", filters.priceMin);
    if (filters.priceMax) params.set("priceMax", filters.priceMax);
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms);
    if (filters.bathrooms) params.set("bathrooms", filters.bathrooms);
    if (filters.amenities.length > 0) params.set("amenities", filters.amenities.join(","));
    
    router.push(`/properties?${params.toString()}`);
    setIsOpen(false);
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      city: "",
      priceMin: "",
      priceMax: "",
      bedrooms: "",
      bathrooms: "",
      amenities: [],
    });
    router.push("/properties");
    setIsOpen(false);
  };

  const toggleAmenity = (amenity: string) => {
    setFilters((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const hasActiveFilters = 
    currentType || currentCity || currentPriceMin || currentPriceMax || 
    currentBedrooms || currentBathrooms || currentAmenities.length > 0;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Property Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Property Type</Label>
        <Select value={filters.type} onValueChange={(v) => setFilters((f) => ({ ...f, type: v }))}>
          <SelectTrigger>
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {propertyTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Location */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Location</Label>
        <Input
          placeholder="City or State"
          value={filters.city}
          onChange={(e) => setFilters((f) => ({ ...f, city: e.target.value }))}
        />
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Price Range</Label>
        <div className="grid grid-cols-2 gap-3">
          <Input
            type="number"
            placeholder="Min Price"
            value={filters.priceMin}
            onChange={(e) => setFilters((f) => ({ ...f, priceMin: e.target.value }))}
          />
          <Input
            type="number"
            placeholder="Max Price"
            value={filters.priceMax}
            onChange={(e) => setFilters((f) => ({ ...f, priceMax: e.target.value }))}
          />
        </div>
      </div>

      {/* Bedrooms & Bathrooms */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label className="text-sm font-medium">Bedrooms</Label>
          <Select value={filters.bedrooms} onValueChange={(v) => setFilters((f) => ({ ...f, bedrooms: v }))}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}+ Beds
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-3">
          <Label className="text-sm font-medium">Bathrooms</Label>
          <Select value={filters.bathrooms} onValueChange={(v) => setFilters((f) => ({ ...f, bathrooms: v }))}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              {[1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}+ Baths
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Amenities</Label>
        <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
          {allAmenities.map((amenity) => (
            <label
              key={amenity}
              className="flex items-center gap-2 text-sm cursor-pointer"
            >
              <Checkbox
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={() => toggleAmenity(amenity)}
              />
              <span className="text-muted-foreground">{amenity}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-border">
      <p className="text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{totalCount}</span> properties found
      </p>

      <div className="flex items-center gap-2">
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-muted-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Clear Filters
          </Button>
        )}

        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center gap-3">
          <Select value={filters.type || "all"} onValueChange={(v) => {
            const params = new URLSearchParams(searchParams.toString());
            if (v && v !== "all") params.set("type", v);
            else params.delete("type");
            router.push(`/properties?${params.toString()}`);
          }}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                More Filters
                {hasActiveFilters && (
                  <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded">
                    {[currentCity, currentPriceMin, currentPriceMax, currentBedrooms, currentBathrooms].filter(Boolean).length + currentAmenities.length}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <FilterContent />
              </div>
              <SheetFooter className="flex gap-2">
                <Button variant="outline" onClick={clearFilters} className="flex-1 bg-transparent">
                  Clear All
                </Button>
                <Button onClick={applyFilters} className="flex-1">
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Filters */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
                {hasActiveFilters && (
                  <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded">
                    Active
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Filter Properties</SheetTitle>
              </SheetHeader>
              <div className="py-6">
                <FilterContent />
              </div>
              <SheetFooter className="flex gap-2">
                <Button variant="outline" onClick={clearFilters} className="flex-1 bg-transparent">
                  Clear All
                </Button>
                <Button onClick={applyFilters} className="flex-1">
                  Apply Filters
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
