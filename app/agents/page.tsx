import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { agents } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Star } from "lucide-react";
import Image from "next/image";

export default function AgentsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="py-16 bg-muted">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                                Our Team
                            </p>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                                Meet Our <span className="italic">Expert Agents</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Our experienced professionals are dedicated to helping you find your perfect home.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Agents Grid */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {agents.map((agent) => (
                                <Card key={agent.id} className="overflow-hidden group">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={agent.photo || "/placeholder.svg"}
                                            alt={agent.name}
                                            fill
                                            className="object-cover transition-transform group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <CardContent className="p-6 space-y-4">
                                        <div>
                                            <h3 className="font-serif text-xl font-semibold text-foreground">
                                                {agent.name}
                                            </h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 fill-primary text-primary" />
                                                    <span className="text-sm font-medium">{agent.rating}</span>
                                                </div>
                                                <span className="text-muted-foreground text-sm">
                                                    ({agent.reviewCount} reviews)
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                            {agent.bio}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {agent.specializations.map((spec) => (
                                                <Badge key={spec} variant="secondary" className="text-xs">
                                                    {spec}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            <p>{agent.yearsExperience} years experience</p>
                                            <p className="text-xs">License: {agent.license}</p>
                                        </div>

                                        <div className="flex gap-2 pt-2">
                                            <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                                                <a href={`tel:${agent.phone}`}>
                                                    <Phone className="h-4 w-4" />
                                                    Call
                                                </a>
                                            </Button>
                                            <Button variant="outline" size="sm" className="flex-1 gap-2 bg-transparent" asChild>
                                                <a href={`mailto:${agent.email}`}>
                                                    <Mail className="h-4 w-4" />
                                                    Email
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-primary">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                            Ready to Work With Us?
                        </h2>
                        <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                            Our agents are standing by to help you find your dream home or sell your property.
                        </p>
                        <Button variant="secondary" size="lg" asChild>
                            <a href="/contact">Contact Us Today</a>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
