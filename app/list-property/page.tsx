"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckCircle, Upload } from "lucide-react";
import { propertyTypes } from "@/lib/data";

export default function ListPropertyPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1 pt-16 flex items-center justify-center bg-muted">
                    <Card className="max-w-md mx-4">
                        <CardContent className="py-12 text-center">
                            <div className="flex justify-center mb-4">
                                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
                                    <CheckCircle className="h-10 w-10 text-accent" />
                                </div>
                            </div>
                            <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                                Listing Submitted!
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Thank you for listing with Haven. Our team will review your property
                                and contact you within 24-48 hours.
                            </p>
                            <Button asChild>
                                <a href="/">Return Home</a>
                            </Button>
                        </CardContent>
                    </Card>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="py-12 bg-muted">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                                List Your Property
                            </p>
                            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">
                                Sell or Rent Your <span className="italic">Property</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Fill out the form below and our team will help you get the best value for your property.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-12">
                    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact Information */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Contact Information</CardTitle>
                                    <CardDescription>How can we reach you?</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="ownerName">Full Name</Label>
                                            <Input id="ownerName" placeholder="John Doe" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="ownerPhone">Phone</Label>
                                            <Input id="ownerPhone" type="tel" placeholder="(555) 123-4567" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ownerEmail">Email</Label>
                                        <Input id="ownerEmail" type="email" placeholder="you@example.com" required />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Property Details */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Property Details</CardTitle>
                                    <CardDescription>Tell us about your property</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="title">Property Title</Label>
                                        <Input id="title" placeholder="e.g., Modern 3-Bedroom Home with Pool" required />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="propertyType">Property Type</Label>
                                            <Select required>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {propertyTypes.map((type) => (
                                                        <SelectItem key={type.value} value={type.value}>
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="listingType">Listing Type</Label>
                                            <Select required>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select listing type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="sale">For Sale</SelectItem>
                                                    <SelectItem value="rent">For Rent</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="bedrooms">Bedrooms</Label>
                                            <Input id="bedrooms" type="number" min="0" placeholder="3" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="bathrooms">Bathrooms</Label>
                                            <Input id="bathrooms" type="number" min="0" step="0.5" placeholder="2" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="sqft">Sq Ft</Label>
                                            <Input id="sqft" type="number" min="0" placeholder="2000" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="price">Price ($)</Label>
                                            <Input id="price" type="number" min="0" placeholder="500000" required />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            rows={5}
                                            placeholder="Describe your property's features, amenities, and any recent updates..."
                                            required
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Address */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Property Address</CardTitle>
                                    <CardDescription>Where is the property located?</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Street Address</Label>
                                        <Input id="address" placeholder="123 Main Street" required />
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        <div className="space-y-2 col-span-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" placeholder="San Francisco" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="state">State</Label>
                                            <Input id="state" placeholder="CA" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="zip">ZIP Code</Label>
                                            <Input id="zip" placeholder="94102" required />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Photos */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Property Photos</CardTitle>
                                    <CardDescription>Upload high-quality photos of your property</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                                        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                                        <p className="text-muted-foreground mb-2">
                                            Drag and drop photos here, or click to browse
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            PNG, JPG up to 10MB each. Maximum 20 photos.
                                        </p>
                                        <Button variant="outline" className="mt-4 bg-transparent">
                                            Browse Files
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Terms */}
                            <div className="flex items-start space-x-2">
                                <Checkbox id="terms" className="mt-0.5" />
                                <Label htmlFor="terms" className="text-sm font-normal leading-relaxed">
                                    I confirm that I am the owner or authorized to list this property and agree to Haven&apos;s Terms of Service.
                                </Label>
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                                {isLoading ? "Submitting..." : "Submit Listing"}
                            </Button>
                        </form>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
