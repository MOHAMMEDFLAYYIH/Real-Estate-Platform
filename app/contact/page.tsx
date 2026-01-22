"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-16">
                {/* Hero Section */}
                <section className="py-16 bg-muted">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4">
                            <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium">
                                Get In Touch
                            </p>
                            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                                We&apos;d Love to <span className="italic">Hear From You</span>
                            </h1>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Have questions about buying, selling, or renting? Our team is here to help.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <div>
                                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                                    Send Us a Message
                                </h2>
                                {isSubmitted ? (
                                    <Card>
                                        <CardContent className="py-12 text-center">
                                            <div className="flex justify-center mb-4">
                                                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                                                    <CheckCircle className="h-8 w-8 text-accent" />
                                                </div>
                                            </div>
                                            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                                                Message Sent!
                                            </h3>
                                            <p className="text-muted-foreground">
                                                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                                            </p>
                                        </CardContent>
                                    </Card>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="John" required />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" required />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john@example.com" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone (optional)</Label>
                                            <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject">Subject</Label>
                                            <Input id="subject" placeholder="How can we help?" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message</Label>
                                            <Textarea
                                                id="message"
                                                rows={5}
                                                placeholder="Tell us more about your inquiry..."
                                                required
                                            />
                                        </div>
                                        <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                                            {isLoading ? (
                                                <>Sending...</>
                                            ) : (
                                                <>
                                                    <Send className="h-4 w-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </div>

                            {/* Contact Info */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                                        Contact Information
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Office Address</h3>
                                                <p className="text-muted-foreground">
                                                    123 Real Estate Ave, Suite 100<br />
                                                    San Francisco, CA 94102
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Phone className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Phone</h3>
                                                <p className="text-muted-foreground">(555) 123-4567</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Mail className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Email</h3>
                                                <p className="text-muted-foreground">hello@havenrealty.com</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Clock className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-foreground">Office Hours</h3>
                                                <p className="text-muted-foreground">
                                                    Mon - Fri: 9:00 AM - 6:00 PM<br />
                                                    Sat: 10:00 AM - 4:00 PM<br />
                                                    Sun: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Map */}
                                <div className="rounded-lg overflow-hidden border border-border">
                                    <iframe
                                        title="Office Location"
                                        width="100%"
                                        height="300"
                                        src="https://www.openstreetmap.org/export/embed.html?bbox=-122.43%2C37.77%2C-122.40%2C37.79&layer=mapnik&marker=37.78%2C-122.415"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
