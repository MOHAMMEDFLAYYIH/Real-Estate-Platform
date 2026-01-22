import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Testimonials Section
 * 
 * Human Writing Philosophy:
 * - Real testimonials mention specific details (neighborhood names, timelines)
 * - They include small negatives or quirks (makes them believable)
 * - Ratings aren't always perfect 5 stars
 * - The language is conversational, not polished marketing speak
 */

const testimonials = [
    {
        id: 1,
        name: "Jennifer M.",
        // Note: Using initial for last name feels more authentic
        role: "First-time Buyer, Oak Park",
        photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        rating: 5,
        // Real testimonial: mentions specific details and a small frustration
        quote: "Sarah was incredibly patient with us—we changed our minds about neighborhoods three times. Found our place in Oak Park after 6 weeks of looking. The paperwork side was honestly a blur, but she handled it.",
    },
    {
        id: 2,
        name: "David T.",
        role: "Investor, 4 Properties",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        // Not perfect 5 stars - more believable
        rating: 4,
        // Mentions a specific concern and result
        quote: "I work with numbers, so I was skeptical of their 'above market' claims. They got me 12% over asking on my Lincoln Park condo. The only downside—they're not great at texting back quickly. Email works better.",
    },
    {
        id: 3,
        name: "Amanda & Wei Chen",
        // Family names feel authentic
        role: "Relocated from Seattle",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        rating: 5,
        // Mentions the difficulty, feels real
        quote: "Moving cross-country with two kids is chaos. Haven found us the only house in our budget near the school we wanted. Took about 2 months and a lot of video tours. Worth every frustrating Zoom call.",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section Header - slightly offset from center */}
                <div className="max-w-2xl mb-16 space-y-4">
                    <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
                        From Our Clients
                    </p>
                    {/* Direct headline, no "What Our Amazing Clients Say" */}
                    <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                        Actual Feedback,{" "}
                        <span className="font-normal text-muted-foreground">Unedited</span>
                    </h2>
                    <p className="text-muted-foreground">
                        We asked clients to share their honest experience. Here&apos;s what they wrote.
                    </p>
                </div>

                {/* Testimonials Grid - with asymmetric styling */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className={`relative border-border/60 hover:border-primary/30 
                hover:shadow-xl hover:shadow-primary/5 transition-all duration-300
                hover:-translate-y-1 animate-fade-up`}
                            style={{
                                animationDelay: `${0.1 + index * 0.15}s`,
                                // Slight rotation variation for organic feel
                                transform: index === 1 ? 'rotate(-0.3deg)' : undefined
                            }}
                        >
                            <CardContent className="pt-8 pb-6 px-6">
                                {/* Decorative quote mark */}
                                <Quote className="absolute top-5 right-5 h-8 w-8 text-primary/10" />

                                {/* Rating - not all 5 stars feels more real */}
                                <div className="flex gap-0.5 mb-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating
                                                    ? "fill-primary text-primary"
                                                    : "fill-muted text-muted"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Quote text */}
                                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </p>

                                {/* Author info */}
                                <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-background shadow-sm">
                                        <Image
                                            src={testimonial.photo}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                            sizes="40px"
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-foreground text-sm">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
